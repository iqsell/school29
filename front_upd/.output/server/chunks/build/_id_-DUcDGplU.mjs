import { defineComponent, ref, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useHead } from './v3-BnYVxHEX.mjs';
import { _ as _export_sfc, b as useRoute, c as useRouter, u as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-DTDJx7sJ.mjs';
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
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u044C | 29"
    });
    const route = useRoute();
    const newsId = route.params.id;
    ref(false);
    useRouter();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const news = ref(null);
    const loading = ref(true);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${apiUrl}/news/${newsId}/`, "$s7x_wLLV8u")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      news.value = data.value;
    }
    loading.value = false;
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-detail" }, _attrs))} data-v-01ef691d><div class="news-header" data-v-01ef691d><div class="news-detail__header" data-v-01ef691d><button class="back-link" data-v-01ef691d>\u2190 \u041D\u0430\u0437\u0430\u0434</button><h1 data-v-01ef691d>${ssrInterpolate(unref(news).title)}</h1><div class="news-date" data-v-01ef691d>${ssrInterpolate(formatDate(unref(news).created_at))}</div><div class="news-updatedDate" data-v-01ef691d>\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E: ${ssrInterpolate(formatDate(unref(news).updated_at))}</div></div>`);
        if (unref(news).image) {
          _push(`<div class="news-detail__image" data-v-01ef691d><img${ssrRenderAttr("src", unref(news).image)}${ssrRenderAttr("alt", unref(news).title)} data-v-01ef691d></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="news-detail__content" data-v-01ef691d><!--[-->`);
        ssrRenderList(unref(news).content.split("\n"), (paragraph, index) => {
          _push(`<p data-v-01ef691d>${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div></div>`);
      } else if (unref(loading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-01ef691d> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... </div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error" }, _attrs))} data-v-01ef691d> \u041D\u043E\u0432\u043E\u0441\u0442\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 </div>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01ef691d"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DUcDGplU.mjs.map
