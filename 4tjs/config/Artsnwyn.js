(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.artisanwinedepot.com",
            alias: "Artsnwyn",
            GA_UA: "UA-32104983-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/109/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/109/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/109/images/nophoto.gif",
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
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 8,
                caption: "Our customers also viewed...",
                captionStyle: "titles product4TCaption product4TCaptionPD1",
                productTitleStyle: "productnamecolor productTitle",
                productStyle: "product4T product4TPD1",
                divSelect: "form:last table:first",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 0,
                wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                inCart: false
            }, {
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Our customers also bought...",
                captionStyle: "titles product4TCaption product4TCaptionPD1",
                productTitleStyle: "productnamecolor productTitle",
                productStyle: "product4T product4TPD2",
                divSelect: "table:contains(Browse for more products in the same category as this item:)",
                divPosition: "above",
                maxImageHeight: 120,
                carousel: {
                    numVis: 4,
                    circular: true
                },
                wrapper: "<table width='100%'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                inCart: false
            }],
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
            AddToCart: [{
                enable: true,
                resultType: 3,
                numItems: 6,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionVC",
                productStyle: "product4T product4TVC",
                divSelect: "table:has(td form[name=Proceed_To_Checkout_Form]):last td:eq(1)",
                divPosition: "above",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<td style='border: 1px solid #DDD;width: 480px;'></td>",
                rawJS: { preDisplay: function () { $('table:has(span.PageText_L532n):last').remove(); } },
                inCart: true
            }]
        }
    }
    _4TellBoost.SITEPD1 = function () {
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
