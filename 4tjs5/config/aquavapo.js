(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.aquavaporcig.com",
            alias: "aquavapo",
            GA_UA: "UA-9564893-2",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='View Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#column2 div:has(iframe)",
                divPosition: "below",
                showRatings: true,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: "#tabs",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 3,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TPD1",
                divSelect: "#column2 div:has(iframe)",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $("table.alternative").length > 20;
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#Table15",
                divPosition: "below",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).css({ "width": "70%", "float": "left" });
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
