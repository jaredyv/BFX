// Bundled with Fusion v0.1



/*
 * File: main/custom.js
 */
(function() {
    setInterval(function () {
        var pdpShippingAccordionSegment = jQuery('#product-details').find('> div.right-block.large-4.medium-4.small-12.columns.left > h4:nth-child(3)');
        var shippingTextContainer = jQuery('#cart_bottom').find('> h5, .shipping-notice, h5.shipping-notice');
        var checkoutOnclickButton = document.querySelector('#checkout-proceed > input');

        // remove the "Shipping" accordion from the bottom of the PDP product description area
        // pdpShippingAccordionSegment element is not detached yet (ie MAT failed)
        if (jQuery.contains(document, pdpShippingAccordionSegment)) {
            if (pdpShippingAccordionSegment != null) {
                pdpShippingAccordionSegment.remove();
            }
        }

        // shippingTextContainer element is not detached yet (ie MAT failed)
        if (jQuery.contains(document, shippingTextContainer)) {
            if (shippingTextContainer != null) {
                shippingTextContainer.remove();
            }
        }

        // Add attribute onclick to the checkout button
        if (checkoutOnclickButton && checkoutOnclickButton != null) {
            checkoutOnclickButton.setAttribute('onclick', "window.location='/cart'; return false;");
        }
    }, 500);
})();

// HACK until https://jira.borderf.net/browse/BFX-797 is implemented. Checks all
// img[src] in any page where URL path contains "cart" and allows for protocol inheriting URLs
// whereas the current system treats them as relative URLs and injects a basepath.
(function() {
    setInterval(function() {
        if (window.location.pathname.indexOf("cart") >= 0){
            jQuery("img").each(function() {
                var img_src_url = jQuery(this).attr("src").split("//");
                if (img_src_url.length >= 3){
                    console.log("IMG URL CHANGED");
                    jQuery(this).attr("src", img_src_url[0] + "//" + img_src_url[img_src_url.length - 1])
                }
            });
        }
    }, 1000)
})();


/*
 * File: main/stub.js
 */
(function(e,n,t,a,o){function c(n){e[a]._apiKey=n.key;e[a]._env=n.env;e[a]._logLevel=n.logLevel
}e[a]=c;e[a].l=1*new Date;var i,l;i=n.createElement(t);l=n.getElementsByTagName(t)[0];
i.async=1;i.src=o;l.parentNode.insertBefore(i,l)})(window,document,"script","bfx",
"https://bfx-objects.borderfree.com/v1/dist/bfx.js");
bfx({key:'c607afa0-7da0-11e5-b3f8-41a2bf1ee893'});
