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
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox, table.colors_backgroundneutral",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    showRatings: true,
                    maxImageHeight: 80,
                    wrapper: "<table width='490' class='toutWrapper4T' style='margin-top: 10px;'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(".colors_pricebox").length > 1)
                                tout.divSelect = "#ProductDetail_ProductDetails_div2";
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#content_area table:has(table.colors_descriptionbox, a[href*=Reviews]):last + br",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 80,
                    showRatings: true,
                    wrapper: "<table width='780' class='toutWrapper4T' style='margin-bottom:10px' align='center'>",
                    rawJS: {
                        preInit: function () {
                            $('table.colors_lines_light').hide();
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "td#v65-cart-shipping-details-text > *",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div width='277px'></div>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $('td.v65-cart-details-blank[colspan=3]:last').hide();
                            $(tout.divSelect).parent().attr('colspan', '4');
                        }
                    },
                    inCart: true
                }
            },
            Home: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
