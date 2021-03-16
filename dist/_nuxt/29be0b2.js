(window.webpackJsonp=window.webpackJsonp||[]).push([[36,13,53,58],{312:function(e,t,r){"use strict";r.r(t),r.d(t,"getProductById",(function(){return n})),r.d(t,"checkIfContains",(function(){return l})),r.d(t,"getProductByIndex",(function(){return o})),r.d(t,"getSideDishByIndex",(function(){return d})),r.d(t,"checkIfMealIsSelected",(function(){return f})),r.d(t,"checkIfMealIsDone",(function(){return h})),r.d(t,"addSelectedDish",(function(){return v})),r.d(t,"removeSelectedDish",(function(){return m})),r.d(t,"getDishesByIndexAndMealId",(function(){return w})),r.d(t,"getBreakfastCount",(function(){return B})),r.d(t,"getAllMealsByIndex",(function(){return k})),r.d(t,"getFreeIndexes",(function(){return D})),r.d(t,"checkIfSideDishIsSelected",(function(){return V})),r.d(t,"changePortionSize",(function(){return $})),r.d(t,"getBreakfastItemsTotalPrice",(function(){return A})),r.d(t,"removeBreakfastById",(function(){return M})),r.d(t,"getWholeMealCalories",(function(){return S})),r.d(t,"getWholeMealFat",(function(){return x})),r.d(t,"getWholeMealCarbs",(function(){return N})),r.d(t,"getWholeMealProtein",(function(){return I})),r.d(t,"getWholeBreakfastProtein",(function(){return C})),r.d(t,"getWholeBreakfastCarbs",(function(){return y})),r.d(t,"getWholeBreakfastFat",(function(){return O})),r.d(t,"getWholeBreakfastCalories",(function(){return P})),r.d(t,"getMealsCount",(function(){return F})),r.d(t,"getVeganBowlInOneItem",(function(){return z})),r.d(t,"getWholeBreakfastValues",(function(){return j})),r.d(t,"getWholeSnackValues",(function(){return W})),r.d(t,"sortArray",(function(){return _})),r.d(t,"deleteMealMenu",(function(){return E})),r.d(t,"setGlobalFilters",(function(){return H}));var c=r(25);r(22),r(93),r(49),r(60),r(12),r(8),r(24),r(148);function n(e,t){for(var r=e.state.wizard.products,i=0;i<r.length;i++)if(r[i].id===t)return r[i]}function l(e,t){if(null==t)return!1;var r=Object.keys(e);for(var c in r)if(void 0!==e[r[c]]&&t.includes(e[r[c]].key)&&e[r[c]].state)return!0;return!1}function o(e,t){for(var r=e.state.cart.selectedMeals,i=0;i<r.length;i++)if(i===t-1)return r[i]}function d(e,t){for(var r=e.state.wizard.sideDishes,i=0;i<r.length;i++)if(i===t-1)return r[i]}function f(e,t){return void 0!==e.state.cart.selectedMeals[t-1]&&null!=e.state.cart.selectedMeals[t-1]}function h(e,t){if(void 0!==e.state.cart.selectedMeals[t-1]&&null!=e.state.cart.selectedMeals[t-1]){if(void 0!==e.state.cart.selectedDishes[t-1]){for(var r=0,i=0;i<e.state.cart.selectedDishes[t-1].length;i++)0!==e.state.cart.selectedDishes[t-1][i].length&&r++;return 2===r}return!1}return!1}function v(e,t,r,c){var n=[];return n.sideDish=t,n.nbr=r,n.mealIndex=c,e.commit("cart/selectSideDish",n),e.commit("wizard/addDishCount",1),!0}function m(e,t,r){var c=[];return c.nbr=t,c.mealIndex=r,e.commit("cart/removeSideDish",c),e.commit("wizard/decreaseDishCount",1),!0}function w(e,t,r){var c=[];if(void 0!==e.state.cart.selectedDishes[t])for(var i=0;i<e.state.cart.selectedDishes[t].length;i++)"undefined"!==e.state.cart.selectedDishes[t][i]&&e.state.cart.selectedDishes[t][i].id===r&&(c[i]=e.state.cart.selectedDishes[t][i]);return c}function B(e,t){for(var r=0,i=0;i<e.state.cart.selectedBreakfast.length;i++)"undefined"!==e.state.cart.selectedBreakfast[i].id&&e.state.cart.selectedBreakfast[i].id===t&&r++;return r}function k(e,t){var r=0,c=[];if(void 0!==e.state.cart.selectedDishes[t])for(var i=0;i<e.state.cart.selectedDishes[t].length;i++)void 0!==e.state.cart.selectedDishes[t][i]&&void 0!==e.state.cart.selectedDishes[t][i].id&&(c[r]=e.state.cart.selectedDishes[t][i],r++);return c}function D(e,t){var r=2;if(void 0!==e.state.cart.selectedDishes[t])for(var i=0;i<e.state.cart.selectedDishes[t].length;i++)void 0!==e.state.cart.selectedDishes[t][i]&&void 0!==e.state.cart.selectedDishes[t][i].id&&r--;return r}function V(e,t,r){for(var c=0,i=0;i<e.state.cart.selectedDishes[r].length;i++)void 0!==e.state.cart.selectedDishes[r].id&&e.state.cart.selectedDishes[r].id===t&&c++;return c}function $(e,t){e.commit("cart/selectPortionSize",t),e.commit("wizard/refreshPrice",e)}function A(e){return e.state.cart.selectedBreakfast.length*e.state.priceOfEachMeal}function M(e,t){}function S(e,t){if(void 0!==e.state.cart.selectedMeals[t]){for(var r=Number(e.state.cart.selectedMeals[t].calories),i=0;i<e.state.cart.selectedDishes[t].length;i++)void 0!==e.state.cart.selectedDishes[t][i]&&void 0!==e.state.cart.selectedDishes[t][i].calories&&(r+=Number(e.state.cart.selectedDishes[t][i].calories));return r}}function x(e,t){if(void 0!==e.state.cart.selectedMeals[t]){for(var r=Number(e.state.cart.selectedMeals[t].fat),i=0;i<e.state.cart.selectedDishes[t].length;i++)void 0!==e.state.cart.selectedDishes[t][i]&&void 0!==e.state.cart.selectedDishes[t][i].fat&&(r+=Number(e.state.cart.selectedDishes[t][i].fat));return r}}function N(e,t){if(void 0!==e.state.cart.selectedMeals[t]){for(var r=Number(e.state.cart.selectedMeals[t].carbs),i=0;i<e.state.cart.selectedDishes[t].length;i++)void 0!==e.state.cart.selectedDishes[t][i]&&void 0!==e.state.cart.selectedDishes[t][i].carbs&&(r+=Number(e.state.cart.selectedDishes[t][i].carbs));return r}}function I(e,t){if(void 0!==e.state.cart.selectedMeals[t]){for(var r=Number(e.state.cart.selectedMeals[t].protein),i=0;i<e.state.cart.selectedDishes[t].length;i++)void 0!==e.state.cart.selectedDishes[t][i]&&void 0!==e.state.cart.selectedDishes[t][i].protein&&(r+=Number(e.state.cart.selectedDishes[t][i].protein));return r}}function C(e,t){var r=0;return void 0!==e.state.cart.selectedBreakfast[t]&&(r+=Number(e.state.cart.selectedBreakfast[t].protein)),r}function y(e,t){var r=0;return void 0!==e.state.cart.selectedBreakfast[t]&&(r+=Number(e.state.cart.selectedBreakfast[t].carbs)),r}function O(e,t){var r=0;return void 0!==e.state.cart.selectedBreakfast[t]&&(r+=Number(e.state.cart.selectedBreakfast[t].fat)),r}function P(e,t){var r=0;return void 0!==e.state.cart.selectedBreakfast[t]&&(r+=Number(e.state.cart.selectedBreakfast[t].calories)),r}function F(e){for(var t=0,i=0;i<e.state.cart.selectedMeals.length;i++)void 0!==e.state.cart.selectedMeals[i]&&t++;return t}function z(e){for(var t=new Object,r=0,i=0;i<e.state.cart.selectedVeganBowl.length;i++)void 0!==e.state.cart.selectedVeganBowl[i]&&(0===r?(t.name=e.state.cart.selectedVeganBowl[i].name,t.protein=Number(e.state.cart.selectedVeganBowl[i].protein),t.carbs=Number(e.state.cart.selectedVeganBowl[i].carbs),t.fat=Number(e.state.cart.selectedVeganBowl[i].fat),t.calories=Number(e.state.cart.selectedVeganBowl[i].calories)):(t.name+=" &"+e.state.cart.selectedVeganBowl[i].name,t.protein+=Number(e.state.cart.selectedVeganBowl[i].protein),t.carbs+=Number(e.state.cart.selectedVeganBowl[i].carbs),t.fat+=Number(e.state.cart.selectedVeganBowl[i].fat),t.calories+=Number(e.state.cart.selectedVeganBowl[i].calories)),r++);return t}function j(e){var t=new Object;if(t.calories=0,t.fat=0,t.carbs=0,t.protein=0,void 0!==e.state.cart.selectedBreakfast)for(var i=0;i<e.state.cart.selectedBreakfast.length;i++)Object(c.a)(e.state.cart.selectedBreakfast[i])&&(t.calories+=Number(e.state.cart.selectedBreakfast[i].calories),t.fat+=Number(e.state.cart.selectedBreakfast[i].fat),t.carbs+=Number(e.state.cart.selectedBreakfast[i].carbs),t.protein+=Number(e.state.cart.selectedBreakfast[i].protein));return t}function W(e){var t=new Object;if(t.calories=0,t.fat=0,t.carbs=0,t.protein=0,void 0!==e.state.cart.selectedSnacks)for(var i=0;i<e.state.cart.selectedSnacks.length;i++)Object(c.a)(e.state.cart.selectedSnacks[i])&&(t.calories+=Number(e.state.cart.selectedSnacks[i].calories),t.fat+=Number(e.state.cart.selectedSnacks[i].fat),t.carbs+=Number(e.state.cart.selectedSnacks[i].carbs),t.protein+=Number(e.state.cart.selectedSnacks[i].protein));return t}function _(e,t){var r=[];switch(t){case"Less calories":r=e.sort((function(a,b){return a.calories>b.calories?1:-1}));break;case"More calories":r=e.sort((function(a,b){return a.calories<b.calories?1:-1}));break;case"Lower price":r=e.sort((function(a,b){return a.additional_price>b.additional_price?1:-1}));break;case"Higher price":r=e.sort((function(a,b){return a.additional_price<b.additional_price?1:-1}));break;case null:r=e}return r}function E(e){e.commit("cart/setExplicitDishes"),e.commit("cart/setExplicitMeals"),e.commit("cart/generateSideDishes",e.state.wizard.amountOfMeals),e.commit("cart/generateMealItems",e.state.wizard.amountOfMeals)}function H(e,t){var r={},c={},n={},l={};e.forEach((function(e){r[e]={key:e,state:!0},c[e]={key:e,state:!0},n[e]={key:e,state:!0},l[e]={key:e,state:!0}})),t.commit("filters/setMealFilters",r),t.commit("filters/setBreakfastFilters",n),t.commit("filters/setSnackFilters",l),t.commit("filters/setDishesFilters",c)}},341:function(e,t,r){"use strict";r.r(t);var c=r(312),n={props:["dish","mealIndex","stepperIndex","selected"],mounted:function(){for(var i=0;i<this.$store.state.cart.selectedVeganBowl.length;i++)void 0!==this.$store.state.cart.selectedVeganBowl[i]&&this.$store.state.cart.selectedVeganBowl[i].id===this.dish.id&&this.stepperValue++;if(this.stepperValue>0?this.decreaseAvailable=!1:this.decreaseAvailable=!0,2==this.$store.state.cart.selectedVeganBowl.length){this.increaseAvailable=!1;for(var e=document.querySelectorAll(".plus-btn-vegan"),t=0;t<e.length;t++)e[t].setAttribute("disabled","true")}},watch:{stepperIndex:function(){var e=Object(c.getBreakfastCount)(this.$store,this.dish.id);if(0==this.$store.state.cart.selectedVeganBowl.length)this.decreaseAvailable=!1,this.$store.state.cart.selectedVeganBowl.length>0?this.increaseAvailable=!0:this.increaseAvailable=!1,this.stepperValue=0;else for(var i=0;i<e.length;i++)void 0!==e[i]&&this.stepperValue++;if(4==e){this.increaseAvailable=!1;for(var t=document.querySelectorAll(".plus-btn-vegan"),r=0;r<t.length;r++)t[r].setAttribute("disabled","true")}if(e<4){this.increaseAvailable=!0;for(var n=document.querySelectorAll(".plus-btn-vegan"),l=0;l<n.length;l++)n[l].removeAttribute("disabled")}this.stepperValue>0?this.decreaseAvailable=!1:this.decreaseAvailable=!0,this.$store.state.cart.selectedVeganBowl.length>0?this.increaseAvailable=!0:this.increaseAvailable=!1}},data:function(){return{decreaseAvailable:!0,increaseAvailable:!0,stepperValue:0}},beforeDestroy:function(){$nuxt.$emit("show-and-count-points",!1,Object(c.getBreakfastItemsTotalPrice)(this.$store))},methods:{addSelectedDishFromStepper:function(){if(this.$store.state.cart.selectedVeganBowl.length<4){var e=new Object;if(e.index=this.$store.state.cart.selectedVeganBowl.length,e.data=this.dish,this.$store.commit("cart/setVeganBowlItem",e),this.stepperValue++,4==this.$store.state.cart.selectedVeganBowl.length){this.increaseAvailable=!1;for(var t=document.querySelectorAll(".plus-btn-vegan"),i=0;i<t.length;i++)t[i].setAttribute("disabled","true")}this.stepperValue>0?this.decreaseAvailable=!1:this.decreaseAvailable=!0,$nuxt.$emit("show-and-count-points",!0,this.$store.state.veganBowlPrice),$nuxt.$emit("recalc-vegan-bowl-count"),$nuxt.$emit("check-addons"),this.$store.commit("wizard/refreshPrice",this.$store),$nuxt.$emit("vegan-bowl-values-refresh")}},removeSelectedDishFromStepper:function(){if(this.$store.state.cart.selectedVeganBowl.length>0){if(this.$store.commit("cart/removeVeganBowl",this.dish.id),this.stepperValue--,this.$store.state.cart.selectedVeganBowl.length<4){this.increaseAvailable=!0;for(var e=document.querySelectorAll(".plus-btn-vegan"),i=0;i<e.length;i++)e[i].removeAttribute("disabled")}0===this.stepperValue?(this.decreaseAvailable=!0,$nuxt.$emit("show-and-count-points",!0,0)):$nuxt.$emit("show-and-count-points",!0,this.$store.state.veganBowlPrice),$nuxt.$emit("recalc-vegan-bowl-count"),$nuxt.$emit("check-addons"),this.$store.commit("wizard/refreshPrice",this.$store),$nuxt.$emit("vegan-bowl-values-refresh")}}}},l=r(5),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"side-meal-stepper-box"},[r("button",{staticClass:"stepper-btn",attrs:{disabled:e.decreaseAvailable},on:{click:function(t){return e.removeSelectedDishFromStepper()}}},[r("svg",{attrs:{width:"16",height:"4",viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{width:"16",height:"4",rx:"2",fill:"white"}})])]),e._v(" "),r("p",{staticClass:"stepper-nbr"},[e._v(e._s(e.stepperValue))]),e._v(" "),r("button",{staticClass:"stepper-btn plus-btn-vegan",attrs:{disabled:!e.increaseAvailable},on:{click:function(t){return e.addSelectedDishFromStepper()}}},[r("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.66667 0C5.74619 0 5 0.746192 5 1.66667V5H1.66667C0.746192 5 0 5.74619 0 6.66667C0 7.58714 0.746192 8.33333 1.66667 8.33333H5V11.6667C5 12.5871 5.74619 13.3333 6.66667 13.3333C7.58714 13.3333 8.33333 12.5871 8.33333 11.6667V8.33333H11.6667C12.5871 8.33333 13.3333 7.58714 13.3333 6.66667C13.3333 5.74619 12.5871 5 11.6667 5H8.33333V1.66667C8.33333 0.746192 7.58714 0 6.66667 0Z",fill:"white"}})])])])}),[],!1,null,null,null);t.default=component.exports}}]);