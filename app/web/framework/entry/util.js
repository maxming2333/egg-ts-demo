const path = require('path');

module.exports = {
  geteEntryPath(filePath) {
    const isAbsolute = path.isAbsolute(filePath);
    if(!isAbsolute) {
      filePath = path.join(__dirname, filePath);
    }
    return filePath.replace(/\\/g, '\\\\');
  }
}
