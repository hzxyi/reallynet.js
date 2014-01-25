/* subMenu.class.js */
function subMenu() {
    this.iLevelCount = 0;
    this.strMenuId = "left_menu";

    this.objXmlHttp = null;

    this.createXMLHttpRequest = function() {
        if (window.ActiveXObject) {
            this.objXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if (window.XMLHttpRequest) {
            this.objXmlHttp = new XMLHttpRequest();
        }
        return this.objXmlHttp;
    }

    /* 页面初始化设置 */
    this.onload = function(strUrl, strPid) {
        includeCss("/rn_client/adminMenu/default/css/style.css");
        this.create(strUrl, strPid);
        this.init();
    }

    this.create = function(strUrl, strPid) {
        var objXmlHttp = this.createXMLHttpRequest();
        if (objXmlHttp != null) {
            strUrl = strUrl + "?id=" + strPid + "&r=" + (new Date()).getSeconds();
            objXmlHttp.open("GET", strUrl, false);
            objXmlHttp.send(null);
            if (objXmlHttp.status == 200) {
                // 读取数据
                var objDom = objXmlHttp.responseXML;
                objNodes = objDom.getElementsByTagName("item");
                if (objNodes.length) {
                    var obj = document.getElementById(this.strMenuId); // 菜单id对象

                    for (var i = 0; i < objNodes.length; i++) {
                        if (objNodes.item(i).getAttribute("pid") == strPid) {
                            this.iLevelCount++;
                            // 创建二级菜单
                            var objNewItemTitle = this.createMainItemTitle(objNodes.item(i).getAttribute("id"), objNodes.item(i).getAttribute("title"))
                            if (this.iLevelCount == 1) {
                                objNewItemTitle.setAttribute("className", "n1menu_open")
                                objNewItemTitle.setAttribute("class", "n1menu_open")
                            }

                            obj.appendChild(objNewItemTitle);

                            var objNewItemSubItem = this.createMainItemSubBlock(objNodes.item(i).getAttribute("id"))
                            obj.appendChild(objNewItemSubItem);

                            // 创建三级菜单
                            for (var j = 0; j < objNodes.length; j++) {
                                if (objNodes.item(j).getAttribute("pid") == objNodes.item(i).getAttribute("id")) {
                                    var objSubCur = objNodes.item(j);
                                    var objSubItem = this.createSubItem(objSubCur.getAttribute("pid"), objSubCur.getAttribute("id"), objSubCur.getAttribute("title"), objSubCur.getAttribute("url"))
                                    objNewItemSubItem.appendChild(objSubItem);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /* 建立主菜单 */
    this.createMainItemTitle = function(strId, strTitle) {
        var objNewItemTitle = document.createElement("a");
        objNewItemTitle.setAttribute("id", "idMenuItem" + strId)
        objNewItemTitle.setAttribute("className", "n1menu_close")
        objNewItemTitle.setAttribute("class", "n1menu_close")

        objNewItemTitle.setAttribute("href", "javascript:(new subMenu()).onclickMainMenu('" + strId + "');");
        objNewItemTitle.innerHTML = strTitle;

        return objNewItemTitle;
    }

    this.createMainItemSubBlock = function(strId) {
        var objNewItemSubItem = document.createElement("div");
        objNewItemSubItem.setAttribute("id", "idSubBlock" + strId)
        return objNewItemSubItem;
    }


    /* 建立子菜单 */
    this.createSubItem = function(strPid, strId, strTitle, strUrl) {
        var objNewItemTitle = document.createElement("a");
        objNewItemTitle.setAttribute("id", "idMenuItem" + strId)
        objNewItemTitle.setAttribute("className", "n2menu_off")
        objNewItemTitle.setAttribute("class", "n2menu_off")
        objNewItemTitle.setAttribute("href", "javascript:(new subMenu()).showUrl(\"" + strUrl + "\", \"idMenuItem" + strId + "\");");

        objNewItemTitle.innerHTML = strTitle;
        return objNewItemTitle;
    }

    this.showUrl = function(strUrl, strId) {
        top.parent.mainFrame.location = strUrl;
        var arrItem = this.getElementsByClassName("n2menu_on");
        for (var i = 0; i < arrItem.length; i++) {
            arrItem[i].className = "n2menu_off";
        }

        var obj = document.getElementById(strId);
        if (obj != null) {
            obj.setAttribute("className", "n2menu_on");
            obj.setAttribute("class", "n2menu_on");
        }
        /*		obj.setAttribute("className", "n2menu_on")
        obj.setAttribute("class", "n2menu_on")*/
    }

    this.getElementsByClassName = function(n) {
        var el = [],
		_el = document.getElementsByTagName('*');
        for (var i = 0; i < _el.length; i++) {
            if (_el[i].className == n) {
                el[el.length] = _el[i];
            }
        }
        return el;
    }


    /*点击主栏目*/
    this.onclickMainMenu = function(strId) {
        var iHeight;
        var arrBlock = document.getElementsByTagName("div");
        for (var i = 1; i < arrBlock.length; i++) {
            if (arrBlock[i].style.display != "none") {
                iHeight = arrBlock[i].style.height;
                arrBlock[i].style.display = "none";
            }
        }

        var obj = document.getElementById("idSubBlock" + strId);
        if (obj != null) {
            obj.style.height = iHeight;
            obj.style.display = "block";
        }

        var arrItems = this.getElementsByClassName("n1menu_open");
        for (var i = 0; i < arrItems.length; i++) {
            arrItems[i].setAttribute("className", "n1menu_close")
            arrItems[i].setAttribute("class", "n1menu_close")
        }

        var obj = document.getElementById("idMenuItem" + strId);
        if (obj != null) {
            obj.setAttribute("className", "n1menu_open")
            obj.setAttribute("class", "n1menu_open")
        }
    }


    /*效果初始化*/
    this.init = function() {
        // 当前主菜单,高度设置
        var h1 = document.body.clientHeight;
        var h2 = document.documentElement.clientHeight;
        var isXhtml = (h2 <= h1 && h2 != 0) ? true : false; //判断当前页面的Doctype是否为Xhtml
        var objBody = isXhtml ? document.documentElement : document.body;
        var iHeight = objBody.clientHeight;

        var arrBlock = document.getElementsByTagName("div");
        for (var i = 1; i < arrBlock.length; i++) {
            if (i == 1) {
                arrBlock[i].style.display = "block";
                arrBlock[i].style.height = iHeight - ((arrBlock.length - 1) * 29) - 5;

            }
            else {
                arrBlock[i].style.display = "none";
            }
        }
    }
}