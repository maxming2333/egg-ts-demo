const path = require('path');
const klawSync = require('klaw-sync');

module.exports = {
  getIncludeList(dir) {
    dir = path.normalize(path.join(__dirname, '../', dir));
    const paths = klawSync(dir, {
      nodir: true,
      filter: item => item.stats.isDirectory() || path.extname(item.path) === '.vue',
    });
    const includes = {};
    paths.forEach(item => {
      const relative = path.relative(dir, item.path);
      const key = module.exports.getEntryKey(relative);
      includes[key] = item.path;
    });
    return includes;
  },
  getEntryKey(filePath) {
    return filePath.replace(/(.*)\/(.*)\.[^.]+/ig, (match, p1, p2) => {
      const index = p1.lastIndexOf('/');
      const dirname = p1.substring(index + 1);
      if (p2 === 'index' || p2 === dirname) {
        return p1;
      }
      return `${p1}/${p2}`;
    });
  },
};
