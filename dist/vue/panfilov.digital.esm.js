import sign from 'sign';
export { default as PanfilovDigitalSign } from 'sign';

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  PanfilovDigitalSign: sign
});

// Import vue components

const install = function installPanfilovDigital(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { install as default };
