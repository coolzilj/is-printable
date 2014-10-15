# is-printable
Is the image big enough to be printed?

# Installation
`npm install is-printable`

# Example
```javascript
var isPrintable = require('is-printable');
var fs = require('fs');
var path = require('path');

fs.readdir(__dirname, function(err, files){
  files.forEach(function (file) {
    if(path.extname(file) === '.jpg') {
      isPrintable(__dirname + '/' + file, [7.8, 9.8], function (err, result) {
        if(err) throw new Error(err);
        if(result === true) {
          console.log(file + " is good to be printed.");
        } else {
          console.log(file + " is not good enough to be printed.");
        }
      });
    }
  })
})
```
