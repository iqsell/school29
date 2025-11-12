import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { N as NewsItem } from './NewsItem-DEX8WO8R.mjs';
import { u as useHead } from './v3-BnYVxHEX.mjs';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
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
  __name: "allnews",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 | 29",
      meta: [
        { name: "allnews", content: "\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0448\u043A\u043E\u043B\u044B \u043D\u043E\u043C\u0435\u0440 29" }
      ]
    });
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const newsList = ref([]);
    const nextPage = ref(null);
    const loading = ref(false);
    const loadNews = async (url) => {
      try {
        loading.value = true;
        const data = await $fetch(url || `${apiUrl}/news/`);
        newsList.value = [...newsList.value, ...data.results];
        nextPage.value = data.next;
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438:", err);
      } finally {
        loading.value = false;
      }
    };
    [__temp, __restore] = withAsyncContext(() => loadNews()), await __temp, __restore();
    const hasNextPage = computed(() => !!nextPage.value);
    const shortDiscription = (content) => {
      if (!content) return "";
      const sentenceEnd = content.match(/[.!?…]/);
      if (sentenceEnd) {
        return content.substring(0, sentenceEnd.index + 1);
      }
      return content.length > 100 ? content.substring(0, 100) + "..." : content;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news" }, _attrs))} data-v-7f8281ff><h2 data-v-7f8281ff>\u041D\u043E\u0432\u043E\u0441\u0442\u0438</h2><!--[-->`);
      ssrRenderList(unref(newsList), (news) => {
        _push(ssrRenderComponent(NewsItem, {
          key: news.id,
          image: news.image || "/placeholder-news.jpg",
          title: news.title,
          discription: shortDiscription(news.content),
          date: news.created_at,
          id: news.id
        }, null, _parent));
      });
      _push(`<!--]--><div class="more_news" data-v-7f8281ff>`);
      if (unref(hasNextPage)) {
        _push(`<button class="more_news__btn"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} data-v-7f8281ff>${ssrInterpolate(unref(loading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/allnews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const allnews = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f8281ff"]]);

export { allnews as default };
//# sourceMappingURL=allnews-Dr1CLN6N.mjs.map
