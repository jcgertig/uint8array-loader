'use strict';

module.exports = function(content) {
    this.cacheable && this.cacheable();
    return 'module.exports = Uint8Array.from(' + JSON.stringify(Array.from(content.values())) + ');';
};

module.exports.raw = true;
