import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LinkBtn",
  __ssrInlineRender: true,
  props: {
    logo: {
      type: String,
      required: false
    },
    value: String,
    color: {
      type: String,
      default: "#606060"
    },
    link: String
  },
  setup(__props) {
    const props = __props;
    const textColor = computed(() => {
      return props.color.toLowerCase() === "#fff" || props.color.toLowerCase() === "#ffffff" ? "#000" : "#fff";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: __props.link }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="link_btn" style="${ssrRenderStyle({ backgroundColor: props.color, color: unref(textColor) })}" data-v-7b6041c4${_scopeId}><div class="link_logo" style="${ssrRenderStyle({ "--bg-image": `url(${props.logo})` })}" data-v-7b6041c4${_scopeId}></div><div class="value" data-v-7b6041c4${_scopeId}>${ssrInterpolate(props.value)}</div></button>`);
          } else {
            return [
              createVNode("button", {
                class: "link_btn",
                style: { backgroundColor: props.color, color: unref(textColor) }
              }, [
                createVNode("div", {
                  class: "link_logo",
                  style: { "--bg-image": `url(${props.logo})` }
                }, null, 4),
                createVNode("div", { class: "value" }, toDisplayString(props.value), 1)
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/LinkBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b6041c4"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=LinkBtn-BotRK_oP.mjs.map
