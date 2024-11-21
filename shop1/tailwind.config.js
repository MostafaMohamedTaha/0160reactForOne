const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sevillana: ['"Sevillana"', "cursive"], // default
        press2: ['"Press Start 2P"', "cursive"], // default
        arabic: ['Cairo', 'sans-serif'], // Arabic-specific font
        },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ]
}
