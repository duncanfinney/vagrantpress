var fs = require('fs');

module.exports = function(file) {
  var ret = file.indexOf('.php') !== -1;
  if (ret) {
    console.log('watching', file);
    return ret;
  }
  //only check is a dir after that
  var stats = fs.lstatSync(file);
  return stats.isDirectory();
}
