//消息展示
function showNotice(param) {

    var options = {
        title: "Message" + param,
        text: "Please Wait",
        type: 'info',
        icon: 'fa fa-spinner fa-spin',
        hide: false, //是否自动关闭
        buttons: {
            closer: false,
            sticker: false
        },
        shadow: false
    };

    requirejs(['jquery', 'pnotify', 'pnotify.buttons'], function($, PNotify) {
        PNotify.prototype.options.styling = "bootstrap3";
        var notice = new PNotify(options);

        $.ajax({
            type: "POST",
            url: "http://api.36wu.com/Weather/GetWeather",
            data: {
                district: "福州",
                format: "json"
            },
            dataType: 'JSONP',
            //async: false,
            success: function(data) {
                options.hide = true;
                options.buttons = {
                    closer: true,
                    sticker: true
                };
                options.shadow = true;
                options.width = PNotify.prototype.options.width;
                options.text = JSON.stringify(data);
                options.type = "success";
                options.icon = 'fa fa-check';
                notice.update(options);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                options.hide = true;
                options.buttons = {
                    closer: true,
                    sticker: true
                };
                options.text = "请求数据异常，状态码：" + XMLHttpRequest.status;
                options.type = "error";
                notice.update(options);
            }
        });

    });


}