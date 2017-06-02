'use strict';

module.exports = function(content) {
    this.cacheable && this.cacheable();
    return 'module.exports = Uint8Array.from("' + content + '");';
};

module.exports.raw = true;
