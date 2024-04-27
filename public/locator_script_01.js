var bullseyelistener = function(e) {
    var regex = new RegExp('^.*bullseyelocations\.com.*$');
    if (regex.test(e.origin) && parseInt(e.data)) {
        document.getElementById('bullseye_iframe').height = Math.round(e.data) < 600 ? 700 : Math.round(e.data);
    } else {
        if (e.data == 'scroll') {
            window.scrollTo(0, 0);
        }
    }
};
if (window.addEventListener) {
    addEventListener('message', bullseyelistener, false);
} else {
    attachEvent('onmessage', bullseyelistener);
}