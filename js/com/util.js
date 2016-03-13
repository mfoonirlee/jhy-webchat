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
        },
        getNameByActType: function(type) {
            type = parseInt(type);
            switch(type){
                case 500 :
                    return '休闲养生';
                case 1000 :
                    return '花草种植';
                case 1500 :
                    return '手工坊';
                case 2000 :
                    return '孩子成长';
                case 2500 :
                    return '农耕日';
                case 3000 :
                    return '24节气';
                case 3500 :
                    return '琴棋书画';
                case 4000 :
                    return '定制主题日';
                default:
                    return '定制主题日';
            }
        },
        parseDateObj: function(str){
            if(typeof str === 'undefined'){
                return;
            }
            if(typeof str === 'string'){
                str = str || '';
                var reg = /^(\d{4})\-?(\d{1,2})\-?(\d{1,2})/i;
                if (str.match(reg)) {
                    str = str.replace(reg, "$2/$3/$1");
                }
                var st = Date.parse(str);
                var t = new Date(st || new Date());
                return t;
            }
        },
        DatetoFormat: function (dateobject, format) {
            function parse(i) {
                return i >= 10 ? i : ("0" + i)
            };
            var y = dateobject.getFullYear(),
                M = parse(dateobject.getMonth() + 1),
                d = parse(dateobject.getDate()),
                H = parse(dateobject.getHours()),
                m = parse(dateobject.getMinutes()),
                s = parse(dateobject.getSeconds());

            format = format ? format : "yyyy-MM-dd HH:mm";
            var result = format.replace("yyyy", y).replace("MM", M).replace("dd", d).replace("HH", H).replace("mm", m).replace("ss", s);

            return result;
        }
    };
    return Util;
});