//You can also use ES5 JS. But prefere TypeScript !
var MyApp = (function (window) {
    'use strict';
    var init = function() {
        return true;
    };
    return {
        init: init
    };
})(window);
