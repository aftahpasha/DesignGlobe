module.exports = {
    theme: {
        fontFamily: {
          'sans': ['"Open Sans"', 'system-ui',],

        }
      },
    daisyui: {
        themes: [
          {
            mytheme: {
                "primary": "#DE6C9B",
                "secondary": "#3A72DD",
                "accent": "#E0D1C5",
                "neutral": "#ECDED4",
                "base-100": "#ECDED4",
                "info": "#ffffff",
                "success": "#FFBF47",
                "warning": "#fb923c",
                "error": "#ef4444",
            },
          },
        ],
      },
    plugins: [require("@tailwindcss/typography"),require('daisyui')],
  };
  