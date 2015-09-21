(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.bulkskincare.com",
            alias: "BulkSkin",
            GA_UA: "UA-7587821-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/dinnerware/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/dinnerware/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/dinnerware/images/nophoto.gif",
            hideIfNoImage: true,
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "Sale Price : ",
            includeBase: false,
            siteEnable: true,
            minPrice: "$.05"
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 10,
                caption: "Top Sellers",
                productStyle: "product4T product4THome",
                carousel: {
                    items: 5
                },
                divSelect: "#content_area div + table",
                divPosition: "below",
                maxImageHeight: 120,
                showBuyButton: true,
                showRatings: true,
                wrapper: "<table width='90%' align='center' style='border: 1px solid #DFE0E0;margin-top:10px;'><tr><td></td></tr></table>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 10,
                caption: "You may also like...",
                productStyle: "product4T product4TPD2",
                carousel: {
                    items: 5
                },
                divSelect: "#ProductDetail_ProductDetails_div2",
                divPosition: "below",
                showBuyButton: true,
                maxImageHeight: 170,
                showRatings: true,
                wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: { preDisplay: function () { $('table#v65-product-related').remove(); } },
                inCart: false
            }, {
                resultType: 2,
                fillMode: "topsell",
                showImage: false,
                showPrice: false
            }],
            Category: [{
                enable: false,
                resultType: 4,
                numItems: 4,
                caption: "Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "form#MainForm",
                divPosition: "above",
                showBuyButton: true,
                showRatings: true,
                maxImageHeight: 10,
                inCart: false
            }],
            Search: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TSearch",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                newDivID: "main4TellContainer",
                showBuyButton: true,
                maxImageHeight: 150,
                showRatings: true,
                    rawJS: {
                        preInit: function (tout) {
                            var results = $('form.search_results_section');
                            if (tout.enable && results && results.length) {
                                var resultCell = results.parent();
                                resultCell.css('vertical-align', 'top');
                                var newCell = $("<td width='130px' valign='top'><table><tr><td style='border: 1px solid #DFE0E0;'><div id='" + tout.newDivID + "'></div></td></tr></table></td>");
                                newCell.insertAfter(resultCell);
                                tout.divSelect = '#' + tout.newDivID;
                                tout.divPosition = 'append';
                            }
                        }
                    },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 9,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                carousel: {
                    items: 2
                },
                divSelect: "td#v65-cart-shipping-details-text",
                divPosition: "replace",
                showBuyButton: true,
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<td colspan='3' style='border: 1px solid #DFE0E0;' id='VC4T'></td>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).prev().remove();
                        }
                    },
                inCart: true
            }]
        }
    }
} (window._4TellBoost = window._4TellBoost || {}, jQuery));
