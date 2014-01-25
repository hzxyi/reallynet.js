/* ------------------------------ */
/*       tabpager.class.js        */
/*     copyright.reallynet.xy     */
/* ------------------------------ */

function media() {
    /* shift tab's css setting */
    this.getCode = function(strFile, strId, iWidth, iHeight) {
        strCode = "";
        var strFileType = strFile.substr(strFile.length - 4, 4);
        switch (strFileType) {
            case ".jpg":
            case ".gif":
            case ".bmp":
            case ".png":
                {
                    strCode = "<img src='{FilePath}' border=\"0\" width=\"{Width}\" height=\"{Height}\" >";
                    break;
                }
            case ".avi":
            case ".rm":
                {
                    strCode = "<embed src=\"{FilePath}\" width=\"{Width}\" height=\"{Height}\" type=\"video/x-ms-wmv\" autostart=\"true\" loop=\"true\"></embed>";
                    break;
                }
            case ".flv":
                {
                    strCode = "<object codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0\" height=\"{Height}\" width=\"{Width}\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"><param name=\"_cx\" value=\"15875\"><param name=\"_cy\" value=\"11906\"><param name=\"FlashVars\" value=\"\"><param name=\"Movie\" value=\"/images/peach.swf?vcastr_file={FilePath}&amp;IsShowTime=1\"><param name=\"Src\" value=\"/images/peach.swf?vcastr_file={FilePath}&amp;IsShowTime=1\"><param name=\"WMode\" value=\"Window\"><param name=\"Play\" value=\"0\"><param name=\"Loop\" value=\"-1\"><param name=\"Quality\" value=\"High\"><param name=\"SAlign\" value=\"LT\"><param name=\"Menu\" value=\"0\"><param name=\"Base\" value=\"\"><param name=\"AllowScriptAccess\" value=\"\"><param name=\"Scale\" value=\"NoScale\"><param name=\"DeviceFont\" value=\"0\"><param name=\"EmbedMovie\" value=\"0\"><param name=\"BGColor\" value=\"\"><param name=\"SWRemote\" value=\"\"><param name=\"MovieData\" value=\"\"><param name=\"SeamlessTabbing\" value=\"1\"><param name=\"Profile\" value=\"0\"><param name=\"ProfileAddress\" value=\"\"><param name=\"ProfilePort\" value=\"0\"><param name=\"AllowNetworking\" value=\"all\"><param name=\"AllowFullScreen\" value=\"true\"></object>";
                    break;
                }
            default:
                {
                    strCode = "<embed src=\"{FilePath}\" width=\"{Width}\" height=\"{Height}\" type=\"video/x-ms-wmv\" autostart=\"true\" loop=\"true\"></embed>";
                    break;
                }
        }
        strCode = strCode.replace("{FilePath}", strFile);
        strCode = strCode.replace("{FilePath}", strFile);
        strCode = strCode.replace("{Width}", iWidth);
        strCode = strCode.replace("{Height}", iHeight);
        /*		alert(strCode)*/

        var obj = document.getElementById(strId);
        obj.innerHTML = strCode;
        /*		return strCode;*/
    }
}