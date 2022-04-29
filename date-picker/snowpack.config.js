// eslint-disable-next-line no-undef
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  optimize: {
    minify: true,
  },
  plugins: ["@snowpack/plugin-sass"],
};
