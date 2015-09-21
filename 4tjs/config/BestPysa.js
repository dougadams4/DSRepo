(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.BestPysanky.com",
            alias: "BestPysa",
            GA_UA: "UA-2497980-2",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/257/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/257/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/257/images/nophoto.gif",
            priceClass: "pricecolor colors_productprice",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "table.colors_pricebox",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<table class='PD14T'><tr><td></td></tr></table>",
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Similar Items...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        items: 4,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    maxImageHeight: 180,
                    showRatings: true,
                    wrapper: "<table width='100%'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                }],
            Category: [{
                enable: false
            }],
            Search: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:first",
                divPosition: "replace",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<td colspan='1' style='border: 1px solid #DFE0E0; '></td>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
