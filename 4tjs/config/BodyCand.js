(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.BodyCandy.com",
            alias: "BodyCand",
            GA_UA: "UA-185506-1",
            platform: "4TellDIY.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='Add To Cart' class='button'",
            priceClass: "price2",
            pricePrefix: "Retail Price: ",
            salePricePrefix: "Your Price: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 3,
                numItems: 16,
                caption: "<h2>Recommended for you...</h2>",
                productStyle: "product4T product4THome",
                divSelect: "#tophome",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                numRows: 2,
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<table width='100%' class='HOME4T'><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom.customPrice = "lp";
                        _4TellBoost.addCartItem(_4TellBoost.UserData.data.Viewed.join(","));
                        _4TellBoost.addProductID(_4TellBoost.getCartItems().join(","));
                    },
                    perProduct: function (itemdata) {
                        itemdata.salePrice = itemdata.price;
                        itemdata.price = itemdata.customPrice;
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 8,
                caption: "Our Customers Also Bought...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $(".thumbscarousel").hide();
                    },
                    preInit: function (tout) {
                        tout.columns.custom.customPrice = "lp";
                        _4TellBoost.UserData.data.Viewed.unshift(_4TellBoost.Service.productList[0]);
                        _4TellBoost.UserData.save();
                    },
                    perProduct: function (itemdata) {
                        itemdata.salePrice = itemdata.price;
                        itemdata.price = itemdata.customPrice;
                    }
                },
                inCart: false
            },
 {
     enable: true,
     resultType: 3,
     numItems: 8,
     caption: "Similar Items",
     captionStyle: "product4TCaption product4TCaptionPD1",
     productStyle: "product4T product4TPD1",
     divSelect: "#tout2_pdp_4Tell",
     divPosition: "replace",
     carousel: {
         numVis: 2,
         circular: true
     },
     maxImageHeight: 120,
     showRatings: false,
     wrapper: "<div class='PD24T'></div>",
     rawJS: {
         preInit: function (tout) { tout.columns.custom.customPrice = "lp"; },
         perProduct: function (itemdata) {
             itemdata.salePrice = itemdata.price;
             itemdata.price = itemdata.customPrice;
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
                caption: "<h2>Most Popular in this Category...</h2>",
                captionStyle: "product4TCaption ",
                showCaption: true,
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_cat_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom.customPrice = "lp";
                        _4TellBoost.UserData.data.Viewed.unshift($("input[name=item]").val());
                        _4TellBoost.UserData.save();
                        _4TellBoost.addProductID(_4TellBoost.getCartItems().join(","));
                        if ($("p.productsku").length < 15 && $("a.navbtn").length === 0) {
                            tout.caption = "<h2>Recommended for you</h2>";
                            tout.resultType = 1;
                        }
                    },
                    perProduct: function (itemdata) {
                        itemdata.salePrice = itemdata.price;
                        itemdata.price = itemdata.customPrice
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).prev("h2").hide();
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TVC",
                divSelect: "#shipp_methods",
                divPosition: "above",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) { tout.columns.custom.customPrice = "lp"; },
                    perProduct: function (itemdata) {
                        itemdata.salePrice = itemdata.price;
                        itemdata.price = itemdata.customPrice
                    }
                },
                inCart: true
            }],
            Mobile: [{
                enable: true,
                resultType: 3,
                numItems: 8,
                caption: "Similar Items",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_mpdp_4Tell , #tout1_mcat_4Tell, #tout1_mhm_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='MOB4T'></div>",
                rawJS: {
                    preInit: function (tout) { tout.columns.custom.customPrice = "lp"; },
                    perProduct: function (itemdata) {
                        itemdata.salePrice = itemdata.price;
                        itemdata.price = itemdata.customPrice
                    }
                },
                inCart: false
            }],
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
