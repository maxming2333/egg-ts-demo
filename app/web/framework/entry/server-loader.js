const util = require('./util');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  return `
    import App from 'app';
    import createStore from 'storeEntry';
    import entry from '${util.geteEntryPath(this.resourcePath)}';
    export default new App({ entry, createStore }).server();
  `;
};
