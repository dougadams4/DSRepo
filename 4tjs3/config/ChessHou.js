(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.chesshouse.com",
            alias: "ChessHou",
            GA_UA: "UA-220051-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/ChessHouse3/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/ChessHouse3/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/ChessHouse3/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "Sale Price: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "table.colors_pricebox, table.colors_backgroundneutral",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 80,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#content_area table:has(table.colors_descriptionbox, a[href*=Reviews]):last + br",
                    divPosition: "below",
                    carousel: {
                        items: 4,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    maxImageHeight: 80,
                    showRatings: true,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        preInit: function () {
                            $('table.colors_lines_light').hide();
                        }
                    },
                    inCart: false
                }],
            AddToCart: [{
                enable: false,
                resultType: 0,
                numItems: 6,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "td#v65-cart-shipping-details-text > *",
                divPosition: "below",
                carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                        $('td.v65-cart-details-blank[colspan=3]:last').hide();
                        $(tout.divSelect).parent().attr('colspan', '4');
                    }
                },
                inCart: true
            }],
            Home: [{
                enable: false
            }],
            Category: [{
                enable: false
            }],
            Search: [{
                enable: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
