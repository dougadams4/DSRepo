(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.airrattle.com",
            alias: "airrattl",
            GA_UA: "UA-39685834-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart', 'addCartImage'",
            addCartImage: "/v/vspfiles/templates/airrattle/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/airrattle/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/airrattle/images/nophoto.gif",
            pricePrefix: "Your Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for you",
                captionStyle: "product4TCaption product4TCaptionHome",
                productStyle: "product4T product4THome",
                divSelect: "#fpslider",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
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
                divSelect: ".weekly-deals",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
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
                divSelect: "div.category#0",
                divPosition: "replace",
                maxImageHeight: 120,
                showRatings: false,
                showBuyButton: false,
                wrapper: "<div class='HOM24T'></div>",
                rawJS: {
                    preInit: function () {
                        $(".best-sellers").find(".category").each(function (index) {
                            $(this).attr("id", index).hide();
                        });
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
                  divSelect: "div.category#1",
                  divPosition: "replace",
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
                  divSelect: "div.category#2",
                  divPosition: "replace",
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
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#v65-product-parent",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
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
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
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
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#v65-cart-shipping-details-text div",
                divPosition: "below",
                carousel: {
                    numVis: 3,
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
