import { createApp, h } from "vue";

const app = createApp({
  data() {
    return {
      message: "Hello chibi-vue!",
      count: 0,
    };
  },
  methods: {
    changeMessage() {
      console.log(this);
      this.count++;
      this.message = `Hello chibi-vue! ${this.count} * 2 = ${this.countDouble}`;
    },
  },
  computed: {
    countDouble() {
      return this.count * 2;
    },
  },
  render() {
    return h(
      "div",
      {
        onClick: this.changeMessage,
      },
      this.message
    );
  },
});

app.mount("#app");
