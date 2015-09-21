(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.BestPysanky.com",
            alias: "BestPysa",
            GA_UA: "UA-2497980-2",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/qetail/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/qetail/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/qetail/images/nophoto.gif",
            priceClass: "pricecolor colors_productprice",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    captionStyle: "titles product4TCaption colors_productname product4TCaptionPD1",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Similar Items...",
                    captionStyle: "titles product4TCaption2 colors_productname product4TCaptionPD1",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 180,
                    showRatings: true,
                    wrapper: "<table width='100%'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
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
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption2 colors_productname",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<td colspan='1' style='border: 1px solid #DFE0E0; '><table style='margin:0 auto;'><tr><td>"
                        + "</td></tr></table></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
