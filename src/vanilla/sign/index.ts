import './../../assets/styles/sign.scss';
const logoWhiteSVG = require('./../../assets/ico/logo/logo-white.svg');
const logoBlackSVG = require('./../../assets/ico/logo/logo-black.svg');

const defaultOptions = {
  url: 'https://panfilov.digital',
  mode: 'medium',
  darkTheme: false,
  colors: {
    text: {
      current: '#262934',
      hover: '#010101',
    },
    svg: {
      current: '#262934',
      hover: '#7248BD',
    },
  }
}

interface IColors {
  text: {
    current: string;
    hover: string;
  },
  svg: {
    current: string;
    hover: string;
  },
}

interface IOptions {
  url?: string;
  mode?: 'small' | 'medium' | 'large';
  darkTheme?: boolean;
  colors?: IColors;
}

interface IProps {
  el: HTMLElement;
  options: IOptions;
}

const smallHtml = () => (`
  <span class="text">Разработка сайта</span>
  <span class="icon">panfilov.<span class="icon-anim">digital</span></span>
`);
const mediumHtml = () => (`
  <span class="text">Разработка сайта &mdash;&nbsp;</span>
  <span class="icon">panfilov.<span class="icon-anim">digital</span></span>
`);
const largeHtml = ({ darkTheme }: IOptions) => (`
  ${!darkTheme ? logoWhiteSVG : ''}  
  ${darkTheme ? logoBlackSVG : ''}
  <div class="wrapper">
    <span class="text">Разработка сайта</span>
    <span class="icon">panfilov.<span class="icon-anim">digital</span></span>
  </div>
`);

const html = ({ url, mode, darkTheme }: IOptions) => (`
  <a href="${url}" target="_blank" class="panfilov-digital-sign" :class="[\`_${mode}\`]">
    ${mode === 'small' ? smallHtml() : ''}
    ${mode === 'medium' ? mediumHtml() : ''}
    ${mode === 'large' ? largeHtml({ darkTheme }) : ''}
  </a>
`);

export default ({ el, options }: IProps) => {
  const currentOptions = {
    ...defaultOptions,
    ...options
  } as IOptions;
  el.innerHTML = html(currentOptions);
  const root = document.documentElement;
  root.style.setProperty('--panfilov-digital-sign__currentTextColor', options.colors.text.current);
  root.style.setProperty('--panfilov-digital-sign__hoverTextColor', options.colors.text.hover);
  root.style.setProperty('--panfilov-digital-sign__currentSVGColor', options.colors.svg.current);
  root.style.setProperty('--panfilov-digital-sign__hoverSVGColor', options.colors.svg.hover);
}