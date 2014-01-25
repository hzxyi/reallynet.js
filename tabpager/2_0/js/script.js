//var tabpager = {
////  name: "chen",
//  _CssTabOn: "on", // 标签页的当前样式cls
//  _CssTabOff: "off", // 标签页的普通样式cls
//  _CssTabOnBegin: "on",
//  _CssTabOffBegin: "off",
//  _CssTabOnEnd: "on",
//  _CssTabOffEnd: "off",

////  _DelayTime = 400, // 延时时间
////  _TitleBoxCls = 'tab-title',
////  _PageBoxCls = 'tab-page',

//  // 延时时间设置
//  setaryDelayTime :function (iTime) {
//    this._DelayTime = iTime;
//  },

//  setTitleBoxCls : function (strCls) {
//    this._TitleBoxCls = strCls;
//  },

//  setPageBoxCls : function (strCls) {
//    this._PageBoxCls = strCls;
//  },


//init : function (TabId) {
//    //#idTabPager .tab-title li
//    //    jQuery(document).ready(function ($) {
//    var aryDelayTime = [];
//    var strSelect = '#' + TabId + ' .' + TitleBoxCls + ' li';
//    //    var strSelect = '#' + TabId + ' .tab-title li';
//    //        alert(strSelect);
//    this._total = $(strSelect).length;
//    //        alert(this._total);

//    $(strSelect).each(function (index) {
//      $(this).hover(function () {
//        aryDelayTime[index] = setTimeout(function () {
//          strSelect = '#' + TabId + ' .' + PageBoxCls + ' div';
//          $(strSelect).hide();

//          if (index == 0) {
//            //            $(this).addClass(tabpager._CssTabOnBegin).siblings().removeClass(tabpager._CssTabOffBegin);
//            //            strSelect = "#wrap .tab-page div:eq(" + index + ")";
//            strSelect = '#' + TabId + ' .' + PageBoxCls + ' div:eq(' + index + ')';
//            $(strSelect).show();
//          }
//          else if (index == (this._total - 1)) {
//            //            $(this).addClass(tabpager._CssTabOnEnd).siblings().removeClass(tabpager._CssTabOffEnd);
//            //            strSelect = "#wrap .tab-page div:eq(" + index + ")";
//            strSelect = '#' + TabId + ' .' + PageBoxCls + ' div:eq(' + index + ')';
//            $(strSelect).show();
//          } else {
//            //            $(this).addClass(tabpager._CssTabOn).siblings().removeClass(tabpager._CssTabOff);
//            strSelect = '#' + TabId + ' .' + PageBoxCls + ' div:eq(' + index + ')';
//            $(strSelect).show();
//          }
//        },
//              400)
//      },
//          function () {
//            clearTimeout(aryDelayTime[index]);
//          })
//    });
//  }

////  click: function () { alert("点击"); return this; },
////  query: function () { alert("查询"); return this; },
////  showName: function () { alert(this.name); return this; }

//};

//MyClass.click().query().showName();

/* ------------------------------ */
/*       tabpager.class.js        */
/*     copyright.reallynet.xy     */
/* 延时标签页 */
/* ------------------------------ */

function tabpager() {

  this._CssTabOn = "on"; // 标签页的当前样式cls
  this._CssTabOff = "off"; // 标签页的普通样式cls
  this._CssTabOnBegin = "on";
  this._CssTabOffBegin = "off";
  this._CssTabOnEnd = "on";
  this._CssTabOffEnd = "off";


  this._DelayTime = 400; // 延时时间
  this._TitleBoxCls = 'tab-title';
  this._PageBoxCls = 'tab-page';

  // 延时时间设置
  this.setaryDelayTime = function (iTime) {
    this._DelayTime = iTime;
  }

  this.setTitleBoxCls = function (strCls) {
    this._TitleBoxCls = strCls;
  }

  this.setPageBoxCls = function (strCls) {
    this._PageBoxCls = strCls;
  }


  //this.iTabPageCount = 0;
  //this.iTabPageCount = 0;
  this._total = 0;

  this.create = function (TabId) {
    this.init(TabId, this._TitleBoxCls, this._PageBoxCls);
  }


  this.init = function (TabId, TitleBoxCls, PageBoxCls) {
    //#idTabPager .tab-title li
    //    jQuery(document).ready(function ($) {
    var aryDelayTime = [];
    var strSelect = '#' + TabId + ' .' + TitleBoxCls + ' li';
    //    var strSelect = '#' + TabId + ' .tab-title li';
    //        alert(strSelect);
    this._total = $(strSelect).length;
    //        alert(this._total);

    $(strSelect).each(function (index) {
      $(this).hover(function () {
        //            var _self = this;
        //        var tabin = $(this);
        aryDelayTime[index] = setTimeout(function () {
          //                $(_self).find('ul:eq(0)').slideDown(200)
          //          this._CssTabOff
          strSelect = '#' + TabId + ' .' + PageBoxCls + ' div';
          //          alert(strSelect);
          $(strSelect).hide();
          //          alert(this._CssTabOnBegin);

          if (index == 0) {
            //            $(this).addClass(tabpager._CssTabOnBegin).siblings().removeClass(tabpager._CssTabOffBegin);
            //            strSelect = "#wrap .tab-page div:eq(" + index + ")";
            strSelect = '#' + TabId + ' .' + PageBoxCls + ' div:eq(' + index + ')';
            $(strSelect).show();
          }
          else if (index == (this._total - 1)) {
            //            $(this).addClass(tabpager._CssTabOnEnd).siblings().removeClass(tabpager._CssTabOffEnd);
            //            strSelect = "#wrap .tab-page div:eq(" + index + ")";
            strSelect = '#' + TabId + ' .' + PageBoxCls + ' div:eq(' + index + ')';
            $(strSelect).show();
          } else {
            //            $(this).addClass(tabpager._CssTabOn).siblings().removeClass(tabpager._CssTabOff);
            strSelect = '#' + TabId + ' .' + PageBoxCls + ' div:eq(' + index + ')';
            $(strSelect).show();
          }

          //          tabin.addClass("tabin").siblings().removeClass("tabin");
          //          $("#wrap .tab-page div:eq(" + index + ")").addClass("contentin").siblings("div").removeClass("contentin");
        },
              400)
      },
          function () {
            clearTimeout(aryDelayTime[index]);
            //            $('ul', this).slideUp(200)
          })
    });
  }

  //  // tab.css 设置
  //  this.strCssTabOn = "";
  //  this.strCssTabOff = "";
  //  this.strCssTabOn4Left = "";
  //  this.strCssTabOff4Left = "";
  //  this.strCssTabOn4Right = "";
  //  this.strCssTabOff4Right = "";

  //  /* shift tab's css setting */
  //  this.shiftTab = function (strPrefix, iIndex, iCount) {
  //    for (var i = 1; i <= iCount; i++) {
  //      var obj = $(strPrefix + i);
  //      if (obj != null) {
  //        var strCss = "";
  //        switch (i) {
  //          case 1: { strCss = this.strCssTabOff4Left; break; }
  //          case iCount: { strCss = this.strCssTabOff4Right; break; }
  //          default: { strCss = this.strCssTabOff; break; }
  //        }
  //        obj.className = strCss;
  //      }
  //    }

  //    var obj = $(strPrefix + iIndex);
  //    if (obj != null) {
  //      var strCss = "";
  //      switch (i) {
  //        case 1: { strCss = this.strCssTabOn4Leftt; break; }
  //        case iCount: { strCss = this.strCssTabOn4Right; break; }
  //        default: { strCss = this.strCssTabOn; break; }
  //      }
  //      obj.className = strCss;
  //    }
  //  }

  //  /* shift.pager show or hidden */
  //  this.shiftPager = function (strPrefix, iIndex, iCount) {
  //    for (var i = 1; i <= iCount; i++) {
  //      var obj = $(strPrefix + i);
  //      if (obj != null) {
  //        obj.style.display = "none";
  //      }
  //    }

  //    var obj = $(strPrefix + iIndex);
  //    if (obj != null) {
  //      obj.style.display = "block";
  //    }
  //  }

  //  /* shift tab and pager by setting*/
  //  this.shiftTabPager = function (strTabPrefix, strPagePrefix, iIndex, iCount) {
  //    this.shiftTab(strTabPrefix, iIndex, iCount);
  //    this.shiftPager(strPagePrefix, iIndex, iCount);
  //  }
}