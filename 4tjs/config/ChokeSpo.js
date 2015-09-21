(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.ChokeSports.com",
            alias: "ChokeSpo",
            GA_UA: "UA-34605766-1",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "input type='submit' alt='Add to Cart' value='Choose Options' class='Choose'",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            priceClass: "price2",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 9,
                caption: "Recommended for You...",
                productStyle: "product4T product4THome",
                divSelect: "#HomeNewProducts",
                divPosition: "replace",
                numRows: 3,
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "customers also bought...",
                productStyle: "product4T product4TPD2",
                divSelect: "#SimilarProductsByCustomerViews",
                divPosition: "above",
                //carousel: {
                //    numVis: 4,
                //    circular: true
                //},
                showRatings: false,
                showBuyButton: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 16,
                    caption: "CUSTOMERS ALSO VIEWED",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#mytabs",
                    divPosition: "below",
                    //divSelect: "#SimilarProductsByCustomerViews",
                    //divPosition: "replace",
                    //carousel: {
                    //    numVis: 4,
                    //    circular: true
                    //},
                    maxImageHeight: 120,
                    showRatings: false,
                    showBuyButton: false,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        preDisplay: function () {
                            $("#SimilarProductsByCustomerViews, #SideProductRelated, #SideProductRecentlyViewed").hide();
                        }
                    },
                    inCart: false
                }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".CartCode > *:last",
                divPosition: "below",
                //carousel: {
                //    numVis: 4,
                //    circular: true
                //},
                maxImageHeight: 100,
                showRatings: false,
                showBuyButton: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $(".ProceedToCheckout").insertAfter($(".CouponCode"));
                        $(".KeepShopping").insertAfter($(".GiftCertificate "));
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
