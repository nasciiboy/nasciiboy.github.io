// Configuration options
const init_phones = [
        "Harman OE 2018 Linear"
      ],
      DIR = "data/",                                // Directory where graph files are stored
      default_channels = ["L","R"],                 // Which channels to display. Avoid javascript errors if loading just one channel per phone
      default_normalization = "dB",                 // Sets default graph normalization mode. Accepts "dB" or "Hz"
      default_norm_db = 60,                         // Sets default dB normalization point
      default_norm_hz = 1000,                       // Sets default Hz normalization point
      max_channel_imbalance = 5,                    // ???
      alt_layout = true,                            // Toggle between classic and alt layouts
      alt_sticky_graph = true,                      // If active graphs overflows the viewport, does the graph scroll with the page or stick to the viewport?
      alt_animated = true,                          // Determines if new graphs are drawn with a 1-second animation, or appear instantly
      alt_header = true,                            // Display a configurable header at the top of the alt layout
      squigsSites = false,                          // Display other squigs sites at the top of the alt layout
      alt_header_new_tab = false,                   // Clicking alt_header links opens in new tab
      alt_tutorial = true,                          // Display a configurable frequency response guide below the graph
      alt_augment = true,                           // Display augment card in phone list, e.g. review sore, shop link
      site_url = 'index.html',
      share_url = true,                             // If true, enables shareable URLs
      watermark_text = "",                          // Optional. Watermark appears behind graphs
      watermark_image_url = "watermark.svg",        // Optional. If image file is in same directory as config, can be just the filename
      page_title = "Frequency Responses - Squiglink by Tinnitus HiFi",
      page_description = "View and compare frequency response graphs for earphones",
      accessories = true,                           // If true, displays specified HTML at the bottom of the page. Configure further below
      externalLinksBar = true,                      // If true, displays row of pill-shaped links at the bottom of the page. Configure further below
      restricted = false,                           // Enables restricted mode. More restricted options below
      expandable = true,                            // Enables button to expand iframe over the top of the parent page
      expandableOnly = 1000,                        // Prevents iframe interactions unless the user has expanded it
      headerHeight = '0px',                         // Optional. If expandable=true, determines how much space to leave for the parent page header
      darkModeButton = true,                        // Adds a "Dark Mode" button the main toolbar to let users set preference
      targetDashed = true,                          // If true, makes target curves dashed lines
      targetColorCustom = "var(--background-color-contrast-more)", // If false, targets appear as a random gray value. Can replace with a fixed color value to make all targets the specified color, e.g. "black"
      targetRestoreLastUsed = true,	      	    // Restore user's last-used target settings on load
      labelsPosition = "bottom-left",               // Up to four labels will be grouped in a specified corner. Accepts "top-left," bottom-left," "bottom-right," and "default"
      stickyLabels = true,                          // "Sticky" labels

      analyticsEnabled = true,                      // Enables Google Analytics 4 measurement of site usage
      analyticsSite = "squig-thf",                  // Site name for attributing analytics events to your site
      analyticsGtmId = "G-BSCS0CN46C",              // GTM ID used for analytics. If you don't already have one, you'' need to create a Google Tag Manager account
      logAnalytics = false;                         // If true, events are logged in console

      exportableGraphs = true,                      // Enables export graph button
      extraEnabled = true,                          // Enable extra features
      extraUploadEnabled = true,                    // Enable upload function
      extraEQEnabled = true,                        // Enable parametic eq function
      extraEQBands = 10,                            // Default EQ bands available
      extraEQBandsMax = 20,                         // Max EQ bands available
      extraToneGeneratorEnabled = true;             // Enable tone generator function

// Specify which targets to display
const targets = [
    { type:"Δ" , files:["Δ 10dB","Δ JM-1","IEF Comp"] },
    { type:"Harman", files:[ "Harman OE 2018 Linear", "Harman 2018", "Harman IE 2019 v2" ] },
    { type:"Neutral",    files:[ "Diffuse Field","Free Field" ] },
    { type:"Reviewer",   files:[ "AA Neutral Diffuse" ] }
];

// *************************************************************
// Functions to support config options set above; probably don't need to change these
// *************************************************************

// Set up the watermark, based on config options above
function watermark(svg) {
    let wm = svg.append("g")
        .attr("transform", "translate("+(pad.l+W/2)+","+(pad.t+(H/2) + 5)+")")
        .attr("opacity",0.3);

    if ( watermark_image_url ) {
        wm.append("image")
            .attrs({x:-370, y:-135, width:125, height:128, "xlink:href":watermark_image_url});
    }

    if ( watermark_text ) {
        wm.append("text")
            .attrs({x:303, y:142, "font-size":10, "text-anchor":"middle", "class":"graph-name"})
            .text(watermark_text);
    }

    let wmSq = svg.append("g")
        .attr("opacity",0.2);

    wmSq.append("image")
        .attrs({x:652, y:254, width:100, height:94, "class":"wm-squiglink-logo", "xlink:href":"giggle.svg"});

    wmSq.append("text")
        .attrs({x:641, y:314, "font-size":10, "transform":"translate(0,0)", "text-anchor":"end", "class":"wm-squiglink-address"})
        .text("nasciiboy.github.io/squig-thf/");
}

// Parse fr text data from REW or AudioTool format with whatever separator
function tsvParse(fr) {
    return fr.split(/[\r\n]/)
        .map(l => l.trim()).filter(l => l && l[0] !== '*')
        .map(l => l.split(/[\s,]+/).map(e => parseFloat(e)).slice(0, 2))
        .filter(t => !isNaN(t[0]) && !isNaN(t[1]));
}

// Apply stylesheet based layout options above
function setLayout() {
    function applyStylesheet(styleSheet) {
        var docHead = document.querySelector("head"),
            linkTag = document.createElement("link");

        linkTag.setAttribute("rel", "stylesheet");
        linkTag.setAttribute("type", "text/css");

        linkTag.setAttribute("href", styleSheet);
        docHead.append(linkTag);
    }

    if ( !alt_layout ) {
        applyStylesheet("style.css");
    } else {
        applyStylesheet("style-alt.css");
        applyStylesheet("style-alt-theme.css");
    }
}
setLayout();

// Set restricted mode
function setRestricted() {
    if ( restricted ) {
        max_compare = 2;
        disallow_target = true;
        premium_html = "<h2>You gonna pay for that?</h2><p>To use target curves, or more than two graphs, <a target='_blank' href='https://crinacle.com/wp-login.php?action=register'>subscribe</a> or upgrade to Patreon <a target='_blank' href='https://www.patreon.com/join/crinacle/checkout?rid=3775534'>Silver tier</a> and switch to <a target='_blank' href='https://crinacle.com/graphs/iems/graphtool/premium/'>the premium tool</a>.</p>";
    }
}
setRestricted();

// Configure HTML accessories to appear at the bottom of the page. Displayed only if accessories (above) is true
// There are a few templates here for ease of use / examples, but these variables accept any HTML
const
    // Short text, center-aligned, useful for a little side info, credits, links to measurement setup, etc.
    simpleAbout = `
        <p class="center">This web software is based on the <a href="https://github.com/mlochbaum/CrinGraph">CrinGraph</a> open source software project.</p>
    `,
    // Slightly different presentation to make more readable paragraphs. Useful for elaborated methodology, etc.
    paragraphs = `
        <h2>Viverra tellus in hac</h2>

        <p>Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac. Dictumst quisque sagittis purus sit amet volutpat consequat. Vitae nunc sed velit dignissim sodales ut. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Dignissim enim sit amet venenatis urna cursus eget nunc. Mi proin sed libero enim. Ut sem viverra aliquet eget sit amet. Integer enim neque volutpat ac tincidunt vitae. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Lacus luctus accumsan tortor posuere ac ut consequat semper. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Aliquam sem et tortor consequat id. Cursus sit amet dictum sit amet justo donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere.</p>

        <p>Diam donec adipiscing tristique risus nec. Amet nisl purus in mollis. Et malesuada fames ac turpis egestas maecenas pharetra. Ante metus dictum at tempor commodo ullamcorper a. Dui id ornare arcu odio ut sem nulla. Ut pharetra sit amet aliquam id diam maecenas. Scelerisque in dictum non consectetur a erat nam at. In ante metus dictum at tempor. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Malesuada proin libero nunc consequat interdum. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Quis blandit turpis cursus in hac habitasse. Amet commodo nulla facilisi nullam vehicula ipsum a.</p>

        <p>Mauris ultrices eros in cursus turpis massa tincidunt. Aliquam ut porttitor leo a diam sollicitudin. Curabitur vitae nunc sed velit. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Lectus nulla at volutpat diam ut. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Tincidunt id aliquet risus feugiat in ante metus. Elementum nibh tellus molestie nunc non blandit massa enim. Ac tortor vitae purus faucibus ornare suspendisse. Pellentesque sit amet porttitor eget. Commodo quis imperdiet massa tincidunt. Nunc sed id semper risus in hendrerit gravida. Proin nibh nisl condimentum id venenatis a condimentum. Tortor at risus viverra adipiscing at in. Pharetra massa massa ultricies mi quis hendrerit dolor. Tempor id eu nisl nunc mi ipsum faucibus vitae.</p>

        <h2>Tellus orci</h2>

        <p>Viverra mauris in aliquam sem. Viverra tellus in hac habitasse platea. Facilisi nullam vehicula ipsum a arcu cursus. Nunc sed augue lacus viverra vitae congue eu. Pretium fusce id velit ut tortor pretium viverra suspendisse. Eu scelerisque felis imperdiet proin. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Tellus at urna condimentum mattis pellentesque. Congue nisi vitae suscipit tellus. Ut morbi tincidunt augue interdum.</p>

        <p>Scelerisque in dictum non consectetur a. Elit pellentesque habitant morbi tristique senectus et. Nulla aliquet enim tortor at auctor urna nunc id. In ornare quam viverra orci. Auctor eu augue ut lectus arcu bibendum at varius vel. In cursus turpis massa tincidunt dui ut ornare lectus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. A diam sollicitudin tempor id. Tellus mauris a diam maecenas sed enim ut sem. Pellentesque id nibh tortor id aliquet lectus proin. Fermentum et sollicitudin ac orci phasellus. Dolor morbi non arcu risus quis. Bibendum enim facilisis gravida neque. Tellus in metus vulputate eu scelerisque felis. Integer malesuada nunc vel risus commodo. Lacus laoreet non curabitur gravida arcu.</p>
    `,
    // Customize the count of widget divs, and customize the contents of them. As long as they're wrapped in the widget div, they should auto-wrap and maintain margins between themselves
    widgets = `
        <div class="accessories-widgets">
            <div class="widget">
                <img width="200" src="logo.svg"/>
            </div>

            <div class="widget">
                <img width="200" src="logo.svg"/>
            </div>

            <div class="widget">
                <img width="200" src="logo.svg"/>
            </div>
        </div>
    `,
    // Which of the above variables to actually insert into the page
    whichAccessoriesToUse = simpleAbout;

// Configure external links to appear at the bottom of the page. Displayed only if externalLinksBar (above) is true
const linkSets = [
    {
        label: "Other IEM databases",
        links: [
            {
                name: "Audio Discourse",
                url: "https://iems.audiodiscourse.com/"
            },
            {
                name: "Banbeucmas",
                url: "https://banbeu.com/graph/tool/"
            },
            {
                name: "Crinacle: In-Ear Fidelity",
                url: "https://crinacle.com/graphs/iems/graphtool/"
            },
            {
                name: "Dent Reviews",
                url: "http://dent.reviews/squigz/graph.html"
            },
            {
                name: "HypetheSonics",
                url: "https://www.hypethesonics.com/iemdbc/"
            }
        ]
    },
    {
        label: "Headphone databases",
        links: [
            {
                name: "Audio Discourse",
                url: "http://headphones.audiodiscourse.com/"
            },
            {
                name: "Crinacle: In-Ear Fidelity",
                url: "https://crinacle.com/graphs/headphones/graphtool/"
            }
        ]
    }
];

// Set up analytics
function setupGraphAnalytics() {
    if ( analyticsEnabled ) {
        const pageHead = document.querySelector("head"),
              graphAnalytics = document.createElement("script"),
              graphAnalyticsSrc = "graphAnalytics.js";

        graphAnalytics.setAttribute("src", graphAnalyticsSrc);
        pageHead.append(graphAnalytics);
    }
}
setupGraphAnalytics();

window.dataLayer = window.dataLayer || [];

// For events not related to a specific phone, e.g. user clicked screenshot button
function pushEventTag(eventName, targetWindow, other, trigger) {
    let eventTrigger = trigger ? trigger : "user",
        url = targetWindow.location.href,
        par = "?share=",
        value = 1,
        activePhones = url.includes(par) ? decodeURI(url.replace(/_/g," ").split(par).pop().replace(/,/g, ", ")) : "null",
        otherData = other ? other : "null";

    window.dataLayer.push({
        "event" : eventName,
        "trigger" : eventTrigger,
        "site": analyticsSite,
        "activePhones": activePhones,
        "other": otherData,
        "value": value
    });

    if (logAnalytics) { console.log("Event:      "+ eventName +"\nTrigger:    "+ eventTrigger +"\nSite name:  "+ analyticsSite +"\nActive:     "+ activePhones +"\nOther:      "+ otherData); }
}

// If alt_header is enabled, these are the items added to the header
let headerLogoText = "",
    headerLogoImgUrl = "logo-w.png",
    headerLinks = [
    // {
    //     name: "Sample",
    //     url: "https://squig.link/"
    // }
    {
        name: "squig.link",
        url: "https://tinnitus-hifi.squig.link/"
    },
    {
        name: "THF youtu",
        url: "https://www.youtube.com/@TinnitusHiFi"
    },
    {
        name: "THF facebug",
        url: "https://www.facebook.com/groups/1113067072770396/"
    },
    {
        name: "nascii blog",
        url: "https://nasciiboy.github.io"
    }
];

let tutorialDefinitions = [
    {
        name: 'Sub bass',
        width: '20.1%',
        description: '<b>Sub bass</b> frequencies are responsible for rumble. Elevated sub bass can lend an added sense of depth to music, and usually does not come at the expense of "bleeding into the midrange." Is there a limit to how much sub bass sounds good? Some may argue no, but I find too much sub bass can sound conspicuously disjointed from the rest of the music. It\'s notable, however, that a lot of music is light on usage of sub bass, so a sound signature that\'s big on sub-bass but light on mid bass may not sound very bassy with some popular recordings.'
    },
    {
        name: 'Mid bass',
        width: '19.2%',
        description: '<b>Mid bass</b> is responsible for a sense of punch. In contrast to sub bass, mid bass is typically more percussive and energetic, feeling like it\'s literally pushing air, and can lend a sense of body and fullness to a sound. Listeners craving a "bassy" sound will commonly be more satisfied by mid bass emphasis, as it will add a bassy punch to most common music. However, too much mid bass can give the sound a sense of bloat, or even yield the dreaded midrange "bleed" in which lower midrange notes are masked and smeared by excessive mid bass presence. Ideally, mid bass tapers off by 200Hz.'
    },
    {
        name: 'Lower midrange',
        width: '17.4%',
        description: 'A full <b>lower midrange</b>, tapering upward into the bass region, can lend a sense of thickness and warmth to the overall tone, while a "scooped" lower midrange can give a very clean sound at the cost of some thinness to the body. A lot of deep vocal micro detail depends on a well-executed lower midrange. But lower midrange is often sacrificed to create contrast between bass and treble for a typical "V-shaped" sound signature, which will commonly exhibit less natural vocal timbre than a more linear midrange tune.'
    },
    {
        name: 'Upper midrange',
        width: "20%",
        description: '<b>Upper midrange</b> is where a lot of "clarity" in a tune comes from. An elevated -- or "forward" -- upper midrange typically results in a forward vocal presentation, especially emphasizing higher-pitched vocals. Trumpets and guitars get their bite from upper midrange frequencies. Too much upper midrange can result in shrill or "shouty" vocals. Too little can result in a distant, recessed sound that\'s low on clarity. And uneven upper midrange emphasis can lead to oddly nasal or hollow vocals, with other odd timbral effects.'
    },
    {
        name: 'Presence region',
        width: '6%',
        description: 'Also commonly referred to as "lower treble," the <b>presence region</b> has a lot to do with the naturalness of vocal transients. Too much emphasis here and vocals may take on an "edgy" or metallic character. Too little emphasis and the tune can lose definition and sound soft or dark. Much of the initial bite of trumpet and acoustic guitar string transients comes from a well-tuned presence region.'
    },
    {
        name: 'Mid treble',
        width: '7.3%',
        description: 'A lot of treble harshness and fatigue comes from the <b>mid treble</b>. Peaks in this region commonly result in unpleasant sharpness, or sibilance in vocals which adds abrasive harshness to S and T sounds. Too little mid treble, however, will result in a dark or dead sound, resulting in odd timbre to cymbal strikes. Making matters difficult for us graph readers, there is a commonly-observed "resonance peak" that appears in measurements, usually situated at 8kHz, that is an artifact of the measurement process. It can often be hard to tell how much of such a peak is "real" without listening.'
    },
    {
        name: 'Air',
        width: '10%',
        description: 'In the way sub bass can add a sense of depth to the low end, <b>air</b> frequencies -- also called upper treble -- can add a dimensionality via the top end. When air frequencies are "rolled off," the sound may lose a sense of micro detail and definition, and cymbals may lose shimmer, leaving them blunt in their decay. Too much air is not common, but certainly possible, resulting in a fatiguing "shh shh" to cymbals, drum brushes, and other high-frequency sounds.'
    }
]
