_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r("q1tI"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"===typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},SP5B:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var n=r("wx14"),o=r("Ff2n"),a=r("q1tI"),c=r.n(a),i=r("7ljp"),l=r("q3Ej"),u=(c.a.createElement,{});function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{title:"Installing MicroPython on the ESP32 (macOS)",mdxType:"MarkdownWrapper"},Object(i.b)("h1",null,"Installing MicroPython on the ESP32 (macOS)"),Object(i.b)("p",null,"Recently, I've been tinkering around with MicroPython on an Adafruit Huzzah32 (a board with the ESP32 chip). MicroPython has a strong ecosystem of libraries and has allowed me to prototype much faster than using the typical Arduino Editor. This is a quick guide on getting started with the firmware on MacOS."),Object(i.b)("h2",null,"Installing the Firmware"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the SiLabs USB\u2192UART drivers from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"),". This is required to communicate with the board from a Mac.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the MicroPython firmware from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://micropython.org/download/esp32/"}),"https://micropython.org/download/esp32/"),". I downloaded the latest generic firmware with ESP-IDF v3.x for my Adafruit Huzzah32.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Next, install ESPTool. This will allow us to flash the firmware to the board."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pip install --upgrade esptool\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Erase the existing firmware from the board. The port argument is ",Object(i.b)("inlineCode",{parentName:"p"},"/dev/tty.SLAB_USBtoUART")," for MacOS, this is different on other platforms."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," esptool.py --port /dev/tty.SLAB_USBtoUART erase_flash\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the new firmware:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"esptool.py --chip esp32 --port /dev/tty.SLAB_USBtoUART write_flash -z 0x1000 <PATH_TO_YOUR_BIN_FILE>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The firmware should now be installed on your board \ud83c\udf89You can open a Python shell on the board using ",Object(i.b)("inlineCode",{parentName:"p"},"screen"),". To exit the session type (Ctrl-A Ctrl-","\\",")"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"screen /dev/tty.SLAB_USBtoUART 115200\n")))),Object(i.b)("h2",null,"Uploading Code to the board"),Object(i.b)("p",null,"Most of the tutorials I followed stopped here - but I still didn't know how to actually upload code to the board. We can use a tool from Adafruit called ",Object(i.b)("inlineCode",{parentName:"p"},"ampy")," to manage the files on device. Install the pip package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pip install adafruit-ampy\n")),Object(i.b)("p",null,"To upload code to the board simply create a ",Object(i.b)("inlineCode",{parentName:"p"},".py")," file and then use ampy:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ampy -p /dev/tty.SLAB_USBtoUART put <your .py file>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: You must close any screen sessions before attempting to upload a file.")),Object(i.b)("p",null,"The final step to run your code is to open a screen session and import the file you uploaded:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"import <your file name>.py\n")),Object(i.b)("p",null,"After you've verified that your code works, you can rename it to ",Object(i.b)("inlineCode",{parentName:"p"},"main.py")," to have it run when the board boots.")))}b.isMDXComponent=!0},bQFp:function(e,t,r){"use strict";var n=r("pVnL"),o=r.n(n),a=r("8OQS"),c=r.n(a),i=r("qKvR"),l=r("q1tI"),u=r("BMxC"),b=Object(l.forwardRef)((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,l=c()(e,["htmlWidth","htmlHeight","alt"]);return Object(i.d)("img",o()({width:r,height:n,ref:t,alt:a},l))})),p=Object(l.forwardRef)((function(e,t){var r,n=e.src,a=e.fallbackSrc,p=e.onError,s=e.onLoad,f=e.ignoreFallback,d=c()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),m=function(e){var t=e.src,r=e.onLoad,n=e.onError,o=Object(l.useRef)(!0),a=Object(l.useState)(!1),c=a[0],i=a[1];return Object(l.useEffect)((function(){if(t){var e=new window.Image;e.src=t,e.onload=function(e){o.current&&(i(!0),r&&r(e))},e.onError=function(e){o.current&&(i(!1),n&&n(e))}}}),[t,r,n]),Object(l.useEffect)((function(){return function(){o.current=!1}}),[]),c}({src:n,onLoad:s,onError:p});return r=f?{src:n,onLoad:s,onError:p}:{src:m?n:a},Object(i.d)(u.a,o()({as:b,ref:t},r,d))}));p.displayName="Image",t.a=p},q3Ej:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("Sc5l"),c=r("7ljp"),i=r("rePB"),l=r("wx14"),u=r("qWyU"),b=r("sK1y"),p=r("pVnL"),s=r.n(p),f=r("8OQS"),d=r.n(f),m=r("qKvR"),O=r("lSNA"),h=r.n(O),j=r("8hg0"),y=r("CjxU"),v=r("mf32");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=function(e){var t=e.variant,r=e.colorMode;switch(t){case"solid":return function(e){var t=e.theme.colors,r=e.color,n=t[r]&&t[r][500],o=Object(j.a)(n,.6);return{light:{bg:Object(j.c)(r,500),color:"white"},dark:{bg:o,color:"whiteAlpha.800"}}}(e)[r];case"subtle":return function(e){var t=e.theme.colors,r=e.color,n=t[r]&&t[r][200],o=Object(j.b)(n)[300];return{light:{bg:Object(j.c)(r,100),color:Object(j.c)(r,800)},dark:{bg:o,color:Object(j.c)(r,200)}}}(e)[r];case"outline":return function(e){var t=e.theme.colors,r=e.color,n=t[r]&&t[r][200],o=Object(j.a)(n,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(t[r]&&t[r][500]),color:Object(j.c)(r,500)},dark:{boxShadow:"inset 0 0 0px 1px "+o,color:o}}}(e)[r];default:return{}}},N=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{theme:Object(y.b)(),colorMode:Object(v.b)().colorMode});return g(t)},P=r("BMxC"),S=r("D7Da"),E=function(e){var t=e.variantColor,r=void 0===t?"gray":t,n=d()(e,["variantColor"]);Object(S.a)("Code",r);var o=N({variant:"subtle",color:r});return Object(m.d)(P.a,s()({as:"code",display:"inline-block",fontFamily:"mono",fontSize:"sm",px:"0.2em",rounded:"sm"},o,n))},x=Object(n.forwardRef)((function(e,t){var r=e.orientation,n=d()(e,["orientation"]),o="vertical"===r?{borderLeft:"0.0625rem solid",height:"auto",mx:2}:{borderBottom:"0.0625rem solid",width:"auto",my:2};return Object(m.d)(P.a,s()({ref:t,as:"hr","aria-orientation":r,border:"0",opacity:"0.6"},o,{borderColor:"inherit"},n))})),T=r("pboS"),k=r("bQFp"),_=o.a.createElement;function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){var t=e.level,r=e.children;return _(u.a,{mt:6,mb:2,as:"h".concat(t),size:["xl","lg","md","sm","xs","xs"]["".concat(t-1)]},r)},D={em:function(e){var t=e.children;return _(b.a,{as:"em"},t)},blockquote:function(e){var t=e.children;return _(b.a,{as:"i"},t)},code:function(e){var t=e.children,r=e.className;return _(E,{p:2,mt:2,className:r,rounded:"md",maxW:"100%",overflow:"scroll"},t)},del:function(e){var t=e.children;return _(b.a,{as:"del"},t)},thematicBreak:x,a:function(e){var t=e.href,r=e.children;return _(T.a,{href:t,color:"blue.500"},r)},img:function(e){var t=e.src,r=e.alt;return _(k.a,{src:t,alt:r,maxW:"xl",w:"100%",my:2})},p:function(e){return _(b.a,Object(l.a)({as:"p",mt:4,lineHeight:"tall"},e))},ul:function(e){return _(P.a,Object(l.a)({as:"ul",pt:2,pl:4,ml:2},e))},ol:function(e){return _(P.a,Object(l.a)({as:"ol",pt:2,pl:4,ml:2},e))},li:function(e){return _(P.a,Object(l.a)({as:"li"},e))},definition:function(){return null},h1:function(e){return C(B({level:1},e))},h2:function(e){return C(B({level:2},e))},h3:function(e){return C(B({level:3},e))},h4:function(e){return C(B({level:4},e))},h5:function(e){return C(B({level:5},e))},h6:function(e){return C(B({level:6},e))},inlineCode:function(e){var t=e.children;return _(E,{rounded:"md"},t)}},I=r("+oBk"),M=o.a.createElement;t.a=function(e){var t=e.title,r=e.children;return M(I.a,{title:t},M(a.a,null,M(c.a,{components:D},r)))}},quWJ:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/dotnet-core-hosted-service-ile-azure-service-bus-kullanimi",function(){return r("SP5B")}])},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}},[["quWJ",1,2,4,0,3,5]]]);