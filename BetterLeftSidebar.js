// NAME: BetterLeftSidebar
// AUTHOR: elijaholmos
// DESCRIPTION: Allows for customization of the left menu sidebar
// VERSION: 2.0.0

(function BetterLeftSidebar() {
    // User: Change these values to modify extension behavior, be sure to run `spicetify apply` to apply changes
    const CONFIG = {
        //completely removes the left sidebar (excluding the three dots at the top)
        REMOVE_LEFT_SIDEBAR: false,
        //remove the "Create Playlist" button and everything below it
        REMOVE_PLAYLISTS: false,
    };
    const VERSION = '2.0.0';    //extension version

    if(!Spicetify.showNotification || !document.querySelector('.Root__nav-bar')) {
        setTimeout(BetterLeftSidebar, 500);
        return;
    }

    //do our best to ensure proper spicetify version is being used
    if(!Spicetify.Platform || !Spicetify.Player.origin2) {
        Spicetify.showNotification('BetterLeftSidebar is not compatable with your version of Spicetify');
        console.error('BetterLeftSidebar is not compatable with your version of Spicetify');
        return;
    }

    // -------------- Apply User Settings --------------

    console.log(`Running BetterLeftSidebar v${VERSION}`);   //log current version for debugging purposes

    if(CONFIG.REMOVE_LEFT_SIDEBAR){ 
        document.querySelector('.Root__nav-bar').remove();
        //change the position of the history btns
        document.querySelector('.main-topBar-historyButtons').style['margin-left'] = '30px';
    }
    CONFIG.REMOVE_PLAYLISTS && document.querySelector('.main-rootlist-rootlist').remove();
})();
