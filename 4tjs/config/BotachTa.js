(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.botach.com",
            alias: "BotachTa",
            GA_UA: "UA-43926901-1",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='Choose Options' class='btn addToCartButton'",
            addCartImage: "",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "<h2>You may also like...</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#SideTopSellers",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 6,
                numItems: 20,
                fillMode: "none",
                caption: "<h2>Customers also bought</h2>",
                //showCaption: false,
                productStyle: "product4T product4TPD3",
                divSelect: "#SideProductRelated",
                divPosition: "replace",
                maxImageHeight: 150,
                wrapper: "<div id='Featured4Tell'></div>",
                rawJS: {
                    preInit: function (tout) {
                        $(tout.divSelect).hide();
                    }
                },
                inCart: false
            },
            {
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "<h2>Customers also bought</h2>",
                productStyle: "product4T product4TPD1",
                divSelect: "#SidePopularProducts",
                divPosition: "replace",
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#ProductByCategory_Tab").hide();
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 3,
                caption: "<h2>Customers also viewed</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#SimilarProductsByCustomerViews",
                divPosition: "replace",
                maxImageHeight: 120,
                //showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 4,
                caption: "<h2>Related Top Sellers</h2>",
                productStyle: "product4T ",
                divSelect: "#SideCategoryTopSellers",
                divPosition: "replace",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "<h2>You may also like...</h2>",
                productStyle: "product4T product4TVC",
                divSelect: "#CartContent",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: true
            }],
            QuickCart: [{
                enable: false,
                resultType: 0,
                numItems: 4,
                caption: "<h2>You may also like...</h2>",
                showCaption: false,
                productStyle: "product4T product4TQC",
                divSelect: "#fastCartSuggestive",
                divPosition: "replace",
                //carousel: {
                //    numVis: 3,
                //    circular: true
                //},
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='QC4T'></div>",
                rawJS: { preDisplay: function (tout) { $(tout.divSelect).prev("p").hide(); } },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
