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



MktoForms2.loadForm("//app-ab27.marketo.com", "183-WCT-620", 1811, function (form) {


    $('#lvo_taxidnumber').mask('00000000000000');

    $('#Phone').mask('00000000009');

    $('#Phone').blur(function (event) {
        if ($(this).val().length == 15) { // Celular com 9 digitos + 2 digitos DDD e 4 da mascara
            $('#Phone').mask('00000000009');
        } else {
            $('#Phone').mask('00000000009');
        }
    });

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

    $("input[name='webformReferralPageURLLast']").val(window.location.href);

    var e = document.getElementById("NumberOfEmployees");

    setTimeout(function(){ 
        LSCfirst = $("input[name='leadSourceLast']" ).val();
        console.log(LSCfirst);
     }, 5000);

    $("input,select").change(function () {


        if ($('#productFamily').val() == 'Servidores, Rede e Armazenamento') {
            $("input[name='businessGroupLast']").val('DCG');
            $("input[name='leadSourceLast']" ).val('DCG_22FY_LA_LAHQ_BRND_GEN_NONE_MED_NOID_LeadsFromIDG');
            $("input[name='leadSourceLastIDG']" ).val('DCG_22FY_LA_LAHQ_BRND_GEN_NONE_MED_NOID_LeadsFromIDG');
            $("input[name='sourceCampaign']" ).val('DCG_22FY_LA_LAHQ_BRND_GEN_NONE_MED_NOID_LeadsFromIDG');
        } else {
            $("input[name='businessGroupLast']").val('IDG');
            $("input[name='leadSourceLast']" ).val(LSCfirst);
            $("input[name='leadSourceLastIDG']" ).val(LSCfirst);
            $("input[name='sourceCampaign']" ).val(LSCfirst);
        }


        comentarios =

            'Segmento: ' + $("input[name='segment']").val() + ' ' +
            'Categoria de Produto: ' + $("#productFamily").val() + ' ' +
            'Motivo do Contato: ' + $("#contactMeReason").val() + ' ' +
            'Comentários: ' + $("#contactMeComment").val() + ' ' +
            'utm_campaign: ' + $("input[name='mktoutmcampaign']").val() + ' ' +
            'utm_content: ' + $("input[name='mktoutmcontentdownload']").val() + ' ' +
            'utm_medium: ' + $("input[name='mktoutmmedium']").val() + ' ' +
            'utm_source: ' + $("input[name='mktoutmsource']").val() + ' ' +
            'Página: ' + window.location.href;

        $("input[name='iDGPersonNotes']").val(comentarios);
        $("input[name='dCGPersonNotes']").val(comentarios);
        $("input[name='MktoPersonNotes']").val(comentarios);

    });

    $("input,select").change(function () {

        var segmento = $("input[name='segment']").val();

        if (segmento == 'CPT' || segmento == 'SMB' || segmento == 'REL') {

            var funcionarios = $("#NumberOfEmployees").val();

            if (funcionarios >= 500 && funcionarios <= 999) {

                var estado = $("#State option:selected").val();

                if (estado == 'SP' || estado == 'RJ' || estado == 'MG' || estado == 'ES' || estado == 'PR' || estado == 'SC' || estado == 'RS') {

                    $("input[name='segment']").val('CPT');

                } else {

                    $("input[name='segment']").val('SMB');

                }

            } else if (funcionarios >= 1000) {

                $("input[name='segment']").val('REL');

            } else if (funcionarios >= 10 && funcionarios <= 499) {

                $("input[name='segment']").val('SMB');

            } else if (funcionarios >= 1 && funcionarios <= 9) {

                $("input[name='segment']").val('VSB');

            }
        }

    });

    var invalidDomains = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook.", "@bol.", "@ig.", "@icloud.", "@terra.", "@me.", "@uol."];

    var govDomains = ["@gov.", "@org.", "@jus.", "@mil.", "@sebrae.", "@def.", "@senac.", "@mp."];

    MktoForms2.whenReady(function (form) {
        form.onValidate(function () {
            let vals = form.vals();
            let email = form.vals().Email;
            let cnpj = form.vals().lvo_taxidnumber;
            let funcionarios = form.vals().NumberOfEmployees;

            form.submitable(false);

            if(funcionarios){
                if (funcionarios >= 100) {
                    if(email){
                        if (!isEmailGood(email)) {
                            var emailElem = form.getFormElem().find("#Email");
                            form.showErrorMessage("Digite um e-mail comercial.", emailElem);
                            form.submitable(false);
                        } else {
                            form.submitable(true);
                        }
                    }
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
    function isEmailGov(email) {
        for (var i = 0; i < govDomains.length; i++) {
            var domain = govDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }

    function validarCNPJ(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g,'');

        if(cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" || 
            cnpj == "11111111111111" || 
            cnpj == "22222222222222" || 
            cnpj == "33333333333333" || 
            cnpj == "44444444444444" || 
            cnpj == "55555555555555" || 
            cnpj == "66666666666666" || 
            cnpj == "77777777777777" || 
            cnpj == "88888888888888" || 
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

    }

});