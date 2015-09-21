(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.aromaland.com",
            alias: "Aromalnd",
            GA_UA: "UA-10612147-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/splash2/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/splash2/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/splash2/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "<b>Price:</b> ",
            salePricePrefix: "Everyday Low Price: ",
            hideIfNoImage: true,
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 8,
                    caption: "Top sellers...",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "div#main_graphic",
                    divPosition: "below",
                    maxImageHeight: 170,
                    showBuyButton: true,
                    showRatings: false,
                    showPrice: true,
                    wrapper: "<div id='HOME4T'></div>",
                    rotateRecs: true,
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 9,
                    caption: "Our customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 160,
                    wrapper: "<table width='450px' align='right' style='border-spacing: 5px'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: "$('table.colors_lines_light').remove();",//Remove legacy touts.
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "You May Also Like...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#ProductDetail_ProductDetails_div2",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 180,
                    showRatings: true,
                    wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 4,
                    caption: "TOP SELLERS",
                    captionStyle: "product4TCaption product4TCaptionCat",
                    productStyle: "product4T product4TCat",
                    orientation: "horizontal",
                    divSelect: "form#MainForm",
                    divPosition: "above",
                    maxImageHeight: 150,
                    showBuyButton: true,
                    showRatings: false,
                    showPrice: true,
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "Related Top Sellers...",
                    productStyle: "product4T product4TSearch",
                    orientation: "vertical",
                    divSelect: "#main4TellContainer",
                    divPosition: "append",
                    maxImageHeight: 100,
                    showRatings: true,
                    rawJS: {
                        preInit: function (tout) {
                            var results = $('form.search_results_section');
                            if (tout.enable && (results && results.length)) {
                                var resultCell = results.parent(); resultCell.css('vertical-align', 'top');
                                var newCell = $("<td width='130px' valign='top' style='border: 1px solid #DFE0E0;'><div id='" + tout.newDivID + "'></div></td>");
                                newCell.insertAfter(resultCell);
                                tout.divSelect = '#' + tout.newDivID;
                                tout.divPosition = 'append';
                            }
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 9,
                    caption: "You may also like...",
                    captionStyle: "checkout-headers product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td style='border: 1px solid #DDD;'></td>",

                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
