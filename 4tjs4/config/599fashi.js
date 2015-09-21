(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.599fashion.com",
            alias: "599fashi",
            GA_UA: "UA-5629283-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='BUY' class='button'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 20,
                caption: "BEST SELLERS",
                productStyle: "product4T product4THome",
                divSelect: ".promo-banners",
                divPosition: "replace",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                numRows: 2,
                showRatings: false,
                showTitle: false,
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 105,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: "5,3",
                numItems: "2,4",
                rotateRecs: true,
                caption: "YOU MAY ALSO LIKE",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#relatedItems",
                divPosition: "replace",
                showRatings: false,
                showTitle: false,
                maxImageHeight: 150,
                imageSize: "&maxx=100&maxy=0",
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.startPos = Math.round(Math.random() * 17) + ",1";
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 5,
                numItems: 12,
                fillMode: "none",
                att1ID: "94",
                caption: "<h2>Affordable Accessories</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#upsellItems",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 170,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='PD24T' id='upsellItems'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.setCatId("94");
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
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
                numItems: 20,
                caption: "BEST SELLERS",
                productStyle: "product4T product4TCat",
                divSelect: "div.cat-navigation:first",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 150,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Affordable Accessories",
                productStyle: "product4T product4TVC",
                divSelect: "#upsellItems",
                divPosition: "replace",
                att1ID: "94",
                carousel: {
                    numVis: 6,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 150,
                showTitle: false,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () { _4TellBoost.setCatId("94"); },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: true
            }, {
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers Also Bought",
                productStyle: "product4T product4TVC",
                divSelect: "#upsellItems, .VC4T",
                divPosition: "below",
                carousel: {
                    numVis: 6,
                    circular: true
                },
                imageSize: "&maxx=140&maxy=140",
                maxImageHeight: 150,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () { $(".checkout-headers, table.alternative").hide(); },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
