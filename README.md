# BetterLeftSidebar v2
An extension developed for [Spicetify](https://github.com/khanhas/spicetify-cli/) that provides users with more customization options for the left sidebar. Primary usage is for toggling visbility settings.

<!--![Demo Gif](demo.gif "Demo")-->

## What it does
This extension is reasonably simple. It reads pre-set options from a configuration and applies those settings to the Spotify client. Current options allow users to:
- Remove the left sidebar entirely
- Remove anything playlist-related, including the "Create Playlist" button

It strictly affects the DOM alone and should therefore be compatible with any theme. It also compatible with the "sidebar config" mode added with Spicetify 2.3.0

## How to install it
Make sure you have a functioning install of [Spicetify](https://github.com/khanhas/spicetify-cli/) (> v2.1.0). Download the file in this repository called `BetterLeftSidebar.js` and place this file inside your `.spicetify/Extensions` folder. If this is your first time downloading an extension, you may want to reference [this](https://github.com/khanhas/spicetify-cli/wiki/Extensions) document.

Once you have placed the file in the Extensions directory, you need to open the file called `config-xpui.ini` (should be in the parent directory) and edit the `extensions` value under `AdditionalOptions`. If you have no other extensions, set it equal to the filename of this extension (`BetterLeftSidebar.js`). If you have other extensions installed, precede the filename with a pipe character (`|`) as mentioned in the [documentation](https://github.com/khanhas/spicetify-cli/wiki/Extensions). 

The final step is to open this extension's file (`BetterLeftSidebar.js`) and look near the top for something that says `const CONFIG = {`. This is a JavaScript object that contains configurable values to modify the behavior of the extension. If you don't know anything about JavaScript objects, that's fine, there are comments above each config variable explaining its purpose. The value of each variable is on the right of the colon; these are what you should change. For example, changing `REMOVE_LEFT_SIDEBAR: false,` to `REMOVE_LEFT_SIDEBAR: true,` would completely remove the left sidebar, as is noted by the comment above the variable. Once you have configured the options to your liking, you **must** run `spicetify apply` in your terminal, otherwise your changes will not be applied.

## What if it doesn't work
If you encounter any bugs or unexpected behavior, please file an issue explaining your problem and how to replicate it. Including screenshots is always helpful, and bonus points if you mention any errors appearing in the DevTools console.

## Bonus: How it works
This is for developers that want to get a bit of an insight into how the code works.

If you reference the file, you should find it to be reasonably well-commented. It's a lot of DOM manipulation and nothing super complex for devs that have messed with vanilla js before. I browsed through the Spotify HTML until I found the proper elements to alter depending on the user's selected options, then I copied those into the file and ran the proper methods to remove the right HTML.

## Conclusion
Thank you for using my extension.

If you would like to contribute, please feel free to create a pull request or contact me on Discord: Ollog10#2051

God bless!
