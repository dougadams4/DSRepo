(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.bachelorettesuperstore.com",
            alias: "bachelor",
            GA_UA: "UA-229495-1",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='image' src='//www.bachelorettesuperstore.com/mm5/css/00000002/buyme.png'></form",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                //caption: "<h2><img src='css/00000002/suggestions.gif' width='386' height='48'></h2>",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: ".expanded",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: ".product-details-3",
                divPosition: "above",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).prev("div.clear").hide();
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 15,
                caption: "<h2><img src='css/00000002/suggestions.gif' width='386' height='48'></h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#product-footer",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD24T'></div>",
                rawJS: { preDisplay: function () { $(".related-products").hide(); } },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                //fillMode: "none",
                numItems: 15,
                caption: "Related Top Sellers",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TCat",
                divSelect: "#category-listing",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $(".product-item").length >= 10;
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 15,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TVC",
                divSelect: "center *:last",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
