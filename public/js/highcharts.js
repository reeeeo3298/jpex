$(document).ready(function(){

  var startdate = '';
  var enddate = '';

  //今日の日付取得
  var dt = new Date();
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth()+1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  var today = y + "/" + m + "/" + d;
  
  //棒グラフ用のデータ取得
  $.ajax({
      url: '/lpioportal/column_data',
      type: 'get',
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  }).done(function (data) {

    var countarray = [];

    //月毎の件数集計
    $.each(data[0],function(index,val){
        countarray.push(val.count);
    });

    console.log(countarray);

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

    Highcharts.chart('container_first', {  //グラフ描画のテンプレート

    title: {  //グラフのタイトル
        text: '2020年申込件数：' + data[1] + '件'
    },
    chart:{
        type:"column"
    },
    xAxis: {
        categories: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        title: {text: '月'} //タイトル
    },
    yAxis: {//y軸の設定
          title: {//y軸のタイトル
              text: '件数'
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

    series: [{  //グラフの中身（データの設定)
      animation:{
        duration:4000
      },
        name: '申込件数',
        data: countarray //各データ(数値)
      }]
    });

    // $('.highcharts-column-series rect:nth-child(1)').each(function(){
    //     $(this).css({'fill':'#b12323'});
    // })
  });

  //円グラフ用(チャネル)のデータ取得
  $.ajax({
      url: '/lpioportal/pie_channel',
      type: 'get',
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      data: {
          'today': today
      }
  }).done(function (data) {

    var countarray1 = []; //エルピオweb
    var countarray2 = []; //エネチェンジ
    var countarray3 = []; //価格ＣＯＭ
    var countarray4 = []; //インズウェブ
    var countarray5 = []; //営業直販
    var countarray6 = []; //代理店
    var countarray7 = []; //取次店
    var countarray8 = []; //エルピオアフィリ
    var countarray9 = []; //a8net


    var count = 1;
    for(var i=0; i<data.length;i++){
      eval('countarray' + count).push(data[i].channel_name,data[i].count);
      count++;
    }

    // countarray1.push(data[0].channel_name,data[0].count);
    // countarray2.push(data[1].channel_name,data[1].count);
    // countarray3.push(data[2].channel_name,data[2].count);
    // countarray4.push(data[3].channel_name,data[3].count);
    // countarray5.push(data[4].channel_name,data[4].count);
    // countarray6.push(data[5].channel_name,data[5].count);
    // countarray7.push(data[6].channel_name,data[6].count);
    // countarray8.push(data[7].channel_name,data[7].count);
    // countarray9.push(data[8].channel_name,data[8].count);

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

    Highcharts.chart('container_second_channel', {  //グラフ描画のテンプレート

      title: {
            text: 'チャネル別'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                     formatter: function() {
                         return '<b>'+ this.point.name +'</b>:'+ Math.round(this.percentage*10)/10 + '%';
                    }
                }
            }
        },
        series: [{
          animation:{
            duration:4000
          },
            type: 'pie',
            name: '',
            data: [
                countarray1,
                countarray2,
                countarray3,
                countarray4,
                countarray5,
                countarray6,
                countarray7,
                countarray8,
                countarray9
            ]
        }],
        tooltip: {
            formatter: function() {
                return this.y +'件';},
            enabled:true
        }
    });
  });

  //円グラフ用(エリア)のデータ取得
  $.ajax({
      url: '/lpioportal/pie_area',
      type: 'get',
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },data: {
          'today': today
      }
  }).done(function (data) {

    var countarray1 = [];
    var countarray2 = [];
    var countarray3 = [];
    var countarray4 = [];
    var countarray5 = [];
    var countarray6 = [];
    var countarray7 = [];
    var countarray8 = [];
    var countarray9 = [];
    var countarray10 = [];
    var countarray11 = [];

    var count = 1;
    for(var i=0; i<data.length;i++){
      eval('countarray' + count).push(data[i].area_name,data[i].count);
      count++;
    }

    // countarray1.push(data[0].area_name,data[0].count);
    // countarray2.push(data[1].area_name,data[1].count);
    // countarray3.push(data[2].area_name,data[2].count);
    // countarray4.push(data[3].area_name,data[3].count);
    // countarray5.push(data[4].area_name,data[4].count);
    // countarray6.push(data[5].area_name,data[5].count);
    // countarray7.push(data[6].area_name,data[6].count);

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

    Highcharts.chart('container_second_area', {  //グラフ描画のテンプレート

      title: {
            text: 'エリア別'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                     formatter: function() {
                         return '<b>'+ this.point.name +'</b>:'+ Math.round(this.percentage*10)/10 + '%';
                    }
                }
            }
        },
        series: [{
            animation:{
              duration:4000
            },
            type: 'pie',
            name: '',
            data: [
                countarray1,
                countarray2,
                countarray3,
                countarray4,
                countarray5,
                countarray6,
                countarray7,
                countarray8,
                countarray9,
                countarray10,
                countarray11
            ]
        }],
        tooltip: {
            formatter: function() {
                return this.y +'件';},
            enabled:true
        }
    });
  });


    // 折れ線グラフ
    var dt = new Date();
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth()+1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var today = y + "/" + m + "/" + d;

    console.log(today);

    //ajaxでデータ取得
    $.ajax({
        url: '/lpioportal/graph_data',
        type: 'get',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            'today': today
        }
    }).done(function (data) {
      console.log(data);

        var datearray = [];   //日数
        var countarray1 = []; //エルピオweb
        var countarray2 = []; //エネチェンジ
        var countarray3 = []; //価格ＣＯＭ
        var countarray4 = []; //インズウェブ
        var countarray5 = []; //営業直販
        var countarray6 = []; //代理店
        var countarray7 = []; //取次店
        var countarray8 = []; //エルピオアフィリ
        var countarray9 = []; //a8net
        var datasum = null;

        //日付集計
        $.each(data[0],function(index,val){
            datearray.push(val.d);
        });

        //エルピオweb集計
        $.each(data[0],function(index,val){
            countarray1.push(val.count_day);
        });
        //エネチェンジ集計
        $.each(data[1],function(index,val){
            countarray2.push(val.count_day);
        });
        //価格ＣＯＭ集計
        $.each(data[2],function(index,val){
            countarray3.push(val.count_day);
        });
        //インズウェブ集計
        $.each(data[3],function(index,val){
            countarray4.push(val.count_day);
        });
        //営業直販集計
        $.each(data[4],function(index,val){
            countarray5.push(val.count_day);
        });
        //代理店集計
        $.each(data[5],function(index,val){
            countarray6.push(val.count_day);
        });
        //取次店集計
        $.each(data[6],function(index,val){
            countarray7.push(val.count_day);
        });
        //エルピオアフィリ集計
        $.each(data[7],function(index,val){
            countarray8.push(val.count_day);
        });
        //a8net集計
        $.each(data[8],function(index,val){
            countarray9.push(val.count_day);
        });

        $.each(data[0],function(index,val){
            datasum = datasum + val.count_day;
        });

//        console.log(countarray);

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

    Highcharts.chart('container_third', {  //グラフ描画のテンプレート

    title: {  //グラフのタイトル
        text: '今月の申込件数'
    },
    xAxis: {
                categories: datearray
    },

    subtitle: {  //グラフのサブタイトル
        text: '獲得件数：' + data[9]
    },

    yAxis: {//y軸の設定
                title: {//y軸のタイトル
                    text: '件数'
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

    series: [{  //グラフの中身（データの設定）
        name: 'エルピオＷＥＢ',  //各データの名前
        data: countarray1 //各データ(数値)
    }, {
        name: 'エネチェンジ',
        data: countarray2
    }, {
        name: '価格ＣＯＭ',
        data: countarray3
    }, {
        name: 'インズウェブ',
        data: countarray4
    }, {
        name: '営業直販',
        data: countarray5
    }, {
        name: '代理店',
        data: countarray6
    }, {
        name: '取次店',
        data: countarray7
    }, {
        name: 'エルピオアフィリ',
        data: countarray8
    }, {
        name: 'a8net',
        data: countarray9
    }]
        });
    });
});


//検索ボタンクリック
$('#search_btn').click(function(){

    var s_month = $('[name="month"]').val();
    var s_area = $('[name="area"]').val();

    //日付差分計算
    var day1 = new Date(startdate);
    var day2 = new Date(enddate);

    var diff = (day2 - day1) / 86400000 +1;

    //ajaxでデータ取得
    $.ajax({
        url: '/lpioportal/graph_data_search',
        type: 'get',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            'today': s_month,
            'area':s_area,
            'startdate':startdate,
            'enddate':enddate,
            'diff':diff
        }
    }).done(function (data) {

      console.log(data);

        var datearray = [];   //日数
        var countarray1 = []; //エルピオweb
        var countarray2 = []; //エネチェンジ
        var countarray3 = []; //価格ＣＯＭ
        var countarray4 = []; //インズウェブ
        var countarray5 = []; //営業直販
        var countarray6 = []; //代理店
        var countarray7 = []; //取次店
        var countarray8 = []; //エルピオアフィリ
        var countarray9 = []; //a8net
        var datasum = null;

        //日付集計
        $.each(data[0],function(index,val){
            datearray.push(val.d);
        });

        //エルピオweb集計
        $.each(data[0],function(index,val){
            countarray1.push(val.count_day);
        });
        //エネチェンジ集計
        $.each(data[1],function(index,val){
            countarray2.push(val.count_day);
        });
        //価格ＣＯＭ集計
        $.each(data[2],function(index,val){
            countarray3.push(val.count_day);
        });
        //インズウェブ集計
        $.each(data[3],function(index,val){
            countarray4.push(val.count_day);
        });
        //営業直販集計
        $.each(data[4],function(index,val){
            countarray5.push(val.count_day);
        });
        //代理店集計
        $.each(data[5],function(index,val){
            countarray6.push(val.count_day);
        });
        //取次店集計
        $.each(data[6],function(index,val){
            countarray7.push(val.count_day);
        });
        //エルピオアフィリ集計
        $.each(data[7],function(index,val){
            countarray8.push(val.count_day);
        });
        //a8net集計
        $.each(data[8],function(index,val){
            countarray9.push(val.count_day);
        });

        $.each(data[0],function(index,val){
            datasum = datasum + val.count_day;
        });

//        console.log(countarray);

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

    Highcharts.chart('container_third', {  //グラフ描画のテンプレート

    title: {  //グラフのタイトル
        text: data[10] + '～' + data[11]
    },
    xAxis: {
                categories: datearray
    },

    subtitle: {  //グラフのサブタイトル
        text: '申込件数：' + data[9]
    },

    yAxis: {//y軸の設定
                title: {//y軸のタイトル
                    text: '件数'
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

    series: [{  //グラフの中身（データの設定）
        name: 'エルピオＷＥＢ',  //各データの名前
        data: countarray1 //各データ(数値)
    }, {
        name: 'エネチェンジ',
        data: countarray2
    }, {
        name: '価格ＣＯＭ',
        data: countarray3
    }, {
        name: 'インズウェブ',
        data: countarray4
    }, {
        name: '営業直販',
        data: countarray5
    }, {
        name: '代理店',
        data: countarray6
    }, {
        name: '取次店',
        data: countarray7
    }, {
        name: 'エルピオアフィリ',
        data: countarray8
    }, {
        name: 'a8net',
        data: countarray9
    }]
        });
    });


    //円グラフ用(チャネル)のデータ取得検索時
    $.ajax({
        url: '/lpioportal/pie_channel_search',
        type: 'get',
        data:{
          'startdate':startdate,
          'enddate':enddate,
          'area':s_area
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    }).done(function (data) {

      var countarray1 = []; //エルピオweb
      var countarray2 = []; //エネチェンジ
      var countarray3 = []; //価格ＣＯＭ
      var countarray4 = []; //インズウェブ
      var countarray5 = []; //営業直販
      var countarray6 = []; //代理店
      var countarray7 = []; //取次店
      var countarray8 = []; //エルピオアフィリ
      var countarray9 = []; //a8net

      var count = 1;
      for(var i=0; i<data.length;i++){
        eval('countarray' + count).push(data[i].channel_name,data[i].count);
        count++;
      }

      // if(data[0] !== 'undefined'){
      //     countarray1.push(data[0].channel_name,data[0].count);
      // }
      // if(data[1] !== 'undefined'){
      //     countarray2.push(data[1].channel_name,data[1].count);
      // }
      // if(data[2] !== 'undefined'){
      //     countarray3.push(data[2].channel_name,data[2].count);
      // }
      // if(data[3] !== 'undefined'){
      //     countarray4.push(data[3].channel_name,data[3].count);
      // }
      // if(data[4] !== 'undefined'){
      //     countarray5.push(data[4].channel_name,data[4].count);
      // }
      // if(data[5] !== 'undefined'){
      //     countarray6.push(data[5].channel_name,data[5].count);
      // }
      // if(data[6] !== 'undefined'){
      //     countarray7.push(data[6].channel_name,data[6].count);
      // }
      // if(data[7] !== 'undefined'){
      //     countarray8.push(data[7].channel_name,data[7].count);
      // }
      // if(data[8] !== 'undefined'){
      //     countarray9.push(data[8].channel_name,data[8].count);
      // }
      // countarray2.push(data[1].channel_name,data[1].count);
      // countarray3.push(data[2].channel_name,data[2].count);
      // countarray4.push(data[3].channel_name,data[3].count);
      // countarray5.push(data[4].channel_name,data[4].count);
      // countarray6.push(data[5].channel_name,data[5].count);
      // countarray7.push(data[6].channel_name,data[6].count);
      // countarray8.push(data[7].channel_name,data[7].count);
      // countarray9.push(data[8].channel_name,data[8].count);

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

      Highcharts.chart('container_second_channel', {  //グラフ描画のテンプレート

        title: {
              text: 'チャネル別'
          },
          plotOptions: {
              pie: {
                  dataLabels: {
                       formatter: function() {
                           return '<b>'+ this.point.name +'</b>:'+ Math.round(this.percentage*10)/10 + '%';
                      }
                  }
              }
          },
          series: [{
            animation:{
              duration:4000
            },
              type: 'pie',
              name: '',
              data: [
                  countarray1,
                  countarray2,
                  countarray3,
                  countarray4,
                  countarray5,
                  countarray6,
                  countarray7,
                  countarray8,
                  countarray9
              ]
          }],
          tooltip: {
              formatter: function() {
                  return this.y +'件';},
              enabled:true
          }
      });
    });

    //円グラフ用(エリア)のデータ取得検索時
    $.ajax({
        url: '/lpioportal/pie_area_search',
        type: 'get',
        data:{
          'startdate':startdate,
          'enddate':enddate,
          'area':s_area
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    }).done(function (data) {

      console.log(data);

      var countarray1 = [];
      var countarray2 = [];
      var countarray3 = [];
      var countarray4 = [];
      var countarray5 = [];
      var countarray6 = [];
      var countarray7 = [];
      var countarray8 = [];
      var countarray9 = [];
      var countarray10 = [];
      var countarray11 = [];

      var count = 1;
      for(var i=0; i<data.length;i++){
        eval('countarray' + count).push(data[i].area_name,data[i].count);
        count++;
      }

      // if(data[0] !== 'undefined'){
      //     countarray1.push(data[0].channel_name,data[0].count);
      // }
      // if(data[1] !== 'undefined'){
      //     countarray2.push(data[1].channel_name,data[1].count);
      // }
      // if(data[2] !== 'undefined'){
      //     countarray3.push(data[2].channel_name,data[2].count);
      // }
      // if(data[3] !== 'undefined'){
      //     countarray4.push(data[3].channel_name,data[3].count);
      // }
      // if(data[4] !== 'undefined'){
      //     countarray5.push(data[4].channel_name,data[4].count);
      // }
      // if(data[5] !== 'undefined'){
      //     countarray6.push(data[5].channel_name,data[5].count);
      // }
      // if(data[6] !== 'undefined'){
      //     countarray7.push(data[6].channel_name,data[6].count);
      // }
      // if(data[7] !== 'undefined'){
      //     countarray8.push(data[7].channel_name,data[7].count);
      // }
      // if(data[8] !== 'undefined'){
      //     countarray9.push(data[8].channel_name,data[8].count);
      // }
      // countarray2.push(data[1].channel_name,data[1].count);
      // countarray3.push(data[2].channel_name,data[2].count);
      // countarray4.push(data[3].channel_name,data[3].count);
      // countarray5.push(data[4].channel_name,data[4].count);
      // countarray6.push(data[5].channel_name,data[5].count);
      // countarray7.push(data[6].channel_name,data[6].count);
      // countarray8.push(data[7].channel_name,data[7].count);
      // countarray9.push(data[8].channel_name,data[8].count);

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

      Highcharts.chart('container_second_area', {  //グラフ描画のテンプレート

        title: {
              text: 'エリア別'
          },
          plotOptions: {
              pie: {
                  dataLabels: {
                       formatter: function() {
                           return '<b>'+ this.point.name +'</b>:'+ Math.round(this.percentage*10)/10 + '%';
                      }
                  }
              }
          },
          series: [{
            animation:{
              duration:4000
            },
              type: 'pie',
              name: '',
              data: [
                  countarray1,
                  countarray2,
                  countarray3,
                  countarray4,
                  countarray5,
                  countarray6,
                  countarray7,
                  countarray8,
                  countarray9,
                  countarray10,
                  countarray11
              ]
          }],
          tooltip: {
              formatter: function() {
                  return this.y +'件';},
              enabled:true
          }
      });
    });




});


$(function(){
  moment.locale("ja");
  $('#date_first').daterangepicker(
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

$(function(){
  moment.locale("ja");
  $('#date_item').daterangepicker(
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
