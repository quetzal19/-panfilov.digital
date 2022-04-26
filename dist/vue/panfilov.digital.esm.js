var logoWhiteSVG = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z","fill":"#7248BD"}}),_c('path',{attrs:{"d":"M16.765 12.7746C16.7857 12.7137 16.8094 12.654 16.8362 12.5955C16.8955 12.4526 16.9651 12.3142 17.0447 12.1814C17.1461 12.0294 17.2652 11.89 17.3995 11.7661C17.5323 11.6403 17.6835 11.5356 17.848 11.4556C17.9331 11.4117 18.0204 11.3723 18.1096 11.3377C18.209 11.2992 18.3112 11.268 18.4152 11.2444C18.5127 11.222 18.5292 11.2119 19.0412 11.1566C21.343 11.16 23.6448 11.1608 25.9466 11.1591H26.0903C26.0823 8.62364 26.0904 11.1631 26.0809 8.61572C23.8383 8.61572 21.5956 8.61627 19.3529 8.61737C19.1896 8.61755 18.7062 8.65009 18.5749 8.66504C18.4233 8.68061 17.6176 8.79456 17.2105 8.94104C16.9702 9.02748 16.5975 9.1771 16.4011 9.29346C15.8529 9.61837 15.6099 9.82281 15.0638 10.4616C14.8706 10.6877 14.6712 11.0003 14.4921 11.5049C14.3504 11.8767 14.247 12.262 14.1834 12.6548C14.13 12.9597 14.0991 13.2682 14.0908 13.5777C14.0702 14.1885 14.0891 14.8001 14.0891 15.4113V15.5672H11.2832V17.9644H14.0929V30.7346H16.6377V17.9643H23.5544V30.7338H26.0897V15.5621H16.6325C16.6325 15.5234 16.6014 14.0439 16.6622 13.339C16.6694 13.2082 16.6853 13.0782 16.7101 12.9496","fill":"white"}})]) } };

var logoBlackSVG = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z","fill":"white"}}),_c('path',{attrs:{"d":"M16.765 12.7746C16.7857 12.7137 16.8094 12.654 16.8362 12.5955C16.8955 12.4526 16.9651 12.3142 17.0447 12.1814C17.1461 12.0294 17.2652 11.89 17.3995 11.7661C17.5323 11.6403 17.6835 11.5356 17.848 11.4556C17.9331 11.4117 18.0204 11.3723 18.1096 11.3377C18.209 11.2992 18.3112 11.268 18.4152 11.2444C18.5127 11.222 18.5292 11.2119 19.0412 11.1566C21.343 11.16 23.6448 11.1608 25.9466 11.1591H26.0903C26.0823 8.62364 26.0904 11.1631 26.0809 8.61572C23.8383 8.61572 21.5956 8.61627 19.3529 8.61737C19.1896 8.61755 18.7062 8.65009 18.5749 8.66504C18.4233 8.68061 17.6176 8.79456 17.2105 8.94104C16.9702 9.02748 16.5975 9.1771 16.4011 9.29346C15.8529 9.61837 15.6099 9.82281 15.0638 10.4616C14.8706 10.6877 14.6712 11.0003 14.4921 11.5049C14.3504 11.8767 14.247 12.262 14.1834 12.6548C14.13 12.9597 14.0991 13.2682 14.0908 13.5777C14.0702 14.1885 14.0891 14.8001 14.0891 15.4113V15.5672H11.2832V17.9644H14.0929V30.7346H16.6377V17.9643H23.5544V30.7338H26.0897V15.5621H16.6325C16.6325 15.5234 16.6014 14.0439 16.6622 13.339C16.6694 13.2082 16.6853 13.0782 16.7101 12.9496","fill":"#262934"}})]) } };

//
var script = {
  name: 'PanfilovDigitalSign',
  components: {
    logoWhiteSVG,
    logoBlackSVG
  },
  props: {
    darkTheme: {
      default: false,
      type: Boolean
    },
    mode: {
      default: 'medium',
      type: String,
      validator: value => {
        return ~['small', 'medium', 'large'].indexOf(value);
      }
    },
    colors: {
      default: () => ({
        text: {
          current: '#262934',
          hover: '#010101'
        },
        svg: {
          current: '#262934',
          hover: '#7248BD'
        }
      }),
      type: Object
    },
    url: {
      default: 'https://panfilov.digital/',
      type: String
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const root = document.documentElement;
      root.style.setProperty('--panfilov-digital-sign__currentTextColor', this.colors.text.current);
      root.style.setProperty('--panfilov-digital-sign__hoverTextColor', this.colors.text.hover);
      root.style.setProperty('--panfilov-digital-sign__currentSVGColor', this.colors.svg.current);
      root.style.setProperty('--panfilov-digital-sign__hoverSVGColor', this.colors.svg.hover);
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('a', {
    staticClass: "panfilov-digital-sign",
    class: ["_" + _vm.mode],
    attrs: {
      "href": _vm.url,
      "target": "_blank"
    }
  }, [_vm.mode === 'small' ? [_c('span', {
    staticClass: "text"
  }, [_vm._v("Разработка сайта")]), _vm._v(" "), _vm._m(0)] : _vm._e(), _vm._v(" "), _vm.mode === 'medium' ? [_c('span', {
    staticClass: "text"
  }, [_vm._v("Разработка сайта — ")]), _vm._v(" "), _vm._m(1)] : _vm._e(), _vm._v(" "), _vm.mode === 'large' ? [!_vm.darkTheme ? _c('logoWhiteSVG') : _vm._e(), _vm._v(" "), _vm.darkTheme ? _c('logoBlackSVG') : _vm._e(), _vm._v(" "), _vm._m(2)] : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "icon"
  }, [_vm._v("Panfilov."), _c('span', {
    staticClass: "icon-anim"
  }, [_vm._v("Digital")])]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "icon"
  }, [_vm._v("Panfilov."), _c('span', {
    staticClass: "icon-anim"
  }, [_vm._v("Digital")])]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "wrapper"
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("Разработка сайта")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_vm._v("Panfilov."), _c('span', {
    staticClass: "icon-anim"
  }, [_vm._v("Digital")])])]);
}];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6b544e46_0", {
    source: "@import url(https://fonts.googleapis.com/css2?family=Syne&display=swap);.panfilov-digital-sign[data-v-6b544e46]{color:var(--panfilov-digital-sign__currentTextColor);text-decoration:none;display:flex;flex-wrap:wrap;font-size:14px}.panfilov-digital-sign._small[data-v-6b544e46]{flex-direction:column-reverse;align-items:flex-start}.panfilov-digital-sign._small>.text[data-v-6b544e46]{margin-top:5px}.panfilov-digital-sign._medium[data-v-6b544e46]{align-items:center}.panfilov-digital-sign._large[data-v-6b544e46]{align-items:center}.panfilov-digital-sign._large .wrapper[data-v-6b544e46]{margin-left:8px;display:flex;flex-direction:column-reverse;align-items:flex-start}.panfilov-digital-sign._large .text[data-v-6b544e46]{margin-top:5px}.panfilov-digital-sign .text[data-v-6b544e46]{font-family:Syne,sans-serif;font-size:1em;transition:.2s}.panfilov-digital-sign .icon[data-v-6b544e46]{color:var(--panfilov-digital-sign__currentSVGColor);font-family:Syne,sans-serif;display:flex;transition:.2s;font-size:1.4em}.panfilov-digital-sign .icon-anim[data-v-6b544e46]{transition:.2s}.panfilov-digital-sign[data-v-6b544e46]:hover{color:var(--panfilov-digital-sign__hoverTextColor)}.panfilov-digital-sign:hover .icon[data-v-6b544e46]{color:var(--panfilov-digital-sign__hoverTextColor)}.panfilov-digital-sign:hover .icon-anim[data-v-6b544e46]{color:var(--panfilov-digital-sign__hoverSVGColor)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-6b544e46";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PanfilovDigitalSign: __vue_component__
});

// Import vue components

const install = function installPanfilovDigital(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { __vue_component__ as PanfilovDigitalSign, install as default };
