/* ------------------------------*/
/*         pager.class.js          */
/*     copyright.reallynet.xy   */
/* ------------------------------*/
var pager = function() {
    this.strPagerTemplate = "";
    this.strUrl = "";
    this.container = null;

    /* property．setting */
    this.iPageIndex = 0;
    this.iPageSize = 0;
    this.iRecordCount = 0;
    this.iPageCount = 0;

    this.iFirstPageIndex = 0;
    this.iPrevPageIndex = 0;
    this.iNextPageIndex = 0;
    this.iLastPageIndex = 0;

    this.iBeginPageIndex = 0;
    this.iEndPageIndex = 0;

    this.strCssUrl = "/rn_client/pager/1_0/css/style.css";

    this.strTemplateMode1 = "<a href=\"$FirstPager$\" class=\"arrow\">&laquo;</a><a href=\"$PrevPager$\" class=\"arrow\">&#8249;</a>$PageLinkBlock$<a href=\"$NextPager$\" class=\"arrow\">&#8250;</a><a href=\"$LastPager$\" class=\"arrow\">&raquo;</a>&nbsp;到第&nbsp;$SelectPager$&nbsp;页&nbsp;&nbsp;";
    this.strTemplateMode2 = "<ul><li><a href=\"$FirstPager$\" class=\"tu\">&laquo;</a></li><li><a href=\"$PrevPager$\" class=\"tu\">&#8249;</a></li>$PageLinkBlock$<li><a href=\"$NextPager$\" class=\"tu\">&#8250;</a></li><li><a href=\"$LastPager$\" class=\"tu\">&raquo;</a></li><li>&nbsp;到第&nbsp;</li><li><div></div><span class=\"select\">$SelectPager$</span></li><li>&nbsp;页&nbsp;&nbsp;</li></ul>";
    this.strTemplateMode3 = "<ul><li><a href=\"$FirstPager$\" class=\"tu\">&laquo;</a></li><li><a href=\"$PrevPager$\" class=\"tu\">&#8249;</a></li>$PageLinkBlock$<li><a href=\"$NextPager$\" class=\"tu\">&#8250;</a></li><li><a href=\"$LastPager$\" class=\"tu\">&raquo;</a></li><li>&nbsp;到第&nbsp;</li><li><div></div><span class=\"select\"><input id=\"JumpTo\" name=\"JumpTo\" value=\"$PageIndex$\" size=\"3\" /> <input id=\"UrlParam\" name=\"UrlParam\" value=\"$UrlParam$\" type=\"hidden\" /><input type=\"button\" name=\"PagerSubmit\" id=\"PagerSubmit\" value=\"按钮\" onClick=\"javascript:window.location='?pi='+document.getElementById('JumpTo').value+document.getElementById('UrlParam').value\" /></span></li><li>&nbsp;页&nbsp;&nbsp;</li></ul>";

    /* interface.begin */
    /**/
    this.create = function(iMode, strId, iPageIndex, iPageSize, iRecordCount, strUrl) {
        //  this.container = $(strId);
        //  if (this.container!=null)
        {
            /*property.init*/
            strUrl = "?pi=$pi$" + this.getUrlParam();

            this.strUrl = strUrl;
            this.id = strId;

            this.iPageIndex = iPageIndex;
            this.iRecordCount = iRecordCount;
            this.iPageSize = iPageSize;


            this.calculatorProperty();
            switch (iMode) {
                default:
                case 1:
                    {
                        this.strPagerTemplate = this.strTemplateMode1;
                        this.createDefault()
                        break;
                    }
                case 2:
                    {
                        this.strPagerTemplate = this.strTemplateMode2;
                        this.createDefault()
                        break;
                    }
                case 3:
                    {
                        this.strPagerTemplate = this.strTemplateMode3;
                        this.createDefaultForMode3()
                        break;
                    }
            }
        }
    }

    /* the default function of create pagerbar ( param iMode is null or "" ) */
    this.createDefault = function() {
        //  includeCss(this.strCssUrl);
        if (this.strPagerTemplate == null || this.strPagerTemplate == "") {
            this.strPagerTemplate = this.strTemplateMode1;
        }

        var strHtml = this.strPagerTemplate;

        strHtml = strHtml.replace("$PageIndex$", this.iPageIndex);
        strHtml = strHtml.replace("$PageCount$", this.iPageCount);
        strHtml = strHtml.replace("$PageSize$", this.iPageSize);
        strHtml = strHtml.replace("$RecordCount$", this.iRecordCount);

        var strUrlItem;
        strUrlItem = (this.iFirstPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iFirstPageIndex);
        strHtml = strHtml.replace("$FirstPager$", strUrlItem);

        strUrlItem = (this.iPrevPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iPrevPageIndex);
        strHtml = strHtml.replace("$PrevPager$", strUrlItem);

        strUrlItem = (this.iNextPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iNextPageIndex);
        strHtml = strHtml.replace("$NextPager$", strUrlItem);

        strUrlItem = (this.iLastPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iLastPageIndex);
        strHtml = strHtml.replace("$LastPager$", strUrlItem);

        /* select pager block*/
        //  var strSelectCode = "<select id=\"ListPager\" name=\"ListPager\" class=\"ListPager\" onChange=\"parent.location=this.options[this.selectedIndex].value\">";
        var strSelectCode = "<select id=\"ListPager\" name=\"ListPager\" class=\"ListPager\" onChange=\"location=this.options[this.selectedIndex].value\">";
        for (var i = 1; i <= this.iPageCount; i++) {
            if (this.iPageIndex == i) {
                strSelectCode += "<option value=\"" + this.strUrl.replace("$pi$", i) + "\" selected=\"selected\">" + i + "/" + this.iPageCount + "</option>";
            }
            else {
                strSelectCode += "<option value=\"" + this.strUrl.replace("$pi$", i) + "\">" + i + "/" + this.iPageCount + "</option>";
            }
        }
        strSelectCode += "</select>";
        strHtml = strHtml.replace("$SelectPager$", strSelectCode);

        /* alink block*/
        var strPagerLinkCode = "";
        for (var i = this.iBeginPageIndex; i <= this.iEndPageIndex; i++) {
            if (i == this.iPageIndex) {
                // strPagerLinkCode +="<a href=\"" + strUrlItem + "\" id=\"p" + i + "\" class=\"num2\">"+i+"</a>";
                strPagerLinkCode += "<li><a href=\"javascript:void(null);\" id=\"p" + i + "\" class=\"num2\">[" + i + "]</a></li>";
            }
            else {
                var strUrlItem = this.strUrl;
                strUrlItem = strUrlItem.replace("$pi$", i);
                strPagerLinkCode += "<li><a href=\"" + strUrlItem + "\" id=\"p" + i + "\" class=\"num\">" + i + "</a></li>";
            }
        }
        strHtml = strHtml.replace("$PageLinkBlock$", strPagerLinkCode);

        var obj = document.getElementById(this.id);
        if (obj != null) {
            obj.innerHTML = strHtml;
        }
        //		document.write(strHtml);
        //		 alert(strHtml);
    }


    // mode 3 专用的建成函数
    this.createDefaultForMode3 = function() {
        //  includeCss(this.strCssUrl);
        if (this.strPagerTemplate == null || this.strPagerTemplate == "") {
            this.strPagerTemplate = this.strTemplateMode1;
        }

        var strHtml = this.strPagerTemplate;

        strHtml = strHtml.replace("$PageIndex$", this.iPageIndex);
        strHtml = strHtml.replace("$PageCount$", this.iPageCount);
        strHtml = strHtml.replace("$PageSize$", this.iPageSize);
        strHtml = strHtml.replace("$RecordCount$", this.iRecordCount);

        var strUrlItem;
        strUrlItem = (this.iFirstPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iFirstPageIndex);
        strHtml = strHtml.replace("$FirstPager$", strUrlItem);

        strUrlItem = (this.iPrevPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iPrevPageIndex);
        strHtml = strHtml.replace("$PrevPager$", strUrlItem);

        strUrlItem = (this.iNextPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iNextPageIndex);
        strHtml = strHtml.replace("$NextPager$", strUrlItem);

        strUrlItem = (this.iLastPageIndex == 0) ? "#" : this.strUrl.replace("$pi$", this.iLastPageIndex);
        strHtml = strHtml.replace("$LastPager$", strUrlItem);

        strHtml = strHtml.replace("$UrlParam$", this.getUrlParam());

        /* alink block*/
        var strPagerLinkCode = "";
        for (var i = this.iBeginPageIndex; i <= this.iEndPageIndex; i++) {
            if (i == this.iPageIndex) {
                // strPagerLinkCode +="<a href=\"" + strUrlItem + "\" id=\"p" + i + "\" class=\"num2\">"+i+"</a>";
                strPagerLinkCode += "<li><a href=\"javascript:void(null);\" id=\"p" + i + "\" class=\"num2\">[" + i + "]</a></li>";
            }
            else {
                var strUrlItem = this.strUrl;
                strUrlItem = strUrlItem.replace("$pi$", i);
                strPagerLinkCode += "<li><a href=\"" + strUrlItem + "\" id=\"p" + i + "\" class=\"num\">" + i + "</a></li>";
            }
        }
        strHtml = strHtml.replace("$PageLinkBlock$", strPagerLinkCode);

        var obj = document.getElementById(this.id);
        if (obj != null) {
            obj.innerHTML = strHtml;
        }
    }

    this.calculatorProperty = function() {
        /*this.iPageCount 总页数*/
        if (this.iRecordCount % this.iPageSize == 0) {
            this.iPageCount = (this.iRecordCount - this.iRecordCount % this.iPageSize) / this.iPageSize;
        }
        else {
            this.iPageCount = (this.iRecordCount - this.iRecordCount % this.iPageSize) / this.iPageSize + 1;
        }

        /*this.iFirstPageIndex 首页*/
        this.iFirstPageIndex = (this.iPageCount > 0) ? 1 : 0;

        /*this.iPrevPageIndex 前一页*/
        this.iPrevPageIndex = (this.iPageIndex > 0) ? (this.iPageIndex - 1) : 0;

        /*this.iNextPageIndex 后一页*/
        this.iNextPageIndex = (this.iPageIndex + 1 <= this.iPageCount) ? (this.iPageIndex + 1) : 0;

        /*this.iLastPageIndex 尾页*/
        this.iLastPageIndex = (this.iPageCount > 0) ? this.iPageCount : 0;

        /*this.iBeginPageIndex 1－10 的翻页启始*/
        this.iBeginPageIndex = (this.iPageIndex - ((this.iPageIndex - 1) % 10));
        this.iBeginPageIndex = (this.iBeginPageIndex < 1) ? 1 : this.iBeginPageIndex;

        /*this.iEndPageIndex  1－10 的翻页结束*/
        this.iEndPageIndex = this.iBeginPageIndex + 9;
        this.iEndPageIndex = (this.iEndPageIndex > this.iPageCount) ? this.iPageCount : this.iEndPageIndex;
    }


    //提取页面地址中所有参数的字符串
    this.getUrlParam = function() {
        var strReturn = "";
        priStrValue = "";
        if (document.location.search.indexOf("?") == 0 && document.location.search.indexOf("=") > 1) {
            //priArraySource = unescape(document.location.search).substring(1,document.location.search.length).split("&");
            priArraySource = unescape(document.location.search).substring(1, document.location.search.length).split("&");
            priGetQSi = 0;
            while (priGetQSi < priArraySource.length) {
                if (priArraySource[priGetQSi].indexOf("=") > 0) {
                    if (priArraySource[priGetQSi].split("=")[0].toLowerCase() != "pi") {
                        // priStrValue = priArraySource[priGetQSi].split("=")[1];
                        strReturn += "&" + priArraySource[priGetQSi].split("=")[0] + "=" + escape(priArraySource[priGetQSi].split("=")[1]);
                    }
                }
                priGetQSi++;
            }
        }
        return strReturn;
    }
}