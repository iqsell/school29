import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NewsItem",
  __ssrInlineRender: true,
  props: {
    image: {},
    title: {},
    discription: {},
    date: {},
    id: {}
  },
  setup(__props) {
    const props = __props;
    const formatDate = (dateString) => {
      if (!dateString) return { day: "", month: "", year: "" };
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString("ru", { month: "short" });
      const year = date.getFullYear();
      return { day, month, year: year.toString() };
    };
    const dateParts = formatDate(props.date);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/news/${_ctx.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="news__item" data-v-084cc234${_scopeId}><div class="news_img" style="${ssrRenderStyle({ "--bg-image": `url(${_ctx.image})` })}" data-v-084cc234${_scopeId}><img${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.title)} data-v-084cc234${_scopeId}></div><div class="news__informations" data-v-084cc234${_scopeId}>`);
            if (_ctx.date) {
              _push2(`<div class="news_date" data-v-084cc234${_scopeId}><div class="news_date__day" data-v-084cc234${_scopeId}>${ssrInterpolate(unref(dateParts).day)}</div><div class="news_date__month-year" data-v-084cc234${_scopeId}>${ssrInterpolate(unref(dateParts).month)} ${ssrInterpolate(unref(dateParts).year)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="newes_text" data-v-084cc234${_scopeId}><div class="title" data-v-084cc234${_scopeId}><h3 data-v-084cc234${_scopeId}>${ssrInterpolate(_ctx.title)}</h3></div><div class="discription" data-v-084cc234${_scopeId}><p data-v-084cc234${_scopeId}>${ssrInterpolate(_ctx.discription)}</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "news__item" }, [
                createVNode("div", {
                  class: "news_img",
                  style: { "--bg-image": `url(${_ctx.image})` }
                }, [
                  createVNode("img", {
                    src: _ctx.image,
                    alt: _ctx.title
                  }, null, 8, ["src", "alt"])
                ], 4),
                createVNode("div", { class: "news__informations" }, [
                  _ctx.date ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "news_date"
                  }, [
                    createVNode("div", { class: "news_date__day" }, toDisplayString(unref(dateParts).day), 1),
                    createVNode("div", { class: "news_date__month-year" }, toDisplayString(unref(dateParts).month) + " " + toDisplayString(unref(dateParts).year), 1)
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "newes_text" }, [
                    createVNode("div", { class: "title" }, [
                      createVNode("h3", null, toDisplayString(_ctx.title), 1)
                    ]),
                    createVNode("div", { class: "discription" }, [
                      createVNode("p", null, toDisplayString(_ctx.discription), 1)
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/NewsItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NewsItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-084cc234"]]);

export { NewsItem as N };
//# sourceMappingURL=NewsItem-DEX8WO8R.mjs.map
