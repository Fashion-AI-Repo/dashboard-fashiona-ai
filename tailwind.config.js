/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        coral: {
          "100": "#fc8c5f",
          "200": "#ff733b",
        },
        darkorange: "#fd721b",
        dimgray: "#666",
        gray: {
          "100": "#808080",
          "200": "#232323",
          "300": "#1e1e1e",
          "400": "#090f32",
          "500": "#121212",
          "600": "rgba(9, 15, 50, 0.05)",
          "700": "rgba(0, 0, 0, 0.2)",
        },
        mediumslateblue: "#466fff",
        blue: "#5200ff",
        mediumpurple: "#bd8dfa",
        indigo: "#480999",
        yellow: "#ffff00",
        pink: "#ffc0cb",
        green: "#008000",
        tomato: "#ff3434",
        black: "#000",
        whitesmoke: "#f8fafc",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "6xs": "7px",
        "5xs-3": "7.3px",
        "5xs-2": "7.2px",
        "10xs-1": "2.1px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      xl: "20px",
      sm: "14px",
      "3xs": "10px",
      "xs-7": "11.7px",
      "2xs-2": "10.2px",
      "sm-2": "13.2px",
      "sm-1": "13.1px",
      "xs-6": "11.6px",
      "2xs-1": "10.1px",
      smi: "13px",
      "smi-5": "12.5px",
      "base-7": "16.7px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
