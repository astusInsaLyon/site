(window.webpackJsonp=window.webpackJsonp||[]).push([[46,23,24,25,32],{456:function(t,e,n){"use strict";n(12),n(13),n(16),n(17),n(10),n(5),n(14);var r=n(2),o=(n(214),n(215),n(28),n(461),n(212)),c=n(457),l=n(87),d=n(9);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},457:function(t,e,n){"use strict";n(28);var r=n(1),o=n(458);e.a=r.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},461:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("61d1dd60",content,!0,{sourceMap:!1})},462:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:.25rem}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:32px .25rem}.v-card{border-width:thin;display:block;max-width:100%;outline:none;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:16px;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:20px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:14px;font-weight:500;letter-spacing:.0125em;line-height:14px;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:20px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),r.locals={},t.exports=r},469:function(t,e,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6d27d36e",content,!0,{sourceMap:!1})},470:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("8b42b474",content,!0,{sourceMap:!1})},471:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("41ebce00",content,!0,{sourceMap:!1})},472:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("13fe7dd4",content,!0,{sourceMap:!1})},473:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("26e8925a",content,!0,{sourceMap:!1})},486:function(t,e,n){"use strict";n(469)},487:function(t,e,n){var r=n(21),o=n(303),c=n(488),l=n(489),d=n(490),m=n(491),v=r((function(i){return i[1]})),f=o(c),h=o(l),x=o(d),_=o(m);v.push([t.i,".description[data-v-2345413d]{text-align:justify}.custom-carousel[data-v-2345413d]{box-shadow:5px 5px 5px;margin-bottom:3%}.linking[data-v-2345413d]{font-size:30px;text-align:center;width:100%}.act-content[data-v-2345413d]{margin-left:10%;margin-right:10%}.entire-sheet-0[data-v-2345413d]{background-image:url("+f+");background-position-y:50%;background-size:100% auto}.entire-sheet-1[data-v-2345413d]{background-image:url("+h+");background-position-y:75%;background-size:100% auto}.entire-sheet-2[data-v-2345413d]{background-image:url("+x+");background-position-y:50%;background-size:100% auto}.entire-sheet-3[data-v-2345413d]{background-image:url("+_+");background-position-y:50%;background-size:100% auto}.text-bg[data-v-2345413d]{background-color:hsla(0,0%,100%,.7);border-radius:4px;padding:20px}@media (max-width:991px){.description[data-v-2345413d]{text-align:center}.entire-sheet-0[data-v-2345413d]{background-image:url("+_+");background-position-x:50%;background-size:auto 100%}.entire-sheet-1[data-v-2345413d]{background-image:url("+f+");background-position-x:50%;background-size:auto 100%}.entire-sheet-2[data-v-2345413d]{background-image:url("+h+");background-position-x:50%;background-size:auto 100%}.entire-sheet-3[data-v-2345413d]{background-image:url("+x+");background-position-x:50%;background-size:auto 100%}}",""]),v.locals={},t.exports=v},488:function(t,e,n){t.exports=n.p+"img/afterwork.96fa059.jpg"},489:function(t,e,n){t.exports=n.p+"img/interview.8b537da.jpg"},490:function(t,e,n){t.exports=n.p+"img/forum.72ce873.jpg"},491:function(t,e,n){t.exports=n.p+"img/company.111a65a.jpg"},492:function(t,e,n){"use strict";n(470)},493:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".bg-astus[data-v-504fb78c]{background-color:#a5beff!important;padding-bottom:30px;padding-top:75px}",""]),r.locals={},t.exports=r},494:function(t,e,n){"use strict";n(471)},495:function(t,e,n){var r=n(21),o=n(303),c=n(496),l=n(497),d=n(498),m=n(499),v=r((function(i){return i[1]})),f=o(c),h=o(l),x=o(d),_=o(m);v.push([t.i,".description[data-v-4315dc16]{text-align:justify}.custom-carousel[data-v-4315dc16]{box-shadow:5px 5px 5px;margin-bottom:3%}.linking[data-v-4315dc16]{font-size:30px;text-align:center;width:100%}.act-content[data-v-4315dc16]{margin-left:10%;margin-right:10%}.entire-sheet-0[data-v-4315dc16]{background-image:url("+f+");background-position-y:50%;background-size:100% auto}.entire-sheet-1[data-v-4315dc16]{background-image:url("+h+");background-position-y:75%;background-size:100% auto}.entire-sheet-2[data-v-4315dc16]{background-image:url("+x+");background-position-y:50%;background-size:100% auto}.entire-sheet-3[data-v-4315dc16]{background-image:url("+_+");background-position-y:50%;background-size:100% auto}.text-bg[data-v-4315dc16]{background-color:hsla(0,0%,100%,.7);border-radius:4px;padding:20px}@media (max-width:991px){.description[data-v-4315dc16]{text-align:center}.entire-sheet-0[data-v-4315dc16]{background-image:url("+f+");background-position-x:50%;background-size:auto 100%}.entire-sheet-1[data-v-4315dc16]{background-image:url("+h+");background-position-x:50%;background-size:auto 100%}.entire-sheet-2[data-v-4315dc16]{background-image:url("+x+");background-position-x:50%;background-size:auto 100%}.entire-sheet-3[data-v-4315dc16]{background-image:url("+_+");background-position-x:50%;background-size:auto 100%}}",""]),v.locals={},t.exports=v},496:function(t,e,n){t.exports=n.p+"img/WEI.19c633b.jpg"},497:function(t,e,n){t.exports=n.p+"img/pot.a867a57.jpg"},498:function(t,e,n){t.exports=n.p+"img/retrouvaille.8de6ac2.jpg"},499:function(t,e,n){t.exports=n.p+"img/canoe.77b50b4.jpg"},500:function(t,e,n){var map={"./antoine.jpg":501,"./antonin.jpg":502,"./marie.jpg":503,"./mathias.jpg":504,"./nina.jpg":505,"./theo.jpg":506,"./thibaud.jpg":507,"./thomas.jpg":508,"./tristan.jpg":509};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=500},501:function(t,e,n){t.exports=n.p+"img/antoine.af2dc9f.jpg"},502:function(t,e,n){t.exports=n.p+"img/antonin.75bf681.jpg"},503:function(t,e,n){t.exports=n.p+"img/marie.2a3d5b5.jpg"},504:function(t,e,n){t.exports=n.p+"img/mathias.40a54f1.jpg"},505:function(t,e,n){t.exports=n.p+"img/nina.51735d6.jpg"},506:function(t,e,n){t.exports=n.p+"img/theo.5ae7896.jpg"},507:function(t,e,n){t.exports=n.p+"img/thibaud.a08c230.jpg"},508:function(t,e,n){t.exports=n.p+"img/thomas.cc312a6.jpg"},509:function(t,e,n){t.exports=n.p+"img/tristan.def26e6.jpg"},510:function(t,e,n){"use strict";n(472)},511:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".fixed-size[data-v-3ee0cedd]{height:200px;-o-object-fit:cover;object-fit:cover;width:200px}.astus-description[data-v-3ee0cedd]{font-size:1.2em}@media (max-width:991px){.fixed-size[data-v-3ee0cedd]{height:450px;-o-object-fit:cover;object-fit:cover;width:100%}}",""]),r.locals={},t.exports=r},512:function(t,e,n){var map={"./1.jpg":513,"./2.jpg":514,"./3.jpg":515,"./4.jpg":516,"./5.jpg":517,"./6.jpg":518,"./7.jpg":519,"./8.jpg":520};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=512},513:function(t,e,n){t.exports=n.p+"img/1.9044226.jpg"},514:function(t,e,n){t.exports=n.p+"img/2.dac7633.jpg"},515:function(t,e,n){t.exports=n.p+"img/3.ec39179.jpg"},516:function(t,e,n){t.exports=n.p+"img/4.9d2416c.jpg"},517:function(t,e,n){t.exports=n.p+"img/5.6e499fa.jpg"},518:function(t,e,n){t.exports=n.p+"img/6.676756b.jpg"},519:function(t,e,n){t.exports=n.p+"img/7.2e38f85.jpg"},520:function(t,e,n){t.exports=n.p+"img/8.05a53a6.jpg"},521:function(t,e,n){"use strict";n(473)},522:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"ul[data-v-cc6a6062]{list-style-type:none;padding:0;text-align:center}li[data-v-cc6a6062]{display:inline-block;margin:0 10px}img[data-v-cc6a6062]{max-width:45vw}@media (max-width:991px){img[data-v-cc6a6062]{height:auto;max-width:100%}}",""]),r.locals={},t.exports=r},570:function(t,e,n){"use strict";n.r(e);var r=n(667),o=n(670),c=n(449),l=n(454),d=n(448),m=n(53),v=(n(38),{data:function(){return{model:0,events:[{name:"Afterwork",desc:"Quoi de mieux que de partager un verre avec des professionnels pour pouvoir discuter dans une atmosphère plaisante ? L'Astus organise régulièrement ce genre d’évènements permettant aux étudiants d’échanger avec des ingénieurs de façon plus libre et détendue."},{name:"Simulation d’entretiens",desc:"Des employés de différentes entreprises du monde des télécommunications viennent faire passer des entretiens fictifs aux étudiants pour les entraîner et tester leur CV. Cela permet aux étudiants de faciliter la recherche d’un stage."},{name:"Forum des entreprises",desc:"L’Astus participe à l’organisation du forum des entreprises du département Télécommunications. Cet événement permet aux étudiants de rencontrer et d'échanger avec des représentants de différentes entreprises pour commencer à réfléchir à des futurs stages."},{name:" Et encore d’autres évènements",desc:"L’Astus imagine et créé en partenariat avec des entreprises du monde des télécommunications  des évènements permettant aux étudiants de découvrir une  ou plusieurs thématiques et d’échanger avec des ingénieurs sur les différents aspects de leur métier."}]}}}),f=(n(486),n(54)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-extra-light"},[e(l.a,[e(d.a,{staticClass:"mb-5",attrs:{justify:"center"}},[e(c.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"ui-title font-weight-bold"},[t._v("Les évènements entreprises")]),t._v(" "),e("p",[t._v("\n            L'ASTUS organise aussi des évènements un peu plus sérieux, pour\n            vous permettre d'avoir un premier contact avec différentes\n            entreprises le plus tôt possible : \n          ")])])])],1),t._v(" "),e(r.a,{staticClass:"custom-carousel",attrs:{cycle:"",interval:"8000","show-arrows":!1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.events,(function(n,i){return e(o.a,{key:i},[e(m.a,{class:"entire-sheet-"+i,attrs:{height:"110%",tile:""}},[e(d.a,{staticClass:"fill-height act-content",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"text-bg"},[e("h1",{staticClass:"text-h1",staticStyle:{color:"black"}},[t._v(t._s(n.name))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"text-h4 description",staticStyle:{color:"black"}},[t._v(t._s(n.desc))])])])],1)],1)})),1),t._v(" "),e("nuxt-link",{staticClass:"text-themecolor linking text-decoration-none d-flex align-center font-size-hight",staticStyle:{gap:"8px"},attrs:{to:"entreprise"}},[t._v("\n    En savoir plus "),e("i",{staticClass:"mdi mdi-arrow-right",staticStyle:{"font-size":"30px",transform:"translateY(3.5px)"}})])],1)],1)}),[],!1,null,"2345413d",null);e.default=component.exports},578:function(t,e,n){"use strict";n.r(e);var r=n(449),o=n(454),c=n(448),l={name:"TcAstusText",data:function(){return{}},methods:{}},d=(n(492),n(54)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-astus"},[e(o.a,[e(c.a,{attrs:{justify:"center"}},[e(r.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"ui-title font-weight-bold"},[t._v("L'ASTUS ?")]),t._v(" "),e("p",{staticStyle:{color:"black"}},[t._v("\n            Il s'agit de l'Association des élèves du département. Nous avons 2\n            missions : organiser la vie extra-scolaire des élèves ainsi que de\n            maintenir un contact privilégié avec les entreprises partenaires.\n            Ces deux missions donnent lieu à différents évènements tout le\n            long de l'année.\n          ")])])])],1)],1)],1)}),[],!1,null,"504fb78c",null);e.default=component.exports},579:function(t,e,n){"use strict";n.r(e);var r=n(667),o=n(670),c=n(449),l=n(454),d=n(448),m=n(53),v=(n(38),{data:function(){return{model:0,events:[{name:"WEI",desc:"L'événement de début d'année à ne surtout pas rater. En TC nous avons la chance de le réaliser sur 3 jours (jeudi à samedi). Au programme : des jeux, de la baignade et des moments de convivialité."},{name:"POT",desc:"Organisé par des élèves volontaires de 3e année le pot a pour but de présenter le département aux élèves du FIMI. L'occasion de se retrouver pour discuter orientation autour d'un cocktail préparé par vos soins ! (Souvent ceux qui font le pot finissent à l'ASTUS d'ailleurs)"},{name:"Soirée retrouvailles",desc:"C'est le premier événement du nouveau mandat fraîchement élu en début d'année (et oui l'ASTUS fonctionne en année civile !). On privatise un bar et on se retrouve tous ensemble pour accueillir chaleureusement tous nos joyeux TC qui étaient partis au S1 en échange."},{name:"WEC",desc:"Un week-end en fin d'année, du canoë, un super camping : quoi de mieux ? C'est le dernier évènement de l'année scolaire et ça permet de vivre un dernier moment absolument fou tous ensemble !"}]}}}),f=(n(494),n(54)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-extra-light"},[e(l.a,[e(d.a,{staticClass:"mb-5",attrs:{justify:"center"}},[e(c.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"ui-title font-weight-bold"},[t._v("Les évènements")]),t._v(" "),e("p",[t._v("\n            Tout au long de l'année l'ASTUS a pour objectif de régaler les\n            membres du département avec des évènements festifs. Nous allons\n            revenir sur chacun d'entre eux pour vous mettre l'eau à la bouche\n            !\n          ")])])])],1),t._v(" "),e(r.a,{staticClass:"custom-carousel",attrs:{cycle:"",interval:"8000","show-arrows":!1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.events,(function(n,i){return e(o.a,{key:i},[e(m.a,{class:"entire-sheet-"+i,attrs:{height:"110%",tile:""}},[e(d.a,{staticClass:"fill-height act-content",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"text-bg"},[e("h1",{staticClass:"text-h1",staticStyle:{color:"black"}},[t._v(t._s(n.name))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"text-h4 description",staticStyle:{color:"black"}},[t._v(t._s(n.desc))])])])],1)],1)})),1)],1)],1)}),[],!1,null,"4315dc16",null);e.default=component.exports},580:function(t,e,n){"use strict";n.r(e);var r=n(456),o=n(449),c=n(454),l=n(302),d=n(448),m=(n(12),n(74),n(38),{name:"TcTeam",data:function(){return{bureau:[{name:"Antoine BBZ",profil_pic:"antoine",facebook:"https://www.facebook.com/profile.php?id=100072108245890",insta:"https://instagram.com/antoineboisberlioz",role:"Président",description:"Objectivement la seule personne compétente de l'astus"},{name:"Mathias Schraen",profil_pic:"mathias",facebook:"https://www.facebook.com/mathias.schraen",insta:"https://instagram.com/mattylecasiroux",role:"Vice-Président",description:"Objectivement la seule personne compétente de l'astus"},{name:"Tristan Verdet",profil_pic:"tristan",facebook:"https://www.facebook.com/profile.php?id=100072432049518",insta:"https://www.instagram.com/tristan.vrdt/",role:"Trésorier",description:"Objectivement la seule personne compétente de l'astus"},{name:"Thomas Raynaud",profil_pic:"thomas",facebook:"https://www.facebook.com/profile.php?id=61550755439039",insta:"https://www.instagram.com/thomas_r4y/",role:"Secrétaire Général",description:"Objectivement la seule personne compétente de l'astus"},{name:"Thibaud Lambert",profil_pic:"thibaud",facebook:"https://www.facebook.com/profile.php?id=100071759598194",insta:"https://instagram.com/thibaud.lbt",role:"Secrétaire Adjoint",description:"Objectivement la seule personne compétente de l'astus"}],responsable:[{name:"Nina Rodriguez",profil_pic:"nina",facebook:"https://www.facebook.com/profile.php?id=100069113111468",insta:"https://www.instagram.com/nina11.06",role:"Responsable Évenements",description:"Objectivement la seule personne compétente de l'astus"},{name:"Antonin Guy",profil_pic:"antonin",facebook:"https://www.facebook.com/antoninguy11",insta:"https://www.instagram.com/antoskuu/",role:"Responsable Com",description:"Objectivement la seule personne compétente de l'astus"},{name:"Marie Friot",profil_pic:"marie",facebook:"https://www.facebook.com/profile.php?id=100069909120799",insta:"https://www.instagram.com/marie_frt8/",role:"Responsable Entreprise",description:"Objectivement la seule personne compétente de l'astus"},{name:"Théo Archaud",profil_pic:"theo",facebook:"https://www.facebook.com/theo.archaud",insta:"https://www.instagram.com/theoo_rchd/",role:"Responsable DD",description:"Objectivement la seule personne compétente de l'astus"}]}},methods:{getImgUrl:function(t){return n(500)("./"+t+".jpg")}}}),v=(n(510),n(54)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"team-component mini-spacer"},[e(c.a,[e(d.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"section-title font-weight-medium"},[t._v("\n              Le Bureau\n            ")]),t._v(" "),e("p",[t._v("\n              Le G5 de l'ASTUS\n            ")])])])],1),t._v(" "),e(d.a,{staticClass:"mt-13",attrs:{justify:"center"}},t._l(t.bureau,(function(n,i){return e(o.a,{key:i,attrs:{cols:"12",sm:"6",md:"6",lg:"2"}},[e(r.a,{staticClass:"team-card overflow-hidden mb-15",attrs:{elevation:"0"}},[e("div",{staticClass:"social-overlay"},[e(l.a,{staticClass:"profile-pic fixed-size",attrs:{src:t.getImgUrl(n.profil_pic),alt:"team"}}),t._v(" "),e("div",{staticClass:"img-overlay"},[e("ul",[e("li",[e("a",{attrs:{href:n.facebook,target:"_blank"}},[e("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:n.insta,target:"_blank"}},[e("i",{staticClass:"mdi mdi-instagram"})])])])])],1),t._v(" "),e("div",[e("h5",{staticClass:"team-title font-weight-medium font-18"},[t._v("\n                "+t._s(n.name)+"\n              ")]),t._v(" "),e("p",{staticClass:"team-subtitle"},[t._v(t._s(n.role))])]),t._v(" "),e("p",[t._v("\n              "+t._s(n.description)+"\n            ")])])],1)})),1),t._v(" "),e(d.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"section-title font-weight-medium"},[t._v("\n              Les Responsables\n            ")]),t._v(" "),e("p",[t._v("\n              Les seules personnes responsables de l'ASTUS\n            ")])])])],1),t._v(" "),e(d.a,{staticClass:"mt-13",attrs:{justify:"center"}},t._l(t.responsable,(function(n,i){return e(o.a,{key:i,attrs:{cols:"12",sm:"6",md:"6",lg:"2"}},[e(r.a,{staticClass:"team-card overflow-hidden mb-15",attrs:{elevation:"0"}},[e("div",{staticClass:"social-overlay"},[e(l.a,{staticClass:"profile-pic fixed-size",attrs:{src:t.getImgUrl(n.profil_pic),alt:"team"}}),t._v(" "),e("div",{staticClass:"img-overlay"},[e("ul",[e("li",[e("a",{attrs:{href:n.facebook,target:"_blank"}},[e("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:n.insta,target:"_blank"}},[e("i",{staticClass:"mdi mdi-instagram"})])])])])],1),t._v(" "),e("div",[e("h5",{staticClass:"team-title font-weight-medium font-18"},[t._v("\n                "+t._s(n.name)+"\n              ")]),t._v(" "),e("p",{staticClass:"team-subtitle"},[t._v(t._s(n.role))])]),t._v(" "),e("p",[t._v("\n              "+t._s(n.description)+"\n            ")])])],1)})),1)],1),t._v(" "),e(d.a,{staticClass:"bg-extra-light",attrs:{justify:"center"}},[e(o.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"section-title font-weight-medium"},[t._v("\n            Mais ce n'est pas tout !\n          ")]),t._v(" "),e("p",{staticClass:"astus-description"},[t._v("\n            Que serait l'Astus sans son équipe ? Événements, Entreprise,\n            Communication sans eux l'association ne pourrait absolument pas\n            tourner ! Vous aurez la joie de les découvrir à travers les\n            différents événements organisés par les équipes tout le long de\n            l'année.\n          ")])])])],1)],1)])}),[],!1,null,"3ee0cedd",null);e.default=component.exports},581:function(t,e,n){"use strict";n.r(e);var r=n(449),o=n(448),c={name:"PhotoGallery",methods:{getRandomStyle:function(t){return 0==t?"margin-left : "+60*Math.random()+"%":"margin-right : "+60*Math.random()+"%"}}},l=(n(521),n(54)),component=Object(l.a)(c,(function(){var t=this._self._c;return t(o.a,{attrs:{justify:"center"}},[t(r.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"12"}},[t("ul",{staticClass:"gallery"},this._l(8,(function(e){return t("li",{key:e},[t("img",{class:"image-"+e%2,attrs:{src:n(512)("./"+e+".jpg")}})])})),0)])],1)}),[],!1,null,"cc6a6062",null);e.default=component.exports},649:function(t,e,n){"use strict";n.r(e);n(5),n(36),n(39),n(570);var r={scrollToTop:!0,head:function(){return{title:"ASTUS"}},data:function(){return{}},components:{TcTeam:function(){return Promise.resolve().then(n.bind(null,580))},TcAstusText:function(){return Promise.resolve().then(n.bind(null,578))},TcAstusEvents:function(){return Promise.resolve().then(n.bind(null,579))},TcGallery:function(){return Promise.resolve().then(n.bind(null,581))},TcAstusEntreprise:function(){return Promise.resolve().then(n.bind(null,570))}}},o=n(54),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("TcAstusText"),t._v(" "),e("TcAstusEvents"),t._v(" "),e("TcAstusEntreprise"),t._v(" "),e("TcTeam"),t._v(" "),e("TcGallery")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TcAstusText:n(578).default,TcAstusEvents:n(579).default,TcAstusEntreprise:n(570).default,TcTeam:n(580).default,TcGallery:n(581).default})}}]);