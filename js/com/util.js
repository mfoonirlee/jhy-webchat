define([], function () {
    var Util = {
        getQueryParam: function (key) {
            var param = {},
                search = window.location.search;
                search = search && search.replace('?', '').split('&') || [];
            for (var i=0, length = search.length; i < length; i++) {
                var q = search[i].split('=');
                param[q[0]] = q[1];
            }
            return key ? (param[key] || '') : param;
        }
    };
    return Util;
});