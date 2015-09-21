(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.carbideprocessors.com",
            alias: "Carbidep",
            GA_UA: "UA-6576959-1",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='image' ",
            addCartImage: "//www.carbideprocessors.com/templates/__custom/images/purple/AddCartButton.gif",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            priceClass: "price2",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Top Sellers",
                productStyle: "product4T product4THome",
                divSelect: "#HomeAboutUs",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 90,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#HomeFeaturedProducts").remove();
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "<h2>Customers also bought...</h2>",
                captionStyle: "",
                productStyle: "product4T product4TPD1",
                divSelect: "#SideProductAddToWishList",
                divPosition: "above",
                maxImageHeight: 90,
                showRatings: false,
                wrapper: "<div class='PD14T Block'></div>",
                rawJS: {
                    preInit: function () {
                        $(".AddThisButtonBox").insertAfter($(".SeeMorePicturesLink"));
                        $(".ProductThumb").height("auto");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 6,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: ".ProductDescriptionContainer",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 90,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#SideTopSellers",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                rawJS: {
                    preDisplay: function () {
                        $("#SuggestiveCartContent").remove();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
