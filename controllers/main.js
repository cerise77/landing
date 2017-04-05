'use strict';
let fs = require('fs');
let path = require('path');

const root = path.join(__dirname, '/../public');

class Main {
  static index(res) {
    fs.readFile(root + '/index.html', { encoding: 'utf8' }, (error, content) => {
      if (!error) {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(content);
        res.end();
      }
    });
  }


}

module.exports = Main;
