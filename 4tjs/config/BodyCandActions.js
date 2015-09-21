(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    $("a.button").each(function () {
        var id = $(this).attr("href").match(/\d+/);
        if (id) {
            $(this).bind("click", function () {
                _4TellBoost.addCartItem(id);
                _4TellBoost.addProductID(id);
            });
        }
    });
    $(document).ready(function () {
        var pageDetect = $("#tout1_mpdp_4Tell , #tout1_mcat_4Tell, #tout1_mhm_4Tell");
        if (pageDetect && pageDetect.length > 0)
            _4TellBoost.setPageType("Mobile");
    });
    _4TellBoost.displayCombinedTouts = function (data) {
        if (data) {
            if ((String(data).length < 5) || (String(data).substring(0, 5) === 'Error')) return;

            //get the items array
            var items = data.GetRecColumnsResult;
            if (!items || !items.length) return; //no results
            //Slice things off for the individual touts to display.
            var previouslyUsed = 0;
            for (var i = 0; i < _4TellBoost.Touts.length; ++i) {
                var numResults = 0;
                var numItems = _4TellBoost.Touts[i].numItems.toString().match(/\d+/g);
                for (var j = 0; j < numItems.length; j++)
                    numResults += parseInt(numItems[j]);
                var results = items.slice(previouslyUsed, previouslyUsed + numResults);
                if (_4TellBoost.Touts[i].enable && results.length) {
                    if (_4TellBoost.Service.pageType === "Mobile") {
                        window.BodyCandy.vendor4Tell.productRecommendations(results);
                    } else {
                        _4TellBoost.Touts[i].displayDiv(results);
                    }
                }
                previouslyUsed += numResults;
            }
        }

    };
    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");
        if (_4TellBoost.SiteInfo.addCartImage) {
            var buyBtnImage = "";
            if (_4TellBoost.SiteInfo.includeBase) {
                buyBtnImage = "//" + _4TellBoost.SiteInfo.baseURL + "/";
            }
            buyBtnImage += _4TellBoost.SiteInfo.addCartImage;
            buyBtn.attr("src", buyBtnImage);
        }
        if (buyBtn) {
            buyBtn.appendTo(buyWrapper);
        }
        var newAddress = "https://www.bodycandy.com/cgi-bin/Make-a-Store.cgi?quantity=1&item=" + itemdata.productID;
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
