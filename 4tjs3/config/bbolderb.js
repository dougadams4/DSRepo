(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.bbolder.com/",
            alias: "bbolderb",
            GA_UA: "UA-44391560-1",
            platform: "4TellShp.js",
            custom: true,
            addCartBtnAtts: "<input type='submit' value='Take a Look' class='btn'>",
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
                caption: "PICKED JUST FOR YOU",
                productStyle: "product4T product4THome",
                divSelect: ".content .sixteen",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: false,
                showPrice: false,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".yotpo-main-widget",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showPrice: false,
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        jQuery(".add_to_cart").click(function () {
                            _4TellBoost.addCartItem(_4TellBoost.Service.productList[0]);
                        });
                        if (500 > window.outerWidth) {
                            tout.divSelect = "#wishlistbuttons";
                        }
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                showCaption: false,
                productStyle: "product4T product4TPD2",
                divSelect: ".sixteen:has(.thumbnail)",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showPrice: false,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(".sixteen > h2").text(tout.caption);
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "<h4>Here are some of our customer favorites</h4>",
                productStyle: "product4T product4TCat",
                divSelect: ".collection_nav",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showPrice: false,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.catId = __st.s.match(/\d+/)[0];
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: ".update_subtotal_text",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showPrice: false,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.addCartItem(_4TellBoost.UserData.cart.join());
                    }
                },
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "other ideas",
                productStyle: "product4T product4TVC",
                divSelect: ".search_page, #tout1_blog_4Tell",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showPrice: false,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: true
            }]

        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
