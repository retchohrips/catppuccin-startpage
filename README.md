<h3 align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
  Catppuccin <a href="https://github.com/retchohrips/catppuccin-startpage">Startpage</a>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
  <a href="https://github.com/retchohrips/catppuccin-startpage/stargazers">
    <img src="https://img.shields.io/github/stars/retchohrips/catppuccin-startpage?style=for-the-badge&logo=starship&color=a6e3a1&logoColor=D9E0EE&labelColor=302D41">
  </a>
  <a href="https://github.com/retchohrips/catppuccin-startpage/issues">
    <img src="https://img.shields.io/github/issues/retchohrips/catppuccin-startpage?style=for-the-badge&logo=gitbook&color=fab387&logoColor=D9E0EE&labelColor=302D41">
  </a>
  <a href="https://github.com/retchohrips/catppuccin-startpage/contributors">
    <img src="https://img.shields.io/github/contributors/retchohrips/catppuccin-startpage?style=for-the-badge&logo=github&color=f38ba8&logoColor=D9E0EE&labelColor=302D41">
  </a>
</p>

> [NOTE]
> A live demo can be found [here](https://retchohrips.github.io/catppuccin-startpage)

## Overview

Aesthetic and clean startpage in [**Catppuccin**](https://catppuccin.com/palette) style, hosted on GitHub Pages. This start page is based on the [`dawn`] and [`tartarus-startpage`], which has even more functionality.
This project is a fork of [`catppuccin-startpage`], with the following improvements:

-   12 hour clock option
-   use wttr.in for weather, so that you don't have to manually input your location
    -   you can still input a location if you need (ex. if using a VPN)
-   clock link

## Usage

1. Fork this repo
2. Enable GitHub Pages at `Settings` > `Pages` > `Source` > `Deploy from a branch`
3. Clone your repository with:

```bash
git clone https://github.com/{YOURUSERNAME}/catppuccin-startpage.git
```

4. Update [`userconfig.js`]:
    - Update the number of pages and their banners
    - Update bookmarks and quick links
    - Set your location for the weather widget, if you want to
5. Commit and push your changes
6. Set your homepage/new tab page using [this](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) on Firefox or [this](https://chromewebstore.google.com/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) on Chromium (Brave, Edge, Chrome, etc.)
7. Enjoy your new homepage :3

> [TIP]
> You can find icons for your bookmarks using [`tabler-icons`]
>
> If you want to reduce the loading time of the icons, you can install the icon [font] locally and activate the option `"localIcons": true` in the config to disable the remote styles

### Available banners

| cbg-2                                           | cbg-3                                           | cbg-4                                           | cbg-5                                           |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| <img src="src/img/banners/cbg-2.gif" width=175> | <img src="src/img/banners/cbg-3.gif" width=175> | <img src="src/img/banners/cbg-4.gif" width=175> | <img src="src/img/banners/cbg-5.gif" width=175> |

| cbg-6                                           | cbg-7                                           | cbg-8                                           | cbg-9                                           |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| <img src="src/img/banners/cbg-6.gif" width=175> | <img src="src/img/banners/cbg-7.gif" width=175> | <img src="src/img/banners/cbg-8.gif" width=175> | <img src="src/img/banners/cbg-9.gif" width=175> |

| cbg-10                                           | cbg-11                                           | cbg-12                                           | cbg-13                                           |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| <img src="src/img/banners/cbg-10.gif" width=175> | <img src="src/img/banners/cbg-11.gif" width=175> | <img src="src/img/banners/cbg-12.gif" width=175> | <img src="src/img/banners/cbg-13.gif" width=175> |

[`dawn`]: https://github.com/b-coimbra/dawn
[Catppuccin]: https://github.com/catppuccin/catppuccin
[`tartarus-startpage`]: https://github.com/AllJavi/tartarus-startpage
[`catppuccin-startpage`]: https://github.com/pivoshenko/catppuccin-startpage
[`userconfig.js`]: userconfig.js
[`tabler-icons`]: https://tabler.io/icons
[font]: src/fonts
