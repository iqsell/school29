import { _ as _export_sfc, u as useRuntimeConfig, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, ref, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { N as NewsItem } from './NewsItem-DEX8WO8R.mjs';
import { _ as __nuxt_component_1$1 } from './LinkBtn-BotRK_oP.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "News",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const newsList = ref([]);
    const nextPage = ref(null);
    const loading = ref(false);
    const loadNews = async () => {
      try {
        loading.value = true;
        const data = await $fetch(`${apiUrl}/news/?page_size=3`);
        newsList.value = [...newsList.value, ...data.results];
        nextPage.value = data.next;
      } catch (err) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430:", err);
      } finally {
        loading.value = false;
      }
    };
    [__temp, __restore] = withAsyncContext(() => loadNews()), await __temp, __restore();
    const shortDiscription = (content) => {
      if (!content) return "";
      const sentenceEnd = content.match(/[.!?…]/);
      if (sentenceEnd) {
        return content.substring(0, sentenceEnd.index + 1);
      }
      return content.length > 100 ? content.substring(0, 100) + "..." : content;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news" }, _attrs))} data-v-27549f33><h2 data-v-27549f33>\u041D\u043E\u0432\u043E\u0441\u0442\u0438</h2><!--[-->`);
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
      _push(`<!--]--><div class="more_news" data-v-27549f33>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/allnews" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="more_news__btn" data-v-27549f33${_scopeId}>\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438</button>`);
          } else {
            return [
              createVNode("button", { class: "more_news__btn" }, "\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/News.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-27549f33"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PhoneNumbers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "phone_numbers" }, _attrs))} data-v-7a024ab3><div class="directors_office" data-v-7a024ab3><h4 data-v-7a024ab3>\u041F\u0440\u0438\u0451\u043C\u043D\u0430\u044F \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430:</h4><p data-v-7a024ab3>+7 (8362) 21-56-88</p></div><div class="associate_director" data-v-7a024ab3><h4 data-v-7a024ab3>\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430:</h4><p data-v-7a024ab3>+7 (8362) 56-00-80</p></div><div class="watch" data-v-7a024ab3><h4 data-v-7a024ab3>\u0412\u0430\u0445\u0442\u0430:</h4><p data-v-7a024ab3> +7 (8362) 21-67-32</p></div><div class="schedule" data-v-7a024ab3><h4 data-v-7a024ab3>\u0420\u0430\u0431\u043E\u0447\u0438\u0435 \u0447\u0430\u0441\u044B:</h4><p data-v-7a024ab3>\u041F\u041D-\u041F\u0422 08:00\u201319:00</p><p data-v-7a024ab3>\u0421\u0411 08:30\u201314:00</p></div><div class="location" data-v-7a024ab3><h4 data-v-7a024ab3>\u0410\u0434\u0440\u0435\u0441:</h4>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0$1), { to: "https://yandex.ru/maps/-/CHxVJMNS" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="address" data-v-7a024ab3${_scopeId}>\u041C\u0430\u0440\u0438\u0439 \u042D\u043B, \u0433.\u0419\u043E\u0448\u043A\u0430\u0440-\u041E\u043B\u0430, \u041B\u0435\u043D\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442, \u0434.10\u0410</p>`);
          } else {
            return [
              createVNode("p", { class: "address" }, "\u041C\u0430\u0440\u0438\u0439 \u042D\u043B, \u0433.\u0419\u043E\u0448\u043A\u0430\u0440-\u041E\u043B\u0430, \u041B\u0435\u043D\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442, \u0434.10\u0410")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/PhoneNumbers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7a024ab3"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PagesIndexLinkBtn = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "links" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_PagesIndexLinkBtn, {
    link: "https://vk.com/school29yo",
    color: "#0077ff",
    logo: "/VK_Logo_White.svg",
    value: "\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PagesIndexLinkBtn, {
    link: "https://sgo.mari-el.gov.ru/",
    color: "#fff",
    logo: "/sgo_logo.png",
    value: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0414\u043D\u0435\u0432\u043D\u0438\u043A"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PagesIndexLinkBtn, {
    link: "/order_a_certificate",
    logo: "/TwemojiEnvelope.svg",
    value: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043A\u0443"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/Links.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Links = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F | 29",
      meta: [{ name: "mainpage", content: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0448\u043A\u043E\u043B\u044B \u043D\u043E\u043C\u0435\u0440 29" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PagesIndexNews = __nuxt_component_0;
      const _component_PagesIndexPhoneNumbers = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-2af55cfa>`);
      _push(ssrRenderComponent(_component_PagesIndexNews, null, null, _parent));
      _push(`<div class="contacts" data-v-2af55cfa><div class="contacts_container" data-v-2af55cfa>`);
      _push(ssrRenderComponent(Links, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesIndexPhoneNumbers, null, null, _parent));
      _push(`<div class="school_map" data-v-2af55cfa><div style="${ssrRenderStyle({ "position": "relative", "overflow": "hidden" })}" data-v-2af55cfa><a href="https://yandex.ru/maps/org/shkola_29_imeni_geroya_rossii_d_e_shaymardanova/1285154764/?utm_medium=mapframe&amp;utm_source=maps" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "0px" })}" data-v-2af55cfa>\u0428\u043A\u043E\u043B\u0430 \u2116 29 \u0438\u043C\u0435\u043D\u0438 \u0413\u0435\u0440\u043E\u044F \u0420\u043E\u0441\u0441\u0438\u0438 \u0414. \u042D. \u0428\u0430\u0439\u043C\u0430\u0440\u0434\u0430\u043D\u043E\u0432\u0430</a><a href="https://yandex.ru/maps/41/yoshkar-ola/category/school/184106240/?utm_medium=mapframe&amp;utm_source=maps" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "14px" })}" data-v-2af55cfa>\u041E\u0431\u0449\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \u0432 \u0419\u043E\u0448\u043A\u0430\u0440\u2011\u041E\u043B\u0435</a><iframe src="https://yandex.ru/map-widget/v1/?ll=47.921953%2C56.627721&amp;mode=poi&amp;poi%5Bpoint%5D=47.921831%2C56.627400&amp;poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1285154764&amp;z=16" width="100%" height="400" frameborder="1" allowfullscreen="true" style="${ssrRenderStyle({ "position": "relative" })}" data-v-2af55cfa></iframe></div></div><div class="school_map-mobile" data-v-2af55cfa><div style="${ssrRenderStyle({ "position": "relative", "overflow": "hidden" })}" data-v-2af55cfa><a href="https://yandex.ru/maps/org/shkola_29_imeni_geroya_rossii_d_e_shaymardanova/1285154764/?utm_medium=mapframe&amp;utm_source=maps" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "0px" })}" data-v-2af55cfa>\u0428\u043A\u043E\u043B\u0430 \u2116 29 \u0438\u043C\u0435\u043D\u0438 \u0413\u0435\u0440\u043E\u044F \u0420\u043E\u0441\u0441\u0438\u0438 \u0414. \u042D. \u0428\u0430\u0439\u043C\u0430\u0440\u0434\u0430\u043D\u043E\u0432\u0430</a><a href="https://yandex.ru/maps/41/yoshkar-ola/category/school/184106240/?utm_medium=mapframe&amp;utm_source=maps" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "14px" })}" data-v-2af55cfa>\u041E\u0431\u0449\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \u0432 \u0419\u043E\u0448\u043A\u0430\u0440\u2011\u041E\u043B\u0435</a><iframe src="https://yandex.ru/map-widget/v1/?ll=47.921953%2C56.627721&amp;mode=poi&amp;poi%5Bpoint%5D=47.921831%2C56.627400&amp;poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1285154764&amp;z=16,5" width="100%" height="400" frameborder="1" allowfullscreen="true" style="${ssrRenderStyle({ "position": "relative" })}" data-v-2af55cfa></iframe></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2af55cfa"]]);

export { index as default };
//# sourceMappingURL=index-lu_SHpzf.mjs.map
