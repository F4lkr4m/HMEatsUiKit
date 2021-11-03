const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      exclude: /(node_modules)/,
      options: {
        partialDirs: [
          path.join(__dirname, './src/partials')
        ]
      },
    },{
      test: /\.css$/,
        use: ['style-loader', 'css-loader?modules=true'],
        include: path.resolve(__dirname, './src/'),
    },);

    // Return the altered config
    return config;
  },
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/builder-webpack5",
    "@storybook/manager-webpack5",
    "@storybook/preset-scss",
    "storybook-css-modules-preset",
  ]
}