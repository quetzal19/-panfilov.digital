'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var digitalSVG = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"808","height":"270","viewBox":"0 0 808 270","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M92.1 213C80.38 213.087 68.915 209.58 59.25 202.95C49.35 196.252 41.5 187.052 35.7001 175.35C29.8968 163.65 26.9968 150.3 27 135.3C27 120.3 29.8 106.9 35.4 95.0996C40.9969 83.3018 48.6969 74.002 58.5 67.2002C68.3631 60.3812 80.1106 56.8149 92.1 57C103.298 57 112.448 59.0501 119.55 63.1504C126.514 67.1131 132.19 72.9972 135.9 80.0996C139.895 87.9087 142.581 96.3207 143.85 105C145.397 115.025 146.149 125.156 146.1 135.3C146.033 143.604 145.229 151.887 143.7 160.05C142.12 168.885 139.344 177.463 135.45 185.55C131.744 193.415 126.122 200.223 119.1 205.35C112.097 210.45 103.097 213 92.1 213ZM98.1 190.2C108.3 190.2 116.75 187.7 123.45 182.7C130.214 177.615 135.37 170.689 138.3 162.75C141.584 153.975 143.211 144.668 143.1 135.3C143.1 124.303 141.45 114.653 138.15 106.35C135.198 98.5038 129.976 91.7151 123.15 86.8496C116.447 82.1533 108.097 79.8034 98.1 79.7998C83.1 79.7998 71.5 85.0498 63.3001 95.5498C55.0969 106.05 50.9969 119.3 51 135.3C51 145.903 53.05 155.354 57.15 163.65C60.894 171.543 66.6979 178.28 73.9501 183.15C81.1106 187.87 89.5251 190.326 98.1 190.2V190.2ZM143.1 0H167.1V210H145.2C144.797 205.604 144.347 200.404 143.85 194.4C143.349 188.4 143.099 183.6 143.1 180V0Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M240.302 0V29.0996H209.102V0H240.302ZM212.702 60H236.702V210H212.702V60Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M331.5 186.3C320.968 186.318 310.6 183.688 301.35 178.651C291.807 173.512 283.827 165.894 278.25 156.6C272.349 147 269.399 135.5 269.4 122.1C269.4 108.703 272.3 97.1535 278.1 87.4503C284.454 76.7573 293.866 68.2129 305.122 62.9192C316.378 57.6254 328.962 55.825 341.25 57.7502C344.262 58.2303 347.225 58.9834 350.1 60.0002H411V85.8C402.23 85.7693 393.538 84.1429 385.35 81.0002C377.856 78.2649 370.585 74.9549 363.6 71.0998L362.4 69.9005C368.918 73.3223 374.763 77.8961 379.65 83.4005C384.123 88.5576 387.583 94.5115 389.85 100.95C392.198 107.752 393.365 114.905 393.3 122.1C393.3 135.502 390.45 147.002 384.75 156.6C379.368 165.89 371.532 173.519 362.1 178.651C352.711 183.747 342.183 186.379 331.5 186.3V186.3ZM375.6 270V263.401C375.6 252.797 372.85 245.097 367.35 240.3C361.847 235.5 353.597 233.1 342.6 233.1H312.6C306.807 233.179 301.023 232.625 295.35 231.45C291.023 230.587 286.899 228.907 283.2 226.5C280.145 224.462 277.666 221.673 276 218.401C274.363 215.039 273.54 211.339 273.6 207.6C273.6 200.002 275.9 194.252 280.5 190.35C285.387 186.326 291.318 183.776 297.6 183C304.062 182.002 310.639 182.002 317.1 183L331.5 186.3C320.7 186.901 312.35 188 306.45 189.6C300.549 191.203 297.599 194.603 297.6 199.8C297.566 201.209 297.86 202.606 298.459 203.882C299.058 205.157 299.945 206.276 301.05 207.151C303.347 209.053 306.797 210.003 311.4 210H342.6C352.274 209.887 361.901 211.356 371.1 214.35C379.349 217.001 386.579 222.135 391.8 229.05C396.999 235.95 399.599 245.401 399.6 257.401V270L375.6 270ZM331.5 163.8C338.101 163.854 344.594 162.127 350.296 158.801C355.998 155.475 360.698 150.673 363.9 144.901C367.5 138.703 369.3 131.103 369.3 122.1C369.3 113.1 367.55 105.45 364.05 99.1505C360.834 93.1434 356.002 88.1555 350.1 84.7502C344.438 81.5065 338.026 79.8 331.5 79.8C324.975 79.8 318.563 81.5065 312.9 84.7502C307.004 88.1458 302.133 93.0687 298.8 99.0002C295.2 105.201 293.4 112.901 293.4 122.1C293.4 131.1 295.2 138.7 298.8 144.901C302.108 150.813 306.988 155.693 312.9 159C318.585 162.171 324.991 163.824 331.5 163.8Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M468.899 0V29.0996H437.699V0H468.899ZM441.299 60H465.299V210H441.299V60Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M495.898 60H584.098V82.5H495.898V60ZM527.999 21H551.999V210H527.999V21Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M666.297 213C654.675 213.057 643.314 209.55 633.747 202.95C623.847 196.252 615.947 187.052 610.047 175.35C604.146 163.651 601.196 150.301 601.197 135.3C601.197 120.3 604.197 106.9 610.197 95.0999C615.749 83.8099 624.183 74.1857 634.647 67.2005C644.916 60.4102 656.987 56.8569 669.297 57.0003C683.294 57.0003 693.944 60.5504 701.247 67.6507C708.546 74.7522 713.546 84.2021 716.247 96.0003C719.064 108.907 720.422 122.09 720.297 135.3C720.23 143.605 719.427 151.887 717.897 160.05C716.317 168.885 713.541 177.464 709.647 185.55C705.941 193.415 700.319 200.223 693.297 205.35C686.294 210.45 677.294 213.001 666.297 213ZM672.297 190.2C682.497 190.2 690.947 187.7 697.647 182.7C704.411 177.616 709.567 170.689 712.497 162.75C715.781 153.976 717.408 144.668 717.297 135.3C717.297 124.303 715.647 114.653 712.347 106.35C709.395 98.5041 704.173 91.7154 697.347 86.8499C690.644 82.1536 682.294 79.8037 672.297 79.8001C657.297 79.8001 645.697 85.0501 637.497 95.5501C629.294 106.05 625.194 119.3 625.197 135.3C625.197 145.904 627.247 155.354 631.347 163.651C635.091 171.544 640.895 178.28 648.147 183.151C655.308 187.87 663.722 190.326 672.297 190.2V190.2ZM717.297 60.0003H741.297V210H719.397C718.797 202.8 718.297 196.8 717.897 192C717.494 187.2 717.294 183.2 717.297 180V60.0003Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M783.293 0H807.293V210H783.293V0Z","fill":"currentColor"}})]) } };
var panfilovSVG = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"1064","height":"270","viewBox":"0 0 1064 270","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 59.9998H23.1L24 91.4998V270H0V59.9998ZM75 213C63.9984 213 54.9984 210.45 48 205.349C40.9768 200.224 35.3545 193.416 31.65 185.55C27.7536 177.464 24.978 168.885 23.4 160.05C21.8682 151.887 21.065 143.604 21 135.3C20.9506 125.156 21.7029 115.025 23.25 105C24.5171 96.32 27.203 87.9076 31.2 80.0994C34.9068 72.995 40.5836 67.1102 47.55 63.1502C54.6469 59.0526 63.7969 57.0024 75 56.9998C86.6969 56.9071 98.1302 60.4735 107.7 67.2C117.497 74.0018 125.347 83.3016 131.25 95.0994C137.147 106.903 140.097 120.303 140.1 135.3C140.1 150.3 137.1 163.65 131.1 175.349C125.1 187.05 117.15 196.25 107.25 202.95C97.7798 209.517 86.5245 213.025 75 213V213ZM69 190.2C77.6723 190.353 86.1906 187.897 93.45 183.15C100.681 178.297 106.44 171.552 110.1 163.65C114.098 155.353 116.098 145.903 116.1 135.3C116.1 119.302 112 106.052 103.8 95.5496C95.5969 85.0496 83.9969 79.7996 69 79.7996C60.6571 79.662 52.4784 82.126 45.6 86.8494C38.6159 91.7725 33.1163 98.5173 29.7 106.349C25.8984 114.651 23.9984 124.301 24 135.3C23.8864 144.681 25.5666 153.999 28.95 162.75C31.9499 170.651 37.0923 177.559 43.8 182.7C50.4 187.701 58.8 190.201 69 190.2V190.2Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M227.395 213C215.773 213.057 204.412 209.55 194.845 202.95C184.945 196.252 177.045 187.052 171.145 175.35C165.243 163.651 162.293 150.301 162.295 135.3C162.295 120.3 165.295 106.9 171.295 95.0999C176.847 83.8099 185.281 74.1857 195.745 67.2005C206.014 60.4102 218.085 56.8569 230.395 57.0003C244.392 57.0003 255.042 60.5504 262.345 67.6507C269.644 74.7522 274.644 84.2021 277.345 96.0003C280.162 108.907 281.52 122.09 281.395 135.3C281.328 143.605 280.525 151.887 278.995 160.05C277.415 168.885 274.639 177.464 270.745 185.55C267.039 193.415 261.417 200.223 254.395 205.35C247.392 210.45 238.392 213.001 227.395 213ZM233.395 190.2C243.595 190.2 252.045 187.7 258.745 182.7C265.509 177.615 270.665 170.689 273.595 162.75C276.879 153.976 278.506 144.668 278.395 135.3C278.395 124.303 276.745 114.653 273.445 106.35C270.493 98.5041 265.271 91.7154 258.445 86.8499C251.742 82.1536 243.392 79.8037 233.395 79.8001C218.395 79.8001 206.795 85.0501 198.595 95.5501C190.392 106.05 186.292 119.3 186.295 135.3C186.295 145.904 188.345 155.354 192.445 163.651C196.189 171.544 201.993 178.28 209.245 183.151C216.406 187.87 224.82 190.326 233.395 190.2V190.2ZM278.395 60.0003H302.395V210H280.495C279.895 202.8 279.395 196.8 278.995 192C278.592 187.2 278.392 183.2 278.395 180V60.0003Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M341.391 59.9998H365.391V210H341.391V59.9998ZM416.991 56.9998C424.348 56.8913 431.666 58.1107 438.591 60.5994C444.718 62.8243 450.258 66.4151 454.791 71.0994C459.303 75.8868 462.775 81.5557 464.991 87.7498C467.487 94.8285 468.706 102.294 468.591 109.8V210H444.591V115.8C444.591 104.203 441.891 95.5031 436.491 89.7C431.091 83.9012 422.991 81.0011 412.191 80.9998C404.155 80.9537 396.263 83.1342 389.391 87.2996C382.326 91.5639 376.405 97.4845 372.141 104.55C367.503 112.265 364.682 120.934 363.891 129.9L363.591 112.5C364.445 104.627 366.52 96.9348 369.741 89.7C372.62 83.2304 376.576 77.2962 381.441 72.1502C386.018 67.3323 391.534 63.5026 397.648 60.897C403.762 58.2914 410.345 56.9651 416.991 56.9998V56.9998Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M497.086 66H585.286V88.5H497.086V66ZM574.786 0H637.786V24H574.786C570.14 23.7466 565.491 24.4616 561.136 26.0996C557.056 27.6838 553.624 30.5881 551.386 34.3496C548.986 38.25 547.786 43.8001 547.786 51H523.786C523.786 39 525.936 29.25 530.236 21.75C534.307 14.459 540.619 8.67328 548.236 5.25C555.933 1.75295 564.783 0.00294667 574.786 0V0ZM523.786 210V51H547.786V210H523.786ZM573.286 88.5V66H634.186V88.5H573.286ZM613.786 66H637.786V210H613.786V66Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M678.283 0H702.283V210H678.283V0Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M809.383 213C796.782 213.052 784.382 209.849 773.383 203.7C762.061 197.383 752.675 188.1 746.233 176.849C739.333 165.15 735.883 151.3 735.883 135.299C735.883 119.301 739.333 105.452 746.233 93.7497C752.723 82.4583 762.092 73.0898 773.383 66.5993C784.322 60.2694 796.745 56.9568 809.383 56.9997C821.975 56.9451 834.353 60.2595 845.233 66.5993C856.435 73.1043 865.703 82.4756 872.083 93.7497C878.88 105.45 882.28 119.3 882.283 135.299C882.283 151.302 878.883 165.152 872.083 176.849C865.752 188.083 856.466 197.369 845.233 203.7C834.292 209.859 821.937 213.064 809.383 213ZM809.383 190.5C817.7 190.522 825.875 188.349 833.083 184.2C840.74 179.736 847.02 173.248 851.233 165.45C855.93 157.153 858.28 147.103 858.283 135.299C858.283 123.502 855.933 113.452 851.233 105.15C846.969 97.3102 840.707 90.7377 833.083 86.0993C825.936 81.7717 817.738 79.4889 809.383 79.4997C801.001 79.4952 792.77 81.7215 785.533 85.9499C777.803 90.4857 771.431 97.0124 767.083 104.849C762.283 113.151 759.883 123.301 759.883 135.299C759.883 147.103 762.233 157.153 766.933 165.45C771.196 173.312 777.591 179.811 785.383 184.2C792.708 188.328 800.974 190.498 809.383 190.5V190.5Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M966.281 189.3H959.081L1004.98 60H1031.08L974.081 210H951.581L894.881 60H920.981L966.281 189.3Z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M1063.78 180.6V210H1032.58V180.6H1063.78Z","fill":"currentColor"}})]) } };
var logoWhiteSVG = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z","fill":"#7248BD"}}),_c('path',{attrs:{"d":"M16.765 12.7746C16.7857 12.7137 16.8094 12.654 16.8362 12.5955C16.8955 12.4526 16.9651 12.3142 17.0447 12.1814C17.1461 12.0294 17.2652 11.89 17.3995 11.7661C17.5323 11.6403 17.6835 11.5356 17.848 11.4556C17.9331 11.4117 18.0204 11.3723 18.1096 11.3377C18.209 11.2992 18.3112 11.268 18.4152 11.2444C18.5127 11.222 18.5292 11.2119 19.0412 11.1566C21.343 11.16 23.6448 11.1608 25.9466 11.1591H26.0903C26.0823 8.62364 26.0904 11.1631 26.0809 8.61572C23.8383 8.61572 21.5956 8.61627 19.3529 8.61737C19.1896 8.61755 18.7062 8.65009 18.5749 8.66504C18.4233 8.68061 17.6176 8.79456 17.2105 8.94104C16.9702 9.02748 16.5975 9.1771 16.4011 9.29346C15.8529 9.61837 15.6099 9.82281 15.0638 10.4616C14.8706 10.6877 14.6712 11.0003 14.4921 11.5049C14.3504 11.8767 14.247 12.262 14.1834 12.6548C14.13 12.9597 14.0991 13.2682 14.0908 13.5777C14.0702 14.1885 14.0891 14.8001 14.0891 15.4113V15.5672H11.2832V17.9644H14.0929V30.7346H16.6377V17.9643H23.5544V30.7338H26.0897V15.5621H16.6325C16.6325 15.5234 16.6014 14.0439 16.6622 13.339C16.6694 13.2082 16.6853 13.0782 16.7101 12.9496","fill":"white"}})]) } };
var logoBlackSVG = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z","fill":"white"}}),_c('path',{attrs:{"d":"M16.765 12.7746C16.7857 12.7137 16.8094 12.654 16.8362 12.5955C16.8955 12.4526 16.9651 12.3142 17.0447 12.1814C17.1461 12.0294 17.2652 11.89 17.3995 11.7661C17.5323 11.6403 17.6835 11.5356 17.848 11.4556C17.9331 11.4117 18.0204 11.3723 18.1096 11.3377C18.209 11.2992 18.3112 11.268 18.4152 11.2444C18.5127 11.222 18.5292 11.2119 19.0412 11.1566C21.343 11.16 23.6448 11.1608 25.9466 11.1591H26.0903C26.0823 8.62364 26.0904 11.1631 26.0809 8.61572C23.8383 8.61572 21.5956 8.61627 19.3529 8.61737C19.1896 8.61755 18.7062 8.65009 18.5749 8.66504C18.4233 8.68061 17.6176 8.79456 17.2105 8.94104C16.9702 9.02748 16.5975 9.1771 16.4011 9.29346C15.8529 9.61837 15.6099 9.82281 15.0638 10.4616C14.8706 10.6877 14.6712 11.0003 14.4921 11.5049C14.3504 11.8767 14.247 12.262 14.1834 12.6548C14.13 12.9597 14.0991 13.2682 14.0908 13.5777C14.0702 14.1885 14.0891 14.8001 14.0891 15.4113V15.5672H11.2832V17.9644H14.0929V30.7346H16.6377V17.9643H23.5544V30.7338H26.0897V15.5621H16.6325C16.6325 15.5234 16.6014 14.0439 16.6622 13.339C16.6694 13.2082 16.6853 13.0782 16.7101 12.9496","fill":"#262934"}})]) } };
//
var script = {
  name: 'PanfilovDigitalSign',
  components: {
    logoWhiteSVG: logoWhiteSVG,
    logoBlackSVG: logoBlackSVG,
    digitalSVG: digitalSVG,
    panfilovSVG: panfilovSVG
  },
  props: {
    darkTheme: {
      default: false,
      type: Boolean
    },
    mode: {
      default: 'medium',
      type: String,
      validator: function validator(value) {
        return ~['small', 'medium', 'large'].indexOf(value);
      }
    },
    colors: {
      default: function _default() {
        return {
          text: {
            current: '#262934',
            hover: '#010101'
          },
          svg: {
            current: '#262934',
            hover: '#7248BD'
          }
        };
      },
      type: Object
    },
    url: {
      default: 'https://panfilov.digital/',
      type: String
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var root = document.documentElement;
      root.style.setProperty('--panfilov-digital-sign__currentTextColor', this.colors.text.current);
      root.style.setProperty('--panfilov-digital-sign__hoverTextColor', this.colors.text.hover);
      root.style.setProperty('--panfilov-digital-sign__currentSVGColor', this.colors.svg.current);
      root.style.setProperty('--panfilov-digital-sign__hoverSVGColor', this.colors.svg.hover);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('a', {
    staticClass: "panfilov-digital-sign",
    class: ["_" + _vm.mode],
    attrs: {
      "href": _vm.url
    }
  }, [_vm.mode === 'small' ? [_vm._ssrNode("<span class=\"text\" data-v-6f4d5224>Разработка сайта</span> "), _vm._ssrNode("<span class=\"icon\" data-v-6f4d5224>", "</span>", [_c('panfilovSVG'), _vm._ssrNode(" "), _c('digitalSVG')], 2)] : _vm._e(), _vm._ssrNode(" "), _vm.mode === 'medium' ? [_vm._ssrNode("<span class=\"text\" data-v-6f4d5224>Разработка сайта — </span> "), _vm._ssrNode("<span class=\"icon\" data-v-6f4d5224>", "</span>", [_c('panfilovSVG'), _vm._ssrNode(" "), _c('digitalSVG')], 2)] : _vm._e(), _vm._ssrNode(" "), _vm.mode === 'large' ? [!_vm.darkTheme ? _c('logoWhiteSVG') : _vm._e(), _vm._ssrNode(" "), _vm.darkTheme ? _c('logoBlackSVG') : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper\" data-v-6f4d5224>", "</div>", [_vm._ssrNode("<span class=\"text\" data-v-6f4d5224>Разработка сайта</span> "), _vm._ssrNode("<span class=\"icon\" data-v-6f4d5224>", "</span>", [_c('panfilovSVG'), _vm._ssrNode(" "), _c('digitalSVG')], 2)], 2)] : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6f4d5224_0", {
    source: ".panfilov-digital-sign[data-v-6f4d5224]{color:var(--panfilov-digital-sign__currentTextColor);text-decoration:none;display:flex}.panfilov-digital-sign._small[data-v-6f4d5224]{flex-direction:column-reverse;align-items:flex-start}.panfilov-digital-sign._small>.text[data-v-6f4d5224]{margin-top:5px}.panfilov-digital-sign._medium[data-v-6f4d5224]{align-items:center}.panfilov-digital-sign._large[data-v-6f4d5224]{align-items:center}.panfilov-digital-sign._large .wrapper[data-v-6f4d5224]{margin-left:8px;display:flex;flex-direction:column-reverse;align-items:flex-start}.panfilov-digital-sign._large .text[data-v-6f4d5224]{margin-top:5px;transition:.2s}.panfilov-digital-sign .icon[data-v-6f4d5224]{display:flex}.panfilov-digital-sign .icon svg[data-v-6f4d5224]{color:var(--panfilov-digital-sign__currentSVGColor);width:6em;height:1.5em;transition:.2s}.panfilov-digital-sign .icon svg[data-v-6f4d5224]:last-child{width:5em}.panfilov-digital-sign[data-v-6f4d5224]:hover{color:var(--panfilov-digital-sign__hoverTextColor)}.panfilov-digital-sign:hover .icon svg[data-v-6f4d5224]{color:var(--panfilov-digital-sign__hoverTextColor)}.panfilov-digital-sign:hover .icon svg[data-v-6f4d5224]:last-child{color:var(--panfilov-digital-sign__hoverSVGColor)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-6f4d5224";
/* module identifier */

var __vue_module_identifier__ = "data-v-6f4d5224";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var components$1=/*#__PURE__*/Object.freeze({__proto__:null,PanfilovDigitalSign:__vue_component__});var install = function installPanfilovDigital(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,PanfilovDigitalSign:__vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;