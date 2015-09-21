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
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: "1,4",
                    numItems: "6,6",
                    caption: "Top Sellers",
                    productStyle: "product4T product4THome",
                    divSelect: "#Table_01",
                    divPosition: "replace",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    showBuyButton: false,
                    imageSize: "&maxx=130&maxy=130",
                    maxImageHeight: 180,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 4,
                    numItems: 3,
                    caption: "Customers also viewed...",
                    showCaption: false,
                    productStyle: "product4T product4TPD1",
                    divSelect: ".hotprod  tr:last",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 220,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<tr class='PD14T'><td></td></tr>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "Customers also bought...",
                    showCaption: false,
                    productStyle: "product4T product4TPD1",
                    divSelect: ".hotprod tr:last",
                    divPosition: "replace",
                    showRatings: true,
                    showBuyButton: false,
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 160,
                    wrapper: "<tr class='PD14T'><td></td></tr>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 6,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REL4T a[name=Review]",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 220,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<tr><td><div class='PD24T'></div></td></tr>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).prevAll("div").hide();
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
                    caption: "Customers also bought...",
                    showCaption: false,
                    productStyle: "product4T product4TPD1",
                    divSelect: ".hotprod tr:last",
                    divPosition: "replace",
                    showRatings: true,
                    showBuyButton: false,
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 160,
                    wrapper: "<tr class='PD14T'><td></td></tr>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: "#Table3",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<div id='CAT4T'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $("table.alternative").length >= 20;
                            if ($("#info-pain-div").length) {
                                tout.divPosition = "below";
                                tout.enable = true;
                                tout.divSelect = "td.data > table";
                            }
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "Customers also viewed...",
                    showCaption: false,
                    productStyle: "product4T product4TPD1",
                    divSelect: ".hotprod  tr:last",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 220,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<tr class='PD14T'><td></td></tr>",
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr:has(img[src*=Amazon]):last td:last",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 180,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<td colspan='6'><div class='VC4T'></div></td>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).siblings(":empty").remove();
                            $(tout.divSelect).attr("valign", "top");
                        }
                    },
                    inCart: true
                },
                tout2: {
                    enable: true,
                    resultType: 4,
                    numItems: 3,
                    caption: "Customers also viewed...",
                    showCaption: false,
                    productStyle: "product4T product4TPD1",
                    divSelect: ".hotprod  tr:last",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 220,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<tr class='PD14T'><td></td></tr>",
                    inCart: false
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
