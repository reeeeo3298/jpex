/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    $('#confirm_btn').click(function(){
                
        var name = $('#input_name').val();
        var type = $('#input_type').val();
        var type_name;
        var title = $('#input_title').val();
        var content = $('#input_content').val();
                
        if(type === '1'){
            type_name = 'データ修正依頼';
        }else if(type === '2'){
            type_name = '調査依頼';
        }else if(type === '3'){
            type_name = 'HP関連';
        }else if(type === '4'){
            type_name = 'エラー報告';
        }else if(type === '5'){
            type_name = 'システム相談';
        }else{
            type_name = 'その他';
        }
        
        if(title === ''){
            alert('件名を入力してください。');
            $('#input_title').focus();
            return false;
        }else if(content === ''){
            alert('内容をを入力してください。');
            $('#input_content').focus();
            return false;
        }
        
        $('#name').text(name);
        $('[name="name"]').val(name);
        $('#type').text(type_name);
        $('[name="type"]').val(type);
        $('#title').text(title);
        $('[name="title"]').val(title);
        $('#content').text(content);
        $('[name="content"]').val(content);
        
        $('#confirm_modal').modal();
                
    });    
});

$(function(){
    $('.detail_btn').on('click',function(){
        
        var no = $(this).closest('tr').data('no'); 
        
       //ajax処理
        $.ajax({
            url: '/lpioportal/content_detail',
            type: 'get',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                'no': no
            }
        }).done(function(data){
        
            //対応内容が入力されていれば表示
            //入力されていない場合テキストエリア表示
            if(data[0].comp_content === null){
                $('#comp_content_2').css('display','block');
                $('#comp_content_1').css('display','none');
            }else{
                $('#comp_content_2').css('display','none');
                $('#comp_content_1').css('display','block');
                $('#comp_content').text(data[0].comp_content);
            }

            $('#name').text(data[0].staff_name); 
            $('#content_no').text(data[0].no);
            $('#status').text(data[0].status_name);
            $('#type').text(data[0].type_name);
            $('#title').text(data[0].title);
            $('#content').text(data[0].content);
            $('#complete_no').val(data[0].no);

            $('#detail_modal').modal('show');

            $('#comp_content').click(function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                var txt = $(this).text();
                console.log(txt);
                $(this).html('<textarea name="comp_content" class="comp_text" value="'+txt+'">'+txt+'</textarea>');
                $('.comp_text').focus().blur(function(){
                    var inputVal = $(this).val(); 
                    console.log(inputVal);
                    $('#comp_content_edit').val(inputVal);
                    });
                };
            });
        });
        $('#comp_submit').on('click',function(){
           
           var comp_content_val = $('#comp_content_val').val();
//           console.log(comp_content_val);
           $('#comp_content_new').val(comp_content_val);
           
           $('#contact_data').submit();
        });                        
    });    
});


$(function(){
  moment.locale("ja");
  $('#contact_date').daterangepicker(
    {
      ranges: {
        '今日': [moment(), moment()],
        '昨日': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        '過去7日間': [moment().subtract(6, 'days'), moment()],
        '過去30日間': [moment().subtract(29, 'days'), moment()],
        '今月': [moment().startOf('month'), moment().endOf('month')],
        '先月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
      format: "YYYY-MM-DD",
      locale: { applyLabel: "OK", customRangeLabel: "カスタム"}
    },
    function(s, e){
    startdate = s.format('YYYY-MM-DD');
    enddate = e.format('YYYY-MM-DD');
  });
});