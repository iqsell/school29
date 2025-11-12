import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
  __name: "order_a_certificate",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043A\u0443 | 29",
      meta: [{ name: "order a certificate", content: "\u0417\u0430\u043A\u0430\u0437 \u0441\u043F\u0440\u0430\u0432\u043E\u043A \u0448\u043A\u043E\u043B\u044B \u043D\u043E\u043C\u0435\u0440 29" }]
    });
    const config = useRuntimeConfig();
    config.public.apiUrl;
    const fio = ref("");
    const classNumber = ref("");
    const classLetter = ref("");
    const fioError = ref(false);
    const classError = ref(false);
    const classNumbers = Array.from({ length: 11 }, (_, i) => i + 1);
    const classLetters = [
      "\u0430",
      "\u0431",
      "\u0432",
      "\u0433",
      "\u0434",
      "\u0435",
      "\u0436",
      "\u0437",
      "\u0438",
      "\u043A",
      "\u043B",
      "\u043C",
      "\u043D",
      "\u043E",
      "\u043F",
      "\u0440",
      "\u0441",
      "\u0442",
      "\u0443",
      "\u0444",
      "\u0445",
      "\u0446",
      "\u0447",
      "\u0448",
      "\u0449",
      "\u044D",
      "\u044E",
      "\u044F"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container" }, _attrs))} data-v-0e36319a><h1 data-v-0e36319a>\u0417\u0430\u043A\u0430\u0437 \u0441\u043F\u0440\u0430\u0432\u043A\u0438 \u043E\u0431 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0435\u0431\u0435\u043D\u043A\u0430</h1><form data-v-0e36319a><div class="form-group" data-v-0e36319a><h3 data-v-0e36319a>\u0424\u0418\u041E</h3><input type="text"${ssrRenderAttr("value", fio.value)} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041E" title="\u0422\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B, \u043F\u0440\u043E\u0431\u0435\u043B\u044B \u0438 \u0434\u0435\u0444\u0438\u0441\u044B" required class="${ssrRenderClass({ "error-border": fioError.value })}" data-v-0e36319a>`);
      if (fioError.value) {
        _push(`<div class="error" data-v-0e36319a> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043C\u0438\u043B\u0438\u044E, \u0418\u043C\u044F \u0438 \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 (\u041F\u0440\u0438\u043C\u0435\u0440: \u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447) </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group class-selectors" data-v-0e36319a><h3 data-v-0e36319a>\u041A\u043B\u0430\u0441\u0441</h3><div class="select-row" data-v-0e36319a><select required class="${ssrRenderClass([{ "error-border": classError.value && !classNumber.value }, "class-select"])}" data-v-0e36319a><option value="" disabled selected data-v-0e36319a>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0438\u0444\u0440\u0443</option><!--[-->`);
      ssrRenderList(unref(classNumbers), (num) => {
        _push(`<option${ssrRenderAttr("value", num)} data-v-0e36319a${ssrIncludeBooleanAttr(Array.isArray(classNumber.value) ? ssrLooseContain(classNumber.value, num) : ssrLooseEqual(classNumber.value, num)) ? " selected" : ""}>${ssrInterpolate(num)}</option>`);
      });
      _push(`<!--]--></select><select required class="${ssrRenderClass([{ "error-border": classError.value && !classLetter.value }, "class-select"])}" data-v-0e36319a><option value="" disabled selected data-v-0e36319a>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u043A\u0432\u0443</option><!--[-->`);
      ssrRenderList(classLetters, (letter) => {
        _push(`<option${ssrRenderAttr("value", letter)} data-v-0e36319a${ssrIncludeBooleanAttr(Array.isArray(classLetter.value) ? ssrLooseContain(classLetter.value, letter) : ssrLooseEqual(classLetter.value, letter)) ? " selected" : ""}>${ssrInterpolate(letter.toUpperCase())}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (classError.value) {
        _push(`<div class="error" data-v-0e36319a> \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438 \u0446\u0438\u0444\u0440\u0443, \u0438 \u0431\u0443\u043A\u0432\u0443 \u043A\u043B\u0430\u0441\u0441\u0430 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" data-v-0e36319a>\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C</button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order_a_certificate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order_a_certificate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e36319a"]]);

export { order_a_certificate as default };
//# sourceMappingURL=order_a_certificate-9TkhS2to.mjs.map
