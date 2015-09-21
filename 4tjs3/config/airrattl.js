(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.airrattle.com",
            alias: "airrattl",
            GA_UA: "UA-39685834-1",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/airrattle/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/airrattle/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/airrattle/images/nophoto.gif",
            pricePrefix: "Price ",
            salePricePrefix: "Sale ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Recommended for you",
                captionStyle: "product4TCaption product4TCaptionHome",
                productStyle: "product4T product4THome",
                //divSelect: "#fpslider, #tout1_hm_4Tell",
                divSelect: "#tout1_hm_4Tell",
                divPosition: "above",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.prodIDs = _4TellBoost.UserData.data.Viewed.slice(0, 2).join(",")
                    },
                    preDisplay: function (tout) {
                        //$(tout.divSelect).hide();
                    }
                },
                inCart: false
            },
            {
                enable: true,
                resultType: 5,
                numItems: 12,
                catId: "120",
                caption: "AirRattle Weekly Deals",
                captionStyle: "product4TCaption product4TCaptionHome",
                productStyle: "product4T product4THome",
                //divSelect: ".weekly-deals, #tout2_hm_4Tell",
                divSelect: "#tout2_hm_4Tell",
                divPosition: "above",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },

                showRatings: true,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        //$(tout.divSelect).hide();
                    }
                },
                inCart: false
            },
            //These three are combined into one best-seller tout.
            {
                enable: true,
                resultType: 5,
                numItems: 5,
                catId: "1",
                caption: "Best Selling Airsoft Guns",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout3_hm_4Tell",
                //divSelect: "div.category#0, #tout3_hm_4Tell",
                divPosition: "above",
                maxImageHeight: 120,
                showRatings: false,
                showBuyButton: false,
                wrapper: "<div class='HOM24T'></div>",
                rawJS: {
                    preInit: function () {
                        //$(".best-sellers").find(".category").each(function (index) {
                        //    $(this).attr("id", index).hide();
                        //});
                    }
                },
                inCart: false
            },
              {
                  enable: true,
                  resultType: 5,
                  numItems: 5,
                  catId: "4",
                  caption: "Best Selling Airsoft Accessories",
                  productStyle: "product4T product4TPD2",
                  divSelect: "#tout4_hm_4Tell",
                  //divSelect: "div.category#1, #tout4_hm_4Tell",
                  divPosition: "above",
                  maxImageHeight: 120,
                  showRatings: false,
                  showBuyButton: false,
                  wrapper: "<div class='HOM24T'></div>",
                  rawJS: {
                  },
                  inCart: false
              },
              {
                  enable: true,
                  resultType: 5,
                  numItems: 5,
                  catId: "100",
                  caption: "Best Selling Tactical Gear",
                  //showCaption: false,
                  productStyle: "product4T product4TPD2",
                  divSelect: "#tout5_hm_4Tell",
                  //divSelect: "div.category#2, #tout5_hm_4Tell",
                  divPosition: "above",
                  maxImageHeight: 120,
                  showRatings: false,
                  showBuyButton: false,
                  wrapper: "<div class='HOM24T'></div>",
                  rawJS: {
                  },
                  inCart: false
              }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                fillMode: "crowd",
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#v65-product-parent",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },

                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Our customers also viewed...",
                productStyle: "product4T product4TPD1",
                divSelect: "div#ProductDetail_ProductDetails_div2",
                divPosition: "above",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },

                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
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
                caption: "Related Top Sellers",
                productStyle: "product4T product4TPD1",
                divSelect: "#MainForm",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },

                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#v65-cart-checkout-parent tr",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<tr><td colspan='2'><div class='VC4T'></div></td></tr>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                        $(tout.divSelect).find("td:first").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
