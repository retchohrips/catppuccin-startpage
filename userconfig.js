let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

// Color Reference:
// Rosewater: #f5e0dc
// Flamingo: #f2cdcd
// Pink: #f5c2e7
// Mauve: #cba6f7
// Red: #f38ba8
// Maroon: #eba0ac
// Peach: #fab387
// Yellow: #f9e2af
// Green: #a6e3a1
// Teal: #94e2d5
// Sky: #89dceb
// Sapphire: #74c7ec
// Blue: #89b4fa
// Lavender: #b4befe

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "",
    scale: "F",
  },
  clock: {
    format: "I:M p",
    iconColor: "#f38ba8",
    link: "https://calendar.google.com",
  },
  disabled: [],
  fastlink: { link: "", icon: "home" },
  openLastVisitedTab: true,
  tabs: [
    {
      name: "c h i l l",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social",
          links: [
            {
              name: "Blåhaj Zone",
              url: "https://blahaj.zone",
              icon: "bubble",
              icon_color: "#89b4fa",
            },
            {
              name: "Pinterest",
              url: "https://pinterest.com",
              icon: "brand-pinterest",
              icon_color: "#eba0ac",
            },
            {
              name: "Reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: "#fab387",
            },
            {
              name: "Tumblr",
              url: "https://tumblr.com",
              icon: "brand-tumblr",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Archive of Our Own",
              url: "http://archiveofourown.org/",
              icon: "letter-a",
              icon_color: "#f38ba8",
            },
            {
              name: "Lofi ATC",
              url: "https://www.lofiatc.com/",
              icon: "plane",
              icon_color: "#b4befe",
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: "#fab387",
            },
            {
              name: "YouTube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: "#f38ba8",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "GitHub",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
            {
              name: "MDN",
              url: "https://developer.mozilla.org/en-US/",
              icon: "letter-m",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "learning",
          links: [
            {
              name: "freeCodeCamp",
              url: "https://freecodecamp.org",
              icon: "flame",
              icon_color: "#a6adc8",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "Scrimba",
              url: "https://scrimba.com",
              icon: "grid-pattern",
              icon_color: "#89b4fa",
            },
            {
              name: "Exercism",
              url: "https://exercism.org",
              icon: "code",
              icon_color: "#b4befe",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
