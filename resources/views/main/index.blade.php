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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script type="text/javascript" src="public/js/dark-unica.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script type="text/javascript" src="public/js/common.js"></script>
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
        </header>
        <div class="content">
            <div class="content-inner">
                <div class="content-about">
                    <h1>市場連動型プランとは</h1>
                    <p>
                    一般的な電気料金プランは電力会社が予め定めた単価で料金が決まり、改定がない限りその単価は固定されます。
                    それに対して市場連動型プランはその名の通り、単価が「市場」に「連動」して決まります。
                    ここでいう「市場」とは、「一般社団法人 日本卸電力取引所（以下JEPX）」という電力取引市場を指します。
                    JEPXは日本での電力自由化に伴い2003年に設立された、電力の売買を行える国内唯一の会員制卸電力取引市場です。
                    </p>
                    <h1>本日の取引価格</h1>
                    <p>
                    エリアプライスとは、地域毎の取引価格を指します。ここでは各エリアのエリアプライスを掲載しています。
                    このエリアプライスに託送料金、そして取引手数料（4円/kWh）を足した価格が、お客様への提供価格となります。
                    </p>
                    <div class="day_btn">
                        <input type="text" id="day_select" /><button id="day_btn" class="btn-primary btn-sm">選択</button>
                    </div>
                </div>
                <div class="content-main">
                    <div class="area-tabs">
                        <ul class="tabs-list">
                            <li class="tabs-item touhoku active" data-area="2">
                                <div class="item">東北</div>
                            </li>
                            <li class="tabs-item toyko" data-area="3">
                                <div class="item">東京</div>
                            </li>
                            <li class="tabs-item chubu" data-area="4">
                                <div class="item">中部</div>
                            </li>
                            <li class="tabs-item hokuriku" data-area="5">
                                <div class="item">北陸</div>
                            </li>
                            <li class="tabs-item kansai" data-area="6">
                                <div class="item">関西</div>
                            </li>
                            <li class="tabs-item chugoku" data-area="7">
                                <div class="item">中国</div>
                            </li>
                            <li class="tabs-item shikoku" data-area="8">
                                <div class="item">四国</div>
                            </li>
                            <li class="tabs-item kyushu" data-area="9">
                                <div class="item">九州</div>
                            </li>
                        </ul>
                    </div>
                    <div class="spot-data">
                        <div id="highcharts"></div>
                    </div>
                    <div class="btn-group">
                        <div class="simulation-btn">
                            <a href="/">電気料金シミュレーション</a>
                        </div>
                        <div class="form-btn">
                            <a href="/">エルピオでんきお申込</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

