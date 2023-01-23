const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
        corejs: "3.27.1",
      },
    ],
    ["@babel/preset-react"],
  ],
  plugins: [
    "module:react-native-dotenv",
    isDevelopment && "react-refresh/babel",
  ].filter(Boolean),
};
