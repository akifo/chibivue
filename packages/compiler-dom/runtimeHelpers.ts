import { registerRuntimeHelpers } from "../compiler-core/runtimeHelpers";

export const V_MODEL_TEXT = Symbol();
export const V_MODEL_DYNAMIC = Symbol();

registerRuntimeHelpers({
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
});
