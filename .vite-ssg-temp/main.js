"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var NProgress = require("nprogress");
var viteSsg = require("vite-ssg");
var dayjs = require("dayjs");
var LocalizedFormat = require("dayjs/plugin/localizedFormat");
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var head = require("@vueuse/head");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var NProgress__default = /* @__PURE__ */ _interopDefaultLegacy(NProgress);
var dayjs__default = /* @__PURE__ */ _interopDefaultLegacy(dayjs);
var LocalizedFormat__default = /* @__PURE__ */ _interopDefaultLegacy(LocalizedFormat);
var bootstrap = "";
var main = "";
var prose = "";
var markdown = "";
const routes$1 = [{ "name": "package-git.shin.impactor10", "path": "/package/git.shin.impactor10", "component": () => Promise.resolve().then(function() {
  return index$m;
}), "props": true }, { "name": "package-git.shin.impactor", "path": "/package/git.shin.impactor", "component": () => Promise.resolve().then(function() {
  return index$l;
}), "props": true }, { "name": "package-git.shin.cyplay", "path": "/package/git.shin.cyplay", "component": () => Promise.resolve().then(function() {
  return index$k;
}), "props": true }, { "name": "package-git.shin.cylinder", "path": "/package/git.shin.cylinder", "component": () => Promise.resolve().then(function() {
  return index$j;
}), "props": true }, { "name": "package-git.shin.cydiatimeoutcmd", "path": "/package/git.shin.cydiatimeoutcmd", "component": () => Promise.resolve().then(function() {
  return index$i;
}), "props": true }, { "name": "package-git.shin.cydiainstall", "path": "/package/git.shin.cydiainstall", "component": () => Promise.resolve().then(function() {
  return index$h;
}), "props": true }, { "name": "package-git.shin.cydiacoolstar", "path": "/package/git.shin.cydiacoolstar", "component": () => Promise.resolve().then(function() {
  return index$g;
}), "props": true }, { "name": "package-git.shin.cyanea", "path": "/package/git.shin.cyanea", "component": () => Promise.resolve().then(function() {
  return index$f;
}), "props": true }, { "name": "package-git.shin.customsw", "path": "/package/git.shin.customsw", "component": () => Promise.resolve().then(function() {
  return index$e;
}), "props": true }, { "name": "package-git.shin.custompods", "path": "/package/git.shin.custompods", "component": () => Promise.resolve().then(function() {
  return index$d;
}), "props": true }, { "name": "package-git.shin.customloadingtext", "path": "/package/git.shin.customloadingtext", "component": () => Promise.resolve().then(function() {
  return index$c;
}), "props": true }, { "name": "package-git.shin.customdia", "path": "/package/git.shin.customdia", "component": () => Promise.resolve().then(function() {
  return index$b;
}), "props": true }, { "name": "package-git.shin.curl32", "path": "/package/git.shin.curl32", "component": () => Promise.resolve().then(function() {
  return index$a;
}), "props": true }, { "name": "package-git.shin.curl", "path": "/package/git.shin.curl", "component": () => Promise.resolve().then(function() {
  return index$9;
}), "props": true }, { "name": "package-git.shin.cukey", "path": "/package/git.shin.cukey", "component": () => Promise.resolve().then(function() {
  return index$8;
}), "props": true }, { "name": "package-git.shin.cracktool4", "path": "/package/git.shin.cracktool4", "component": () => Promise.resolve().then(function() {
  return index$7;
}), "props": true }, { "name": "package-git.shin.cracktool2", "path": "/package/git.shin.cracktool2", "component": () => Promise.resolve().then(function() {
  return index$6;
}), "props": true }, { "name": "package-git.shin.cozybadges", "path": "/package/git.shin.cozybadges", "component": () => Promise.resolve().then(function() {
  return index$5;
}), "props": true }, { "name": "package-git.shin.cosmos13", "path": "/package/git.shin.cosmos13", "component": () => Promise.resolve().then(function() {
  return index$4;
}), "props": true }, { "name": "package-git.shin.cosmos", "path": "/package/git.shin.cosmos", "component": () => Promise.resolve().then(function() {
  return index$3;
}), "props": true }, { "name": "package-git.shin.copiedlabel", "path": "/package/git.shin.copiedlabel", "component": () => Promise.resolve().then(function() {
  return index$2;
}), "props": true }, { "name": "package-git.shin.complications", "path": "/package/git.shin.complications", "component": () => Promise.resolve().then(function() {
  return index$1;
}), "props": true }, { "name": "index", "path": "/", "component": () => Promise.resolve().then(function() {
  return index;
}), "props": true }];
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const darkmode = vue.computed({
      get() {
        var _a;
        return (_a = Boolean(Number(localStorage.get("darkmode")))) != null ? _a : false;
      },
      set(v) {
        localStorage.set("darkmode", Number(v));
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        id: "app",
        theme: vue.unref(darkmode) ? "dark" : "light"
      }, _attrs))}><div class="container-fluid">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const routes = routes$1.map((i) => {
  return __spreadProps(__spreadValues({}, i), {
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`
  });
});
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition)
    return savedPosition;
  else
    return { top: 0 };
};
const createApp = viteSsg.ViteSSG(_sfc_main$n, { routes, scrollBehavior }, ({ router, isClient }) => {
  dayjs__default["default"].extend(LocalizedFormat__default["default"]);
  if (isClient) {
    router.beforeEach(() => {
      NProgress__default["default"].start();
    });
    router.afterEach(() => {
      NProgress__default["default"].done();
    });
  }
});
const _sfc_main$m = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>specific utility to unjailbreak most devices</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "specific utility to unjailbreak most devices")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.impactor10/index.md");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var index$m = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$m
});
const _sfc_main$l = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>specific utility to unjailbreak most devices</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "specific utility to unjailbreak most devices")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.impactor/index.md");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var index$l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$l
});
const _sfc_main$k = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>CyPlay get theme CH Play in your Cydia and most popular themes are updated, both free and paid. Compatity DarkModeCydia!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "CyPlay get theme CH Play in your Cydia and most popular themes are updated, both free and paid. Compatity DarkModeCydia!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cyplay/index.md");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var index$k = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Make your icons dance</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Make your icons dance")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cylinder/index.md");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var index$j = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$j
});
const _sfc_main$i = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Shorten Cydia\u2019s refresh time.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Shorten Cydia\u2019s refresh time.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cydiatimeoutcmd/index.md");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var index$i = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$i
});
const _sfc_main$h = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Re-Install Cydia if Cydia Error.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Re-Install Cydia if Cydia Error.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cydiainstall/index.md");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var index$h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$h
});
const _sfc_main$g = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Description for package git.shin.cydiacoolstar</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Description for package git.shin.cydiacoolstar")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cydiacoolstar/index.md");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var index$g = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$g
});
const _sfc_main$f = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>System UI Customization</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "System UI Customization")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cyanea/index.md");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var index$f = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$f
});
const _sfc_main$e = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>An awesome MobileSubstrate tweak!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "An awesome MobileSubstrate tweak!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.customsw/index.md");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var index$e = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$e
});
const _sfc_main$d = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Airpods animation and sound</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Airpods animation and sound")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.custompods/index.md");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var index$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$d
});
const _sfc_main$c = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Custom loading text</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Custom loading text")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.customloadingtext/index.md");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var index$c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$c
});
const _sfc_main$b = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>usability tweaks for Cydia app.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "usability tweaks for Cydia app.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.customdia/index.md");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var index$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$b
});
const _sfc_main$a = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>flexible multi-protocol file transfers</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "flexible multi-protocol file transfers")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.curl32/index.md");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var index$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$a
});
const _sfc_main$9 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>flexible multi-protocol file transfers</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "flexible multi-protocol file transfers")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.curl/index.md");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var index$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$9
});
const _sfc_main$8 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>An awesome Tweak Custom Keyboard Sounds!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "An awesome Tweak Custom Keyboard Sounds!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cukey/index.md");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var index$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$8
});
const _sfc_main$7 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Crack Tweaks on one click Maintainer: nguyenthanh</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Crack Tweaks on one click Maintainer: nguyenthanh")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cracktool4/index.md");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var index$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
const _sfc_main$6 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Crack Tweaks on one click</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Crack Tweaks on one click")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cracktool2/index.md");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var index$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
const _sfc_main$5 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>A cozy place for your badges</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "A cozy place for your badges")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cozybadges/index.md");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
const _sfc_main$4 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>System-wide customization!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "System-wide customization!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cosmos13/index.md");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
const _sfc_main$3 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>System-wide customization!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "System-wide customization!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.cosmos/index.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>Longpress to copy text lable on anywhere app. Configure options from Settings!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "Longpress to copy text lable on anywhere app. Configure options from Settings!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.copiedlabel/index.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>watchOS widgets on your lock screen</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "watchOS widgets on your lock screen")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/package/git.shin.complications/index.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "noTemplate": true, "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = vue.resolveComponent("post");
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>hello</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, "hello")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createApp = createApp;
