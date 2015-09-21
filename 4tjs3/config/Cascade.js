(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.cascadehealthcaresolutions.com",
            alias: "Cascade",
            GA_UA: "UA-15897794-4",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/140/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/140/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/140/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false,
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "Our customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table#v65-product-parent",
                    divPosition: "below",
                    showRatings: false,
                    wrapper: "<table align='left' id='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 15,
                    caption: "Customers who viewed this product, also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 5
                    },
                    showRatings: false,
                    wrapper: "<table style='width: 94%' align='left'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
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
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    maxImageHeight: 100,
                    showBuyButton: true,
                    showRatings: false,
                    wrapper: "<td style='width: 240px;' valign='top'><table style='width: 100%'><tr><td style='border: 1px solid #DDD; '></td></tr></table></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
