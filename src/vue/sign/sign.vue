<template>
  <a :href="url" target="_blank" class="panfilov-digital-sign" :class="[`_${mode}`]">
    <template v-if="mode === 'small'">
      <span class="text">Разработка сайта</span>
      <span class="icon">Panfilov.<span class="icon-anim">Digital</span></span>
    </template>
    <template v-if="mode === 'medium'">
      <span class="text">Разработка сайта &mdash;&nbsp;</span>
      <span class="icon">Panfilov.<span class="icon-anim">Digital</span></span>
    </template>
    <template v-if="mode === 'large'">
      <logoWhiteSVG v-if="!darkTheme" />
      <logoBlackSVG v-if="darkTheme" />
      <div class="wrapper">
        <span class="text">Разработка сайта</span>
        <span class="icon">Panfilov.<span class="icon-anim">Digital</span></span>
      </div>
    </template>
  </a>
</template>
<script>
import logoWhiteSVG from './../../assets/ico/logo/logo-white.svg';
import logoBlackSVG from './../../assets/ico/logo/logo-black.svg';

export default {

  name: 'PanfilovDigitalSign',

  components: {
    logoWhiteSVG,
    logoBlackSVG,
  },

  props: {
    darkTheme: {
      default: false,
      type: Boolean,
    },
    mode: {
      default: 'medium',
      type: String,
      validator: (value) => {
        return ~['small', 'medium', 'large'].indexOf(value);
      }
    },
    colors: {
      default: () => ({
        text: {
          current: '#262934',
          hover: '#010101',
        },
        svg: {
          current: '#262934',
          hover: '#7248BD',
        },
      }),
      type: Object,
    },
    url: {
      default: 'https://panfilov.digital/',
      type: String,
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
    },
  },

};
</script>
<style lang="scss" scoped src="./../../assets/styles/sign.scss"></style>