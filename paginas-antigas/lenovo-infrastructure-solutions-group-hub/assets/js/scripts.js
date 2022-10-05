!function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(o).forEach(function(t){i.options[t]=o[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(!0===this.showCursor&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,o=t.substr(s);if("^"===o.charAt(0)){var r=1;/^\^\d+/.test(o)&&(o=/\d+/.exec(o)[0],r+=o.length,e=parseInt(o)),t=t.substring(0,s)+t.substring(s+r)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="";for(a="<"===n?">":";";t.substr(s+1).charAt(0)!==a&&(t.substr(s).charAt(0),!(++s+1>t.length)););s++,a}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,!1===i.loop||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(;"<"!==t.substr(s-1).charAt(0)&&(t.substr(s).charAt(0),!(--s<0)););s--,"<"}var i=t.substr(0,s);e.replaceText(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i.new=function(t,e){Array.prototype.slice.apply(s.querySelectorAll(t)).forEach(function(t){var s=t._typed,o="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,o),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),o=s.data("typed"),r="object"==typeof t&&t;o&&o.reset(),s.data("typed",o=new i(this,r)),"string"==typeof t&&o[t]()})}),t.Typed=i;var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.$);

// jQuery Mask Plugin v1.7.7
(function (f) { "function" === typeof define && define.amd ? define(["jquery"], f) : f(window.jQuery || window.Zepto) })(function (f) {
    var A = function (a, d, b) {
        var h = this, m, p; a = f(a); d = "function" === typeof d ? d(a.val(), void 0, a, b) : d; var c = {
            getCaret: function () { try { var e, l = 0, c = a.get(0), g = document.selection, d = c.selectionStart; if (g && !~navigator.appVersion.indexOf("MSIE 10")) e = g.createRange(), e.moveStart("character", a.is("input") ? -a.val().length : -a.text().length), l = e.text.length; else if (d || "0" === d) l = d; return l } catch (b) { } }, setCaret: function (e) {
                try {
                    if (a.is(":focus")) {
                        var l,
                            c = a.get(0); c.setSelectionRange ? c.setSelectionRange(e, e) : c.createTextRange && (l = c.createTextRange(), l.collapse(!0), l.moveEnd("character", e), l.moveStart("character", e), l.select())
                    }
                } catch (g) { }
            }, events: function () {
                a.on("keydown.mask", function () { m = c.val() }).on("keyup.mask", c.behaviour).on("paste.mask drop.mask", function () { setTimeout(function () { a.keydown().keyup() }, 100) }).on("change.mask", function () { a.data("changed", !0) }).on("blur.mask", function () {
                    m === a.val() || a.data("changed") || a.trigger("change"); a.data("changed",
                        !1)
                }).on("focusout.mask", function () { b.clearIfNotMatch && !p.test(c.val()) && c.val("") })
            }, getRegexMask: function () { for (var e = [], a, c, g, b, k = 0; k < d.length; k++)(a = h.translation[d[k]]) ? (c = a.pattern.toString().replace(/.{1}$|^.{1}/g, ""), g = a.optional, (a = a.recursive) ? (e.push(d[k]), b = { digit: d[k], pattern: c }) : e.push(g || a ? c + "?" : c)) : e.push(d[k].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")); e = e.join(""); b && (e = e.replace(new RegExp("(" + b.digit + "(.*" + b.digit + ")?)"), "($1)?").replace(new RegExp(b.digit, "g"), b.pattern)); return new RegExp(e) },
            destroyEvents: function () { a.off("keydown keyup paste drop change blur focusout DOMNodeInserted ".split(" ").join(".mask ")).removeData("changeCalled") }, val: function (e) { var c = a.is("input"); return 0 < arguments.length ? c ? a.val(e) : a.text(e) : c ? a.val() : a.text() }, getMCharsBeforeCount: function (e, a) { for (var c = 0, b = 0, f = d.length; b < f && b < e; b++)h.translation[d.charAt(b)] || (e = a ? e + 1 : e, c++); return c }, caretPos: function (e, a, b, g) {
                return h.translation[d.charAt(Math.min(e - 1, d.length - 1))] ? Math.min(e + b - a - g, b) : c.caretPos(e + 1,
                    a, b, g)
            }, behaviour: function (a) { a = a || window.event; var b = a.keyCode || a.which; if (-1 === f.inArray(b, h.byPassKeys)) { var d = c.getCaret(), g = c.val(), t = g.length, k = d < t, m = c.getMasked(), n = m.length, p = c.getMCharsBeforeCount(n - 1) - c.getMCharsBeforeCount(t - 1); m !== g && c.val(m); !k || 65 === b && a.ctrlKey || (8 !== b && 46 !== b && (d = c.caretPos(d, t, n, p)), c.setCaret(d)); return c.callbacks(a) } }, getMasked: function (a) {
                var l = [], f = c.val(), g = 0, m = d.length, k = 0, p = f.length, n = 1, u = "push", r = -1, q, v; b.reverse ? (u = "unshift", n = -1, q = 0, g = m - 1, k = p - 1, v = function () {
                    return -1 <
                        g && -1 < k
                }) : (q = m - 1, v = function () { return g < m && k < p }); for (; v();) { var w = d.charAt(g), x = f.charAt(k), s = h.translation[w]; if (s) x.match(s.pattern) ? (l[u](x), s.recursive && (-1 === r ? r = g : g === q && (g = r - n), q === r && (g -= n)), g += n) : s.optional && (g += n, k -= n), k += n; else { if (!a) l[u](w); x === w && (k += n); g += n } } a = d.charAt(q); m !== p + 1 || h.translation[a] || l.push(a); return l.join("")
            }, callbacks: function (e) {
                var f = c.val(), h = f !== m; if (!0 === h && "function" === typeof b.onChange) b.onChange(f, e, a, b); if (!0 === h && "function" === typeof b.onKeyPress) b.onKeyPress(f,
                    e, a, b); if ("function" === typeof b.onComplete && f.length === d.length) b.onComplete(f, e, a, b)
            }
        }; h.mask = d; h.options = b; h.remove = function () { var b; c.destroyEvents(); c.val(h.getCleanVal()).removeAttr("maxlength"); b = c.getCaret(); c.setCaret(b - c.getMCharsBeforeCount(b)); return a }; h.getCleanVal = function () { return c.getMasked(!0) }; h.init = function () {
            b = b || {}; h.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91]; h.translation = {
                0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ },
                S: { pattern: /[a-zA-Z]/ }
            }; h.translation = f.extend({}, h.translation, b.translation); h = f.extend(!0, {}, h, b); p = c.getRegexMask(); !1 !== b.maxlength && a.attr("maxlength", d.length); b.placeholder && a.attr("placeholder", b.placeholder); a.attr("autocomplete", "off"); c.destroyEvents(); c.events(); var e = c.getCaret(); c.val(c.getMasked()); c.setCaret(e + c.getMCharsBeforeCount(e, !0))
        }()
    }, y = {}, z = function () {
        var a = f(this), d = {}; a.attr("data-mask-reverse") && (d.reverse = !0); "false" === a.attr("data-mask-maxlength") && (d.maxlength = !1);
        a.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0); a.mask(a.attr("data-mask"), d)
    }; f.fn.mask = function (a, d) { var b = this.selector, h = function () { var b = f(this).data("mask"), h = JSON.stringify; if ("object" !== typeof b || h(b.options) !== h(d) || b.mask !== a) return f(this).data("mask", new A(this, a, d)) }; this.each(h); b && !y[b] && (y[b] = !0, setTimeout(function () { f(document).on("DOMNodeInserted.mask", b, h) }, 500)) }; f.fn.unmask = function () { try { return this.each(function () { f(this).data("mask").remove().removeData("mask") }) } catch (a) { } };
    f.fn.cleanVal = function () { return this.data("mask").getCleanVal() }; f("*[data-mask]").each(z); f(document).on("DOMNodeInserted.mask", "*[data-mask]", z)
});

$('#typed').typed({
    strings: ["o futuro", "Edge Computing", "Inteligência Artificial e Analytics", "Everything As a Service", "Infraestrutura Hiperconvergente", "Servidores e Storage"],
    typeSpeed: 30,
    loop: true,
    backSpeed: 20,
    backDelay: 500
});
// load form news
MktoForms2.loadForm("//app-ab27.marketo.com", "183-WCT-620", 19494, function (form) {
    MktoForms2.whenReady(function (form) {
        form.onValidate(function () {
            let email = form.vals().Email;
            form.submitable(false);
            if(email){
                if (!isEmailGood(email)) {
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Digite um e-mail comercial.", emailElem);
                    form.submitable(false);
                } else {
                    form.submitable(true);
                }
            }
        });
    });

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }

    var invalidDomains = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook.", "@bol.", "@ig.", "@icloud.", "@terra.", "@me.", "@uol."];


    $('#FirstName').keypress(function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
    });

    $('#FirstName').on('input', function () {
        $(this).val($(this).val().replace(/[^a-z0-9]/gi, ''));
    });

    $('#LastName').keypress(function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
    });
    
    $('#LastName').on('input', function () {
        $(this).val($(this).val().replace(/[^a-z0-9]/gi, ''));
    });
});
//load form
MktoForms2.loadForm("//app-ab27.marketo.com", "183-WCT-620", 2583, function (form) {

    $('#Phone').mask('00000000009');


    $('#Phone').blur(function (event) {
        if ($(this).val().length == 15) { // Celular com 9 digitos + 2 digitos DDD e 4 da mascara
            $('#Phone').mask('00000000009');
        } else {
            $('#Phone').mask('00000000009');
        }
    });

    MktoForms2.whenReady(function (form) {
        form.onValidate(function () {
            let email = form.vals().Email;
            form.submitable(false);
            if(email){
                if (!isEmailGood(email)) {
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Digite um e-mail comercial.", emailElem);
                    form.submitable(false);
                } else {
                    form.submitable(true);
                }
            }
        });
    });

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }

    var invalidDomains = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook.", "@bol.", "@ig.", "@icloud.", "@terra.", "@me.", "@uol."];


    $('#FirstName').keypress(function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
    });

    $('#FirstName').on('input', function () {
        $(this).val($(this).val().replace(/[^a-z0-9]/gi, ''));
    });

    $('#LastName').keypress(function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
    });
    $('#LastName').on('input', function () {
        $(this).val($(this).val().replace(/[^a-z0-9]/gi, ''));
    });


    $("input").change(function(){

    comentarios =

        'Cargo: ' + $("select[name='Title']" ).val() + ' - ' +
        'Segmento: ' + $("select[name='segment']" ).val() + ' - ' +
        'Número de Funcionários: ' + $("input[name='employeeSizeRange']" ).val() + ' - ' +
        'utm_campaign: ' + $("input[name='mktoutmcampaign']" ).val() + ' - ' +
        'utm_content: ' + $("input[name='mktoutmcontentdownload']" ).val() + ' - ' +
        'utm_medium: ' + $("input[name='mktoutmmedium']" ).val() + ' - ' +
        'utm_source: ' + $("input[name='mktoutmsource']" ).val() + ' - ' +
        'Lead Source: ' + $("input[name='sourceCampaign']" ).val() + ' - ' +
        'Página: ' + window.location.href;

        $("input[name='dCGPersonNotes']" ).val(comentarios);
        $("input[name='iDGPersonNotes']" ).val(comentarios);
        $("input[name='salesNotesIDG']").val(comentarios);
        $("input[name='salesNotesDCG']").val(comentarios);

    });
        $("input[name='leadSourceLastDCG']" ).val('DCG_22Q4_LA_LAHQ_BRND_GEN_NONE_MED_522591_Bowe-ContentHub-ContactMe');
        $("input[name='leadSourceLast']" ).val('DCG_22Q4_LA_LAHQ_BRND_GEN_NONE_MED_522591_Bowe-ContentHub-ContactMe');
        $("input[name='sourceCampaign']" ).val('DCG_22Q4_LA_LAHQ_BRND_GEN_NONE_MED_522591_Bowe-ContentHub-ContactMe');
});

$( ".toggle-menu" ).click(function() {
    $( ".menu-mobile" ).fadeToggle();
});

(function($) {
  $.fn.easyPaginate = function(options) {
      var defaults = {
          paginateElement: 'div',
          hashPage: 'page',
          elementsPerPage: 10,
          effect: 'default',
          slideOffset: 200,
          firstButton: false,
          firstButtonText: '<<',
          lastButton: false,
          lastButtonText: '>>',
          prevButton: false,
          prevButtonText: 'Anterior',
          nextButton: false,
          nextButtonText: 'PrÃ³xima'
      }

      return this.each(function(instance) {

          var plugin = {};
          plugin.el = $(this);
          plugin.el.addClass('easyPaginateList');

          plugin.settings = {
              pages: 0,
              objElements: Object,
              currentPage: 1
          }

          var getNbOfPages = function() {
              return Math.ceil(plugin.settings.objElements.length / plugin.settings.elementsPerPage);
          };

          var displayNav = function() {
              htmlNav = '<div class="easyPaginateNav">';

              if (plugin.settings.firstButton) {
                  htmlNav += '<a href="#' + plugin.settings.hashPage + ':1" title="First page" rel="1" class="first">' + plugin.settings.firstButtonText + '</a>';
              }

              if (plugin.settings.prevButton) {
                  htmlNav += '<a href="" title="Previous" rel="" class="prev">' + plugin.settings.prevButtonText + '</a>';
              }

              for (i = 1; i <= plugin.settings.pages; i++) {
                  htmlNav += '<a href="#' + plugin.settings.hashPage + ':' + i + '" title="Page ' + i + '" rel="' + i + '" class="page">' + i + '</a>';
              };

              if (plugin.settings.nextButton) {
                  htmlNav += '<a href="" title="Next" rel="" class="next">' + plugin.settings.nextButtonText + '</a>';
              }

              if (plugin.settings.lastButton) {
                  htmlNav += '<a href="#' + plugin.settings.hashPage + ':' + plugin.settings.pages + '" title="Last page" rel="' + plugin.settings.pages + '" class="last">' + plugin.settings.lastButtonText + '</a>';
              }

              htmlNav += '</div>';
              plugin.nav = $(htmlNav);
              plugin.nav.css({
                  'width': plugin.el.width()
              });
              plugin.el.after(plugin.nav);

              $('.easyPaginateNav a.page,'
                  + ' .easyPaginateNav a.first,'
                  + ' .easyPaginateNav a.last').on('click', function(e) {
                  e.preventDefault();
                  displayPage($(this).attr('rel'));     
                  jQuery('html, body').animate({
                    scrollTop: jQuery('#items').offset().top + 300
                }, 0, 'fast');           
              });
  
              $('.easyPaginateNav a.prev').on('click', function(e) {
                  e.preventDefault();
                  page = plugin.settings.currentPage > 1?parseInt(plugin.settings.currentPage) - 1:1;
                  displayPage(page);
              });
  
              $('.easyPaginateNav a.next').on('click', function(e) {
                  e.preventDefault();
                  page = plugin.settings.currentPage < plugin.settings.pages?parseInt(plugin.settings.currentPage) + 1:plugin.settings.pages;
                  displayPage(page);
              });
          };

          var displayPage = function(page, forceEffect) {
              if (plugin.settings.currentPage != page) {
                  plugin.settings.currentPage = parseInt(page);
                  offsetStart = (page - 1) * plugin.settings.elementsPerPage;
                  offsetEnd = page * plugin.settings.elementsPerPage;
                  if (typeof(forceEffect) != 'undefined') {
                      eval("transition_" + forceEffect + "(" + offsetStart + ", " + offsetEnd + ")");
                  } else {
                      eval("transition_" + plugin.settings.effect + "(" + offsetStart + ", " + offsetEnd + ")");
                  }

                  plugin.nav.find('.current').removeClass('current');
                  plugin.nav.find('a.page:eq(' + (page - 1) + ')').addClass('current');

                  switch (plugin.settings.currentPage) {
                      case 1:
                          $('.easyPaginateNav a', plugin).removeClass('disabled');
                          $('.easyPaginateNav a.first, .easyPaginateNav a.prev', plugin).addClass('disabled');
                          break;
                      case plugin.settings.pages:
                          $('.easyPaginateNav a', plugin).removeClass('disabled');
                          $('.easyPaginateNav a.last, .easyPaginateNav a.next', plugin).addClass('disabled');
                          break;
                      default:
                          $('.easyPaginateNav a', plugin).removeClass('disabled');
                          break;
                  }
              }
          };

          var transition_default = function(offsetStart, offsetEnd) {
              plugin.currentElements.hide();
              plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
              plugin.el.html(plugin.currentElements);
              plugin.currentElements.show();
          };

          var transition_fade = function(offsetStart, offsetEnd) {
              plugin.currentElements.fadeOut();
              plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
              plugin.el.html(plugin.currentElements);
              plugin.currentElements.fadeIn();
          };

          var transition_slide = function(offsetStart, offsetEnd) {
              plugin.currentElements.animate({
                  'margin-left': plugin.settings.slideOffset * -1,
                  'opacity': 0
              }, function() {
                  $(this).remove();
              });

              plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
              plugin.currentElements.css({
                  'margin-left': plugin.settings.slideOffset,
                  'display': 'block',
                  'opacity': 0,
              });
              plugin.el.html(plugin.currentElements);
              plugin.currentElements.animate({
                  'margin-left': 0,
                  'opacity': 1
              });
          };

          var transition_climb = function(offsetStart, offsetEnd) {
              plugin.currentElements.each(function(i) {
                  var $objThis = $(this);
                  setTimeout(function() {
                      $objThis.animate({
                          'margin-left': plugin.settings.slideOffset * -1,
                          'opacity': 0
                      }, function() {
                          $(this).remove();
                      });
                  }, i * 200);
              });

              plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
              plugin.currentElements.css({
                  'margin-left': plugin.settings.slideOffset,
                  'display': 'block',
                  'opacity': 0,
              });
              plugin.el.html(plugin.currentElements);
              plugin.currentElements.each(function(i) {
                  var $objThis = $(this);
                  setTimeout(function() {
                      $objThis.animate({
                          'margin-left': 0,
                          'opacity': 1
                      });
                  }, i * 200);
              });
          };

          plugin.settings = $.extend({}, defaults, options);

          plugin.currentElements = $([]);
          plugin.settings.objElements = plugin.el.find(plugin.settings.paginateElement);
          plugin.settings.pages = getNbOfPages();
          if (plugin.settings.pages > 1) {
              plugin.el.html();

              // Here we go
              displayNav();

              page = 1;
              if (document.location.hash.indexOf('#' + plugin.settings.hashPage + ':') != -1) {
                  page = parseInt(document.location.hash.replace('#' + plugin.settings.hashPage + ':', ''));
                  if (page.length <= 0 || page < 1 || page > plugin.settings.pages) {
                      page = 1;
                  }
              }

              displayPage(page, 'default');
          }
      });
  };
})(jQuery);

$( document ).ready(function() {
    // menu interno página de soluções

    const sections = document.querySelectorAll("div");
    const navLi = document.querySelectorAll(".menu-interno nav ul li");
    window.onscroll = () => {
      var current = "";
    
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id"); }
      });
    
      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
  // paginação página de materiais ricos

    $('.conteudos-paginacao').easyPaginate({
      paginateElement: 'div',
      elementsPerPage: 9,
      effect: 'default'
    });

    $('#cloud-computing').on('click', function(){
        $('#cloud-computing,#edge-computing,#ai-analytics,#as-a-service').removeClass('active');
        $('#cloud-computing').addClass('active');
        $('.materiais-cloud-computing,.materiais-edge-computing,.materiais-ai-analytics,.materiais-as-a-service').hide();
        $('.materiais-cloud-computing').fadeIn();
        location.hash = '#page:1';
    });
    $('#edge-computing').on('click', function(){
        $('#cloud-computing,#edge-computing,#ai-analytics,#as-a-service').removeClass('active');
        $('#edge-computing').addClass('active');
        $('.materiais-cloud-computing,.materiais-edge-computing,.materiais-ai-analytics,.materiais-as-a-service').hide();
        $('.materiais-edge-computing').fadeIn();
        location.hash = '#page:1';
    });
    $('#ai-analytics').on('click', function(){
        $('#cloud-computing,#edge-computing,#ai-analytics,#as-a-service').removeClass('active');
        $('#ai-analytics').addClass('active');
        $('.materiais-cloud-computing,.materiais-edge-computing,.materiais-ai-analytics,.materiais-as-a-service').hide();
        $('.materiais-ai-analytics').fadeIn();
        location.hash = '#page:1';
    });
    $('#as-a-service').on('click', function(){
        $('#cloud-computing,#edge-computing,#ai-analytics,#as-a-service').removeClass('active');
        $('#as-a-service').addClass('active');
        $('.materiais-cloud-computing,.materiais-edge-computing,.materiais-ai-analytics,.materiais-as-a-service').hide();
        $('.materiais-as-a-service').fadeIn();
        location.hash = '#page:1';
    });

});