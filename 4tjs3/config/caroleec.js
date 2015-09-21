(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.carolee.com",
            alias: "caroleec",
            GA_UA: "UA-30020150-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Similar items you may LOVE...",
                productStyle: "product4T product4TPD1",
                divSelect: ".relatedBlock,.accessoriesBlock",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        jQuery(".accessoriesBlock, .relatedBlock").hide();
                    }
                },
                inCart: false
            }, {
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD2",
                divSelect: ".PD14T",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                showRatings: false,
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
                caption: "We thought you would LOVE these...",
                productStyle: "product4T product4TCat",
                divSelect: "#itemsBlock",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        var countLoc = $(".products-header");
                        if (countLoc && countLoc.length) {
                            var countTxt = countLoc.html();
                            var cIndex = countTxt.indexOf("Total Items: ");
                            var cEnd = countTxt.indexOf("<", cIndex + 13);
                            if (cIndex > -1 && cEnd > -1) {
                                countTxt = countTxt.substring(cIndex + 13, cEnd);
                                if (!isNaN(countTxt) && Number(countTxt) < 20) tout.enable = false;
                            }
                        }
                        tout.enable = tout.enable && 
                        		//extra categories to ignore 
                        		["39","178","685","715","721","722","723","724","725","726","727","728","729","730"]
                        		.indexOf(_4TellBoost.Service.catId) == -1; 
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Don't miss these great styles...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: ".productBlockContainer ",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        jQuery(".product-item.alternative").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
