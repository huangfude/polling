//消息展示
function showNotice(title, text, type = 'info', delay = 1000 * 10) {

    requirejs(['jquery', 'pnotify', 'pnotify.buttons'], function($, PNotify) {
        PNotify.prototype.options.styling = "bootstrap3";
        new PNotify({
            title: title,
            text: text,
            type: type,
            delay: delay,
            hide: true, //是否自动关闭
            mouse_reset: true, //鼠标悬浮的时候，时间重置

            buttons: {
                closer: true,
                closer_hover: false,
                sticker_hover: true,
                //labels: {close: "Close", stick: "Stick"}
            },

        });
    });

}