/* ------------------------------ */
/*       tabpager.class.js        */
/*     copyright.reallynet.xy     */
/* ------------------------------ */

function tabpager() {
    this.iTabPageCount = 0;

    // tab.css 设置
    this.strCssTabOn = "";
    this.strCssTabOff = "";
    this.strCssTabOn4Left = "";
    this.strCssTabOff4Left = "";
    this.strCssTabOn4Right = "";
    this.strCssTabOff4Right = "";

    /* shift tab's css setting */
    this.shiftTab = function(strPrefix, iIndex, iCount) {
        for (var i = 1; i <= iCount; i++) {
            var obj = $(strPrefix + i);
            if (obj != null) {
                var strCss = "";
                switch (i) {
                    case 1: { strCss = this.strCssTabOff4Left; break; }
                    case iCount: { strCss = this.strCssTabOff4Right; break; }
                    default: { strCss = this.strCssTabOff; break; }
                }
                obj.className = strCss;
            }
        }

        var obj = $(strPrefix + iIndex);
        if (obj != null) {
            var strCss = "";
            switch (i) {
                case 1: { strCss = this.strCssTabOn4Leftt; break; }
                case iCount: { strCss = this.strCssTabOn4Right; break; }
                default: { strCss = this.strCssTabOn; break; }
            }
            obj.className = strCss;
        }
    }

    /* shift.pager show or hidden */
    this.shiftPager = function(strPrefix, iIndex, iCount) {
        for (var i = 1; i <= iCount; i++) {
            var obj = $(strPrefix + i);
            if (obj != null) {
                obj.style.display = "none";
            }
        }

        var obj = $(strPrefix + iIndex);
        if (obj != null) {
            obj.style.display = "block";
        }
    }

    /* shift tab and pager by setting*/
    this.shiftTabPager = function(strTabPrefix, strPagePrefix, iIndex, iCount) {
        this.shiftTab(strTabPrefix, iIndex, iCount);
        this.shiftPager(strPagePrefix, iIndex, iCount);
    }
}