var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function p(e,t,n){var o,a,i,r,u,f,l=0,c=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=a;return o=a=void 0,l=t,r=e.apply(i,n)}function D(e){return l=e,u=setTimeout(w,t),c?y(e):r}function I(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=i}function w(){var e=d();if(I(e))return j(e);u=setTimeout(w,function(e){var n=t-(e-f);return p?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,b&&o?y(e):(o=a=void 0,r)}function T(){var e=d(),n=I(e);if(o=arguments,a=this,f=e,n){if(void 0===u)return D(f);if(p)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),r}return t=g(t)||0,v(n)&&(c=!!n.leading,i=(p="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=a=u=void 0},T.flush=function(){return void 0===u?r:j(d())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=a.test(e);return u||i.test(e)?r(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:o,maxWait:t,trailing:a})};const b={onInputData:document.querySelector(".feedback-form")};b.onInputData.addEventListener("input",t((function(e){e.preventDefault();const t=b.onInputData.elements.message.value,n=b.onInputData.elements.email.value;localStorage.setItem("feedback-form-state",JSON.stringify({message:t,email:n}))}),500)),window.addEventListener("load",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},{email:n,message:o}=t;b.onInputData.elements.email.value=n,b.onInputData.elements.message.value=o})),b.onInputData.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),localStorage.removeItem("feedback-form-state"),b.onInputData.reset()}));
//# sourceMappingURL=03-feedback.095e8e84.js.map
