import { _ as _export_sfc, u as useRuntimeConfig, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "alldocuments",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B | 29",
      meta: [
        { name: "mainpage", content: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0448\u043A\u043E\u043B\u044B \u043D\u043E\u043C\u0435\u0440 29" }
      ]
    });
    const config = useRuntimeConfig();
    config.public.apiUrl;
    const allDoc = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bdcd2927><!--[-->`);
      ssrRenderList(allDoc.value, (category) => {
        _push(`<div class="information" data-v-bdcd2927><h1 data-v-bdcd2927>${ssrInterpolate(category.name)}</h1><!--[-->`);
        ssrRenderList(category.documents, (doc) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: doc.id,
            to: doc.file,
            target: "_blank",
            class: "doc"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="inline text-blue-600 hover:underline" data-v-bdcd2927${_scopeId}>${ssrInterpolate(doc.title)}</p>`);
              } else {
                return [
                  createVNode("p", { class: "inline text-blue-600 hover:underline" }, toDisplayString(doc.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/alldocuments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alldocuments = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bdcd2927"]]);

export { alldocuments as default };
//# sourceMappingURL=alldocuments-CfBqMKeO.mjs.map
