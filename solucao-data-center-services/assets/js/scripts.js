$(document).ready(function(){

        !function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(o).forEach(function(t){i.options[t]=o[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(!0===this.showCursor&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(!0!==this.stop){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,o=t.substr(s);if("^"===o.charAt(0)){var r=1;/^\^\d+/.test(o)&&(o=/\d+/.exec(o)[0],r+=o.length,e=parseInt(o)),t=t.substring(0,s)+t.substring(s+r)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="";for(a="<"===n?">":";";t.substr(s+1).charAt(0)!==a&&(t.substr(s).charAt(0),!(++s+1>t.length)););s++,a}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,!1===i.loop||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(!0!==this.stop){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(;"<"!==t.substr(s-1).charAt(0)&&(t.substr(s).charAt(0),!(--s<0)););s--,"<"}var i=t.substr(0,s);e.replaceText(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i.new=function(t,e){Array.prototype.slice.apply(s.querySelectorAll(t)).forEach(function(t){var s=t._typed,o="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,o),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),o=s.data("typed"),r="object"==typeof t&&t;o&&o.reset(),s.data("typed",o=new i(this,r)),"string"==typeof t&&o[t]()})}),t.Typed=i;var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);

    // funções e utms
    function getUrlParamByName(name, url) {
        if (!url) url = window.location.href;
  
        name = name.replace(/[\[\]]/g, '\\$&');
  
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
  
        if (!results) return null;
        if (!results[2]) return '';
  
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
      }

    $('#utm_source').val(getUrlParamByName('utm_source'));
    $('#utm_medium').val(getUrlParamByName('utm_medium'));
    $('#utm_campaign').val(getUrlParamByName('utm_campaign'));
    $('#utm_content').val(getUrlParamByName('utm_content'));
    $('#utm_term').val(getUrlParamByName('utm_term'));

   $('#cnpj').mask('99.999.999/9999-99', {reverse: true});

   $("#phone" ).mask("(99) 9999-9999?9").focusout(function (event) {  
       var target, phone, element;  
       target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
       phone = target.value.replace(/\D/g, '');
       element = $(target);  
       element.unmask();  
       if(phone.length > 10) {  
           element.mask("(99) 99999-999?9");  
       } else {  
           element.mask("(99) 9999-9999?9");  
       }  
    });

    $('#typed').typed({
        strings: ["Serviços Continuados","DCIM", "IT Moving", "Data Center Carbon Zero"],
        typeSpeed: 30,
        loop: true,
        backSpeed: 20,
        backDelay: 500
    });

    function validacaoEmail(email) {
        var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return verifica.test(String(email).toLowerCase());
    }
    
    var invalidDomains = ["@gmail.","@yahoo.","@hotmail.","@live.","@aol.","@outlook.","@bol.", "@uol.", "@icloud."];
        
    function emailCorporativo(email) {
        for(var i=0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
            }
        }
        return true;
    }

    //menus internos
    $("#item-01").on('click', function(){
        $(".item-01").fadeIn();
        $("#item-01").addClass('active');
        $(".item-02,.item-03,.item-04").hide();
        $("#item-02,#item-03,#item-04").removeClass('active');

    });
    $("#item-02").on('click', function(){
        $(".item-02").fadeIn();
        $("#item-02").addClass('active');
        $(".item-01,.item-03,.item-04").hide();
        $("#item-01,#item-03,#item-04").removeClass('active');
    });
    $("#item-03").on('click', function(){
        $(".item-03").fadeIn();
        $("#item-03").addClass('active');
        $(".item-01,.item-02,.item-04").hide();
        $("#item-01,#item-02,#item-04").removeClass('active');
    });
    $("#item-04").on('click', function(){
        $(".item-04").fadeIn();
        $("#item-04").addClass('active');
        $(".item-01,.item-02,.item-03").hide();
        $("#item-01,#item-02,#item-03").removeClass('active');
    });

    // fecha formulário

    $("#close").on('click', function(){
        $(".formulario").fadeOut();
        $("html").css('overflow','scroll');
    });
    $("#open-form").on('click', function(){
        $(".formulario").fadeIn();
        $("html").css('overflow','hidden');
    });

    //cookies
    $("#aceitar-cookies").on('click', function(){
        $(".cookies").fadeOut();
        localStorage.setItem('aceitouCookies', 'Sim');
    });
    if(localStorage.getItem("aceitouCookies") == 'Sim'){
        $(".cookies").hide();
    }

    // slide

    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        responsive: [{
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });

    // envia form

    jQuery('input,select').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#enviar').click();
        }
    
    });

    $('#enviar').click(function() {
        
        var identificador = 'data-center-services';

        var nome = $("input[name='nome']" );
        var sobrenome = $("input[name='sobrenome']" );
        var telefone = $("input[name='phone']" );
        var email = $("input[name='email']" );
        var empresa = $("input[name='empresa']" );
        var segmento = $("select[name='segmento']" );
        var cargo = $("select[name='cargo']" );
        var funcionarios = $("select[name='funcionarios']" );
        var faturamento = $("select[name='faturamento']" );
        var tempo = $("select[name='tempo']" );
        var solucoes = $("select[name='solucoes']" );

        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');
        var utm_content = $('#utm_content');
        var utm_term = $('#utm_term');

        if (!nome.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe seu nome',
                timer: 2000,
                onAfterClose: () => {
                    nome.focus();
                }
            });
        } if (!sobrenome.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe seu sobrenome',
                timer: 2000,
                onAfterClose: () => {
                    sobrenome.focus();
                }
            });
        } else if (!telefone.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe seu telefone',
                timer: 2000,
                onAfterClose: () => {
                    telefone.focus();
                }
            });
        } else if (
            telefone.val() == '(99) 9999-9999' ||
            telefone.val() == '(00) 0000-0000' ||
            telefone.val() == '(11) 1111-1111' ||
            telefone.val() == '(22) 2222-2222' ||
            telefone.val() == '(33) 3333-3333' ||
            telefone.val() == '(44) 4444-4444' ||
            telefone.val() == '(55) 5555-5555' ||
            telefone.val() == '(66) 6666-6666' ||
            telefone.val() == '(77) 7777-7777' ||
            telefone.val() == '(88) 8888-8888' ||
            telefone.val() == '(99) 99999-9999' ||
            telefone.val() == '(00) 00000-0000' ||
            telefone.val() == '(11) 11111-1111' ||
            telefone.val() == '(22) 22222-2222' ||
            telefone.val() == '(33) 33333-3333' ||
            telefone.val() == '(44) 44444-4444' ||
            telefone.val() == '(55) 55555-5555' ||
            telefone.val() == '(66) 66666-6666' ||
            telefone.val() == '(77) 77777-7777' ||
            telefone.val() == '(88) 88888-8888'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe um telefone válido',
                timer: 2000,
                onAfterClose: () => {
                    telefone.focus();
                }
            });
        } else if (!validacaoEmail(email.val().toLowerCase())){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe um e-mail válido',
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                }
            });
        } else if (!emailCorporativo(email.val().toLowerCase())){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe um e-mail comercial',
                timer: 2000,
                onAfterClose: () => {
                    email.focus();
                }
            });
        } else if (!empresa.val()){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe sua empresa',
                timer: 2000,
                onAfterClose: () => {
                    empresa.focus();
                }
            });
        } else if (segmento.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe o segmento da sua empresa',
                timer: 2000,
                onAfterClose: () => {
                    segmento.focus();
                }
            });
        } else if (cargo.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe seu cargo',
                timer: 2000,
                onAfterClose: () => {
                    cargo.focus();
                }
            });
        } else if (funcionarios.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe o nº de funcionários',
                timer: 2000,
                onAfterClose: () => {
                    funcionarios.focus();
                }
            });
        } else if (faturamento.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe a faixa de faturamento',
                timer: 2000,
                onAfterClose: () => {
                    faturamento.focus();
                }
            });
        } else if (faturamento.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe a faixa de faturamento',
                timer: 2000,
                onAfterClose: () => {
                    faturamento.focus();
                }
            });
        } else if (solucoes.val() == 'nulo'){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Informe a solução desejada',
                timer: 2000,
                onAfterClose: () => {
                    solucoes.focus();
                }
            });
        } else if(!$('#optin').is(':checked')){
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Aceite nossa política de privacidade',
                timer: 2000,
                onAfterClose: () => {
                    faturamento.focus();
                }
            });
        } else {

            $("#enviar").html('Enviando...');
            $("#enviar").css('pointer-events','none');

            var sendRD = [
                { name: 'identificador', value: identificador},
                { name: 'Origem do lead SF', value: 'Inbound'},
                { name: 'Nome', value: nome.val() + ' ' + sobrenome.val()},
                { name: 'Cargo dropdown', value: cargo.val()},
                { name: 'email', value: email.val()},
                { name: 'telefone', value: telefone.val()},
                { name: 'empresa', value: empresa.val()},
                { name: 'Segmento da Empresa', value: segmento.val()},
                { name: 'Número de Funcionários', value: funcionarios.val()},
                { name: 'Faturamento Anual', value: faturamento.val()},
                { name: 'Em quanto tempo pretende iniciar este projeto?', value: tempo.val()},
                { name: 'Sobre qual das soluções deseja conversar', value: solucoes.val()},
                { name: 'privacy_data[communications]', value: '1'},
                { name: 'utm_source', value: utm_source.val()},
                { name: 'utm_medium', value: utm_medium.val()},
                { name: 'utm_campaign', value: utm_campaign.val()},
                { name: 'utm_content', value: utm_content.val()},
                { name: 'utm_term', value: utm_term.val()},
                { name: 'url_pagina', value: window.location.href},
                { name: 'token_rdstation', value: 'cf0923bc88a24d3e7c58360beb0d666c'}
            ];

            RdIntegration.post(sendRD);

            setTimeout(function(){ 
                window.location.href = "./agradecimento.html";
            }, 2000);

        }
    
    });
    
});