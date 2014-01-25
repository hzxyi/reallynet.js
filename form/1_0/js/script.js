// JavaScript Document
LoadingInit();
function form() {
    this.iTitleBarHeight = 36;

    this.onload = function() {
        // hide body's scroll
        var objBody = document.getElementsByTagName("body");
        objBody[0].scroll = "no";

        /*check search have context, if searchbar is empty, set display to none*/
        var newHeight = document.body.clientHeight - this.iTitleBarHeight;
        document.getElementById("idFormContentTable").style.height = newHeight;

        document.getElementById("idLoading").style.display = "none";
    }
}