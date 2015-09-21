(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "CapitalTeas.com",
            alias: "Capteas",
            GA_UA: "UA-12343454-2",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/capitalteas/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/capitalteas/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/capitalteas/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "<span style='color: #000;font-weight:bold;'>Price: </span>",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 20,
                    showCaption: false,
                    /*caption: "Customers Also Bought...",*/
                    productStyle: "product4T product4THome",
                    orientation: "horizontal",
                    divSelect: "#homepage_banner",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 170,
                    wrapper: "<table id='Home4T' width='100%' align='right' cellpadding='0' style='border-spacing: 0 5px'><tr><td ></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('#homeBottom').remove();
                        }
                    },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 9,
                    caption: "Customers Also Bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' align='right' cellpadding='0' style='border-spacing: 0 5px'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "Customers Also Viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showRatings: true,
                    wrapper: "<table width='100%' align='center' cellpadding='0'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false,
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 9,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:eq(1)",
                    divPosition: "above",
                    carousel: {
                        scrollStyle: "scrollable",
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 130,
                    showRatings: true,
                    wrapper: "<td valign='top' style='border: 1px solid #DDD;width: 480px;'></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
