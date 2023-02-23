import { observe } from "../reactivity";
import { ComponentInternalInstance, Data } from "./component";
import { VNode } from "./vnode";

export type ComponentOptions = {
  data?: () => Record<string, unknown>;
  methods?: { [key: string]: Function };
  computed?: { [key: string]: Function };
  render?: () => VNode;
};

export function applyOptions(instance: ComponentInternalInstance) {
  const options = instance.type;
  const publicThis = instance.proxy! as any;
  const ctx = instance.ctx;

  const {
    data: dataOptions,
    methods,
    computed: computedOptions,
    render,
  } = options;

  if (dataOptions) {
    const data = dataOptions.call(publicThis);
    instance.data = observe(data) as unknown as Data; // TODO: type
  }

  if (computedOptions) {
    // TODO:
    // const watchers = (ctx._computedWatchers = Object.create(null));
    // Object.entries(computedOptions).forEach(([key, getter]) => {
    //   watchers[key] = new Watcher(ctx, getter, () => {});
    //   if (!(key in ctx)) defineComputed(ctx, key, getter);
    // });
  }

  if (methods) {
    Object.keys(methods).forEach((key) => {
      ctx[key] = methods[key].bind(publicThis);
    });
  }

  if (render) {
    instance.render = render;
  }
}
