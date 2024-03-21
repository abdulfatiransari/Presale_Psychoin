import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          screens: {
                "2xs": "375px",
                "1xs": "480px",
                xs: "560px",
                sm1: "600px",
                md1: "769px",
                preferencemd: "820px",
                "2md": "860px",
                lg1: "1000px",
                xl1: "1281px",
                "2xl1": "1640px",
                "3xl1": "1920px",
                "4xl1": "1940px",
                "5xl": "3420px",
            },
            colors: {
                app: {
                    primary: {
                        DEFAULT: "#0095C8",
                    },
                    gray: {
                        DEFAULT: "#37404C",
                    },
                    black: {
                        DEFAULT: "#29313C",
                        duration: "#717A8B",
                        select: "#48515F",
                        light_gray: "#C6C6C6",
                    },
                    yellow: {
                        DEFAULT: "#FFC700",
                        hover: "#FBD75A",
                        finalized: "#FE8091",
                    },
                },
            },
            backgroundColor: {
                blue: "#0196C9",
                hover: "#50D0FB",
                image: "lightgray 50%",
                app: {
                    black: {
                        DEFAULT: "#29313C",
                        black_op_04: "#29313c66",
                        light: "#C4C4C4",
                        button: "#37404C",
                        modal: "#1f2630f2",
                        select: "#48515F",
                        duration: "#717A8B",
                        duration_op_05: "rgba(113,122,139,0.7)",
                        gray: "#333333",
                        button_b: "#485464",
                    },
                    blue: {
                        DEFAULT: "#0095C8",
                        second: "#0095C8",
                        fifth: "rgba(0, 149, 200, 0.7)",
                        hover: "#50D0FB",
                        details: "#0196C9",
                        rocket_card: "#03BFFF",
                        kyc: "#03F2FD",
                    },
                    red: {
                        DEFAULT: "#F6465D",
                        hover: "#FE8091",
                        close: "#5F303D",
                        unlocked: "rgba(246, 70, 93, 0.15)",
                    },
                    purple: {
                        DEFAULT: "#7B61FF",
                        warranty: "#A55FFF",
                    },
                    green: {
                        DEFAULT: "#2EBD85",
                        hover: "#1FF19F",
                        live: "#00A756",
                        safe: "#6CFD13",
                    },
                    yellow: {
                        DEFAULT: "#FFC700",
                        hover: "#FBD75A",
                        finalized: "#FE8091",
                    },
                    gray: {
                        gray_5: "#AAAAAA",
                        light: "#5E6268",
                        hover: "#A7B0C1",
                    },
                    white: {
                        offWhite: "rgba(255, 255, 255, 0.56)",
                        white_22: "rgba(255, 255, 255, 0.22)",
                        white_31: "rgb(255 255 255 / 31%)",
                    },
                    orange: {
                        DEFAULT: "#FF9160",
                        paused: "#FF5F17",
                        audit: "#FE8416",
                    },
                },

                investor: {
                    angel: {
                        DEFAULT: "#EA3B71",
                    },
                    team: {
                        DEFAULT: "#0F827A",
                    },
                    advisor: {
                        DEFAULT: "#2EBD85",
                    },
                    funding: {
                        DEFAULT: "#E3F8B6",
                    },
                    ico: {
                        DEFAULT: "#2CC2F5",
                    },
                    yield: {
                        DEFAULT: "#F4C23C",
                    },
                    liquidity: {
                        DEFAULT: "#472EA3",
                    },
                    marketing: {
                        DEFAULT: "#F6465D",
                    },
                    staking: {
                        DEFAULT: "#9747FF",
                    },
                    rewards: {
                        DEFAULT: "#170C5B",
                    },
                    newpr: {
                        DEFAULT: "#DC5113",
                    },
                },
                main: "#1F2630",
            },
            borderColor: {
                dothover: "10px solid #fff",
                app: {
                    black: {
                        DEFAULT: "#37404C",
                        duration: "#717A8B",
                        button: "#37404C",
                    },
                    gray: {
                        DEFAULT: "rgba(255, 255, 255, 0.1)",
                        gray_5: "#AAAAAA",
                    },
                    green: {
                        DEFAULT: "#2EBD85",
                        hover: "#1FF19F",
                        live: "#00A756",
                        safe: "#6CFD13",
                    },
                    blue: {
                        DEFAULT: "#0095C8",
                        details: "#0196C9",
                        rocket_card: "#03BFFF",
                    },
                    yellow: {
                        DEFAULT: "#FFC700",
                        hover: "#FBD75A",
                    },
                },
            },
            textColor: {
                app: {
                    black: {
                        DEFAULT: "#29313C",
                        black_op_04: "#29313c66",
                        light: "#C4C4C4",
                        button: "#37404C",
                        modal: "#1F2630",
                        select: "#48515F",
                        duration: "#717A8B",
                        duration_op_05: "rgba(113,122,139,0.5)",
                    },
                    blue: {
                        DEFAULT: "#0095C8",
                        details: "#0196C9",
                        rocket_card: "#03BFFF",
                    },
                    red: {
                        DEFAULT: "#F6465D",
                    },
                    green: {
                        DEFAULT: "#2EBD85",
                    },
                    gray: {
                        DEFAULT: "rgba(255, 255, 255, 0.1)",
                        dark: "#37404C",
                    },
                    yellow: {
                        DEFAULT: "#FFC700",
                        hover: "#FBD75A",
                    },
                },
            },
            bottom: {
                34: "136px",
            },
            gap: {
                value: "3px",
                time: "106px",
                intervaly: "35px",
                intervalx: "17px",
            },
            width: {
                13: "53px",
                15: "60px",
                21: "85px",
                26: "105px",
                33: "133px",
                39: "156px",
                41: "165px",
                47: "189px",
                49: "194px",
                58: "230px",
                66: "264px",
                70: "280px",
                75: "300px",
                81: "323px",
                93: "372px",
                105: "420px",
                110: "440px",
                125: "500px",
                133: "530px",
                155: "619px",
                158: "630px",
                184: "734px",
                227: "1307px",
            },
            height: {
                13: "53px",
                14: "56px",
                15: "60px",
                21: "86px",
                31: "122px",
                50: "200px",
                75: "300px",
                86: "340px",
                88: "350px",
                90: "360px",
                137: "553px",
                165: "659px",
            },
            padding: {
                "50px": "50px",
                "60px": "60px",
            },
            fontSize: {
                h1: "3.75rem",
                h2: "2.5rem",
                h3: "1.5rem",
                h4: "1.375rem",
                h5: "1.25rem",
            },
            keyframes: {
                bounseLeft: {
                    "0%, 100%": {
                        transform: "translateX(0)",
                    },
                    "40%": { transform: "translateX(-25px)" },
                    "60%": { transform: "translateX(-10px)" },
                },
            },
            animation: {
                bounseLeft: "bounseLeft 0.5s ease-in-out",
            },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
