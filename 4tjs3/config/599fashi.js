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
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 10,
                caption: "BEST SELLERS",
                productStyle: "product4T product4THome",
                divSelect: ".home-banner-right-div",
                divPosition: "replace",
                carousel: {
                    itemsCustom: [[0, 2]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false,
                    addClassActive: true
                },
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
            },
            {
                enable: true,
                resultType: 1,
                numItems: 10,
                caption: "BEST SELLERS",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: ".home-banner-right-div, .HOME4T",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false,
                    addClassActive: true
                },
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
                resultType: 0,
                numItems: 6,
                catId: "94",
                //fillMode: "genomic",
                caption: "YOU MAY ALSO LIKE",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: ".inner-left",
                divPosition: "below",
                showRatings: false,
                showTitle: false,
                maxImageHeight: 150,
                imageSize: "&maxx=100&maxy=0",
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
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
                rotateRecs: true,
                //fillMode: "genomic",
                catId: "94",
                caption: "Affordable Accessories",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: "#upsellItems",
                divPosition: "replace",
                carousel: {
                    itemsCustom: [[0, 2], [500, 6]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 140,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='PD24T' id='upsellItems'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.setCatId("94");
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            },
            {
                enable: true,
                resultType: 0,
                numItems: 12,
                rotateRecs: true,
                //fillMode: "genomic",
                catId: "973,974,982,981,1072",
                caption: "YOU MAY ALSO LIKE",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: ".plus-size",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [500, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 140,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='PD24T' id='upsellItems'></div>",
                rawJS: {
                    preInit: function () {
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
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
                //fillMode: "genomic",
                numItems: 20,
                caption: "BEST SELLERS",
                productStyle: "product4T product4TCat",
                //divSelect: "form#frmsortby, #searchspring, .searchspring-results_container",
                divSelect: ".searchspring-results_container",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [500, 5]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 150,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && -1 == ["511", "513", "547", "516", "517"].indexOf(_4TellBoost.Service.catId);
                        if (0 <= jQuery.inArray(_4TellBoost.Service.catId, ["28", "347", "387", "339", "392", "433", "422", "529", "544", "134", "578", "579", "597", "580"])) {
                            tout.resultType = 4;
                            tout.fillMode = "topSellers";
                        }
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    },
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
                resultType: 0,
                numItems: 1,
                caption: "Affordable Accessories",
                productStyle: "product4T product4TVC",
                divSelect: "#main4TellContainer",
                divPosition: "replace"
            }, {
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Affordable Accessories",
                productStyle: "product4T product4TVC",
                divSelect: "#upsellItems",
                divPosition: "replace",
                att1ID: "94",
                carousel: {
                    itemsCustom: [[0, 2], [500, 6]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 150,
                showTitle: false,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.setCatId("94");
                        //TODO Usual method doesn't work for scraping items. :(
                        _4TellBoost.UserData.clearCart();
                        jQuery("td.item a").each(function () {
                            var id = jQuery(this).attr("href").replace(".html", "");
                            id = id && id.match(/\d+$/);
                            var quantity = jQuery(this).find(".item-qty input[type=text]").val() || 1;
                            if (id && id[0]) {
                                _4TellBoost.addCartItem(id[0], quantity)
                            }
                        });
                    },
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
                startPos: 3,
                caption: "Customers Also Bought",
                productStyle: "product4T product4TVC",
                divSelect: "#upsellItems, .VC4T",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [500, 6]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
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
            }],
            Auto: [{
                enable: false,
                resultType: 5,
                numItems: 15,
                rotateRecs: true,
                fillMode: "crowd",
                catId: "1169",
                caption: "WHOLESALE mixlots",
                productStyle: "product4T product4TCat",
                divSelect: "span.smallfont > br",
                divPosition: "above",
                carousel: {
                    itemsCustom: [[0, 2], [500, 5]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 170,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && "/Wholesale_ep_72-1.html" == location.pathname;
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            },
            {
                enable: true,
                resultType: 4,
                numItems: 15,
                rotateRecs: true,
                //fillMode: "crowd",
                //catId: "1169",
                caption: "Best Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "p.smallfont",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [500, 5]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 170,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && "/Wholesale_ep_72-1.html" == location.pathname;
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            },
            {
                enable: true,
                resultType: 5,
                numItems: 15,
                rotateRecs: true,
                fillMode: "crowd",
                catId: "973,974,982,981,1072",
                caption: "BEST SELLERS",
                productStyle: "product4T product4TCat",
                divSelect: ".main_content .row",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [500, 5]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=140",
                maxImageHeight: 170,
                showRatings: false,
                showTitle: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && "/Boutique_ep_85-1.html" == location.pathname;
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    },
                    perProduct: function (itemdata) {
                        itemdata.pageLink = "//www.599fashion.com/Boutique_ep_85-1.html#/productId/" + itemdata.productID;
                        if (itemdata.salePrice) {
                            itemdata.price = itemdata.salePrice;
                        }
                    }
                },
                inCart: false
            },
               {
                   enable: true,
                   resultType: 5,
                   numItems: 15,
                   rotateRecs: true,
                   fillMode: "crowd",
                   catId: "973,974,982,981,1072",
                   caption: "BEST SELLERS",
                   showCaption: false,
                   productStyle: "product4T product4TCat",
                   divSelect: ".main_content .row, .CAT4T",
                   divPosition: "below",
                   carousel: {
                       itemsCustom: [[0, 2], [500, 5]],
                       scrollPerPage: true,
                       navigation: true,
                       navigationText: false,
                       pagination: false
                   },
                   imageSize: "&maxx=120&maxy=140",
                   maxImageHeight: 170,
                   showRatings: false,
                   showTitle: false,
                   wrapper: "<div class='CAT4T'></div>",
                   rawJS: {
                       preInit: function (tout) {
                           tout.enable = tout.enable && "/Boutique_ep_85-1.html" == location.pathname;
                       },
                       preDisplay: function (tout) {
                           $(tout.divSelect).parents("table").css("table-layout", "fixed");
                       },
                       perProduct: function (itemdata) {
                           itemdata.pageLink = "//www.599fashion.com/Boutique_ep_85-1.html#/productId/" + itemdata.productID;
                           if (itemdata.salePrice) {
                               itemdata.price = itemdata.salePrice;
                           }
                       }
                   },
                   inCart: false
               }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
