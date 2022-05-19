"use strict"

/*$(window).on("load", function() {
    $('.btn-forget').on('click',function(e){
        e.preventDefault();
        var inputField = $(this).closest('form').find('input');
        if(inputField.attr('required') && inputField.val()){
            $('.error-message').remove();
            $('.form-items','.form-content').addClass('hide-it');
            $('.form-sent','.form-content').addClass('show-it');
        }else{
            $('.error-message').remove();
            $('<small class="error-message">Please fill the field.</small>').insertAfter(inputField);
        }

    });
    
    $('.btn-tab-next').on('click',function(e){
        e.preventDefault();
        $('.nav-tabs .nav-item > .active').parent().next('li').find('a').trigger('click');
    });
    $('.custom-file input[type="file"]').on('change', function(){
        var filename = $(this).val().split('\\').pop();
        $(this).next().text(filename);
    });
});

$( document ).ready(function() {
    $("#submit").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'form.php');
			return false; 
		}
	);
});*/
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url,
        type:     "POST", //метод відправки
        dataType: "html", //формат данних
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { //Данні відправлені успішно
        	result = $.parseJSON(response);
        	$('#result_form').html('Імя: '+result.name+'<br>Пароль: '+result.password+'<br>Пароль: '+result.email);
    	},
    	error: function(response) { // Дані не відпрвленні
            $('#result_form').html('Помилка. Данні не відправлені.');
            console.log(JSON.stringify(resultat));
    	}
 	});
}
function sendAjaxForm(result_forma, ajax_form, url) {
    $.ajax({
        url:     url,
        type:     "POST", //метод відправки
        dataType: "html", //формат данних
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { //Данні відправлені успішно
        	result = $.parseJSON(response);
        	$('#result_forma').html('<br>Email: '+result.username+'<br>Пароль: '+result.password);
    	},
    	error: function(response) { // Дані не відпрвленні
           $('#resultat_forma').html('Помилка. Данні не відправлені.');
           console.log(JSON.stringify(resultat));
    	}
 	});
}


