$(function(){
   
   var area_cd = 2;
   var day;
   var area_name;
            
   $('#day_select').datepicker({
       dateFormat: 'yy/mm/dd'
   });
   
    var dt = new Date();
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth()+1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var result = y + "/" + m + "/" + d;
    
    day = result;
    
    $('#day_select').val(day);
    
    //エリア名取得
    area_name = area(area_cd);
    
    //Ajax処理
    ajax(day,area_cd,area_name);
      
    /**
     * 日付選択時
     */
    $('#day_btn').click(function(){
      day = $('#day_select').val();
      
    //エリア名取得
    area_name = area(area_cd);
    
    //Ajax処理
    ajax(day,area_cd,area_name);
      
    });
    
    /**
     * 託送料金エリア変更時
     */
    $('.transmission_tabs_item').on('click',function(){
        
        console.log('SS');
        
        area_tbl_name = $(this).data('areaname');
        $('.transmission_tabs_item').removeClass('active');
        $(this).addClass('active'); 
        $('.transmission_area_table').removeClass('active');
        $('.'+area_tbl_name).addClass('active'); 
    });
    
    /**
     * エリア変更時
     */
    $('.tabs_item').on('click',function(){
                        
        $('.tabs_item').removeClass('active');
        $(this).addClass('active'); 
        area_cd = $(this).data('area');
        
        day = $('#day_select').val();
        
        //エリア名取得
        area_name = area(area_cd);
        console.log(area_cd);
        console.log(area_name);

        //Ajax処理
        ajax(day,area_cd,area_name);
        
    });
    
  
  /**
   * ajax関数
   */
  function ajax(day,area_cd,area_name){
      $.ajax({
        url: '/jpex/spot_data',
        type: 'get',
        data:{
            'day':day,
            'area':area_cd
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    }).done(function (data) {

      var data_ary = [];

      $.each(data,function(index,val){
          data_ary.push(val.price);
      });

      console.log(data_ary);

      Highcharts.setOptions({
              lang:{
                  contextButtonTitle: '画像としてダウンロード',
                  printChart:         'グラフを印刷',
                  downloadJPEG:       'JPEG画像でダウンロード',
                  downloadPDF:        'PDF文書でダウンロード',
                  downloadPNG:        'PNG画像でダウンロード',
                  downloadSVG:        'SVG形式でダウンロード'
              }
      });

      Highcharts.chart('highcharts', {  //グラフ描画のテンプレート

      title: {  //グラフのタイトル
          text: day + 'スポットデータ'
      },
      chart:{
          type:"line"
      },
      xAxis: {
          categories: ['00:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30',
              '13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00'],
      },
      yAxis: {//y軸の設定
            title: {//y軸のタイトル
                text: '(円/kWh)'
            },
            allowDecimals:false
      },
      legend: {  //グラフの凡例
          layout: 'vertical',  //縦方向に並べる
          align: 'right',  //グラフの右に表示（左右中央）
          verticalAlign: 'middle'  //グラフの中央に表示（上下中央）
      },

      credits:{
        enabled:false
      },

      series: [{
          name: area_name,
          data: data_ary
      }]
      });
    });
  }
  
  /**
   * よくある質問
   */
    $('.lpio_accordion li').click(function() {
    $(this).children('.lpio_submenu').slideToggle();

    if ($(this).children('.lpio_menu').hasClass('active')) {
        $(this).children('.lpio_menu').removeClass('active');
        $(this).children(".lpio_menu").css({
          'background-color':'',
          'color':''
        });
        $(this).find('span.qa').css('color','');
        $(this).find('.lpio_icon').css('background-color','');
        $(this).find('.lpio_icon').toggleClass('lpio_icon_active');
     } else {
        $(this).children(".lpio_menu").addClass("active");
        $(this).children(".lpio_menu").css({
          'background-color':'#42a4c9',
          'color':'white'
        });
        $(this).find('span.qa').css('color','white');
        $(this).find('.lpio_icon').css('background-color','white');
        $(this).find('.lpio_icon').toggleClass('lpio_icon_active');
        }

    return false;
  });

  
  /**
   * エリア名
   */
  function area(area_cd){
      switch(area_cd){
          case 2 : area_name = '東北'; break;
          case 3 : area_name = '東京'; break;
          case 4 : area_name = '中部'; break;
          case 5 : area_name = '北陸'; break;
          case 6 : area_name = '関西'; break;
          case 7 : area_name = '中国'; break;
          case 8 : area_name = '四国'; break;
          case 9 : area_name = '九州'; break;
      }
      return area_name;
  };
  
  //マーカーアニメーション
  $(window).scroll(function (){
    $(".js-markerScrollAnimation").each(function(){
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
      var scroll = $(window).scrollTop(); //スクロールの位置を取得
      var windowHeight = $(window).height(); //ウインドウの高さを取得
      if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass('is-active'); //クラス「active」を与える
      }
    });
    });
    
    
  
});

$(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
    $("#nav").toggleClass('active');
    
        if($(".menu").hasClass('active')) {
        $("body").css('overflow','hidden');
      }else {
        $("body").css('overflow','auto');
      }
  
  });
}); 
$(function () {
  $('#nav a').on('click', function () {
    $('#nav').toggleClass('active');
    $(".menu").toggleClass('active');
  });
});

$(function(){
    $(".footerSelectBtn").on("click", function() {
            $(this).next().slideToggle();
    });
});

$(function(){
    
})