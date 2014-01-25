/* ------------------------------ */
/*    introShow.init.class.js     */
/*     copyright.reallynet.xy     */
/* ------------------------------ */

var introShow = function() {
    this.id = "idCommentIntro";

    /* the interface for clear ms.word's tag*/
    this.clearHtml = function(strId) {
        strId = (strId == null) ? this.id : strId;
        var obj = document.getElementById(strId);
        if (obj != null) {
            var strHtml = obj.innerHTML;
            obj.innerHTML = this.clearWordCode(strHtml);
        }
    }

    /* clear ms.word's tag code*/
    this.clearBlank = function() {
        var strHtml = "";
        var strId = this.id;
        var obj = document.getElementById(strId);
        if (obj != null) {
            strHtml = obj.innerHTML;

            var re;
            // [&nbsp;]  to  [ ]
            var re = new RegExp("&nbsp;", "gi"); // Different because of a IE 5.0 error
            strHtml = strHtml.replace(re, " ");

            obj.innerHTML = strHtml;
        }
    }

    /* clear ms.word's tag code*/
    this.clearWordCode = function(strHtml) {
        strHtml = strHtml.replace(/<\/?SPAN[^>]*>/gi, ""); 	// Remove all SPAN tags
        //		strHtml = strHtml.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3") ;		// Remove Class attributes
        strHtml = strHtml.replace(/<(\w[^>]*) style="([^"]*)"([^>]*)/gi, "<$1$3"); 	// Remove Style attributes
        strHtml = strHtml.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3"); 	// Remove Lang attributes
        strHtml = strHtml.replace(/<\\?\?xml[^>]*>/gi, ""); 	// Remove XML elements and declarations
        strHtml = strHtml.replace(/<\/?\w+:[^>]*>/gi, ""); 	// Remove Tags with XML namespace declarations: <o:p></o:p>
        strHtml = strHtml.replace(/&nbsp;/, " "); 	// Replace the &nbsp;

        var re = new RegExp("(<pre)([^>]*>.*?)(<\/pre>)", "gi"); // Different because of a IE 5.0 error
        strHtml = strHtml.replace(re, "<p$2</p>");

        // Transform <P> to <DIV>
        //        re = new RegExp("(<P)([^>]*>.*?)(<\/P>)", "gi"); // Different because of a IE 5.0 error
        //        strHtml = strHtml.replace(re, "<p$2</p>");

        // [&nbsp;]  to  [ ]
        re = new RegExp("&nbsp;", "gi"); // Different because of a IE 5.0 error
        strHtml = strHtml.replace(re, " ");

        return strHtml;
    }

    /* reset image's width in container , click image open new windows*/
    this.resizeImg = function(strId, iWidth) {
        strId = (strId == null) ? this.id : strId;
        var obj = document.getElementById(strId);
        if (obj != null) {
            var objImgList = obj.getElementsByTagName("img");
            for (var i = 0; i < objImgList.length; i++) {
                if (objImgList[i].getAttribute("style") != null && objImgList[i].getAttribute("style") != "") {
                    objImgList[i].removeAttribute("style")
                }

                if (objImgList[i].width > iWidth) {
                    objImgList[i].width = iWidth;
                    objImgList[i].border = "0";
                    if (objImgList[i].getAttribute("height") != null && objImgList[i].getAttribute("height") != "") {
                        objImgList[i].removeAttribute("height")
                    }

                    objImgList[i].outerHTML = '<a href="' + objImgList[i].src + '" target="_blank" title="在新窗口打开图片">' + objImgList[i].outerHTML + '</a>'
                }
            }
        }
    }

}