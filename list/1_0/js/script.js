// JavaScript Document
var strCurRowClassName;
function list() {
    this.strSearchBarId = "idSearchBar";

    this.iSearchBarHeight = 22;
    this.iTitleBarHeight = 36;
    this.iPagerBarHeight = 34;

    this.onload = function() {
        // hide body's scroll
        var objBody = document.getElementsByTagName("body");
        objBody[0].scroll = "no";

        /*check search have context, if searchbar is empty, set display to none*/
        var objSearchBar = document.getElementById(this.strSearchBarId);
        this.iSearchBarHeight = objSearchBar.clientHeight;

        if (objSearchBar != null) {
            if (objSearchBar.innerHTML.trim() == "") {
                objSearchBar.style.display = "none";
                this.iSearchBarHeight = 0;
            }
        }

        /* set listTable height*/
        var h1 = document.body.clientHeight;
        var h2 = document.documentElement.clientHeight;
        var isXhtml = (h2 <= h1 && h2 != 0) ? true : false; //判断当前页面的Doctype是否为Xhtml
        var body = isXhtml ? document.documentElement : document.body;

        var objList = document.getElementById("idListBlock");
        if (objList != null) {
            var iHeight = body.clientHeight - (this.iSearchBarHeight + this.iTitleBarHeight + this.iPagerBarHeight);
            objList.style.height = iHeight;
        }

        var objTrList = document.getElementById("idListBlock").getElementsByTagName("tr");
        var strValue = "";
        for (var i = 0; i < objTrList.length; i++) {
            var objTr = objTrList[i];
            if (objTr.className != "TableHeader" && objTr.className != "TableFooter") {
                // 行效果
                //    objTr.onmouseover = new Function("alert('ok');strCurRowClassName=this.className;this.className='TableRowMouseOver';");
                objTr.onmouseover = new Function("this.className='TableRowMouseOver';");
                objTr.onmouseout = new Function("this.className='TableRow';");
                objTr.ondblclick = new Function("listTabbleRow_ondblclick(this);");
            }
        }

        // 删除提示
        var objAList = document.getElementById("idListBlock").getElementsByTagName("a");
        for (var i = 0; i < objAList.length; i++) {
            var objA = objAList[i];
            if (objA.className == "aDelete") {
                objA.onclick = new Function("javascript:return confirm(decodeURI('%E6%98%AF%E5%90%A6%E7%A1%AE%E5%AE%9A%E5%88%A0%E9%99%A4%E5%BD%93%E5%89%8D%E8%AE%B0%E5%BD%95%EF%BC%9F'))");
            }
        }
    }
}

function listTabbleRow_ondblclick(strValue) {
    var objAList = strValue.getElementsByTagName("a");
    for (var i = 0; i < objAList.length; i++) {
        var objA = objAList[i];
        if (objA.className == "aModify") {
            document.location = objA.href;
        }
    }
}