(function(e){function t(t){for(var a,n,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},i=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"242c":function(e,t,r){"use strict";r("b750")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("a026"),s=r("1dce"),i=r.n(s),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Form")},o=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[1===e.step?r("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wraper_header"},[e._v("Регистрация")]),e._m(0),r("hr",{staticClass:"wrapper_step-progress1"}),r("div",{staticClass:"inputs-wrapper"},[r("div",{staticClass:"required-block"},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.name,expression:"firstPage.name"}],class:{invalid:e.$v.firstPage.name.$dirty&&e.$v.firstPage.name.required,"error-input":e.$v.firstPage.name.$error},attrs:{type:"text",name:"name",placeholder:"Имя..."},domProps:{value:e.firstPage.name},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"name",t.target.value)}}}),r("p",{staticClass:"error"},[e.$v.firstPage.name.$error?r("span",[e._v("Ошибка: Обязательное поле, не менее 2 символов")]):e._e()])]),r("div",{staticClass:"required-block"},[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.lastName,expression:"firstPage.lastName"}],class:{invalid:e.$v.firstPage.lastName.$dirty&&e.$v.firstPage.lastName.required,"error-input":e.$v.firstPage.lastName.$error},attrs:{type:"text",name:"last-name",placeholder:"Фамилия..."},domProps:{value:e.firstPage.lastName},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"lastName",t.target.value)}}}),r("p",{staticClass:"error"},[e.$v.firstPage.lastName.$error?r("span",[e._v("Ошибка: Обязательное поле, не менее 2 символов")]):e._e()])]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"otch"}},[e._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.otch,expression:"firstPage.otch"}],attrs:{type:"text",name:"otch",placeholder:"Отчество..."},domProps:{value:e.firstPage.otch},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"otch",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"gender"}},[e._v("Пол")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.gender,expression:"firstPage.gender"}],attrs:{name:"gender"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.firstPage,"gender",t.target.multiple?r:r[0])}}},[r("option",[e._v("Мужской")]),r("option",[e._v("Женский")])]),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[e._m(3),r("div",{staticClass:"date"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.day,expression:"firstPage.day"}],class:{invalid:e.$v.firstPage.day.$dirty&&e.$v.firstPage.day.required,"error-input":e.$v.firstPage.day.$error},attrs:{type:"number",name:"day",placeholder:"ДД"},domProps:{value:e.firstPage.day},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"day",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.mounth,expression:"firstPage.mounth"}],class:{invalid:e.$v.firstPage.mounth.$dirty&&e.$v.firstPage.mounth.required,"error-input":e.$v.firstPage.mounth.$error},attrs:{type:"number",name:"mounth",placeholder:"ММ"},domProps:{value:e.firstPage.mounth},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"mounth",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.year,expression:"firstPage.year"}],class:{invalid:e.$v.firstPage.year.$dirty&&e.$v.firstPage.year.required,"error-input":e.$v.firstPage.year.$error},attrs:{type:"number",name:"year",placeholder:"ГГГГ"},domProps:{value:e.firstPage.year},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"year",t.target.value)}}})]),r("p",{staticClass:"error"},[e.$v.firstPage.year.$error||e.$v.firstPage.mounth.$error||e.$v.firstPage.day.$error?r("span",[e._v("Ошибка: Обязательные поля, проверьте правильность введенных данных")]):e._e()])]),r("div",{staticClass:"required-block"},[e._m(4),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.phone,expression:"firstPage.phone"}],class:{invalid:e.$v.firstPage.phone.$dirty&&e.$v.firstPage.phone.required,"error-input":e.$v.firstPage.phone.$error},attrs:{type:"number",name:"phone",placeholder:"79371234567"},domProps:{value:e.firstPage.phone},on:{input:function(t){t.target.composing||e.$set(e.firstPage,"phone",t.target.value)}}}),r("p",{staticClass:"error"},[e.$v.firstPage.phone.$error?r("span",[e._v("Ошибка: Обязательное поле, телефон начинается с 7")]):e._e()])]),r("div",{staticClass:"required-block"},[e._m(5),r("select",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.group,expression:"firstPage.group"}],class:{invalid:e.$v.firstPage.group.$dirty&&e.$v.firstPage.group.required,"error-input":e.$v.firstPage.group.$error},attrs:{name:"group"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.firstPage,"group",t.target.multiple?r:r[0])}}},[r("option",[e._v("VIP")]),r("option",[e._v("Проблемные")]),r("option",[e._v("ОМС")])]),r("p",{staticClass:"error"},[e.$v.firstPage.group.$error?r("span",[e._v("Ошибка: Обязательное поле")]):e._e()])]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"gender"}},[e._v("Лечащий врач")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.doctor,expression:"firstPage.doctor"}],attrs:{name:"gender"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.firstPage,"doctor",t.target.multiple?r:r[0])}}},[r("option",[e._v("Иванов")]),r("option",[e._v("Захаров")]),r("option",[e._v("Чернышева")])]),r("p",{staticClass:"error"})]),r("div",{staticClass:"check"},[r("label",{staticClass:"label",attrs:{for:"sms"}},[e._v("Не отправлять СМС")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPage.sms,expression:"firstPage.sms"}],attrs:{type:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(e.firstPage.sms)?e._i(e.firstPage.sms,null)>-1:e.firstPage.sms},on:{change:function(t){var r=e.firstPage.sms,a=t.target,s=!!a.checked;if(Array.isArray(r)){var i=null,n=e._i(r,i);a.checked?n<0&&e.$set(e.firstPage,"sms",r.concat([i])):n>-1&&e.$set(e.firstPage,"sms",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.firstPage,"sms",s)}}})]),e._m(6)])])]):e._e(),2===e.step?r("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wraper_header"},[e._v("Регистрация")]),e._m(7),r("hr",{staticClass:"wrapper_step-progress2"}),r("div",{staticClass:"inputs-wrapper"},[r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"country"}},[e._v("Страна")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPage.country,expression:"secondPage.country"}],attrs:{type:"text",name:"country",placeholder:"Страна..."},domProps:{value:e.secondPage.country},on:{input:function(t){t.target.composing||e.$set(e.secondPage,"country",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"area"}},[e._v("Область")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPage.area,expression:"secondPage.area"}],attrs:{type:"text",name:"area",placeholder:"Область..."},domProps:{value:e.secondPage.area},on:{input:function(t){t.target.composing||e.$set(e.secondPage,"area",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[e._m(8),r("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPage.city,expression:"secondPage.city"}],class:{invalid:e.$v.secondPage.city.$dirty&&e.$v.secondPage.city.required,"error-input":e.$v.secondPage.city.$error},attrs:{type:"text",name:"city",placeholder:"Город..."},domProps:{value:e.secondPage.city},on:{input:function(t){t.target.composing||e.$set(e.secondPage,"city",t.target.value)}}}),r("p",{staticClass:"error"},[e.$v.secondPage.city.$error?r("span",[e._v("Ошибка: Обязательное поле, не менее 3 символов")]):e._e()])]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"street"}},[e._v("Улица")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPage.street,expression:"secondPage.street"}],attrs:{type:"text",name:"street",placeholder:"Улица..."},domProps:{value:e.secondPage.street},on:{input:function(t){t.target.composing||e.$set(e.secondPage,"street",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"house"}},[e._v("Дом")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPage.house,expression:"secondPage.house"}],attrs:{type:"text",name:"house",placeholder:"Дом..."},domProps:{value:e.secondPage.house},on:{input:function(t){t.target.composing||e.$set(e.secondPage,"house",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"index"}},[e._v("Индекс")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPage.index,expression:"secondPage.index"}],attrs:{type:"text",name:"index",placeholder:"Индекс..."},domProps:{value:e.secondPage.index},on:{input:function(t){t.target.composing||e.$set(e.secondPage,"index",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"button-conteiner"},[r("button",{staticClass:"back",on:{click:e.stepBack}},[e._v("Предыдущий шаг")]),r("button",{staticClass:"next",attrs:{type:"submit"}},[e._v("Следующий шаг")])])])])]):e._e(),3===e.step?r("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wraper_header"},[e._v("Регистрация")]),e._m(9),r("hr",{staticClass:"wrapper_step-progress3"}),r("div",{staticClass:"inputs-wrapper"},[r("div",{staticClass:"required-block"},[e._m(10),r("select",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.doc,expression:"thirdPage.doc"}],class:{invalid:e.$v.thirdPage.doc.$dirty&&e.$v.thirdPage.doc.required,"error-input":e.$v.thirdPage.doc.$error},attrs:{name:"doc"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.thirdPage,"doc",t.target.multiple?r:r[0])}}},[r("option",[e._v("Паспорт")]),r("option",[e._v("Свидетельство о рождении")]),r("option",[e._v("Водительские права")])]),r("p",{staticClass:"error"},[e.$v.thirdPage.doc.$error?r("span",[e._v("Ошибка: Обязательное поле")]):e._e()])]),r("div",{staticClass:"required-block"},[e._m(11),r("div",{staticClass:"date"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.day,expression:"thirdPage.day"}],class:{invalid:e.$v.thirdPage.day.$dirty&&e.$v.thirdPage.day.required,"error-input":e.$v.thirdPage.day.$error},attrs:{type:"number",name:"day",placeholder:"ДД"},domProps:{value:e.thirdPage.day},on:{input:function(t){t.target.composing||e.$set(e.thirdPage,"day",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.mounth,expression:"thirdPage.mounth"}],class:{invalid:e.$v.thirdPage.mounth.$dirty&&e.$v.thirdPage.mounth.required,"error-input":e.$v.thirdPage.mounth.$error},attrs:{type:"number",name:"mounth",placeholder:"ММ"},domProps:{value:e.thirdPage.mounth},on:{input:function(t){t.target.composing||e.$set(e.thirdPage,"mounth",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.year,expression:"thirdPage.year"}],class:{invalid:e.$v.thirdPage.year.$dirty&&e.$v.thirdPage.year.required,"error-input":e.$v.thirdPage.year.$error},attrs:{type:"number",name:"year",placeholder:"ГГГГ"},domProps:{value:e.thirdPage.year},on:{input:function(t){t.target.composing||e.$set(e.thirdPage,"year",t.target.value)}}})]),r("p",{staticClass:"error"},[e.$v.thirdPage.year.$error||e.$v.thirdPage.mounth.$error||e.$v.thirdPage.day.$error?r("span",[e._v("Ошибка: Обязательные поля, проверьте правильность введенных данных")]):e._e()])]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"serial"}},[e._v("Серия")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.serial,expression:"thirdPage.serial"}],attrs:{type:"number",name:"serial",placeholder:"Серия..."},domProps:{value:e.thirdPage.serial},on:{input:function(t){t.target.composing||e.$set(e.thirdPage,"serial",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"num"}},[e._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.num,expression:"thirdPage.num"}],attrs:{type:"number",name:"num",placeholder:"Номер..."},domProps:{value:e.thirdPage.num},on:{input:function(t){t.target.composing||e.$set(e.thirdPage,"num",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"required-block"},[r("label",{staticClass:"label",attrs:{for:"from"}},[e._v("Кем выдан")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPage.from,expression:"thirdPage.from"}],attrs:{type:"text",name:"from",placeholder:"Кем выдан..."},domProps:{value:e.thirdPage.from},on:{input:function(t){t.target.composing||e.$set(e.thirdPage,"from",t.target.value)}}}),r("p",{staticClass:"error"})]),r("div",{staticClass:"button-conteiner"},[r("button",{staticClass:"back",on:{click:e.stepBack}},[e._v("Предыдущий шаг")]),r("button",{staticClass:"next",attrs:{type:"submit"}},[e._v("Завершить")])])])])]):e._e(),4===e.step?r("div",{staticClass:"final"},[r("h1",[e._v("Регистрация прошла успешно!")])]):e._e()])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper_step"},[e._v("Персональные данные "),r("span",[e._v("(шаг 1 из 3)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Имя"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"last-name"}},[e._v("Фамилия"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"birthday"}},[e._v("Дата рождения"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"phone"}},[e._v("Номер телефона"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"group"}},[e._v("Группа клиентов"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"button-conteiner"},[r("div"),r("button",{staticClass:"next",attrs:{type:"submit"}},[e._v("Следующий шаг")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper_step"},[e._v("Место проживания "),r("span",[e._v("(шаг 2 из 3)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"city"}},[e._v("Город"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper_step"},[e._v("Паспортные данные "),r("span",[e._v("(шаг 3 из 3)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"doc"}},[e._v("Тип Документа"),r("span",[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"label",attrs:{for:"birthday"}},[e._v("Дата выдачи"),r("span",[e._v("*")])])}],u=r("b5ae"),d={data(){return{step:1,firstPage:{name:"",lastName:"",otch:"",gender:"",day:"",mounth:"",year:"",phone:"",group:"",doctor:"",sms:!0},secondPage:{country:"",area:"",city:"",street:"",house:"",index:""},thirdPage:{doc:"",serial:"",num:"",from:"",day:"",mounth:"",year:""}}},validations:{firstPage:{name:{required:u["required"],minLength:Object(u["minLength"])(2)},lastName:{required:u["required"],minLength:Object(u["minLength"])(2)},day:{required:u["required"],maxValue:Object(u["maxValue"])(31),minValue:Object(u["minValue"])(1)},mounth:{required:u["required"],maxValue:Object(u["maxValue"])(12),minValue:Object(u["minValue"])(1)},year:{required:u["required"],maxValue:Object(u["maxValue"])(2021),minValue:Object(u["minValue"])(1930)},phone:{required:u["required"],minLength:Object(u["minLength"])(11),maxLength:Object(u["maxLength"])(11),isPhone(e){return"7"===e[0]}},group:{required:u["required"]}},secondPage:{city:{required:u["required"],minLength:Object(u["minLength"])(3)}},thirdPage:{doc:{required:u["required"]},day:{required:u["required"],maxValue:Object(u["maxValue"])(31),minValue:Object(u["minValue"])(1)},mounth:{required:u["required"],maxValue:Object(u["maxValue"])(12),minValue:Object(u["minValue"])(1)},year:{required:u["required"],maxValue:Object(u["maxValue"])(2021),minValue:Object(u["minValue"])(1930)}}},methods:{firstPageCheck(){console.log(this.sms)},submitHandler(){if(1===this.step){if(this.$v.firstPage.$invalid)return void this.$v.firstPage.$touch()}else if(2===this.step){if(this.$v.secondPage.$invalid)return void this.$v.secondPage.$touch()}else if(this.$v.thirdPage.$invalid)return void this.$v.thirdPage.$touch();this.step++},stepBack(){this.step--}}},p=d,v=(r("242c"),r("2877")),m=Object(v["a"])(p,l,c,!1,null,null,null),g=m.exports,f={name:"App",components:{Form:g}},h=f,P=(r("cf25"),Object(v["a"])(h,n,o,!1,null,null,null)),_=P.exports;a["a"].config.productionTip=!1,a["a"].config.devtools=!0,a["a"].use(i.a),new a["a"]({render:function(e){return e(_)}}).$mount("#app")},b750:function(e,t,r){},cf25:function(e,t,r){"use strict";r("fcfc")},fcfc:function(e,t,r){}});
//# sourceMappingURL=app.80a77aea.js.map