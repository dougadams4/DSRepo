(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.bulletproofdiesel.com",
            alias: "BulltDsl",
            GA_UA: "UA-970621-6",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/bulletproofd/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/bulletproofd/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/bulletproofd/images/nophoto.gif",
            priceClass: "price2",
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
                    numItems: 9,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    divSelect: "#ProductDetail_ProductDetails_div2 + img",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('table.colors_lines_light').remove();
                        }
                    },
                    inCart: false
                },
                tout2: {
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
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 2,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption productnamecolor",
                    productStyle: "product4T product4TVC",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    divSelect: "span.v65-cart-item-remove-cell",
                    divPosition: "below",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div width='100%' style='border: 1px solid #DFE0E0;'></div>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
