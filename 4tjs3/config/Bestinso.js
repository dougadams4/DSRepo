(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.bestinsoles.com",
            alias: "Bestinso",
            GA_UA: "UA-2418039-4",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='SEE DETAILS'  class=\"btn\" onmouseover=\"this.className='btn_over'\" onmouseout=\"this.className='btn'\"",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for you",
                productStyle: "product4T product4THome",
                divSelect: "#homeCarousel",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=130&maxy=130",
                maxImageHeight: 180,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought",
                //showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: ".addl-images, .main-image",
                divPosition: "below",
                carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 160,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".relatedBlock, .accessoriesBlock",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 220,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).hide();
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false,
                resultType: 0,
                numItems: 3,
                caption: "Customers also bought...",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: ".hotprod tr:last",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 160,
                wrapper: "<tr class='PD14T'><td></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.bestinsoles.com/, "");
                    }
                },
                inCart: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "#categoryHeader",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 180,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery("#categoryHeader").hide();
                        jQuery(tout.divSelect).css("float", "left");
                    }
                },
                inCart: true
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: ".productBlockContainer",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 180,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        //$(tout.divSelect).prev(".header").text(tout.caption);
                    }
                },
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 5,
                numItems: 4,
                catId: "100",
                caption: "You may also like...",
                productStyle: "product4T product4TAuto",
                divSelect: "#pain-container, #Table_01",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 180,
                wrapper: "<div class='AUTO4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).css("float", "left");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
