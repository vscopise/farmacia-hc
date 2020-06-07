jQuery(document).ready(function ($) {
    $('#button_submit').click(function(){
        //alert('click');
        $.ajax({
            type: 'post',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-Uy4PyoKTHtuVhuObvBsf4HcD7eHSn9pDXjYwIQ_rY3ZoKg',
            data: $("#data_form").serialize(),
            success: alert($("#data_form").serialize())
        });
    });
});