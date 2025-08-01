// Load Google Tag Manager onto the page
function setupGraphAnalytics() {
    const gtmScriptContent = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','"+ analyticsGtmId +"');",
        gtmIframeSrc = "https://www.googletagmanager.com/ns.html?id="+ analyticsGtmId,
        gtmIframeStyle = "display: none; visibility: hidden;",
        graphAnalyticsSrc = "graphAnalytics.js";

    const pageHead = document.querySelector("head"),
          pageBody = document.querySelector("body"),
          gtmScript = document.createElement("script"),
          gtmNoscript = document.createElement("noscript"),
          gtmIframe = document.createElement("iframe"),
          graphAnalytics = document.createElement("script");

    gtmScript.textContent = gtmScriptContent;
    pageHead.prepend(gtmScript);
}
setupGraphAnalytics();

// *************************************************************
// Functions to fire events
// *************************************************************

// For events related to specific phones, e.g. when a phone is displayed
function pushPhoneTag(eventName, p, trigger) {
    let eventTrigger = trigger ? trigger : "user",
        phoneBrand = p.dispBrand ? p.dispBrand : "Target",
        phoneModel = p.phone,
        phoneVariant = p.dispName,
        value = 1;

    window.dataLayer.push({
        "event" : eventName,
        "trigger" : eventTrigger,
        "site": analyticsSite,
        "phoneBrand": phoneBrand,
        "phoneModel": phoneModel,
        "phoneVariant": phoneVariant,
        "phoneName" : phoneBrand + ' ' + phoneModel,
        "value": value
    });

    if (logAnalytics) { console.log("Event:      "+ eventName +"\nTrigger:    "+ eventTrigger +"\nSite:       "+ analyticsSite +"\nPhone:      "+ phoneBrand +" "+ phoneModel +"\nVariant:    " + phoneVariant); }
}

if (logAnalytics) { console.log("... Analytics initialized ... "); }
