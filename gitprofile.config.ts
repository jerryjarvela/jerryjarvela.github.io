// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jerryjarvela', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['jerryjarvela/jerryjarvela.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Ok I Pull Up',
          description:
            'Ok I Pull Up is a rage platformer, in which you, a capybara, ascend a tree tower only by jumping. This punishing, yet fair game requires extreme patience to complete.',
          imageUrl:
            'https://cdn.akamai.steamstatic.com/steam/apps/2200470/header.jpg?t=1670846748',
          link: 'https://store.steampowered.com/app/2200470/Ok_I_Pull_Up/',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jerry Järvelä',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jerryjarvela',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jerryjarvela.github.io/',
    phone: '',
    email: 'jerryjarvela@outlook.com',
  },
  resume: {
    fileUrl:
      'https://github.com/jerryjarvela/jerryjarvela.github.io/blob/main/JerryJarvelaCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Unity',
    'Git',
    'Github',
    'Zenhub',
    'SCRUM',
  ],
  experiences: [
    {
      company: 'Ticorporate 2022',
      position: 'Game Programmer, "Git Guy"',
      from: 'August 2022',
      to: 'December 2022',
      companyLink: 'https://store.steampowered.com/app/2200470/Ok_I_Pull_Up/',
    },
  ],
  certifications: [
    {
      name: 'GameDevTV Complete C# Unity Game Developer 3D Online Course',
      body: '',
      year: 'August 2021',
      link: 'https://www.gamedev.tv/',
    },
    {
      name: 'GameDevTV Complete C# Unity Game Developer 2D Online Course',
      body: '',
      year: 'February 2021',
      link: 'https://www.gamedev.tv/',
    },
    {
      name: 'GameDevTV Get Git Smart Course: Learn Git in Unity, SourceTree, GitHub',
      body: '',
      year: 'February 2021',
      link: 'https://www.gamedev.tv/',
    },
    {
      name: 'GameDevTV Unity RPG Core Combat Creator: Learn Intermediate C# Coding',
      body: '',
      year: 'August 2021',
      link: 'https://www.gamedev.tv/',
    },
    {
      name: 'GameDevTV Unity RPG Inventory Systems: Intermediate C# Game Coding Course',
      body: '',
      year: 'August 2021',
      link: 'https://www.gamedev.tv/',
    },
  ],
  educations: [
    {
      institution: 'Axxell',
      degree: 'Undergraduate Degree in Information and communications technology',
      from: '2015',
      to: '2018',
    },
    {
      institution: 'Jamk Universify of Applied Sciences',
      degree: 'Bachelors Degree Programme in Business Information Technology',
      from: '2020',
      to: 'Present',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
