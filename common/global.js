/* ------------------------------ */
/*     global.common.class.js */
/*     copyright.reallynet.xy    */
/* ------------------------------ */

//var css;
function includeCss(p_strCssFile, p_strCharset) {
    var html_doc = document.getElementsByTagName('head')[0];
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    if (p_strCharset != null && p_strCharset != "") {
        css.setAttribute('charset', p_strCharset);
    }
    css.setAttribute('href', p_strCssFile);
    html_doc.appendChild(css);

    // alert state change
    css.onreadystatechange = function() {
        if (css.readyState == 'complete') {
            //   alert('CSS onreadystatechange fired');
        }
    }
    css.onload = function() {
        //  alert('CSS onload fired');
    }
    return false;
}

function includeJs(p_strJsFile, p_strCharset) {
    var html_doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', p_strJsFile);
    if (p_strCharset != null && p_strCharset != "") {
        css.setAttribute('charset', p_strCharset);
    }
    html_doc.appendChild(js);

    js.onreadystatechange = function() {
        if (js.readyState == 'complete') {
            //   alert('JS onreadystate fired');
        }
    }

    js.onload = function() {
        //  alert('JS onload fired');
    }
    return false;
}

/*
function setHtmlTitle(p_strValue)
{
var objTitle = document.getElementsByTagName('title')[0];
objTitle.innerHTML = "OK";
}
*/

//includeJs("/rn_client/common/mootools/1_11/mootools-release-1.11.js")