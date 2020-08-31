<!DOCTYPE HTML>
<html lang="ja">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
        <link type="text/css" href="public/css/calc.css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <!--<script type="text/javascript" src="public/js/common.js"></script>-->
        <script type="text/javascript" src="public/js/calc.js"></script>
        <script src="https://code.highcharts.com/themes/dark-unica.js"></script>
    </head>

    <body>
        <header class="header">
            <div class="header-content">
                <div class="header-main">
                    <div class="logo">
                        <a href="/">
                            <img src="public/images/logo.png">
                        </a>
                    </div>
                    <nav class="nav-menu">
                    <ul class="menu-list">
                        <li class="menu-item">
                            <a href="/">料金プラン</a>
                        </li>
                        <li class="menu-item">
                            <a href="/">よくある質問</a>
                        </li>
                        <li class="menu-item">
                            <a href="/">MYページ</a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
            <div class="header_txt">
                <h1>料金シミュレーション</h1>
            </div>
        </header>
        <div id="side_btn">
            <div class="item form_item">
                <a href=""><span>でんき<br>お申込み</span></a>
            </div>
            <div class="item simulation_item">
                <a href=""><span>でんき<br>料金計算</span></a>
            </div>
        </div>
        <article class="main_content">
            <section id="calc_block">
                <div class="content_inner">
                <div class="calc_txt">
                    <h3>
                        電気ご使用量のお知らせ（検針票）をお手元にご用意いただき、
                        現在のご契約内容をご入力ください。
                    </h3>
                </div>
                <div class="calc_form">
                    <ul class="calc_list">
                        <li class="calc_item" id="company">
                            <h4 class="item_name"><span class="num">1</span>契約中の電力会社</h4>
                            <div class="form_item">
                                <select name="elec_company">
                                    <option value="02">東北電力</option>
                                    <option value="03">東京電力</option>
                                    <option value="04">中部電力</option>
                                    <option value="05">北陸電力</option>
                                    <option value="06">関西電力</option>
                                    <option value="07">中国電力</option>
                                    <option value="08">四国電力</option>
                                    <option value="09">九州電力</option>
                                </select>
                            </div>
                        </li>
                        <li class="calc_item" id="plan">
                            <h4 class="item_name"><span class="num">2</span>電力プラン</h4>
                            <div class="form_item">
                                <select name="elec_plan">
                                    <option value="01">従量電灯B</option>
                                    <option value="02">従量電灯C</option>
                                </select>
                            </div>
                        </li>
                        <li class="calc_item" id="capacity">
                            <h4 class="item_name"><span class="num">3</span>契約電流</h4>
                            <div class="form_item">
                                <select name="elec_capacity">
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                    <option value="60">60</option>
                                </select><span class="elec_tani">A</span>
                            </div>
                        </li>
                        <li class="calc_item" id="capacity_l">
                            <h4 class="item_name"><span class="num">3</span>契約容量</h4>
                            <div class="form_item">
                                <select name="elec_capacity_l">
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                    <option value="46">46</option>
                                    <option value="47">47</option>
                                    <option value="48">48</option>
                                    <option value="49">49</option>
                                  </select><span class="elec_tani">kVA</span>
                            </div>
                        </li>
                        <li class="calc_item" id="target_month">
                            <h4 class="item_name"><span class="num">4</span>対象月</h4>
                            <div class="form_item">
                                <select name="target_month">
                                    <option value="1">1月</option>
                                    <option value="2">2月</option>
                                    <option value="3">3月</option>
                                    <option value="4">4月</option>
                                    <option value="5">5月</option>
                                    <option value="6">6月</option>
                                    <option value="7">7月</option>
                                    <option value="8">8月</option>
                                    <option value="9">9月</option>
                                    <option value="10">10月</option>
                                    <option value="11">11月</option>
                                    <option value="12">12月</option>
                                </select>
                            </div>
                        </li>
                        <li class="calc_item" id="amount">
                            <h4 class="item_name"><span class="num">5</span>使用量</h4>
                            <div class="form_item">
                                <input type="text" class="amount_txt" name="amount_txt"><span class="kwh"> kWh</span>
                                <div class="month_list_block">
                                    <p>月ごとの使用量(kWh)※1ヶ月の電気の使用量から地域ごとの仕様傾向に応じて推定</p>
                                    <div class="month_list">
                                        <div class="month_detail">
                                            <dl class="month_item">
                                                <dt>1月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt1" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>2月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt2" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>3月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt3" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>4月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt4" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>5月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt5" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>6月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt6" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>7月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt7" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>8月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt8" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>9月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt9" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>10月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt10" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>11月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt11" value=""></dd>
                                            </dl>
                                            <dl class="month_item">
                                                <dt>12月</dt>
                                                <dd><input type="text" name="month_txt" class="month_txt txt12" value=""></dd>
                                            </dl>
                                        </div>
                                        <div class="sum_block">
                                            <h3 class="sum_txt">年間使用量：<span id="sum_result"></span>kWh</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="calc_item" id="lifestyle">
                            <h4 class="item_name"><span class="num">6</span>生活パターン</h4>
                            <div class="form_item">
                                <div class="life_block">
                                    <h3>お客様の生活パターンに近いものを選択してください。</h3>
                                    <label><input type="radio" name="lifepattern" value="01"><span>平日の日中はほぼ不在</span></label>
                                    <label><input type="radio" name="lifepattern" value="02"><span>平日の日中も1～2人が家にいる</span></label>
                                    <label><input type="radio" name="lifepattern" value="03"><span>平日の日中も3人以上が家にいる</span></label>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="calc_btn">
                        <p class="submit_btn">料金をシミュレーション</p>
                    </div>
                </div>
                </div>
            </section>
            <section id="result_block">
                
            </section>

        </article>
        
        <footer class="footer">
            <nav>
                <ul class="footer-list">
                    <li class="footer-item">
                        <div>
                            <dl>
                                <dt><a href="/">株式会社エルピオ</a></dt>
                                <dd><a href="">特定商取引法に基づく表記</a></dd>
                                <dd><a href="">サイトマップ</a></dd>
                                <dd><a href="">プライバシーポリシー</a></dd>
                                <dd><a href="">お問い合わせ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <div>
                            <dl>
                                <dt><a href="/">株式会社エルピオ</a></dt>
                                <dd><a href="">特定商取引法に基づく表記</a></dd>
                                <dd><a href="">サイトマップ</a></dd>
                                <dd><a href="">プライバシーポリシー</a></dd>
                                <dd><a href="">お問い合わせ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <div>
                            <dl>
                                <dt><a href="/">株式会社エルピオ</a></dt>
                                <dd><a href="">特定商取引法に基づく表記</a></dd>
                                <dd><a href="">サイトマップ</a></dd>
                                <dd><a href="">プライバシーポリシー</a></dd>
                                <dd><a href="">お問い合わせ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <div>
                            <dl>
                                <dt><a href="/">株式会社エルピオ</a></dt>
                                <dd><a href="">特定商取引法に基づく表記</a></dd>
                                <dd><a href="">サイトマップ</a></dd>
                                <dd><a href="">プライバシーポリシー</a></dd>
                                <dd><a href="">お問い合わせ</a></dd>
                            </dl>
                        </div>
                    </li>
                    <li class="footer-item">
                        <div>
                            <dl>
                                <dt><a href="/">株式会社エルピオ</a></dt>
                                <dd><a href="">特定商取引法に基づく表記</a></dd>
                                <dd><a href="">サイトマップ</a></dd>
                                <dd><a href="">プライバシーポリシー</a></dd>
                                <dd><a href="">お問い合わせ</a></dd>
                            </dl>
                        </div>
                    </li>
                </ul>
            </nav>
            <!--<small>© 2020 株式会社エルピオ LPIO CO., Ltd All Rights Reserved.</small>-->
        </footer>
    </body>
</html>

