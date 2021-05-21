# BetterLeftSidebar
An extension developed for legacy [Spicetify](https://github.com/khanhas/spicetify-cli/) that provides users with more customization options for the left sidebar. Primary usage is for toggling the visbility of different sections.

<!--![Demo Gif](demo.gif "Demo")-->

## What it does
This extension is reasonably simple. It reads pre-set options from a configuration and applies those settings to the Spotify client. Current options allow users to:
- Remove the left sidebar entirely, as well as its individual sections (Top/Your Library/Playlists)
- Rearrange or remove any items under the "Your Library" section

It strictly affects the DOM alone and should therefore be compatable with any theme.

## How to install it
Make sure you have a functioning install of legacy [Spicetify](https://github.com/khanhas/spicetify-cli/) (v1.2.1). Download the file in this repository called `BetterLeftSidebar.js` and place this file inside your `.spicetify/Extensions` folder. If this is your first time downloading an extension, you may want to reference [this](https://github.com/khanhas/spicetify-cli/wiki/Extensions) document.

Once you have placed the file in the Extensions directory, you need to open the file called `config.ini` (should be in the parent directory) and edit the `Extensions` value under `AdditionalOptions`. If you have no other extensions, set it equal to the filename of this extension (`BetterLeftSidebar.js`). If you have other extensions installed, precede the filename with a pipe character (`|`) as mentioned in the [documentation](https://github.com/khanhas/spicetify-cli/wiki/Extensions). 

The final step is to open this extension's file (`BetterLeftSidebar.js`) and look near the top for something that says `const CONFIG = {`. This is a JavaScript object that contains configurable values to modify the behavior of the extension. If you don't know anything about JavaScript objects, that's fine, there are comments above each config variable explaining its purpose. The value of each variable is on the right of the colon; these are what you should change. For example, changing `REMOVE_LEFT_SIDEBAR: false,` to `REMOVE_LEFT_SIDEBAR: true,` would completely remove the left sidebar, as is noted by the comment above the variable. Once you have configured the options to your liking, you **must** run `spicetify apply` in your terminal, otherwise your changes will not be applied.

## What if it doesn't work
If you encounter any bugs or unexpected behavior, please file an issue explaining your problem and how to replicate it. Including screenshots is always helpful, and bonus points if you mention any errors appearing in the DevTools console.

## Bonus: How it works
This is for developers that want to get a bit of an insight into how the code works.

If you reference the file, you should find it to be reasonably well-commented. It's a lot of DOM manipulation and nothing super complex for devs that have messed with vanilla js before. I store each of the three left sidebar sections in variables after they've loaded into the DOM, then call `.remove()` on them after reading the appropriate config value for that section.
In the case of rearranging certain section items, I parse and sort the config values so that the keys are in descending order by the user's specified position. This gives me a nice, iterable array of strings where the topmost element is what the user would like to see on top. Since the elements are strings, for each iteration I check a stored copy of the "Your Library" element and see if the `innerText` property equals the current element. If it does, I push it into the DOM's current "Your Library" element, which was reset earlier in my code to contain no `innerHTML`. As elements get pushed, it begins to populate until it contains exactly the same amount of elements it had earlier, just in a different order.

## Conclusion
Thank you for using my extension.

If you would like to contribute, please feel free to create a pull request or contact me on Discord: Ollog10#2051

God bless!
