// NAME: BetterLeftSidebar
// AUTHOR: elijaholmos
// DESCRIPTION: Allows for customization of the left menu sidebar
// VERSION: 1.0.0

(function BetterLeftSidebar() {
    // User: Change these values to modify extension behavior, be sure to run `spicetify apply` to apply changes
    const CONFIG = {
        //completely removes the left sidebar (including the New Playlist button and three dots)
        REMOVE_LEFT_SIDEBAR: false,
        //remove the top section which consists of Home, Browse, and Play
        REMOVE_TOP_SECTION: true,
        //remove the second section entitled "Your Library"
        REMOVE_YOUR_LIBRARY: false,
        //remove the third section entitled "Playlists"
        REMOVE_PLAYLISTS: false,
        //change the position of each item under "Your Library". 0 removes the item from the section
        YOUR_LIBRARY_SORTING: {
            "Made For You":       1,
            "Recently Played":    2,
            "Liked Songs":        3,
            "Albums":             4,
            "Artists":            5,
            "Local Files":        6,
            "Podcasts":           7
        }
    };
    const VERSION = '1.0.0';    //extension version

    if(!Spicetify.EventDispatcher) {
        setTimeout(BetterLeftSidebar, 500);
        return;
    }

    //do our best to ensure proper spicetify version is being used
    if(!!Spicetify.Platform || !!Spicetify.Player.origin2) {
        Spicetify.showNotification('BetterLeftSidebar is not compatable with Spicetify v2');
        console.error('BetterLeftSidebar is not compatable with Spicetify v2');
        return;
    }

    //parse "Your Library" items sort order from config
    const SORT_ORDER = Object.entries(CONFIG.YOUR_LIBRARY_SORTING).filter(arr => arr[1] !== 0).sort((a, b) => a[1] - b[1]).map(arr => arr.shift());

    //store the html elements that will be modified
    const [top_section, your_library, playlists] = document.querySelectorAll('.LeftSidebar__section');
    if(!top_section || !your_library || !playlists) {
        setTimeout(BetterLeftSidebar, 500);
        return;
    }
    const library_items = [...your_library.querySelectorAll('li')];


    // -------------- Apply User Settings --------------

    console.log(`Running BetterLeftSidebar v${VERSION}`);   //log current version for debugging purposes

    CONFIG.REMOVE_LEFT_SIDEBAR && document.querySelector('#menu-wrapper').remove();
    CONFIG.REMOVE_TOP_SECTION && top_section.remove();
    CONFIG.REMOVE_YOUR_LIBRARY && your_library.remove();
    CONFIG.REMOVE_PLAYLISTS && playlists.remove();

    //change "Your Library" list order
    your_library.querySelector('ul').innerHTML = '';
    for(const name of SORT_ORDER) {
        const el = library_items.find((el) => el.innerText === name);
        !!el && your_library.querySelector('ul').append(el);    //double bang checks against local files, otherwise 'undefined' as a str is appended
    }
})();
