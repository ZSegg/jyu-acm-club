export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-color) / <alpha-value>)", // 关联 CSS 变量
      },
      fontFamily: {
        sans: "var(--font-sans)", // 引用变量
      },
    },
  },
};
