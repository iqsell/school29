import { defineComponent, ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useHead } from './v3-BnYVxHEX.mjs';
import { _ as _export_sfc, b as useRoute, c as useRouter, u as useRuntimeConfig } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u044C | 29"
    });
    const route = useRoute();
    route.params.id;
    ref(false);
    useRouter();
    const config = useRuntimeConfig();
    config.public.apiUrl;
    const news = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(loading) && unref(news)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-detail" }, _attrs))} data-v-f223b72c><div class="news-header" data-v-f223b72c><div class="news-detail__header" data-v-f223b72c><button class="back-link" data-v-f223b72c>\u2190 \u041D\u0430\u0437\u0430\u0434</button><h1 data-v-f223b72c>${ssrInterpolate(unref(news).title)}</h1><div class="news-date" data-v-f223b72c>${ssrInterpolate(formatDate(unref(news).created_at))}</div><div class="news-updatedDate" data-v-f223b72c>\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E: ${ssrInterpolate(formatDate(unref(news).updated_at))}</div></div>`);
        if (unref(news).image) {
          _push(`<div class="news-detail__image" data-v-f223b72c><img${ssrRenderAttr("src", unref(news).image)}${ssrRenderAttr("alt", unref(news).title)} data-v-f223b72c></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="news-detail__content" data-v-f223b72c><!--[-->`);
        ssrRenderList(unref(news).content.split("\n"), (paragraph, index) => {
          _push(`<p data-v-f223b72c>${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div></div>`);
      } else if (unref(loading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-f223b72c> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... </div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error" }, _attrs))} data-v-f223b72c>${ssrInterpolate(unref(error) || "\u041D\u043E\u0432\u043E\u0441\u0442\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430")}</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f223b72c"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CUxlNq81.mjs.map
