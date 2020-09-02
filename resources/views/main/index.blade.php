<!DOCTYPE HTML>
<html lang="ja">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
        <link type="text/css" href="public/css/common.css" rel="stylesheet">
        <link type="text/css" href="public/css/common_sp.css" rel="stylesheet" media="screen and (max-width: 768px)">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script type="text/javascript" src="public/js/common.js"></script>
        <script src="https://code.highcharts.com/themes/dark-unica.js"></script>
    </head>

    <body>
        <header class="header">
            <div class="header-content">
                <div class="header-main">
                    <div class="logo">
                        <a href="https://lpio.jp/">
                            <img src="public/images/logo.png">
                        </a>
                    </div>
                    <nav class="nav-menu">
                    <ul class="menu-list">
                        <li class="menu-item">
                            <a href="https://lpio.jp/electrical/">でんきページ</a>
                        </li>
                        <li class="menu-item">
                            <a href="https://lpio.jp/faq/">よくある質問</a>
                        </li>
                        <li class="menu-item">
                            <a href="https://portal.lpio.jp/Account/Login">MYページ</a>
                        </li>
                    </ul>
                    </nav>
                </div>
                <div class="header_main_sp">
                    <h1><a href="https://lpio.jp/"><img src="public/images/logo.png"></a></h1>
                    <div id="nav">
                    <ul>
                    <li><a href="https://lpio.jp/electrical/">でんきページ</a></li>
                    <li><a href="https://lpio.jp/faq/">よくある質問</a></li>
                    <li><a href="https://portal.lpio.jp/Account/Login">MYページ</a></li>
                    </ul>
                    </div>
                    <button class="menu"><span></span><span></span><span></span></button>
                </div>
                <div class="header_txt">
                    <h2>市場に連動した電気料金で最適なでんき料金を</h2>
                    <p>
                        最近流行りの市場連動型プランとは具体的にどういうことなのか？
                        このページでは市場連動型料金プランについて詳しく解説します。
                    </p>
                    <a href="https://order.lpio.jp/new/">エルピオでんきお申込み</a>
                </div>
            </div>
        </header>
        <div id="side_btn">
            <div class="item form_item">
                <a href="https://order.lpio.jp/new/"><span>でんき<br>お申込み</span></a>
            </div>
            <div class="item simulation_item">
                <a href="https://enechange.jp/try/input?f=header-menu"><span>でんき<br>料金計算</span></a>
            </div>
        </div>
        <article class="main_content">
                
                <section id="jepx_about"><!--市場連動プランとは-->
                    <div class="supply_txt">
                        <p>※供給開始は2020/10/1以降となります。</p>
                    </div>
                    <h1><span>市場連動プランとは？</span></h1>
                    <p>
                       市場連動型プランとは、電気料金単価があらかじめ決まっているプランに対し、
                       市場（=日本卸電力取引所 / JEPX）の取引価格（=市場価格）に連動して、
                       従量料金単価が決まるプランのことを指します。
                       市場の取引価格は需要に応じて30分毎に単価が変動する為、
                       市場価格が安い状態のときに電気を使うことができれば、
                       電気料金を抑えることが可能です。
                    </p> 
                    <div class="cp_banner">
                        <h3>市場連動プラン開始キャンペーン実施中！</h3>
                        <figure><a href="https://lpio.jp/lp/"><img src="public/images/cp_bnr.jpg"></a></figure>
                        <p class="cp_txt">
                            現在、市場連動プラン開始キャンペーン実施中です。<br>
                            9月中のお申込みで11ヶ月後に<span class="red">20,000円</span>キャッシュバック！！
                        </p>
                    </div>
                </section>

                <section id="jepx_feature"><!--市場連動プランの特徴-->
                    <div class="content_inner">
                        <h1><span class="green-marker js-markerScrollAnimation">市場連動プランの特徴</span></h1>
                        <ul class="merit_list">
                            <li class="list_item">
                                <div class="item_block">
                                    <div class="block_txt">
                                        <h3><span>1.</span>単価が安い</h3>
                                        <p>
                                            市場連動プランでは市場での調達価格に手数料などを加算して
                                            料金が確定されますので、市場価格が安ければそれだけでんき料金が安くなります。
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="list_item">
                                <div class="item_block">
                                    <div class="block_txt">
                                        <h3><span>2.</span>節約効果が大きい</h3>
                                        <p>
                                            市場価格が高騰している時間帯は節電をするなど、
                                            市場価格の変動に応じて電気使用量をうまくコントロールできれば、
                                            電気料金を抑えることが可能です。
                                        </p>
                                    </div>
                                </div>
                            </li>
<!--                            <li class="list_item">
                                <div class="item_block">
                                    <div class="block_txt">
                                        <h3><span>3.</span>サンプル</h3>
                                        <p>
                                            サンプルサンプルサンプルサンプルサンプルサンプル
                                            サンプルサンプルサンプルサンプルサンプルサンプル
                                        </p>
                                    </div>
                                </div>
                            </li>-->
                        </ul>
                        <div class="demerit">
                            <h1><span class="red-marker js-markerScrollAnimation">市場連動プランのデメリット</span></h1>
                            <p>
                                市場連動型プランのデメリットは、市場の影響を直接受けることによる変動リスクです。
                                市場価格は、その時の需要と供給のバランスによって大きく変化し、
                                値幅制限がないため、潜在的に電気料金が高騰する恐れがあります。
                            </p>
                        </div>
                    </div>
                </section>

                <section id="jepx_plan"><!--市場連動プラン料金体系-->

                    <div class="plan_detail"><!--市場連動プラン料金体系全体-->
                        <h1>料金体系</h1>
                        <h3>「市場連動プラン」の電気料金は、以下の4つの組み合わせで決まります。</h3>
                        <div class="detail_content">
                            <ul>
                                <li>
                                    <a href="#transmission">電力送電費用<br><span>(託送料金×使用量)</span></a>
                                </li>
                                <li>
                                    <a href="#stock">電力仕入費用<br><span>(JPEX取引価格×使用量)</span></a>
                                </li>
                                <li>
                                    <a href="#energy">再エネ賦課金<br><span>(年度毎の単価×使用量)</span></a>
                                </li>
                                <li>
                                    <a href="#lpiocost">取引手数料<br><span>(プラン毎の単価×使用量)</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="transmission" id="transmission"><!--電力送電費用-->
                        <h3><span class="border">電力送電費用</span></h3>
                        <div class="content_block">
                            <p class="txt">
                            電力会社がお客様のご自宅に電気を送り届ける際に利用する一般送配電事業者の
                            送配電ネットワークの利用料金で、一般的に「託送料金」と呼ばれるものです。
                            「託送料金」は基本料金と従量料金で構成され、各エリアの料金は下記になります。
                            </p>
                            <div class="area_tabs">
                                <ul class="tabs_list">
                                    <li class="transmission_tabs_item touhoku active" data-area="2" data-areaname="transmission_touhoku">
                                        <div class="item">東北</div>
                                    </li>
                                    <li class="transmission_tabs_item toyko" data-area="3" data-areaname="transmission_tokyo">
                                        <div class="item">東京</div>
                                    </li>
                                    <li class="transmission_tabs_item chubu" data-area="4" data-areaname="transmission_chubu">
                                        <div class="item">中部</div>
                                    </li>
                                    <li class="transmission_tabs_item hokuriku" data-area="5" data-areaname="transmission_hokuriku">
                                        <div class="item">北陸</div>
                                    </li>
                                    <li class="transmission_tabs_item kansai" data-area="6" data-areaname="transmission_kansai">
                                        <div class="item">関西</div>
                                    </li>
                                    <li class="transmission_tabs_item chugoku" data-area="7" data-areaname="transmission_chugoku">
                                        <div class="item">中国</div>
                                    </li>
                                    <li class="transmission_tabs_item shikoku" data-area="8" data-areaname="transmission_shikoku">
                                        <div class="item">四国</div>
                                    </li>
                                    <li class="transmission_tabs_item kyushu" data-area="9" data-areaname="transmission_kyushu">
                                        <div class="item">九州</div>
                                    </li>
                                </ul>
                            </div>
                            <p class="scroll_txt_sp">※エリアタブは横にスクロールできます。</p>
                            <div class="area_content">
                                <div class="transmission_touhoku transmission_area_table active"><!--東北-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td rowspan="4">市場連動プランS</td>
                                            <td>30A</td>
                                            <td>379.5円</td>
                                            <td rowspan="5">8.84円</td>
                                        </tr>
                                        <tr>
                                            <td>40A</td>
                                            <td>506円</td>
                                        </tr>
                                        <tr>
                                            <td>50A</td>
                                            <td>632.5円</td>
                                        </tr>
                                        <tr>
                                            <td>60A</td>
                                            <td>759円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>126.5円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_02.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_tokyo transmission_area_table"><!--東京-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td rowspan="4">市場連動プランS</td>
                                            <td>30A</td>
                                            <td>429円</td>
                                            <td rowspan="5">7.45円</td>
                                        </tr>
                                        <tr>
                                            <td>40A</td>
                                            <td>572円</td>
                                        </tr>
                                        <tr>
                                            <td>50A</td>
                                            <td>715円</td>
                                        </tr>
                                        <tr>
                                            <td>60A</td>
                                            <td>858円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>143円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_03.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_chubu transmission_area_table"><!--中部-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td rowspan="4">市場連動プランS</td>
                                            <td>30A</td>
                                            <td>379.5円</td>
                                            <td rowspan="5">8.12円</td>
                                        </tr>
                                        <tr>
                                            <td>40A</td>
                                            <td>506円</td>
                                        </tr>
                                        <tr>
                                            <td>50A</td>
                                            <td>632.5円</td>
                                        </tr>
                                        <tr>
                                            <td>60A</td>
                                            <td>759円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>126.5円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_04.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_hokuriku transmission_area_table"><!--北陸-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td rowspan="4">市場連動プランS</td>
                                            <td>30A</td>
                                            <td>396円</td>
                                            <td rowspan="5">7.02円</td>
                                        </tr>
                                        <tr>
                                            <td>40A</td>
                                            <td>528円</td>
                                        </tr>
                                        <tr>
                                            <td>50A</td>
                                            <td>660円</td>
                                        </tr>
                                        <tr>
                                            <td>60A</td>
                                            <td>792円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>132円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_05.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_kansai transmission_area_table"><!--関西-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランS</td>
                                            <td>従量電灯A</td>
                                            <td>165円</td>
                                            <td rowspan="2">8.03円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>165円+1kVAごとに55円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_06.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_chugoku transmission_area_table"><!--中国-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランS</td>
                                            <td>従量電灯A</td>
                                            <td>104.5円</td>
                                            <td rowspan="2">8.78円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>104.5円+1kVAごとに33円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_07.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_shikoku transmission_area_table"><!--四国-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランS</td>
                                            <td>従量電灯A</td>
                                            <td>176円</td>
                                            <td rowspan="2">8.72円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>176円+1kVAごとに60.5円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_08.pdf">エルピオでんき契約約款</a>
                                </div>
                                <div class="transmission_kyushu transmission_area_table"><!--九州-->
                                    <table>
                                        <tr>
                                            <th>プラン名</th>
                                            <th>契約アンペア</th>
                                            <th>基本料金(定額)</th>
                                            <th>従量料金</th>
                                        </tr>
                                        <tr>
                                            <td rowspan="4">市場連動プランS</td>
                                            <td>30A</td>
                                            <td>429円</td>
                                            <td rowspan="5">7.38円</td>
                                        </tr>
                                        <tr>
                                            <td>40A</td>
                                            <td>572円</td>
                                        </tr>
                                        <tr>
                                            <td>50A</td>
                                            <td>715円</td>
                                        </tr>
                                        <tr>
                                            <td>60A</td>
                                            <td>858円</td>
                                        </tr>
                                        <tr>
                                            <td>市場連動プランL</td>
                                            <td>7kVA以上(1kVA毎)</td>
                                            <td>143円</td>
                                        </tr>
                                    </table>
                                    <a class="agreement" href="public/pdf/agreement_09.pdf">エルピオでんき契約約款</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="stock" id="stock"><!--電力仕入れ費用-->
                        <h3><span class="border">電力仕入費用</span></h3>
                        <div class="content_block">
                            <p class="txt">
                            「電力仕入費用」は、市場連動価格の料金体系を採用しています。
                            送電ロス分を加味したお客様のご使用量にJEPXのエリアプライスのスポット価格（30分値）を乗じた取引金額、
                            市場取引手数料とそれら2つの消費税 を合計した金額となります。
                            </p>
                            <div class="spot_data_block">
                                <div class="day_btn">
                                    <input type="text" id="day_select" /><button id="day_btn" class="btn-primary btn-sm">選択</button>
                                </div>
                                <div class="area_tabs">
                                    <ul class="tabs_list">
                                        <li class="tabs_item touhoku active" data-area="2">
                                            <div class="item">東北</div>
                                        </li>
                                        <li class="tabs_item toyko" data-area="3">
                                            <div class="item">東京</div>
                                        </li>
                                        <li class="tabs_item chubu" data-area="4">
                                            <div class="item">中部</div>
                                        </li>
                                        <li class="tabs_item hokuriku" data-area="5">
                                            <div class="item">北陸</div>
                                        </li>
                                        <li class="tabs_item kansai" data-area="6">
                                            <div class="item">関西</div>
                                        </li>
                                        <li class="tabs_item chugoku" data-area="7">
                                            <div class="item">中国</div>
                                        </li>
                                        <li class="tabs_item shikoku" data-area="8">
                                            <div class="item">四国</div>
                                        </li>
                                        <li class="tabs_item kyushu" data-area="9">
                                            <div class="item">九州</div>
                                        </li>
                                    </ul>
                                </div>
                                <p class="scroll_txt_sp">※エリアタブは横にスクロールできます。</p>
                                <div class="spot-data">
                                    <div id="highcharts"></div>
                                </div>
                                <p class="spot_data_txt" style="text-align: left;">※上記グラフは2019/04/01以降のデータとなります。</p>
                                <div class="nenryou">
                                    <p>
                                        <strong>※燃料調整費について</strong><br>
                                        燃料費調整制度とは、火力燃料の価格変動を電気料金に反映させるため、
                                        その変動に応じて、毎月自動的に電気料金を調整する制度で、
                                        採用しており、その部分で電気料金を調整していますので、
                                        燃料調整費の項目は料金体系にはございません。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="energy" id="energy"><!--再エネ賦課金-->
                        <h3><span class="border">再生可能エネルギー賦課金</span></h3>
                        <div class="content_block">
                            <p class="txt">
                            「再生可能エネルギーの固定価格買取制度」によって電力の買取りに要した費用を、
                            電気をご使用のお客さまに、電気のご使用量に応じてご負担いただくものです。
                            単価は国によって定められており、2019年度は全国共通で1キロワット時（kWh）当たり2.98円になります。
                            </p>
                            <div class="energy_table">
                                <table>
                                    <tr>
                                        <th>単位</th>
                                        <th>期間</th>
                                        <th>料金単価(税込)</th>
                                    </tr>
                                    <tr>
                                        <td>1kWhごと</td>
                                        <td>2020年5月～2021年4月</td>
                                        <td>2.98円</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="lpiocost" id="lpiocost"><!--取引手数料-->
                        <h3><span class="border">取引手数料</span></h3>
                        <div class="content_block">
                            <p class="txt">
                            取引手数料は、「エルピオでんき」のサービスを提供し続けていくための
                            事業運営費のことです。
                            この費用は、全エリア共通となります。
                            </p>
                            <div class="lpiocost_table">
                                <table>
                                    <tr>
                                        <th>単位</th>
                                        <th>料金単価(税込)</th>
                                    </tr>
                                    <tr>
                                        <td>1kWhごと</td>
                                        <td>3.5円</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lpiodata" id="lpiodata">
                        <h3><span class="border">市場連動プランの従量料金</span></h3>
                        <div class="content_block">
                            <p class="txt">
                            2017年～2020年の時間別従量料金単価については下記をご参照ください。
                            </p>
                            <div class="lpiodata_table">
                                <table>
                                    <tr>
                                        <th>エリア</th>
                                        <th>平日</th>
                                        <th>土曜日</th>
                                        <th>日曜・祝日</th>
                                    </tr>
                                    <tr>
                                        <td>東北エリア</td>
                                        <td><a target="_blank" href="public/pdf/touhoku_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/touhoku_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/touhoku_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>東京エリア</td>
                                        <td><a target="_blank" href="public/pdf/tokyo_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/tokyo_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/tokyo_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>中部エリア</td>
                                        <td><a target="_blank" href="public/pdf/chubu_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/chubu_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/chubu_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>北陸エリア</td>
                                        <td><a target="_blank" href="public/pdf/hokuriku_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/hokuriku_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/hokuriku_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>関西エリア</td>
                                        <td><a target="_blank" href="public/pdf/kansai_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/kansai_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/kansai_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>中国エリア</td>
                                        <td><a target="_blank" href="public/pdf/chugoku_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/chugoku_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/chugoku_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>四国エリア</td>
                                        <td><a target="_blank" href="public/pdf/shikoku_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/shikoku_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/shikoku_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                    <tr>
                                        <td>九州エリア</td>
                                        <td><a target="_blank" href="public/pdf/kyushu_weekday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/kyushu_saturday.pdf">従量料金単価</a></td>
                                        <td><a target="_blank" href="public/pdf/kyushu_holiday.pdf">従量料金単価</a></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="savingcost"><!--予想節約額-->

                    </div>

                </section>

                <section id="jepx_cost"><!--取引価格速報-->

                </section>  

                <section id="jepx_faq"><!--市場連動FAQ-->
                    <div class="elec_qa_container">
                        <h1>よくある質問</h1>
                        <ul class="lpio_accordion">
                            <li class="faq_list">
                                <div class="lpio_menu">
                                    <span class="qa">Q.</span>
                                    <span class="qa_text">市場連動プランとは何ですか？</span>
                                    <span class="lpio_icon"></span>
                                </div>
                                <ul class="lpio_submenu">
                                  <li>
                                      <div class="qa">A.</div>
                                      <span class="qa_answer">「市場連動型プラン」は、市場（=日本卸電力取引所 / JEPX）の取引価格（=市場価格）に連動して、電気料金単価が決まるプランのことを指します。</span>
                                  </li>
                                </ul>
                            </li>
                            <li class="faq_list">
                                <div class="lpio_menu">
                                    <span class="qa">Q.</span>
                                    <span class="qa_text">「託送料金」とは何ですか？</span>
                                    <span class="lpio_icon"></span>
                                </div>
                                <ul class="lpio_submenu">
                                  <li>
                                      <div class="qa">A.</div>
                                      <span class="qa_answer">発電所から需要地点まで電気を送ってもらうための料金であり、小売電気事業者が一般送配電事業者（東京電力など）に支払う料金です。</span>
                                  </li>
                                </ul>
                            </li>
                            <li class="faq_list">
                                <div class="lpio_menu">
                                    <span class="qa">Q.</span>
                                    <span class="qa_text">料金プランの変更は何度も可能ですか？</span>
                                    <span class="lpio_icon"></span>
                                </div>
                                <ul class="lpio_submenu">
                                  <li>
                                      <div class="qa">A.</div>
                                      <span class="qa_answer">「市場連動プラン」から他プランへの変更は1年に1度のみとなります。<br>
                                          また、切替日は基準検針日となります。</span>
                                  </li>
                                </ul>
                            </li>
                            <li class="faq_list">
                                <div class="lpio_menu">
                                    <span class="qa">Q.</span>
                                    <span class="qa_text">市場（=日本卸電力取引所 / JEPX）の取引価格はいつわかる？</span>
                                    <span class="lpio_icon"></span>
                                </div>
                                <ul class="lpio_submenu">
                                  <li>
                                      <div class="qa">A.</div>
                                      <span class="qa_answer">市場価格は対象日の前日に決定いたします。<br>
                                          弊社ウェブサイトにて翌日分の日本卸電力取引所価格をご確認いただけますのでご参考くださいませ。</span>
                                  </li>
                                </ul>
                            </li>
                            <li class="faq_list">
                                <div class="lpio_menu">
                                    <span class="qa">Q.</span>
                                    <span class="qa_text">市場（=日本卸電力取引所 / JEPX）の価格は変動する？</span>
                                    <span class="lpio_icon"></span>
                                </div>
                                <ul class="lpio_submenu">
                                  <li>
                                      <div class="qa">A.</div>
                                      <span class="qa_answer">取引価格は天候や気温等様々な要因により30分毎、またエリア毎でも価格が変動します。</span>
                                  </li>
                                </ul>
                            </li>
                            <li class="faq_list">
                                <div class="lpio_menu">
                                    <span class="qa">Q.</span>
                                    <span class="qa_text">「送電ロス」とは何ですか？</span>
                                    <span class="lpio_icon"></span>
                                </div>
                                <ul class="lpio_submenu">
                                  <li>
                                      <div class="qa">A.</div>
                                      <span class="qa_answer">発電所からお客様のところまで電気を送る間には電気は送配電線等で一定量ロス(損失)します。<br>
                                                弊社含む電力会社はロス分の電気を加算して発電所や電力卸市場から購入する必要があります。</span>
                                  </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="faq_btn">
                            <a href="https://lpio.jp/faq/">その他のよくある質問はこちら</a>
                        </div>
                    </div>
                </section>

        </article>
        
        <div id="footer_btn">
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
        
        <footer class="footer">
            <nav>
                <ul class="footer-list">
                    <li class="footer-item">
                        <button class="footerSelectBtn">株式会社エルピオ</button>
                        <div>
                            <dl>
                                <dt><a href="/">株式会社エルピオ</a></dt>
                                <dd><a href="/news_list/">エルピオからのお知らせ一覧</a></dd>
                                <dd><a href="/tokusho/">特定商取引法に基づく表記</a></dd>
                                <dd><a href="/sitemap/">サイトマップ</a></dd>
                                <dd><a href="/privacy/">プライバシーポリシー</a></dd>
                                <dd><a href="/contact/">お問い合わせ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <button class="footerSelectBtn">エルピオガス</button>
                        <div>
                            <dl>
                                <dt><a href="/gas/">エルピオガス</a></dt>
                                <dd><a href="/gas/gasprice/">ガス料金</a></dd>
                                <dd><a href="/gas/start/">ガスご利用の手続き</a></dd>
                                <dd><a href="/gas/payment/">検針・お支払い</a></dd>
                                <dd><a href="/gas/emergency/">もしもの時には</a></dd>
                                <dd><a href="/gas/stop/">ガスが止まってしまったら</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <button class="footerSelectBtn">エルピオでんき</button>
                        <div>
                            <dl>
                                <dt><a href="/electrical/">エルピオでんき</a></dt>
                                <dd><a href="/electrical/ele_tokyo/">東京電力エリアのお客様</a></dd>
                                <dd><a href="/ele_chubu/">中部電力エリアのお客様</a></dd>
                                <dd><a href="/ele_touhoku/">東北電力エリアのお客様</a></dd>
                                <dd><a href="/ele_kyushu/">九州電力エリアのお客様</a></dd>
                                <dd><a href="/ele_chugoku/">中国電力エリアのお客様</a></dd>
                                <dd><a href="/ele_kansai/">関西電力エリアのお客様</a></dd>
                                <dd><a href="/ele_shikoku/">四国電力エリアのお客様</a></dd>
                                <dd><a href="/ele_hokuriku/">北陸電力エリアのお客様</a></dd>
                                <dd><a href="/electrical/simulation/">料金シミュレーター</a></dd>
                                <dd><a href="/electrical/lpioclub/">エルピオクラブ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <button class="footerSelectBtn">企業情報</button>
                        <div>
                            <dl>
                                <dt><a href="/about/company/">企業情報</a></dt>
                                <dd><a href="/about/message/">社長メッセージ</a></dd>
                                <dd><a href="/about/company/">会社概要・沿革・組織図</a></dd>
                                <dd><a href="/about/compliance/">企業の社会的責任</a></dd>
                                <dd><a href="/about/staff/">スタッフ紹介</a></dd>
                                <dd><a href="/about/anti/">反社会的勢力に対する方針</a></dd>
                                <dd><a href="/about/access/">アクセスマップ</a></dd>
                                <dd><a href="/about/agency/">代理店募集のお知らせ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <button class="footerSelectBtn">採用情報</button>
                        <div>
                            <dl>
                                <dt><a href="https://recruit.lpio.jp">採用情報</a></dt>
                                <dd><a href="https://recruit.lpio.jp/shinsotsu/">2020年度新卒採用情報</a></dd>
                                <dd><a href="https://recruit.lpio.jp/chuto/">中途採用情報</a></dd>
                                <dd><a href="https://recruit.lpio.jp/memberstory/y-s/">在籍中の社員の声</a></dd>
                            </dl>
                        </div>
                    </li>
                </ul>
            </nav>
            <small>© 2020 株式会社エルピオ LPIO CO., Ltd All Rights Reserved.</small>
        </footer>
    </body>
</html>

