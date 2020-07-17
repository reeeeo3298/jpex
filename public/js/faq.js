/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    $('.answer_btn').on('click',function(){
        
        var no = $(this).closest('tr').data('no'); 
        
       //ajax処理
        $.ajax({
            url: '/lpioportal/faq_answer',
            type: 'get',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                'no': no
            }
        }).done(function(data){
            console.log(data);
        $('#category').text(data[0].category);
        $('#question').text(data[0].question);
        $('#answer').text(data[0].answer);
            
        $('#answer_modal').modal('show');
        });
                        
    });    
});

