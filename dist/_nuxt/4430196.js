(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{376:function(t,e,o){var content=o(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("96751316",content,!0,{sourceMap:!1})},443:function(t,e,o){"use strict";o(376)},444:function(t,e,o){var r=o(10)(!1);r.push([t.i,'.product-img[data-v-df7e3222]{max-height:280px;width:535px;-o-object-fit:cover;object-fit:cover}.close-button[data-v-df7e3222]{right:40px!important}.meal-name[data-v-df7e3222]{font-family:Nunito;font-style:normal;font-weight:800;font-size:32px;line-height:38px;text-align:center;letter-spacing:-.9856px;color:#3c3c3c}.grey-tag-box[data-v-df7e3222]{padding:20px 40px;background-color:#f6f9fc;border-radius:2px;margin-top:28px}.meal-button[data-v-df7e3222]{width:225px;margin-top:24px}.meal-button[data-v-df7e3222],.txt-center[data-v-df7e3222]{text-align:center}h2[data-v-df7e3222]{font-family:Nunito;font-style:normal;font-size:44px;line-height:54px;max-width:516px;margin-top:0}.little-header[data-v-df7e3222],h2[data-v-df7e3222]{font-weight:800;color:#3c3c3c}.little-header[data-v-df7e3222]{font-size:20px;line-height:27px;margin-bottom:4px}.little-header[data-v-df7e3222],.little-header strong[data-v-df7e3222]{text-align:center}.small-header[data-v-df7e3222]{font-size:14px;line-height:19px;letter-spacing:.2px;color:#3c3c3c}.button-row[data-v-df7e3222]{display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between;margin-top:8px}.small-top-left-header[data-v-df7e3222]{font-family:Nunito;font-style:normal;font-weight:800;font-size:24px;line-height:24px;letter-spacing:-.5376px;text-transform:uppercase;color:#3c3c3c;position:absolute;left:40px;top:20px;margin-bottom:0}.popup-horizontal-spacer[data-v-df7e3222]{width:100%;height:2px;opacity:.1;background-color:#293f94}.top-spacer[data-v-df7e3222]{margin-top:16px}.switch[data-v-df7e3222]{position:relative;display:inline-block;width:60px;height:34px}.switch input[data-v-df7e3222]{opacity:0;width:0;height:0}.slider[data-v-df7e3222]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[data-v-df7e3222],.slider[data-v-df7e3222]:before{position:absolute;transition:.3s}.slider[data-v-df7e3222]:before{content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff}input:checked+.slider[data-v-df7e3222]{background-color:#293f94}input:focus+.slider[data-v-df7e3222]{box-shadow:0 0 1px #293f94}input:checked+.slider[data-v-df7e3222]:before{transform:translateX(26px)}.slider.round[data-v-df7e3222]{border-radius:34px}.slider.round[data-v-df7e3222]:before{border-radius:50%}.switch-wrapper[data-v-df7e3222]{width:50%;margin-left:-4px;display:inline-block;margin-top:16px}.content-wrapper[data-v-df7e3222]{width:100%;margin-top:36px}.switch-wrapper p[data-v-df7e3222]{width:-webkit-max-content;width:-moz-max-content;width:max-content;font-family:Nunito;font-style:normal;font-weight:800;font-size:18px;line-height:25px;letter-spacing:.2966px;color:#3c3c3c;display:inline-block;margin-bottom:0}.less-padding[data-v-df7e3222]{padding-left:36px;padding-right:36px}',""]),t.exports=r},508:function(t,e,o){"use strict";o.r(e);o(35),o(34);var r={props:["filterId"],data:function(){return{filters:null}},mounted:function(){this.loadFilterStates()},methods:{close:function(){$nuxt.$emit("toogle-filter-popup",!1)},save:function(){var t;switch(this.filterId){case"meals":t="filters/setMealFilters";break;case"snacks":t="filters/setSnackFilters";break;case"breakfast":t="filters/setBreakfastFilters";break;case"sides":t="filters/setDishesFilters"}var e={},o=document.querySelectorAll(".filters-input");(o=Array.from(o)).forEach((function(t){var o=t.id.toLowerCase();e[o]={state:t.checked,key:o}})),this.$store.commit(t,e),$nuxt.$emit("refresh-meals-filtered"),$nuxt.$emit("refresh-sidedishes-filtered"),this.close()},loadFilterStates:function(){var t;switch(this.filterId){case"meals":t=this.$store.state.filters.mealFilters;break;case"sides":t=this.$store.state.filters.sideDishesFilters;break;case"snacks":t=this.$store.state.filters.snackFilters;break;case"breakfast":t=this.$store.state.filters.breakfastFilters}document.querySelectorAll(".filters-input").forEach((function(e){void 0!==t[e.id.toLowerCase()]&&(e.checked=t[e.id.toLowerCase()].state)}))},resetFilters:function(){document.querySelectorAll(".filters-input").forEach((function(t){t.checked=!0}))}}},l=(o(443),o(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup-bg"},[o("div",{staticClass:"popup-wizard"},[o("div",{staticClass:"popup-wizard-content"},[o("svg",{staticClass:"close-button",attrs:{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.close()}}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.5046 8.19899L16.3769 3.49921C17.2077 2.69781 17.2077 1.40245 16.3769 0.601051C15.5461 -0.20035 14.2031 -0.20035 13.3723 0.601051L8.5 5.30083L3.62768 0.601051C2.79686 -0.20035 1.45394 -0.20035 0.623117 0.601051C-0.207706 1.40245 -0.207706 2.69781 0.623117 3.49921L5.49544 8.19899L0.623117 12.8988C-0.207706 13.7002 -0.207706 14.9955 0.623117 15.7969C1.03747 16.1966 1.58143 16.3975 2.1254 16.3975C2.66936 16.3975 3.21333 16.1966 3.62768 15.7969L8.5 11.0972L13.3723 15.7969C13.7867 16.1966 14.3306 16.3975 14.8746 16.3975C15.4186 16.3975 15.9625 16.1966 16.3769 15.7969C17.2077 14.9955 17.2077 13.7002 16.3769 12.8988L11.5046 8.19899Z",fill:"#3C3C3C"}})]),t._v(" "),o("h2",{staticClass:"small-top-left-header"},[t._v("All filters")]),t._v(" "),o("div",{staticClass:"popup-horizontal-spacer top-spacer"}),t._v(" "),o("div",{staticClass:"content-wrapper"},t._l(this.$store.state.wizard.filters,(function(filter){return o("div",{key:filter,class:"switch-wrapper"},[o("label",{staticClass:"switch"},[o("input",{staticClass:"filters-input",attrs:{type:"checkbox",id:filter,name:filter,checked:""}}),t._v(" "),o("span",{staticClass:"slider round"})]),t._v(" "),o("p",[t._v(t._s(filter))])])})),0),t._v(" "),o("div",{staticClass:"popup-horizontal-spacer top-spacer"}),t._v(" "),o("div",{staticClass:"button-row"},[o("button",{staticClass:"ms-button-wide ms-outlined-button meal-button txt-center",on:{click:function(e){return t.resetFilters()}}},[t._v("Clean all")]),t._v(" "),o("button",{staticClass:"ms-button-wide ms-filled-button meal-button less-padding",on:{click:function(e){return t.save()}}},[t._v("Show all results")])])])])])}),[],!1,null,"df7e3222",null);e.default=component.exports}}]);