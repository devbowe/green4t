$(document).ready(function(){

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

    // envia form

    jQuery('input,select').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#enviar').click();
        }
    
    });

    $('#enviar').click(function() {
        
        var identificador = 'solucao-iot';

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