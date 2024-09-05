let introMode = 'prod', // 'prod' 'dev'
    urlParams = new URLSearchParams(window.location.search),
    embedMode = urlParams.has('embed');

let contentWelcome = [
        {
            'heading': 'Welcome to Squiglink',
            'animation': 'slide_01.mp4',
            'copy': [
                'This is a squig',
                'It represents the audible frequency response of a particular headphone model, which <strong>tells us a lot about how it sounds</strong>.'
            ],
            'slideBack': 0,
            'slideNext': 2
        },
        {
            'heading': 'Welcome to Squiglink',
            'animation': 'slide_02.mp4',
            'copy': [
                'The squig tells us if the headphone sounds louder in the treble.',
                'Or louder in the bass.'
            ],
            'slideBack': 1,
            'slideNext': 3
        },
        {
            'heading': 'Welcome to Squiglink',
            'animation': 'slide_03.mp4',
            'copy': [
                'Every brand and model of headphone has its own unique sound, and by comparing squigs you can find the model that <strong>sounds the best for you</strong>.'
            ],
            'slideBack': 2,
            'slideNext': 4
        },
        {
            'heading': 'How do I know if a squig is good?',
            'animation': 'slide_04.mp4',
            'copy': [
                'Dotted gray lines are targets. They represent an ideal frequency response.',
                'Ideal for someone, at least.'
            ],
            'slideBack': 3,
            'slideNext': 5
        },
        {
            'heading': 'How do I know if a squig is good?',
            'animation': 'slide_06.mp4',
            'copy': [
                'People have different preferences \u2014 <strong>what’s ideal for one person isn’t necessarily ideal for you</strong>.',
                'Use the default target as a starting point, or use the target of a reviewer who has preferences similar to yours.'
            ],
            'slideBack': 4,
            'slideNext': 6
        },
        {
            'heading': 'How do I know if a squig is good?',
            'animation': 'slide_05.mp4',
            'copy': [
                'By comparing squigs with targets, you can see if a particular headphone...',
                '...is "too bright"<br/>...has "not enough bass"<br/>...or the "vocals are recessed."'
            ],
            'slideBack': 5,
            'slideNext': 7
        },
        {
            'heading': 'How do I know if a squig is good?',
            'animation': 'slide_07.mp4',
            'copy': [
                'Tap the frequency band labels below the graph \u2014 like "Sub bass" and "Presence region" \u2014 for <strong>more detailed explanations</strong> of what being above or below the target in each region  sounds like.'
            ],
            'slideBack': 6,
            'slideNext': 8
        },
        {
            'heading': 'Happy squiggling!',
            'animation': 'slide_08.mp4',
            'copy': [
                '<strong>Reading squigs takes practice</strong>. Experiment with headphones you own, and engage with the audio community to learn and improve your squigcraft.'
            ],
            'slideBack': 7,
            'slideNext': 0
        }
    ];

let contentEq = [
        {
            'heading': 'How to use EQ on Squiglink',
            'animation': 'eq_slide_intro.mp4',
            'copy': [
                'EQ on Squiglink is a powerful tool that enables you to customize the sound of any headphone. What do you want to do?'
            ],
            'links': [
                {
                    'linkText': '<strong>Beginner:</strong> AutoEQ to a target response',
                    'linkSlide': 3
                },
                {
                    'linkText': '<strong>Intermediate:</strong> AutoEQ to another headphone',
                    'linkSlide': 4
                },
                {
                    'linkText': '<strong>Advanced</strong>: Make manual corrections',
                    'linkSlide': 5
                },
                {
                    'linkText': 'Export my EQ profile',
                    'linkSlide': 2
                }
            ],
            'slideBack': 0,
            'slideNext': 3
        },
        {
            'heading': 'Export my EQ profile',
            'animation': 'eq_slide_export.mp4',
            'copy': [
                'When you\'re ready to listen to your creation, you can export an EQ profile and import it to your favorite compatible EQ application. Look for the <i>Export</i> button on the Equalizer tab.',
                '<hr/>',
                'Some popular compatible apps:',
                '<strong><a target="_blank" href="https://www.qudelix.com/products/qudelix-5k-dac-amp?utm_source=squiglink&utm_medium=tutorial&utm_campaign=eq-export">Qudelix 5K</a></strong>',
                '<i>Android + iOS + PC</i>',
                'Qudelix 5K Chrome app now supports importing Squiglink EQ profiles. Mobile app support is expected soon.',
                '<strong><a target="_blank" href="https://sourceforge.net/p/peace-equalizer-apo-extension/wiki/Home/?utm_source=squiglink&utm_medium=tutorial&utm_campaign=eq-export">Peace + Equalizer APO</a></strong>',
                '<i>Windows</i>',
                '<strong><a target="_blank" href="https://rogueamoeba.com/soundsource/?utm_source=squiglink&utm_medium=tutorial&utm_campaign=eq-export">SoundSource</a></strong>',
                '<i>MacOS</i>',
                '<strong><a target="_blank" href="https://play.google.com/store/apps/details?id=com.pittvandewitt.wavelet&hl=en_US&gl=US&utm_source=squiglink&utm_medium=tutorial&utm_campaign=eq-export">Wavelet</a></strong>',
                '<i>Android</i>',
                'You can export a graphic equalizer-adapted version of your EQ profile that\'s compatible with Wavelet on Android. Look for the <i>Export Graphic EQ</i> button.',
                '<hr/>'
            ],
            'links': [
                {
                    'linkText': '<strong>Beginner:</strong> AutoEQ to a target response',
                    'linkSlide': 3
                },
                {
                    'linkText': '<strong>Intermediate:</strong> AutoEQ to another headphone',
                    'linkSlide': 4
                },
                {
                    'linkText': '<strong>Advanced</strong>: Make manual corrections',
                    'linkSlide': 5
                }
            ],
            'slideBack': 1,
            'slideNext': 0
        },
        {
            'heading': 'AutoEQ to a target response',
            'animation': 'eq_slide_autoeq_target_alt.mp4',
            'copy': [
                'Using AutoEQ to match your headphone to a target frequency response lets you tune your headphone to one of many industry-standard target responses, or try out a reviewer\'s target to see if your preferences match theirs.',
                '<hr/>',
                '<strong>Step 1:</strong> Select one of the targets available below the graph window.',
                '<strong>Step 2:</strong> Select your headphone from the list of models.',
                '<strong>Step 3:</strong> Hit the <i>AutoEQ</i> button on the Equalizer tab and watch AutoEQ work its magic.',
                '<hr/>',
                'Voila! You\'re done.',
                'Quick note! AutoEQing treble frequencies above 7,000Hz can be hit or miss, since high frequency peaks and dips are highly personal to your individual ear anatomy. Consider manual corrections when you\'ve got the hang of things.'
            ],
            'links': [
                {
                    'linkText': 'Export my EQ profile',
                    'linkSlide': 2
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 1
                }
            ],
            'slideBack': 1,
            'slideNext': 2
        },
        {
            'heading': 'AutoEQ to another headphone',
            'animation': 'eq_slide_autoeq_headphone_alt.mp4',
            'copy': [
                'Using AutoEQ to match your headphone to the response of another headphone is a good way to "test drive" the sound of headphones you don\'t have. It won\'t tell you exactly what that other headphone sounds like, but it\'ll give you a very good idea.',
                '<hr/>',
                '<strong>Step 1:</strong> Disable all target responses from the active graph window.',
                '<strong>Step 2:</strong> Select your headphone from the list of models.',
                '<strong>Step 3:</strong> Use the + button to select a second headphone you want to match from the list of models and add it to the graph window without replacing yours.',
                '<strong>Step 4:</strong> Hit the <i>AutoEQ</i> button on the Equalizer tab.',
                '<hr/>',
                'Quick note! AutoEQing treble frequencies above 7,000Hz can be hit or miss, since high frequency peaks and dips are highly personal to your individual ear anatomy. Consider manual corrections when you\'ve got the hang of things.'
            ],
            'links': [
                {
                    'linkText': 'Export my EQ profile',
                    'linkSlide': 2
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 1
                }
            ],
            'slideBack': 1,
            'slideNext': 2
        },
        {
            'heading': 'Make manual corrections',
            'animation': 'eq_slide_manual.mp4',
            'copy': [
                'Using manual, targeted adjustments with EQ, you can make significant "corrections" to the sound of your headphone to personalize it exactly how you want.'
            ],
            'links': [
                {
                    'linkText': 'About: EQ filters',
                    'linkSlide': 6
                },
                {
                    'linkText': 'About: Filter variables',
                    'linkSlide': 7
                },
                {
                    'linkText': 'Remove muddy bass',
                    'linkSlide': 8
                },
                {
                    'linkText': 'Add a clean bass boost',
                    'linkSlide': 9
                },
                {
                    'linkText': 'Locate treble peaks',
                    'linkSlide': 10
                },
                {
                    'linkText': 'Remove treble peaks',
                    'linkSlide': 11
                },
                {
                    'linkText': 'Export my EQ profile',
                    'linkSlide': 2
                }
            ],
            'slideBack': 1,
            'slideNext': 6
        },
        {
            'heading': 'EQ filters',
            'animation': 'eq_slide_filters.mp4',
            'copy': [
                'It all happens with these: EQ filters. There are three types of filters.',
                '<hr/>',
                '<strong>PK</strong>: Common peak filters enable narrow or wide adjustments that center at a given frequency. These filters are good for e.g. smoothing out peaks. Typical EQ profiles contain one or more peak filters.',
                '<hr/>',
                '<strong>LSQ</strong>: Low shelf filters let you specify a frequency and then adjust everything BELOW that point. These filters are good for e.g. adding a "bass shelf." Typical EQ profiles contain just one low shelf filter.',
                '<hr/>',
                '<strong>HSQ</strong>: High shelf filters let you specify a frequency and then adjust everything ABOVE that point. These filters are good for e.g. adding "air" to the high frequencies. Typical EQ profiles contain just one high shelf filter.',
                '<hr/>',
                'You can use as few or as many EQ filters you like to build a profile. Though note that some EQ apps max out at 10 filters.'
            ],
            'links': [
                {
                    'linkText': 'About: Filter variables',
                    'linkSlide': 7
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 5
                }
            ],
            'slideBack': 5,
            'slideNext': 7
        },
        {
            'heading': 'Filter variables',
            'animation': 'eq_slide_filter_variables.mp4',
            'copy': [
                'Each filter has three variables you control that change the effect of the filter.',
                '<hr/>',
                '<strong>Frequency:</strong> The heart of an EQ filter is the specific frequency you\'re targeting. Remember, <i>bass</i> frequencies are between 20 and 300Hz, <i>midrange</i> between 300 and 4,000Hz, and <i>treble</i> between 4,000 and 20,000Hz.',
                '<hr/>',
                '<strong>Gain:</strong> Gain is the amount that you are changing the specified frequency, measured in decibels. The number can be either positive or negative, where a positive number increases the volume of that frequency and a negative number decreases it.',
                '<hr/>',
                '<strong>Q:</strong> The Q-factor of a filter indicates how narrow or broad its effect. The larger the Q number, the narrower and more targeted the effect. Smaller numbers allow for smoother, more gradual adjustments, but are less targeted. Note that you can use decimals for smaller numbers and broader effects.'
            ],
            'links': [
                {
                    'linkText': 'How to: Remove muddy bass',
                    'linkSlide': 8
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 5
                }
            ],
            'slideBack': 5,
            'slideNext': 8
        },
        {
            'heading': 'Remove muddy bass',
            'animation': 'eq_slide_how_bassbloat.mp4',
            'copy': [
                'Too much bass in the wrong part of the frequency response can make the bass sound soft and even compromise midrange detail with its muddiness. Cutting bloat is a good way to solve that, without losing the good bass you love.',
                '<hr/>',
                'Select the <strong>PK</strong> filter type, and specify a frequency of between <strong>150 and 300Hz</strong>.',
                'A Q-factor of <strong>1.0</strong> will let you cut the bloat without cutting your good bass. Now input a negative gain of between <strong>-2 to -5dB</strong> -- the more negative gain, the less mud and more clarity you\'ll get.'
            ],
            'links': [
                {
                    'linkText': 'How to: Add a clean bass boost',
                    'linkSlide': 9
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 5
                }
            ],
            'slideBack': 5,
            'slideNext': 9
        },
        {
            'heading': 'Add a clean bass boost',
            'animation': 'eq_slide_how_bassshelf.mp4',
            'copy': [
                'Want to evenly and <i>cleanly</i> boost the bass of your headphone? A "bass shelf" is what you want.',
                '<hr/>',
                'Select the <strong>LSQ</strong> filter type, and specify a frequency of between <strong>20 and 150Hz</strong>.',
                'A Q-factor of <strong>1.0</strong> will keep your bass shelf from introducing any muddiness. From there, set the gain to taste -- anywhere between <strong>1 - 5dB</strong> is reasonable. Up to 10dB is a little nutty, but you might just like it.'
            ],
            'links': [
                {
                    'linkText': 'How to: Locate treble peaks',
                    'linkSlide': 10
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 5
                }
            ],
            'slideBack': 5,
            'slideNext': 10
        },
        {
            'heading': 'Locate treble peaks',
            'animation': 'eq_slide_sweep_alt.mp4',
            'copy': [
                'With most frequencies, it\'s easy enough to use the measurements on Squiglink to see where you might want changes. But treble frequencies are more difficult, as the various peaks and valleys in the treble are highly personalized to your individual ear anatomy.',
                '<hr/>',
                'Using the <strong>tone generator</strong> while wearing your headphones can help diagnose how treble plays for you personally and locate pesky peaks.',
                '<strong>Warning: Be mindful of volume levels when using the tone generator and don\'t hurt yourself.</strong>',
                'Tap <i>Play</i> to start playing a constant tone at 20Hz. The slider above the Play button lets you "sweep" the frequency range, and you should be able to hear where sounds get louder and quieter in your headphone and in your ear.',
                '<hr/>',
                'Treble frequencies <strong>above 7,000Hz</strong> are where things get hard to predict with a graph alone, so sweep back and forth to locate the peaks you hear. If you find those peaks bothersome, you can target them with EQ adjustments now that you\'ve located them.'
            ],
            'links': [
                {
                    'linkText': 'How to: Remove treble peaks',
                    'linkSlide': 11
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 5
                }
            ],
            'slideBack': 5,
            'slideNext': 11
        },
        {
            'heading': 'Remove treble peaks',
            'animation': 'eq_slide_how_treblepeak.mp4',
            'copy': [
                'Removing treble peaks can significantly reduce fatigue from bright headphones. Before you can remove them, however, you need to locate the peaks.',
                '<hr/>',
                'Select the <strong>PK</strong> filter type, and specify the treble frequency you\'ve identified as the loudest and/or most irritating.',
                'A relatively high Q-factor of between <strong>5.0 - 10.0</strong> will let you target that frequency without nuking the treble around it. From there, input negative gain of between <strong>-2 to -8dB</strong>, depending on the strength of the peak.'
            ],
            'links': [
                {
                    'linkText': 'Export my EQ profile',
                    'linkSlide': 2
                },
                {
                    'linkText': 'Back to menu',
                    'linkSlide': 5
                }
            ],
            'slideBack': 5,
            'slideNext': 2
        }
    ];

let contentDeltaReady = [
        {
            'heading': 'This Squiglink site is 5128Δ ready',
            'animation': 'delta_01_intro.mp4',
            'copy': [
                'What\'s that mean?',
                'The 5128Δ targets make it possible to compare graphs on this site with graphs on other 5128Δ-ready Squiglinks.',
                '<b>Here\'s how it works.</b>'
            ],
            'links': [
                {
                    'linkText': 'How to use 5128Δ targets',
                    'linkSlide': 2
                },
                {
                    'linkText': '5128Δ background',
                    'linkSlide': 3
                }
            ],
            'slideBack': 0,
            'slideNext': 2
        },
        {
            'heading': 'How to use 5128Δ targets',
            'animation': 'delta_02_how.mp4',
            'copy': [
                '<b>Step 1:</b> Select one of the 5128Δ targets (<b>Δ 10dB</b> or <b>IEF Comp</b>) to automatically compensate the graphs you view on this squigsite.',
                '<b>Step 2:</b> When you view graphs on another 5128Δ-ready squigsite, use the same target to make those graphs directly comparable with the graphs on this site.',
                '<hr/>',
                'Comparing graphs between squigsites <i>without</i> compensation is likely to lead to misleading conclusions.',
                'Even with compensation, take results with a grain of salt, but 5128Δ target compensation yields a big improvement in confidence.',
                'Without compensation, estimate about a 40% confidence level when comparing graphs from one squigsite to another. With 5128Δ target compensation, confidence of comparisons improves to about 80%, which is enough to be useful.'
            ],
            'links': [
                {
                    'linkText': '5128Δ background',
                    'linkSlide': 3
                }
            ],
            'slideBack': 1,
            'slideNext': 3
        },
        {
            'heading': '5128Δ background',
            'animation': 'delta_03_why.mp4',
            'copy': [
                'Did you know that the same earphone measured by different Squiglink sites can (and usually does) result in different graphs? This is because the hardware microphones (711 couplers) we use are surprisingly variable. The 5128Δ targets were made to address this variation.',
                'Each 5128Δ-ready squigsite is loaded with two companion targets: <b>Δ 10dB</b> and <b>IEF Comp</b>. These targets are calibrated to address the variation in couplers used by each squigsite.',
                'Want to know more? Here\'s an explanation from <b>listener</b>, who did the research necessary to create the 5128Δ targets.',
                '<hr/>',
                'The 5128Δ target project is a two-pronged effort that aims to make measurements between squigsites more comparable with each other, as well as more comparable with the new Brüel & Kjær 5128 system measurements.',
                '<b>The first prong</b> is compensating as many squigsite couplers as possible to Crinacle\'s 711 coupler, which is used to create <a target="_blank" href="https://crinacle.com/graphs/iems/graphtool/">the world\'s largest individual database of IEM measurements</a>. Compensation is derived by averaging the differences between multiple IEM measurements that Crinacle and the target squigsites have in common.',
                'If a user compensates to the <b>IEF Comp</b> target found in the 5128Δ category, the measurements in that database will be significantly more comparable with Crinacle\'s 711 measurements. Of course, it also means that the measurements can be more accurately compared with measurements on other 5128Δ-ready Squiglink sites.',
                '<b>The second prong</b> is a benefit of using Crinacle\'s 711 clone coupler as the basis for the aforementioned compensation.',
                'Since I have already done analysis of the difference between Crinacle\'s coupler and the new Brüel & Kjær 5128 measurement system (which lead to IEF\'s new 2023 neutral target), I can extrapolate that difference data to the other couplers that are now being compensated to Crinacle\'s 711 clone.',
                'This is applied via the <b>Δ 10dB</b> target, which has the inverse of the <b>IEF Comp</b> built in. This means that if you compensate to the <b>Δ 10dB</b> target, you are theoretically getting something quite close -- at least below ~4-5kHz -- to a 5128 IEM measurement compensated to the "5128 Diffuse Field -10dB tilt" target that Crinacle and Headphones.com are using. Additionally, this makes 711 IEM measurements more comparable to headphones measured on the B&K 5128 system, as headphones and IEMs no longer need different targets on the B&K 5128.',
                'If you decide to use this target without compensation, you are still getting the benefit of a target that sounds quite similar to the -10dB 5128 Diffuse Field tilt, but you may notice it looks different on each squigsite. That\'s because each target is compensated for each squigsite\'s coupler idiosyncrasies.',
                'The goals here are to make measurements across various sites and rigs more comparable, and it achieves that goal through compensating for many coupler idiosyncrasies, as well as nudging users towards reading compensated graphs, as this is the best way to visually compare data from different sources/measurement rigs.',
                'Any questions about the calculation of this can be directed at me (<b>listener.</b> on Discord), and any questions about the implementation can be directed at either me or MRS (<b>typeMRS</b> on Discord).',
                '— <b>listener</b>'
            ],
            'links': [
                {
                    'linkText': 'How to use 5128Δ targets',
                    'linkSlide': 2
                }
            ],
            'slideBack': 1,
            'slideNext': 0
        }
    ];


// Prepare all DOM elements
let parent = document.querySelector('body'),
    shade = document.createElement('section'),
    container = document.createElement('main'),
    header = document.createElement('header'),
    heading = document.createElement('h2'),
    scrollable = document.createElement('article'),
    animation = document.createElement('video'),
    animationContainer = document.createElement('div'),
    copy = document.createElement('div'),
    nav = document.createElement('div'),
    navBack = document.createElement('button'),
    navNext = document.createElement('button'),
    navClose = document.createElement('button');

navNext.addEventListener('click', slideForward);
navBack.addEventListener('click', slideBack);
navClose.addEventListener('click', closeWelcome);

shade.addEventListener('click', function(e) {
  if (e.target !== this) {
    return;
  } else {
      closeWelcome();
  }
});

// Handle button clicks
function slideForward() {
    let navIndex = Number(this.getAttribute('data-nav')),
        contentVar = document.querySelector('main.welcome-container').getAttribute('data-content-source');

    if (isNaN(navIndex)) {
        closeWelcome();
    } else {
        hydrateContent(navIndex, contentVar);
    }
}

function slideBack() {
    let navIndex = Number(this.getAttribute('data-nav')),
        contentVar = document.querySelector('main.welcome-container').getAttribute('data-content-source');

    if (navIndex) hydrateContent(navIndex, contentVar);
}

function slideLinkClick() {
    let navIndex = Number(this.getAttribute('data-nav')),
        contentVar = document.querySelector('main.welcome-container').getAttribute('data-content-source');

    if (navIndex) hydrateContent(navIndex, contentVar);
}

// Set up the DOM for the welcome screen
function buildDom(hydrateWith, contentVar) {
    shade.className = 'welcome-shade';
    container.className = 'welcome-container';
    container.setAttribute('data-content', hydrateWith);
    container.setAttribute('data-content-source', contentVar);
    header.className = 'welcome-header';
    heading.className = 'welcome-heading';
    scrollable.className = 'welcome-scrollable';
    animationContainer.className = 'welcome-animation-container';
    animation.className = 'welcome-animation';
    copy.className = 'welcome-copy';
    nav.className = 'welcome-nav';
    navBack.className = 'button-back';
    navNext.className = 'button-next';
    navClose.className = 'button-close';

    animation.autoplay = true;
    animation.muted = true;
    animation.loop = true;
    animation.playsInline = true;

    header.append(heading);
    header.append(navClose);
    scrollable.append(animationContainer);
    scrollable.append(copy);
    animationContainer.append(animation);
    nav.append(navBack);
    nav.append(navNext);

    container.append(header);
    container.append(scrollable);
    container.append(nav);

    shade.append(container);
    parent.append(shade);

    hydrateContent(hydrateWith, contentVar);
}

// Open the welcome screen
function openWelcome(trigger, contentVar) {
    let content = contentVar,
        // lastWelcomeScreen = contentVar === 'contentWelcome' ? localStorage.getItem('squiglink-welcome') ? Number(localStorage.getItem('squiglink-welcome')) : 1 : localStorage.getItem('squiglink-welcome-eq') ? Number(localStorage.getItem('squiglink-welcome-eq')) : 1;
        lastWelcomeScreen = 1,
        hydrateWith = contentVar === 'contentWelcome' ? lastWelcomeScreen < content.length ? lastWelcomeScreen : 1 : lastWelcomeScreen != 2 ? lastWelcomeScreen : 1;

    shade.setAttribute('data-state', 'open');
    buildDom(hydrateWith, contentVar);

    document.addEventListener('keyup', handleKeyUp);

    function handleKeyUp(e) {
        if (e.keyCode === 27) {
            closeWelcome();
            document.removeEventListener('keyup', handleKeyUp);
        }
    }

    try {
        pushEventTag('welcome_launched', window.top, 'Slide: ' + contentVar + ' ' + hydrateWith, trigger);
    } catch {}
}

// Close the welcome screen
function closeWelcome() {
    let currentSource = container.getAttribute('data-content-source'),
        currentSlide = container.getAttribute('data-content');

    shade.setAttribute('data-state', 'close');
    shade.addEventListener('animationend', removeShade);
    function removeShade() {
        shade.remove();
        container.innerHTML = '';
        shade.removeEventListener('animationend', removeShade);
    };

    // if (currentSource === 'contentWelcome') {
    //     localStorage.setItem('squiglink-welcome', currentSlide);
    //     document.cookie = 'squiglink-welcome-closed=true;max-age=34560000;';
    // } else if (currentSource === 'contentEq') {
    //     localStorage.setItem('squiglink-welcome-eq', currentSlide);
    //     document.cookie = 'squiglink-welcome-eq-closed=true;max-age=34560000;';
    // }

    pushEventTag('welcome_closed', window.top, 'Slide: ' + currentSource + ' ' + currentSlide, 'user');
}

// Hydrate the welcome screen with content
function hydrateContent(index, contentVar) {
    let content = eval(contentVar),
        indexJs = index - 1,
        replacedSlide = container.getAttribute('data-content'),
        thisContent = content[indexJs],
        thisCopy = thisContent.copy,
        thisLinks = thisContent.links,
        copyCount = content.length,
        slideBack = thisContent.slideBack,
        slideNext = thisContent.slideNext,
        textBack = slideBack ? 'Back' : 0,
        textNext = slideNext ? 'Next' : 0;

    heading.textContent = thisContent.heading;
    // Production
    animation.setAttribute('src', 'media/' + thisContent.animation);

    copy.innerHTML = '';
    thisCopy.forEach(function(thisCopyItem) {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = thisCopyItem;
        copy.append(paragraph);
    });

    if (thisLinks) {
        let list = document.createElement('ul');

        list.className = 'slide-links-list';
        copy.append(list);

        thisLinks.forEach(function(thisLink) {
            let listItem = document.createElement('li'),
                thisLinkText = thisLink.linkText,
                thisLinkSlide = thisLink.linkSlide;

            listItem.className = 'slide-link';
            listItem.innerHTML = thisLinkText;
            listItem.setAttribute('data-nav', thisLinkSlide)
            list.append(listItem);

            listItem.addEventListener('click', slideLinkClick);
        });
    }
    scrollable.scrollTop = 0;

    if (slideBack) {
        navBack.textContent = textBack;
        navBack.setAttribute('data-nav', slideBack);
    } else {
        navBack.textContent = '';
        navBack.setAttribute('data-nav', 0);
    }

    if (slideNext) {
        navNext.textContent = textNext;
        navNext.setAttribute('data-nav', slideNext);
        container.setAttribute('data-content', index);
    } else {
        navNext.textContent = 'Done';
        navNext.setAttribute('data-nav', 'close');
        container.setAttribute('data-content', index);
        pushEventTag('welcome_completed', window.top, 'Slide: ' + contentVar + ' ' + index, 'user');
    }

    if (contentVar === 'contentWelcome') localStorage.setItem('squiglink-welcome', index);
    if (contentVar === 'contentEq') localStorage.setItem('squiglink-welcome-eq', index);
}

// Initialize welcome screen
function welcomeInit() {
    let launcher = document.createElement('button'),
        launcherContainer = document.createElement('div'),
        launcherParent = document.querySelector('div.tools'),
        hasSeenWelcome = document.cookie.split(';').some((item) => item.trim().startsWith('squiglink-welcome-closed=')) ? 1 : 0,
        skipToEq = window.location.href.split('?').pop().includes('launch=eq');

    launcher.className = 'welcome-launcher';
    launcher.textContent = '?';
    launcherContainer.className = 'welcome-launcher-container';
    launcherContainer.append(launcher);
    launcherParent.append(launcherContainer);
    addWelcomeCss();

    launcher.addEventListener('click', function(e) {
        openWelcome('user', 'contentWelcome');
        e.stopPropagation();
    });

    if (!hasSeenWelcome && !skipToEq) {
        openWelcome('config', 'contentWelcome');
    }
}
if (!embedMode) welcomeInit();

function welcomeEqInit() {
    let launcher = document.createElement('button'),
        launcherContainer = document.createElement('div'),
        launcherParent = document.querySelector('div.extra-upload'),
        hasSeenWelcome = document.cookie.split(';').some((item) => item.trim().startsWith('squiglink-welcome-eq-closed=')) ? 1 : 0,
        skipToEq = window.location.href.split('?').pop().includes('launch=eq');

    launcher.className = 'welcome-eq-launcher';
    launcher.textContent = '?';
    launcherContainer.className = 'welcome-eq-launcher-container';
    launcherContainer.append(launcher);
    launcherParent.append(launcherContainer);
    addWelcomeCss();

    launcher.addEventListener('click', function(e) {
        openWelcome('user', 'contentEq');
        e.stopPropagation();
    });

    let eqButton = document.querySelector('button.extra');

    eqButton.addEventListener('click', function() {
        if (!hasSeenWelcome) {
            setTimeout(function() {
                openWelcome('config', 'contentEq');
                hasSeenWelcome = 1;
            }, 300);
        };
    });

    if (skipToEq) eqButton.click();
}
welcomeEqInit();

function welcomeDeltaReadyInit() {
    let readyTimer = setInterval(checkReady, 200);

    function checkReady() {
        let launcherParent = document.querySelector('div.delta-targets');

        if (launcherParent) {
            clearInterval(readyTimer);

            let launcher = document.createElement('button'),
                launcherContainer = document.createElement('div');

            launcher.className = 'welcome-deltaReady-launcher';
            launcher.textContent = '?';
            launcherContainer.className = 'welcome-deltaReady-launcher-container';
            launcherContainer.append(launcher);
            launcherParent.append(launcherContainer);
            //addWelcomeCss();

            launcher.addEventListener('click', function(e) {
                openWelcome('user', 'contentDeltaReady');
                e.stopPropagation();
            });
        }
    }
}
welcomeDeltaReadyInit();

function addWelcomeCss() {
    let welcomeStyle = document.createElement('style'),
        welcomeCss = `
            :root {
                --icon-plus: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23000000;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M110,60h0a5,5,0,0,0-5-5H65V15a5,5,0,0,0-5-5h0a5,5,0,0,0-5,5V55H15a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5H55v40a5,5,0,0,0,5,5h0a5,5,0,0,0,5-5V65h40A5,5,0,0,0,110,60Z'/%3E%3C/svg%3E");
                --icon-new-tab: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cdefs%3E%3Cstyle%3E.cls-1,.cls-2%7Bfill:none;stroke:%23231f20;%7D.cls-2%7Bstroke-linecap:round;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M21,11v2c0,3.77,0,5.66-1.17,6.83S16.77,21,13,21H11c-3.77,0-5.66,0-6.83-1.17S3,16.77,3,13V11C3,7.23,3,5.34,4.17,4.17S7.23,3,11,3h1'/%3E%3Cpath class='cls-2' d='M21,3.15H16.76m4.24,0V7.39m0-4.24-8.49,8.48'/%3E%3C/svg%3E");
            }

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;

                width: 100vw;
                height: 100vh;
            }

            div.whatever {
                position: relative;

                width: 800px;
                height: 400px;

                background-color: #ccc;
            }

            div.welcome-launcher-container {
                position: sticky;
                right: 0px;

                flex: auto 0 0;
                order: 5;

                padding: 0 16px;
                margin: 0 0 0 auto;

                background-color: var(--background-color);
                border-left: 1px solid var(--background-color-contrast-more);
            }

            button.welcome-launcher,
            button.welcome-deltaReady-launcher {
                width: 36px;
                height: 36px;
                padding: 12px 0;

                background-color: #FBEB65;
                border: none;
                border-radius: 36px;

                color: #000;
                font-weight: 700;
                font-size: 12px;
                line-height: 1em;

                outline: none;
                cursor: pointer;
                -webkit-appearance: none;
            }

            div.extra-upload {
                position: relative;
            }

            div.welcome-eq-launcher-container {
                position: absolute;
                top: 0;
                right: 0;
            }

            div.extra-panel button.welcome-eq-launcher {
                width: 36px;
                height: 36px;
                padding: 12px 0;

                background-color: #FBEB65 !important;
                border: none;
                border-radius: 36px;

                color: #000;
                font-weight: 700;
                font-size: 12px;
                line-height: 1em;

                outline: none;
                cursor: pointer;
                -webkit-appearance: none;
            }

            button.welcome-deltaReady-launcher {
                margin: 0 0 0 6px;
            }

            section.welcome-shade {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 500;

                display: flex;
                justify-content: center;
                align-items: center;

                width: calc(100vw - 20px);
                height: calc(100vh - 20px);
                max-height: -webkit-fill-available;
                padding: 10px;

                background-color: rgba(0,0,0, 0.8);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);

                animation: welcome-shade-in 0.2s ease-out 1 forwards;
            }

            section.welcome-shade[data-state="ready"] {
                display: none;
                pointer-events: none;
            }

            section.welcome-shade[data-state="close"] {
                pointer-events: none;

                animation: welcome-shade-out 0.2s ease-out 1 forwards;
            }

            @keyframes welcome-shade-in {
                0% {
                    opacity: 0.0;
                }
                100% {
                    opacity: 1.0;
                }
            }

            @keyframes welcome-shade-out {
                0% {
                    opacity: 1.0;
                }
                99% {
                    opacity: 0.0;
                }
                100% {
                    opacity: 0.0;
                }
            }

            main.welcome-container {
                display: flex;
                flex-direction: column;

                width: 100%;
                max-width: 500px;
                height: 740px;
                max-height: -webkit-fill-available;
                overflow: hidden;

                font-family: var(--font-primary);
                font-size: 16px;
                line-height: 1em;

                background-color: #fff;
                border-radius: 45px;
                border: 20px solid #fff;

                box-shadow: 0px 10px 20px rgba(0,0,0, 0.1);

                opacity: 0.0;
                animation: welcome-container-in 0.2s ease-out 1 forwards;
            }

            section.welcome-shade[data-state="close"] main.welcome-container {
                animation: welcome-container-out 0.4s ease-out 1 forwards;
            }

            @keyframes welcome-container-in {
                0% {
                    opacity: 0.0;
                    transform: translateY(100px);
                }
                70% {
                    transform: translateY(-20px);
                }
                100% {
                    opacity: 1.0;
                    transform: translateY(0px);
                }
            }

            @keyframes welcome-container-out {
                0% {
                    opacity: 1.0;
                    transform: translateY(0px);
                }
                30% {
                    transform: translateY(20px);
                }
                100% {
                    opacity: 0.0;
                    transform: translateY(-100px);
                }
            }

            header.welcome-header {
                flex: auto 0 0;
                align-items: flex-start;
                overflow: hidden;

                display: flex;
                min-height: 112px;
            }

            h2.welcome-heading {
                flex: auto 1 1;

                box-sizing: border-box;
                padding: 20px 24px;
                margin: 0;

                color: #000;
                font-weight: 700;
                font-size: 24px;
                line-height: 24px;

                font-size: 36px;
                line-height: 1em;
            }

            button.button-close {
                position: relative;

                flex: 60px 0 0;

                display: block;
                height: 60px;

                background-color: #fff;
                border: none;
                border-radius: 30px;

                cursor: pointer;
                -webkit-appearance: none;
            }

            button.button-close:after {
                position: absolute;

                top: 0;
                left: 0;

                content: '';
                box-sizing: border-box;
                display: block;
                width: 60px;
                height: 60px;

                background-color: #000;
                mask: var(--icon-plus);
                -webkit-mask: var(--icon-plus);

                mask-size: 16px;
                mask-repeat: no-repeat;
                mask-position: center;
                -webkit-mask-size: 16px;
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-position: center;

                pointer-events: none;

                transform: rotate(45deg);
            }

            article.welcome-scrollable {
                display: flex;
                flex-direction: column;

                flex: auto 1 1;
                overflow-y: scroll;
            }

            div.welcome-animation-container {
                position: relative;

                width: 100%;
                height: 0;
                padding: 0 0 50% 0;

                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;
            }

            div.welcome-animation-container:after {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 0;

                content: '';

                display: block;
                width: 10%;
                height: 0;
                padding: 0 0 10% 0;
                margin: auto;

                background-image: url('media/loading.png');
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;

                animation: loading 0.7s ease infinite;
            }

            video.welcome-animation {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;

                flex: auto 0 0;

                width: 100%;
                height: 100%;

                -webkit-mask-image: -webkit-radial-gradient(white, black);
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
            }

            @keyframes loading {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            div.welcome-copy {
                flex: auto 1 1;
                padding:  20px 24px;
            }

            div.welcome-copy p {
                margin: 0;

                color: #000;
                font-weight: 400;
                font-size: 18px;
                line-height: 24px;
            }

            div.welcome-copy p + p {
                margin-top: 1em;
            }

            div.welcome-copy a {

                color: #000;
                text-decoration: underline;
                text-decoration-color: #EB4BD1;
            }

            div.welcome-copy a:first-child {
                position: relative;
                top: 14px;
            }

            div.welcome-copy a:after {
                position: relative;
                top: 2px;

                content: '';
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 0 0 0 2px;

                background-color: #EB4BD1;
                mask: var(--icon-new-tab);
                -webkit-mask: var(--icon-new-tab);
                mask-size: 16px;
                mask-repeat: no-repeat;
                mask-position: center;
                -webkit-mask-size: 16px;
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-position: center;
            }

            div.welcome-copy hr {
                border-top: 1px solid #eee;
            }

            div.welcome-copy em {
            }

            div.welcome-copy ul {
                padding: 0;
                margin: 0 0 0 1em;
            }

            div.welcome-copy li.slide-link {
                margin-top: 1em;
                padding: 0 0 0 0.5em;

                color: #000;
                font-size: 18px;
                line-height: 24px;
                text-decoration: underline;
                text-decoration-color: #EB4BD1;

                list-style-type: "\\25B6";
                cursor: pointer;
            }

            div.welcome-nav {
                flex: auto 0 0;
                justify-content: space-between;

                display: flex;
                position: sticky;
                bottom: 0;

                background-color: #fff;
            }

            div.welcome-nav button {
                flex: calc(50% - 10px) 0 0;
                flex: 50% 0 0;

                display: block;
                padding: 18px 20px;
                margin: 0;

                background-color: #eee;
                border: none;
                border-radius: 30px 0 0 30px;

                color: #000;
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;

                cursor: pointer;

                -webkit-appearance: none;
            }

            div.welcome-nav button.button-next {
                background-color: #FBEB65;
                border-radius: 0 30px 30px 0;

                font-weight: 700;
            }

            div.welcome-nav button[data-nav="0"] {
                opacity: 0.2;

                cursor: auto;
            }

            @media (max-width: 1000px) {
                main.welcome-container {
                    height: 740px;
                    border: none;
                    border-radius: 30px;
                }

                header.welcome-header {
                    min-height: 88px;
                }

                h2.welcome-heading {
                    font-size: 24px;
                }
            }
        `;

    welcomeStyle.setAttribute('type','text/css');
    welcomeStyle.textContent = welcomeCss;
    document.querySelector('body').append(welcomeStyle);
}
