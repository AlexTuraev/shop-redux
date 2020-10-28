module.exports = class DoorService {
    _reqUrl = 'https://dveri.com/export/json/moskva';

    isDataReady = false;
    parsedData = {};

    // -------------------------------------
    httpsGetFile = (url) => {
        const http = require('https');
        
        http.get(url, (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];
          
            let error;
            if (statusCode !== 200) {
              error = new Error('Request Failed.\n' +
                                `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
              error = new Error('Invalid content-type.\n' +
                                `Expected application/json but received ${contentType}`);
            }
            if (error) {
              console.error(error.message);
              // Consume response data to free up memory
              res.resume();
              return;
            }
          
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
              try {
                this.parsedData = Object.assign({}, JSON.parse(rawData));
                this.isDataReady = true;
                //console.log(this.parsedData);
              } catch (e) {
                console.error(e.message);
              }
            });
          }).on('error', (e) => {
            console.error(`Non parsed Data: ${e.message}`);
            return;
          });
    }
    // end of httpsGetFile()
    // -------------------------------------
    getData() {
        this.httpsGetFile(this._reqUrl);
        const intervalId = setInterval(()=>{
            if(this.isDataReady){
                console.log('JSON data is ready');
		console.log(this.parsedData);
            }
        },
        5000);
        setInterval(()=> clearInterval(intervalId), 7000);
    }
    // -------------------------------------
    putData() {
      if(this.isDataReady){
        return(this.parsedData);
      } else {
        return null;
      }
    }
    // -------------------------------------
    readFile(path){
      const fs = require('fs');
      fs.readFile(path, 'utf-8', (err, data) => {
        if(err) throw err;
        return(data);
      });
    }
}