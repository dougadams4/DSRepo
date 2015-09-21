(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");
        if (buyBtn)
            buyBtn.appendTo(buyWrapper);
        var newAddress = itemdata.pageLink;

        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
