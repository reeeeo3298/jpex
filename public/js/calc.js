$(function(){
    
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
    
    //足し算
    var sum  = function(arr) {
    var sum = 0;
        arr.forEach(function(elm) {
            sum += elm;
        });
        return sum;
    };
    
    // 月の使用率
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
            9: 0.96,
            10: 0.84,
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
            9: 0.99,
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
            9: 1.08,
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
            9: 1.25,
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
            9: 1.21,
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
            9: 1.16,
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
            9: 1.01,
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
            9: 0.92,
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
            9: 1.14,
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
            9: 1.09,
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
            9: 1.04,
            10: 0.91,
            11: 0.95,
            12: 1
        },
    };
    
});