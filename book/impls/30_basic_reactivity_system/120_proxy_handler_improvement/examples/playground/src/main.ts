import { createApp, h, reactive } from "chibivue";

const ReactiveCollection = {
  setup() {
    const state = reactive({ map: new Map(), set: new Set() });

    return () =>
      h("div", {}, [
        h("h1", {}, [`ReactiveCollection`]),

        h("p", {}, [
          `map (${state.map.size}): ${JSON.stringify([...state.map])}`,
        ]),
        h("button", { onClick: () => state.map.set(Date.now(), "item") }, [
          "update map",
        ]),

        h("p", {}, [
          `set (${state.set.size}): ${JSON.stringify([...state.set])}`,
        ]),
        h("button", { onClick: () => state.set.add("item") }, ["update set"]),
      ]);
  },
};

const app = createApp({
  setup: () => () => h("div", {}, [h(ReactiveCollection, {}, [])]),
});

app.mount("#app");
