(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    $(document).ready(function () {
        if ($("#info-pain-div").length) {
            _4TellBoost.setPageType("Category");
            _4TellBoost.setCatId("100");
            $("form[name=frmsortby]").attr("action", "view_category.asp?cat=100#prod");
        }
    });
    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");
        if (_4TellBoost.SiteInfo.addCartImage) {
            var buyBtnImage = '';
            if (_4TellBoost.SiteInfo.includeBase)
                buyBtnImage = '//' + _4TellBoost.SiteInfo.baseURL + '/';
            buyBtnImage += _4TellBoost.SiteInfo.addCartImage;
            buyBtn.attr("src", buyBtnImage);
        }
        if (buyBtn)
            buyBtn.appendTo(buyWrapper);
        var newAddress = itemdata.pageLink;


        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            //alert(tout.toutType, itemdata.productID, newAddress);
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
