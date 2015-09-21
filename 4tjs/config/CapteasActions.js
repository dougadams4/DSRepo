(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.call4TellRest = function (operation, query) {
        if (_4TellBoost.Service.pageType === "Home")
            //REGEXES ROCK. This one pulls out any blockIDs, cartIDs, etc, 
            //from the query to prevent them from influencing the call to the service.
            query = query.replace(/&(blockIDs|cartIDs|productIDs|clickStreamIDs|customerID)=[\w+(-|,)?]*/g, "");

        var jsonUrl = _4TellBoost.Service.address + operation + encodeURI(query);
        // Call the service, passing the results to the callback function
        (function () {
            var forTell = document.createElement('script'); forTell.type = 'text/javascript'; forTell.async = true;
            forTell.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + jsonUrl;
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(forTell, s);
        })();
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
