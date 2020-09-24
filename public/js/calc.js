$(function(){
    
    //ハンバーガーメニュー
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
    //footer
    $(function(){
        $(".footerSelectBtn").on("click", function() {
                $(this).next().slideToggle();
        });
    });
    
    //電力プラン変更時イベント
    $('[name=elec_plan]').change(function(){
      var type = $(this).val();
      if(type === '01'){
        $('#capacity').css('display','block');
        $('#capacity_l').css('display','none');
      }else{
        $('#capacity_l').css('display','block');
        $('#capacity').css('display','none');
      }
    });
    
    //電力会社エリア変更時イベント
    $('[name=elec_company]').change(function(){
        
        var area_cd = $(this).val();
        var selectbox = $('select[name=elec_plan]');
        
        //関西・中国・四国
        if(area_cd === '06' || area_cd === "07" || area_cd === "08"){
            $('[name=elec_capacity]').text('----');
            $('[name=elec_capacity]').css('background-color','#d0c8c8');
            selectbox.children('option:first-child').remove();
            selectbox.children('option:last-child').remove();
            selectbox.append('<option value="01">従量電灯A</option>');
            selectbox.append('<option value="02">従量電灯B</option>');
        }else{
            if($('[name=elec_capacity]').text() === '----'){
                $('[name=elec_capacity]').append('<option value="30">30</option>');
                $('[name=elec_capacity]').append('<option value="40">40</option>');
                $('[name=elec_capacity]').append('<option value="50">50</option>');
                $('[name=elec_capacity]').append('<option value="60">60</option>');
                $('[name=elec_capacity]').css('background-color','');
            }
            selectbox.children('option:first-child').remove();
            selectbox.children('option:last-child').remove();
            selectbox.append('<option value="01">従量電灯B</option>');
            selectbox.append('<option value="02">従量電灯C</option>');
        }
        
        if($('#capacity').css('display') === 'block'){
            $('#capacity_l').css({'cssText': 'display: none !important;'});
        }else{
            $('#capacity_l').css({'cssText': 'display: none !important;'});
            $('#capacity').css({'cssText': 'display: block !important;'});
        }
        
    });
    
    //使用量フォーカス外れた時イベント
    $('[name=amount_txt]').blur(function(){
        var result = $(this).val();
        var target_month = $('[name=target_month]').val();
        
        console.log(target_month);
        
        use_result =[];
        
        for(var i = 1; i < 13; i++) {
            var monthuse = result * monthuseelec[target_month][i];
            use_result.push(Math.round(monthuse));
        }        
                
        var sum_result = sum(use_result);
        $('#sum_result').text(sum_result);
        
                
        //月ごとの使用量入力
        switch(target_month){
            case "1":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "2":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "3":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "4":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "5":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "6":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "7":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "8":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "9":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "10":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "11":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "12":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break; 
        }
        
    });
    
    //対象月変更時イベント
    $('[name=target_month]').change(function(){
        
        var result;
        var amount_txt = $('.amount_txt').val();
        
        if(amount_txt !== ''){
        result = amount_txt;
            
        var target_month = $('[name=target_month]').val();
                
        use_result =[];
        
        for(var i = 1; i < 13; i++) {
            var monthuse = result * monthuseelec[target_month][i];
            use_result.push(Math.round(monthuse));
        }        
                
        var sum_result = sum(use_result);
        $('#sum_result').text(sum_result);
        
        //月ごとの使用量入力
        switch(target_month){
            case "1":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "2":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "3":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "4":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "5":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "6":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "7":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "8":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "9":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "10":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "11":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break;
            case "12":
                $('.txt1').val(use_result[0]);
                $('.txt2').val(use_result[1]);
                $('.txt3').val(use_result[2]);
                $('.txt4').val(use_result[3]);
                $('.txt5').val(use_result[4]);
                $('.txt6').val(use_result[5]);
                $('.txt7').val(use_result[6]);
                $('.txt8').val(use_result[7]);
                $('.txt9').val(use_result[8]);
                $('.txt10').val(use_result[9]);
                $('.txt11').val(use_result[10]);
                $('.txt12').val(use_result[11]);
                break; 
        }
        }else{
            
        }
                
    });
    
    //シミュレーションボタンクリック
    $('.submit_btn').click(function(){
                
        var amount_txt = $('.amount_txt').val();
        var area = $('[name=elec_company]').val();
        var plan = $('[name=elec_plan]').val();
        var capacity = $('[name=elec_capacity]').val();
        var capacity_l = $('[name=elec_capacity_l]').val();
        var month = $('[name=target_month]').val();
        var lifepattern = $('[name=lifepattern]').val();
        
        console.log(amount_txt);
        
        if(amount_txt === ''){
            alert('使用量を入力してください。');
            $('.amount_txt').focus();
            return false;
        }
        
        //シミュレーション結果へ移動
        $('#result_block').css('display','block');
        var position = $('#result_block').offset().top;
        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
        
        var month_1 = $('.txt1').val();
        var month_2 = $('.txt2').val();
        var month_3 = $('.txt3').val();
        var month_4 = $('.txt4').val();
        var month_5 = $('.txt5').val();
        var month_6 = $('.txt6').val();
        var month_7 = $('.txt7').val();
        var month_8 = $('.txt8').val();
        var month_9 = $('.txt9').val();
        var month_10 = $('.txt10').val();
        var month_11 = $('.txt11').val();
        var month_12 = $('.txt12').val();
        
        var dataX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        
        var amount_month = [month_1,month_2,month_3,month_4,month_5,month_6,month_7,month_8,month_9,month_10,month_11,month_12];

        switch(area){
            case "02"://東北エリア計算
                
                var touhoku_price = [];
                var lpio_price = [];
                
                var year_touhoku_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var touhoku_result = calc_touhoku(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_touhoku(amount_month[i],plan,capacity,capacity_l,i);
                    
                    touhoku_price.push(Math.floor(touhoku_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_touhoku_price = year_touhoku_price + touhoku_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_touhoku_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = touhoku_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                
                break;
            case "03"://東京エリア計算
                
                var tokyo_price = [];
                var lpio_price = [];
                
                var year_tokyo_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var tokyo_result = calc_tokyo(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_tokyo(amount_month[i],plan,capacity,capacity_l,i);
                    
                    tokyo_price.push(Math.floor(tokyo_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_tokyo_price = year_tokyo_price + tokyo_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_tokyo_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = tokyo_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
                
            case "04"://中部エリア計算
                
                var chubu_price = [];
                var lpio_price = [];
                
                var year_chubu_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var chubu_result = calc_chubu(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_chubu(amount_month[i],plan,capacity,capacity_l,i);
                    
                    chubu_price.push(Math.floor(chubu_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_chubu_price = year_chubu_price + chubu_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_chubu_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = chubu_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
            case "05"://北陸エリア計算
                
                var hokuriku_price = [];
                var lpio_price = [];
                
                var year_hokuriku_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var hokuriku_result = calc_hokuriku(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_hokuriku(amount_month[i],plan,capacity,capacity_l,i);
                    
                    hokuriku_price.push(Math.floor(hokuriku_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_hokuriku_price = year_hokuriku_price + hokuriku_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_hokuriku_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = hokuriku_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
            case "06"://関西エリア計算
                
                var kansai_price = [];
                var lpio_price = [];
                
                var year_kansai_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var kansai_result = calc_kansai(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_kansai(amount_month[i],plan,capacity,capacity_l,i);
                    
                    kansai_price.push(Math.floor(kansai_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_kansai_price = year_kansai_price + kansai_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_kansai_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = kansai_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
            case "07"://中国エリア計算
                
                var chugoku_price = [];
                var lpio_price = [];
                
                var year_chugoku_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var chugoku_result = calc_chugoku(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_chugoku(amount_month[i],plan,capacity,capacity_l,i);
                    
                    chugoku_price.push(Math.floor(chugoku_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_chugoku_price = year_chugoku_price + chugoku_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_chugoku_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = chugoku_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
            case "08"://四国エリア計算
                
                var shikoku_price = [];
                var lpio_price = [];
                
                var year_shikoku_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var shikoku_result = calc_shikoku(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_shikoku(amount_month[i],plan,capacity,capacity_l,i);
                    
                    shikoku_price.push(Math.floor(shikoku_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_shikoku_price = year_shikoku_price + shikoku_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_shikoku_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = shikoku_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
            case "09"://九州エリア計算
                
                var kyushu_price = [];
                var lpio_price = [];
                
                var year_kyushu_price = 0;
                var year_lpio_price = 0;
                var year_difference = 0;
                                               
                for (var i = 0; i < 12; i++){

                    var kyushu_result = calc_kyushu(amount_month[i],plan,capacity,capacity_l);
                    
                    var lpio_result = calc_lpio_kyushu(amount_month[i],plan,capacity,capacity_l,i);
                    
                    kyushu_price.push(Math.floor(kyushu_result)) ;
                    lpio_price.push(Math.floor(lpio_result));
                    
                    year_kyushu_price = year_kyushu_price + kyushu_result;
                    year_lpio_price = year_lpio_price + lpio_result;
                };
                
                //年間差額
                year_difference = year_kyushu_price - year_lpio_price;
                                
                $('#price_txt').text(delimit(Math.floor(year_difference)));
                
                var highcharts_befor = kyushu_price;
                var highcharts_lpio = lpio_price;
                
                //料金比較表データ
                var month_table = tabledata(highcharts_befor,highcharts_lpio,amount_month);
                
                $('#month_table tbody tr').remove();
                $.each(month_table,function(i,val){
                    if(val[4].indexOf('-') > -1){
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[4]) + '</span></td></tr>');
                    }else{
                        $('#month_table tbody').append('<tr><td class="month_color">' + delimit(val[0]) + '</td>\n\
                                                        <td>' + delimit(val[1]) + '</td>\n\
                                                        <td>' + delimit(val[2]) + '</td>\n\
                                                        <td><span class="lpio-price">' + delimit(val[3]) + '</span></td>\n\
                                                        <td><span class="lpio-price minus">' + delimit(val[4]) + '</span></td></tr>');
                    }
                });
                                
                if(plan === "01"){
                    $('#plan_txt').text('S');
                }else{
                    $('#plan_txt').text('L');
                }                
                
                
                Highcharts.chart('container', {  //グラフ描画のテンプレート
                    chart: {
                      type: 'column'
                  },
                  lang: {
                      numericSymbols: null
                  },
                  title: {
                      text: 'でんき料金比較'
                  },
                  xAxis: {
                      categories: dataX,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'でんき料金'
                      }
                  },
                  credits: {
                          enabled: false
                      },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:,1f} 円</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true,
                      allowDecimals: false, //falseで小数点以下を表示しない
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: '現在の電気代(円)',
                      data: highcharts_befor,
                      color:'#ababab'

                  }, {
                      name: 'エルピオでんきの電気代(円)',
                      data: highcharts_lpio,
                      color:'#ae2f2f'

                  }]

                });
                break;
             
        }
        
    });
    
    //カンマ付ける
    var delimit = function(n) {//カンマ付ける関数
      return String(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    
    //足し算
    var sum  = function(arr) {
    var sum = 0;
        arr.forEach(function(elm) {
            sum += elm;
        });
        return sum;
    };
    
    // 月の使用率按分
    var monthuseelec = {
        '1': {
            1: 1,
            2: 0.97,
            3: 0.89,
            4: 0.77,
            5: 0.79,
            6: 0.83,
            7: 0.95,
            8: 1.05,
            9: 0.85,
            10: 0.78,
            11: 0.88,
            12: 0.93
        },
        '2': {
            1: 1.03,
            2: 1,
            3: 0.92,
            4: 0.79,
            5: 0.82,
            6: 0.85,
            7: 0.99,
            8: 1.08,
            9: 0.90,
            10: 0.87,
            11: 0.91,
            12: 0.96
        },
        '3': {
            1: 1.13,
            2: 1.09,
            3: 1,
            4: 0.86,
            5: 0.89,
            6: 0.93,
            7: 1.08,
            8: 1.18,
            9: 0.98,
            10: 0.95,
            11: 0.99,
            12: 1.05
        },
        '4': {
            1: 1.31,
            2: 1.26,
            3: 1.16,
            4: 1,
            5: 1.04,
            6: 1.08,
            7: 1.25,
            8: 1.37,
            9: 1.18,
            10: 1.1,
            11: 1.15,
            12: 1.21
        },
        '5': {
            1: 1.26,
            2: 1.22,
            3: 1.12,
            4: 0.97,
            5: 1,
            6: 1.04,
            7: 1.2,
            8: 1.32,
            9: 1.10,
            10: 1.06,
            11: 1.11,
            12: 1.17
        },
        '6': {
            1: 1.21,
            2: 1.17,
            3: 1.07,
            4: 0.93,
            5: 0.96,
            6: 1,
            7: 1.15,
            8: 1.27,
            9: 1.09,
            10: 1.02,
            11: 1.07,
            12: 1.12
        },
        '7': {
            1: 1.05,
            2: 1.01,
            3: 0.93,
            4: 0.8,
            5: 0.83,
            6: 0.87,
            7: 1,
            8: 1.1,
            9: 0.91,
            10: 0.88,
            11: 0.92,
            12: 0.97
        },
        '8': {
            1: 0.96,
            2: 0.92,
            3: 0.85,
            4: 0.73,
            5: 0.76,
            6: 0.79,
            7: 0.91,
            8: 1,
            9: 0.82,
            10: 0.8,
            11: 0.84,
            12: 0.88
        },
        '9': {
            1: 1.04,
            2: 1.01,
            3: 0.92,
            4: 0.8,
            5: 0.83,
            6: 0.86,
            7: 0.99,
            8: 1.09,
            9: 1,
            10: 0.87,
            11: 0.92,
            12: 0.97
        },
        '10': {
            1: 1.19,
            2: 1.15,
            3: 1.06,
            4: 0.91,
            5: 0.94,
            6: 0.98,
            7: 1.14,
            8: 1.25,
            9: 1.02,
            10: 1,
            11: 1.05,
            12: 1.1
        },
        '11': {
            1: 1.14,
            2: 1.1,
            3: 1.01,
            4: 0.87,
            5: 0.9,
            6: 0.94,
            7: 1.08,
            8: 1.19,
            9: 0.99,
            10: 0.95,
            11: 1,
            12: 1.05
        },
        '12': {
            1: 1.08,
            2: 1.04,
            3: 0.96,
            4: 0.83,
            5: 0.86,
            6: 0.89,
            7: 1.03,
            8: 1.13,
            9: 0.95,
            10: 0.91,
            11: 0.95,
            12: 1
        }
    };
    
    //jepx単価マスタ
    function area_price(area,month){
        
        var result;
        
        switch(area){
            case "02"://東北エリア計算
                if(month === 0){//1月
                    result = 8.14;
                }else if(month === 1){//2月
                    result = 7.55;
                }else if(month === 2){//3月
                    result = 7.19;
                }else if(month === 3){//4月
                    result = 6.81;
                }else if(month === 4){//5月
                    result = 5.50;
                }else if(month === 5){//6月
                    result = 5.46;
                }else if(month === 6){//7月
                    result = 4.82;
                }else if(month === 7){//8月
                    result = 7.38;
                }else if(month === 8){//9月
                    result = 9.76;
                }else if(month === 9){//10月
                    result = 9.30;
                }else if(month === 10){//11月
                    result = 8.97;
                }else if(month === 11){//12月
                    result = 8.69;
                }

                break;
            case "03"://東京エリア計算
                if(month === 0){//1月
                    result = 8.16;
                }else if(month === 1){//2月
                    result = 7.58;
                }else if(month === 2){//3月
                    result = 7.47;
                }else if(month === 3){//4月
                    result = 6.85;
                }else if(month === 4){//5月
                    result = 5.74;
                }else if(month === 5){//6月
                    result = 5.56;
                }else if(month === 6){//7月
                    result = 4.83;
                }else if(month === 7){//8月
                    result = 7.53;
                }else if(month === 8){//9月
                    result = 9.76;
                }else if(month === 9){//10月
                    result = 9.31;
                }else if(month === 10){//11月
                    result = 9.03;
                }else if(month === 11){//12月
                    result = 8.71;
                }
                break;
            case "04"://中部エリア計算
                if(month === 0){//1月
                    result = 7.28;
                }else if(month === 1){//2月
                    result = 6.36;
                }else if(month === 2){//3月
                    result = 5.06;
                }else if(month === 3){//4月
                    result = 4.19;
                }else if(month === 4){//5月
                    result = 3.65;
                }else if(month === 5){//6月
                    result = 4.64;
                }else if(month === 6){//7月
                    result = 4.06;
                }else if(month === 7){//8月
                    result = 7.22;
                }else if(month === 8){//9月
                    result = 8.37;
                }else if(month === 9){//10月
                    result = 7.77;
                }else if(month === 10){//11月
                    result = 6.98;
                }else if(month === 11){//12月
                    result = 7.85;
                }
                break;
            case "05"://北陸エリア計算
                if(month === 0){//1月
                    result = 7.28;
                }else if(month === 1){//2月
                    result = 6.36;
                }else if(month === 2){//3月
                    result = 5.06;
                }else if(month === 3){//4月
                    result = 4.19;
                }else if(month === 4){//5月
                    result = 3.63;
                }else if(month === 5){//6月
                    result = 4.64;
                }else if(month === 6){//7月
                    result = 4.03;
                }else if(month === 7){//8月
                    result = 7.22;
                }else if(month === 8){//9月
                    result = 8.38;
                }else if(month === 9){//10月
                    result = 7.77;
                }else if(month === 10){//11月
                    result = 6.98;
                }else if(month === 11){//12月
                    result = 7.85;
                }
                break;
            case "06"://関西エリア計算
                if(month === 0){//1月
                    result = 7.28;
                }else if(month === 1){//2月
                    result = 6.36;
                }else if(month === 2){//3月
                    result = 5.06;
                }else if(month === 3){//4月
                    result = 4.19;
                }else if(month === 4){//5月
                    result = 3.63;
                }else if(month === 5){//6月
                    result = 4.65;
                }else if(month === 6){//7月
                    result = 4.03;
                }else if(month === 7){//8月
                    result = 7.22;
                }else if(month === 8){//9月
                    result = 8.38;
                }else if(month === 9){//10月
                    result = 7.77;
                }else if(month === 10){//11月
                    result = 6.98;
                }else if(month === 11){//12月
                    result = 7.85;
                }
                break;
            case "07"://中国エリア計算
                if(month === 0){//1月
                    result = 7.28;
                }else if(month === 1){//2月
                    result = 6.36;
                }else if(month === 2){//3月
                    result = 5.06;
                }else if(month === 3){//4月
                    result = 4.15;
                }else if(month === 4){//5月
                    result = 3.62;
                }else if(month === 5){//6月
                    result = 4.65;
                }else if(month === 6){//7月
                    result = 4.03;
                }else if(month === 7){//8月
                    result = 7.22;
                }else if(month === 8){//9月
                    result = 8.38;
                }else if(month === 9){//10月
                    result = 7.76;
                }else if(month === 10){//11月
                    result = 6.98;
                }else if(month === 11){//12月
                    result = 7.85;
                }
                break;
            case "08"://四国エリア計算
                if(month === 0){//1月
                    result = 7.28;
                }else if(month === 1){//2月
                    result = 6.36;
                }else if(month === 2){//3月
                    result = 5.06;
                }else if(month === 3){//4月
                    result = 4.15;
                }else if(month === 4){//5月
                    result = 3.67;
                }else if(month === 5){//6月
                    result = 4.65;
                }else if(month === 6){//7月
                    result = 4.03;
                }else if(month === 7){//8月
                    result = 7.22;
                }else if(month === 8){//9月
                    result = 8.37;
                }else if(month === 9){//10月
                    result = 7.75;
                }else if(month === 10){//11月
                    result = 6.76;
                }else if(month === 11){//12月
                    result = 7.77;
                }
                break;
            case "09"://九州エリア計算
                if(month === 0){//1月
                    result = 6.64;
                }else if(month === 1){//2月
                    result = 5.73;
                }else if(month === 2){//3月
                    result = 4.49;
                }else if(month === 3){//4月
                    result = 3.96;
                }else if(month === 4){//5月
                    result = 3.48;
                }else if(month === 5){//6月
                    result = 4.61;
                }else if(month === 6){//7月
                    result = 4.01;
                }else if(month === 7){//8月
                    result = 6.75;
                }else if(month === 8){//9月
                    result = 8.22;
                }else if(month === 9){//10月
                    result = 7.37;
                }else if(month === 10){//11月
                    result = 6.42;
                }else if(month === 11){//12月
                    result = 7.37;
                }
                break;
        }
        
        return result;
    }
    
    function tabledata(highcharts_befor,highcharts_lpio,amount_month){
    var results = [
      ['月','使用量','現在の電気代','エルピオでんきの電気代','差額'],
      ['1',amount_month[0] + 'kWh',(highcharts_befor[0]) + '円',(highcharts_lpio[0]) + '円',(highcharts_lpio[0] - highcharts_befor[0]) + '円'],
      ['2',amount_month[1] + 'kWh',(highcharts_befor[1]) + '円',(highcharts_lpio[1]) + '円',(highcharts_lpio[1] - highcharts_befor[1]) + '円'],
      ['3',amount_month[2] + 'kWh',(highcharts_befor[2]) + '円',(highcharts_lpio[2]) + '円',(highcharts_lpio[2] - highcharts_befor[2]) + '円'],
      ['4',amount_month[3] + 'kWh',(highcharts_befor[3]) + '円',(highcharts_lpio[3]) + '円',(highcharts_lpio[3] - highcharts_befor[3]) + '円'],
      ['5',amount_month[4] + 'kWh',(highcharts_befor[4]) + '円',(highcharts_lpio[4]) + '円',(highcharts_lpio[4] - highcharts_befor[4]) + '円'],
      ['6',amount_month[5] + 'kWh',(highcharts_befor[5]) + '円',(highcharts_lpio[5]) + '円',(highcharts_lpio[5] - highcharts_befor[5]) + '円'],
      ['7',amount_month[6] + 'kWh',(highcharts_befor[6]) + '円',(highcharts_lpio[6]) + '円',(highcharts_lpio[6] - highcharts_befor[6]) + '円'],
      ['8',amount_month[7] + 'kWh',(highcharts_befor[7]) + '円',(highcharts_lpio[7]) + '円',(highcharts_lpio[7] - highcharts_befor[7]) + '円'],
      ['9',amount_month[8] + 'kWh',(highcharts_befor[8]) + '円',(highcharts_lpio[8]) + '円',(highcharts_lpio[8] - highcharts_befor[8]) + '円'],
      ['10',amount_month[9] + 'kWh',(highcharts_befor[9]) + '円',(highcharts_lpio[9]) + '円',(highcharts_lpio[9] - highcharts_befor[9]) + '円'],
      ['11',amount_month[10] + 'kWh',(highcharts_befor[10]) + '円',(highcharts_lpio[10]) + '円',(highcharts_lpio[10] - highcharts_befor[10]) + '円'],
      ['12',amount_month[11] + 'kWh',(highcharts_befor[11]) + '円',(highcharts_lpio[11]) + '円',(highcharts_lpio[11] - highcharts_befor[11]) + '円'],
    ];

    return results;

  };
    
    
    // --------------------東北電力エリアとスタンダード料金の比較--------------
      function calc_touhoku(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-2.2 * monthuse);
            
          if(elec_plan === '01'){     //従量電灯B
              if(capacityB === '30'){
                basicprice_before = 990;
              }else if(capacityB === '40'){
                basicprice_before = 1320;
              }else if(capacityB === '50'){
                basicprice_before = 1650;;
              }else if(capacityB === '60'){
                basicprice_before = 1980;
              }

              var grade3 = 0;
              var grade2 = 0;
              var grade1 = 0;

              if(monthuse > 300){  //300以上
                grade3 = monthuse - 300;
                grade2 = 180;
                grade1 = 120;
              }else if(monthuse > 120){ //121以上300以下
                grade2 = monthuse - 120;
                grade1 = 120;
              }else{ //120以下
                grade1 = monthuse;
              }

              //東北電力の料金
              volumeprice_before = 29.28 * grade3 + 25.33 * grade2 + 18.58 * grade1;

          }else{//従量電灯C
              
            //東北電力の固定料金
            basicprice_before = 330 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            volumeprice_before = 29.28 * grade3 + 25.33 * grade2 + 18.58 * grade1;
          }

          //東北電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;
            
    return monthamount_before;
  }
    // --------------------市場連動プラン(東北)--------------
      function calc_lpio_touhoku(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 8.84;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 7.8;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            if(capacityB === '30'){
                basic_price = 379.5;
            }else if(capacityB === '40'){
                basic_price = 506;
            }else if(capacityB === '50'){
                basic_price = 632.5;
            }else if(capacityB === '60'){
                basic_price = 759;
            };
        }else{
            basic_price = capacityC * 126.5;
        }
                        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('02',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
      
    // --------------------東京電力エリアとスタンダード料金の比較--------------
      function calc_tokyo(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-3.46 * monthuse);

          if(elec_plan === '01'){     //従量電灯B
              if(capacityB === '30'){
                basicprice_before = 858;
              }else if(capacityB === '40'){
                basicprice_before = 1144;
              }else if(capacityB === '50'){
                basicprice_before = 1430;;
              }else if(capacityB === '60'){
                basicprice_before = 1716;
              }

              var grade3 = 0;
              var grade2 = 0;
              var grade1 = 0;

              if(monthuse > 300){  //300以上
                grade3 = monthuse - 300;
                grade2 = 180;
                grade1 = 120;
              }else if(monthuse > 120){ //121以上300以下
                grade2 = monthuse - 120;
                grade1 = 120;
              }else{ //120以下
                grade1 = monthuse;
              }

              //東京電力の料金
              volumeprice_before = 30.57 * grade3 + 26.46 * grade2 + 19.88 * grade1;

          }else{//従量電灯C
              
            //東京電力の固定料金
            basicprice_before = 286 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //東京電力の料金
              volumeprice_before = 30.57 * grade3 + 26.46 * grade2 + 19.88 * grade1;
          }

          //東京電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;
            
    return monthamount_before;
  }
    // --------------------市場連動プラン(東京)--------------
      function calc_lpio_tokyo(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 7.45;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 6.4;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            if(capacityB === '30'){
                basic_price = 429;
            }else if(capacityB === '40'){
                basic_price = 572;
            }else if(capacityB === '50'){
                basic_price = 715;
            }else if(capacityB === '60'){
                basic_price = 858;
            };
        }else{
            basic_price = capacityC * 143;
        }
                        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('03',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
      
    // --------------------中部電力エリアとスタンダード料金の比較--------------
      function calc_chubu(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-4.58 * monthuse);

          if(elec_plan === '01'){     //従量電灯B
              if(capacityB === '30'){
                basicprice_before = 858;
              }else if(capacityB === '40'){
                basicprice_before = 1144;
              }else if(capacityB === '50'){
                basicprice_before = 1430;
              }else if(capacityB === '60'){
                basicprice_before = 1716;
              }

              var grade3 = 0;
              var grade2 = 0;
              var grade1 = 0;

              if(monthuse > 300){  //300以上
                grade3 = monthuse - 300;
                grade2 = 180;
                grade1 = 120;
              }else if(monthuse > 120){ //121以上300以下
                grade2 = monthuse - 120;
                grade1 = 120;
              }else{ //120以下
                grade1 = monthuse;
              }

              //中部電力の料金
              volumeprice_before = 28.49 * grade3 + 25.54 * grade2 + 21.07 * grade1;

          }else{//従量電灯C
              
            //中部電力の固定料金
            basicprice_before = 286 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //中部電力の料金
              volumeprice_before = 28.49 * grade3 + 25.54 * grade2 + 21.07 * grade1;
          }

          //中部電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;
            
    return monthamount_before;
  }
    // --------------------市場連動プラン(中部)--------------
      function calc_lpio_chubu(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 8.12;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 7.1;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            if(capacityB === '30'){
                basic_price = 379.5;
            }else if(capacityB === '40'){
                basic_price = 506;
            }else if(capacityB === '50'){
                basic_price = 632.5;
            }else if(capacityB === '60'){
                basic_price = 759;
            };
        }else{
            basic_price = capacityC * 126.5;
        }
                        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('04',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
    
    // --------------------北陸電力エリアとスタンダード料金の比較--------------
      function calc_hokuriku(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-1.18 * monthuse);

          if(elec_plan === '01'){     //従量電灯B
              if(capacityB === '30'){
                basicprice_before = 726;
              }else if(capacityB === '40'){
                basicprice_before = 968;
              }else if(capacityB === '50'){
                basicprice_before = 1210;
              }else if(capacityB === '60'){
                basicprice_before = 1452;
              }

              var grade3 = 0;
              var grade2 = 0;
              var grade1 = 0;

              if(monthuse > 300){  //300以上
                grade3 = monthuse - 300;
                grade2 = 180;
                grade1 = 120;
              }else if(monthuse > 120){ //121以上300以下
                grade2 = monthuse - 120;
                grade1 = 120;
              }else{ //120以下
                grade1 = monthuse;
              }

              //北陸電力の料金
              volumeprice_before = 23.45 * grade3 + 21.74 * grade2 + 17.85 * grade1;

          }else{//従量電灯C
              
            //北陸電力の固定料金
            basicprice_before = 242 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //北陸電力の料金
              volumeprice_before = 23.45 * grade3 + 21.74 * grade2 + 17.85 * grade1;
          }

          //北陸電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;
            
    return monthamount_before;
  }
    // --------------------市場連動プラン(北陸)--------------
      function calc_lpio_hokuriku(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 7.02;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 7.7;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            if(capacityB === '30'){
                basic_price = 396;
            }else if(capacityB === '40'){
                basic_price = 528;
            }else if(capacityB === '50'){
                basic_price = 660;
            }else if(capacityB === '60'){
                basic_price = 792;
            };
        }else{
            basic_price = capacityC * 132;
        }
                        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('05',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
   
    // --------------------関西電力エリアとスタンダード料金の比較--------------
      function calc_kansai(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-1.16 * monthuse);

          if(elec_plan === '01'){     //従量電灯A
              
            //関西電力の固定料金
            basicprice_before = 341.02;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;
            
            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //関西電力の料金
            volumeprice_before = 29.29 * grade3 + 25.80 * grade2 + 20.32 * grade1;

          }else{//従量電灯B
              
            //関西電力の固定料金
            basicprice_before = 396 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //関西電力の料金
            volumeprice_before = 24.21 * grade3 + 21.21 * grade2 + 17.92 * grade1;
          }

          //関西電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;

        return monthamount_before;
  }
    // --------------------市場連動プラン(関西)--------------
      function calc_lpio_kansai(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 8.03;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 7.8;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            
            basic_price = 165;
            
        }else{
            basic_price = capacityC * 55 + 165;
        }
        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('06',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
      
    // --------------------中国電力エリアとスタンダード料金の比較--------------
      function calc_chugoku(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-1.75 * monthuse);

          if(elec_plan === '01'){     //従量電灯A
              
            //中国電力の固定料金
            basicprice_before = 337.37;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;
            
            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //中国電力の料金
            volumeprice_before = 29.59 * grade3 + 27.47 * grade2 + 20.79 * grade1;

          }else{//従量電灯B
              
            //中国電力の固定料金
            basicprice_before = 407 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //中国電力の料金
            volumeprice_before = 26.06 * grade3 + 24.19 * grade2 + 18.1 * grade1;
          }

          //中国電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;

        return monthamount_before;
  }
    // --------------------市場連動プラン(中国)--------------
      function calc_lpio_chugoku(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 8.78;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 7.6;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            
            basic_price = 104.5;
            
        }else{
            basic_price = capacityC * 33 + 104.5;
        }
        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('07',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
      
    // --------------------四国電力エリアとスタンダード料金の比較--------------
      function calc_shikoku(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-1.8 * monthuse);

          if(elec_plan === '01'){     //従量電灯A
              
            //四国電力の固定料金
            basicprice_before = 411.4;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;
            
            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //四国電力の料金
            volumeprice_before = 30.50 * grade3 + 26.99 * grade2 + 20.37 * grade1;

          }else{//従量電灯B
              
            //四国電力の固定料金
            basicprice_before = 374 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //四国電力の料金
            volumeprice_before = 25.42 * grade3 + 22.5 * grade2 + 16.97 * grade1;
          }

          //四国電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;

        return monthamount_before;
  }
    // --------------------市場連動プラン(四国)--------------
      function calc_lpio_shikoku(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 8.72;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 8.3;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            
            basic_price = 176;
            
        }else{
            basic_price = capacityC * 60.5 + 176;
        }
        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('08',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }

    // --------------------九州電力エリアとスタンダード料金の比較--------------
      function calc_kyushu(monthuse,elec_plan,capacityB,capacityC){
          
          var basicprice_before = 0;  //電力会社の基本料金
          var volumeprice_before = 0; //電力会社の従量料金
          var monthamount_before = 0; //電力会社の月の料金
          var energy_price;           //再エネ
          var fuel_price;             //燃料調整費
          
            //再エネ計算
            energy_price = (2.98 * monthuse);
            
            //燃調費計算
            fuel_price = (-1.92 * monthuse);

          if(elec_plan === '01'){     //従量電灯B
              if(capacityB === '30'){
                basicprice_before = 891;
              }else if(capacityB === '40'){
                basicprice_before = 1188;
              }else if(capacityB === '50'){
                basicprice_before = 1485;
              }else if(capacityB === '60'){
                basicprice_before = 1782;
              }

              var grade3 = 0;
              var grade2 = 0;
              var grade1 = 0;

              if(monthuse > 300){  //300以上
                grade3 = monthuse - 300;
                grade2 = 180;
                grade1 = 120;
              }else if(monthuse > 120){ //121以上300以下
                grade2 = monthuse - 120;
                grade1 = 120;
              }else{ //120以下
                grade1 = monthuse;
              }

              //九州電力の料金
              volumeprice_before = 26.06 * grade3 + 23.06 * grade2 + 17.46 * grade1;

          }else{//従量電灯C
              
            //九州電力の固定料金
            basicprice_before = 297 * capacityC;

            var grade3 = 0;
            var grade2 = 0;
            var grade1 = 0;

            if(monthuse > 300){  //300以上
              grade3 = monthuse - 300;
              grade2 = 180;
              grade1 = 120;
            }else if(monthuse > 120){ //121以上300以下
              grade2 = monthuse - 120;
              grade1 = 120;
            }else{ //120以下
              grade1 = monthuse;
            }

            //九州電力の料金
            volumeprice_before = 26.06 * grade3 + 23.06 * grade2 + 17.46 * grade1;
          }

          //九州電力月額料金
          monthamount_before = (basicprice_before + volumeprice_before + energy_price) + fuel_price;
            
    return monthamount_before;
  }
    // --------------------市場連動プラン(九州)--------------
      function calc_lpio_kyushu(monthuse,elec_plan,capacityB,capacityC,month){
          
        //託送料金：基本料金　＋　(従量料金単価×使用量)
        //電力仕入費用：((エリア単価（8.14）×使用量（108）)+消費税）+((取引手数料0.03円　×　使用量（108）+消費税）　
        //再エネ賦課金：2.95
        
        var basic_price;                            //基本料金
        var amount_price = 7.38;                    //従量単価
        var takuso_price;                           //託送料金
        var loss_rate = 8.2;                        //ロス率
        var month_use = Number(monthuse);          //使用量
        var loss_month_use = (loss_rate + month_use);  //ロス率含む使用量
        var stock_price;                            //電力仕入費用
        var jepx_price;                             //エリア単価
        var cost_price;                            //取引単価
        var transaction_cost = 0.03;                //取引手数料
        var energy_price;                           //再エネ
        var sum_price;                              //合計
        var tax = 1.1;                              //消費税
        
        if(elec_plan === '01'){
            if(capacityB === '30'){
                basic_price = 429;
            }else if(capacityB === '40'){
                basic_price = 572;
            }else if(capacityB === '50'){
                basic_price = 715;
            }else if(capacityB === '60'){
                basic_price = 858;
            };
        }else{
            basic_price = capacityC * 143;
        }
                        
        //託送料金計算
        takuso_price = basic_price + (amount_price * month_use);

        //エリア単価取得
        jepx_price = area_price('09',month);

        //電力仕入費用計算
        stock_price = ((jepx_price * loss_month_use) * tax) + ((transaction_cost * loss_month_use) * tax);

        //取引単価
        cost_price = (3.5 * month_use);
        
        //再エネ計算
        energy_price = (2.98 * month_use);

        //月額合計計算
        sum_price = takuso_price + stock_price + cost_price + energy_price;
        
        return sum_price;
          
      }
   
});