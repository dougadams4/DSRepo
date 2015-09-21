(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    $("a.button").each(function () {
        var id = $(this).attr("href").match(/\d+/);
        if (id) {
            $(this).bind("click", function () {
                _4TellBoost.addCartItem(id);
                _4TellBoost.addProductID(id);
            })
        }
    });

    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");
        if (_4TellBoost.SiteInfo.addCartImage) {
            var buyBtnImage = "";
            if (_4TellBoost.SiteInfo.includeBase) {
                buyBtnImage = "//" + _4TellBoost.SiteInfo.baseURL + "/"
            }
            buyBtnImage += _4TellBoost.SiteInfo.addCartImage;
            buyBtn.attr("src", buyBtnImage)
        }
        if (buyBtn) {
            buyBtn.appendTo(buyWrapper)
        }
        var newAddress = "https://www.bodycandy.com/cgi-bin/Make-a-Store.cgi?quantity=1&item=" + itemdata.productID;
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress)
        }); return buyWrapper
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
