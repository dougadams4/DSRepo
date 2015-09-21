(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.autismproducts.com",
            alias: "AutismPr",
            GA_UA: "UA-22929801-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/143/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/143/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/143/images/nophoto.gif",
            priceClass: "pricecolor colors_productprice",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 9,
                    caption: "Our customers also bought...",
                    captionStyle: "titles product4TCaption product4TCaptionPD1",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    showRatings: true,
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 103,
                    wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Similar Items...",
                    captionStyle: "titles product4TCaption product4TCaptionPD1",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#ProductDetail_ProductDetails_div2 ~ br",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<table width='744px' style='margin-left: auto; margin-right: auto;'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('table.colors_lines_light').remove();
                        }
                    },
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 5,
                    caption: "Related Top Sellers...",
                    captionStyle: "titles product4TCaption product4TCaptionCat",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TCat",
                    orientation: "vertical",
                    maxImageHeight: 100,
                    showRatings: true,
                    rawJS: {
                        preInit: function (tout) {
                            var results = $('form.search_results_section');
                            if (tout.enable && (results && results.length)) {
                                var resultCell = results.parent();
                                resultCell.css('vertical-align', 'top');
                                var newCell = $("<td width='25%' valign='top' style='border: 1px solid #DFE0E0;'><div id='" + tout.newDivID + "'></div></td>");
                                newCell.insertAfter(resultCell);
                                tout.divSelect = '#' + tout.newDivID;
                                tout.divPosition = 'append';
                            }
                        }
                    },
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "More ideas...",
                    captionStyle: "titles product4TCaption",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TSearch",
                    orientation: "vertical",
                    maxImageHeight: 100,
                    showRatings: true,
                    rawJS: {
                        preInit: function (tout) {
                            var results = $('form.search_results_section');
                            if (tout.enable && (results && results.length)) {
                                var resultCell = results.parent();
                                resultCell.css('vertical-align', 'top');
                                var newCell = $("<td width='25%' valign='top' style='border: 1px solid #DFE0E0;'><div id='" + tout.newDivID + "'></div></td>");
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
                    resultType: 1,
                    numItems: 3,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TVC",
                    divSelect: "td.v65-cart-details-blank[colspan=3]",
                    divPosition: "replace",
                    setHeight: true,
                    showRatings: true,
                    wrapper: "<td colspan='4' style='border: 1px solid #DFE0E0;'></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
