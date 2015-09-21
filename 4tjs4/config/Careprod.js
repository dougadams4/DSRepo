(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.Careprodx.com",
            alias: "Careprod",
            GA_UA: "UA-22049613-1",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='image'",
            addCartImage: "/templates/Magnificent/images/blue/AddCartButton.gif",
            emptyImage: "/templates/Magnificent/images/ProductDefault.gif",
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
                    numItems: 3,
                    caption: "<h2>Customers also bought...</h2>",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#SideProductRelated",
                    divPosition: "replace",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div class='Block PD14T'></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 3,
                    caption: "<h2>Customers also viewed...</h2>",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#SideProductRecentlyViewed",
                    divPosition: "above",
                    maxImageHeight: 150,
                    showRatings: true,
                    wrapper: "<div class='Block PD14T'></div>",
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "<h3>You may also like...</h3>",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "#SuggestiveCartContent",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 130,
                    showRatings: false,
                    wrapper: "<div class='VC4T'></div>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
