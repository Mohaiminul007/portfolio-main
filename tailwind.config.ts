import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      gray:'#01080E',
      teal:'#3C9D93',
      white:'#FFFFFF',
      orange:'#FEA55F',
      emerald:'#43D9AD',
      rose:'#E99287',
      purple:'#C98BDF',
      'slate-500':'#607B96',
      'slate-800':'#1E2D3D',
      'slate-900':'#011627',
      'slate-950':'#011221',
      'indigo-600':'#4D5BCE'

    },
    fontFamily:{
      FiraCode :'Fira Code , monospace' 
    },
  fontSize: {
    xs:'14px',
    sm:'16px',
    lg:'18px',
    xl:'32px',
    '2xl':'62px'

  },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
