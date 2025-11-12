import { _ as _export_sfc, u as useRuntimeConfig, a as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './LinkBtn-BotRK_oP.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-BnYVxHEX.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "information",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 | 29",
      meta: [
        { name: "info", content: "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0448\u043A\u043E\u043B\u044B \u043D\u043E\u043C\u0435\u0440 29" }
      ]
    });
    const config = useRuntimeConfig();
    config.public.apiUrl;
    const source = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PagesIndexLinkBtn = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "information" }, _attrs))} data-v-86cc7b42><h1 data-v-86cc7b42>\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438</h1><!--[-->`);
      ssrRenderList(unref(source), (doc) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: doc.id,
          to: doc.file,
          target: "_blank",
          class: "doc"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="inline text-blue-600 hover:underline" data-v-86cc7b42${_scopeId}>${ssrInterpolate(doc.title)}</p>`);
            } else {
              return [
                createVNode("p", { class: "inline text-blue-600 hover:underline" }, toDisplayString(doc.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="more_documents-btn" data-v-86cc7b42>`);
      _push(ssrRenderComponent(_component_PagesIndexLinkBtn, {
        link: "/alldocuments",
        logo: "",
        value: "\u0412\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/information.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const information = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86cc7b42"]]);

export { information as default };
//# sourceMappingURL=information-Um94ai25.mjs.map
