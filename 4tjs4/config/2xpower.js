(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.2xpower.com",
            alias: "2xpower",
            GA_UA: "UA-23487590-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "//www.micronixtechnologies.com/3dcart/add_cart.png",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
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
                    numItems: 8,
                    caption: "Our customers also bought...",
                    captionStyle: "product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "tr:has(table table .addthis_toolbox)",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    maxImageHeight: 0,
                    wrapper: "<tr><td colspan='2' class='titles'><table align='left' style='width:100%'><tr><td></td></tr></table></td></tr>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 4,
                    caption: "Customers also viewed...",
                    captionStyle: "product4TCaption product4TCaptionPD2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#column2",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#BAR4T",
                    divPosition: "append",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 00,
                    showRatings: true,
                    rawJS: {
                        preInit: function (tout) {
                            $('td.content tr:has(tr input):last').after('<tr><td colspan="5" id="BAR4T"></td><td colspan="1" valign="top"><table id="FOO"></table></td></tr>');
                            var foo = $('td.content tr').filter(':has(tr img[src*=paypal]):last, :has(tr img[src*=google]):last, :has(tr input):last');
                            $('#FOO').append(foo);
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
