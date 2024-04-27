var queryString = window.location.search.substring(1);
var iframeSrc = document.getElementById("bullseye_iframe").src;
if (iframeSrc.includes("?")) {
    if (queryString && queryString !== "") {
        iframeSrc += "&" + queryString;
    }
} else {
    if (queryString && queryString !== "") {
        iframeSrc += "?" + queryString;
    }
}
document.getElementById("bullseye_iframe").setAttribute("src", iframeSrc);