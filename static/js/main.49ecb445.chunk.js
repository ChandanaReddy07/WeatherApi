(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,c,t){},21:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(4),a=t.n(i),r=(t(14),t(6),t(15),t(2)),o=t(0),l=function(){var e=Object(r.c)((function(e){return e.place})),c=Object(r.b)();return Object(o.jsx)("div",{className:"container1",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 form",children:[Object(o.jsx)("input",{type:"",onChange:function(e){c(function(e){return{type:"UPDATE_PLACE",payload:e}}(e.target.value))}}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){c(function(e){return function(c){fetch("http://api.weatherapi.com/v1/forecast.json?key=6cc3f55dfbfa4584bb2154421210308&q=".concat(e),{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){console.log(e),c({type:"UPDATE_PLACE_DATA",payload:e})})).catch((function(e){return console.log(e)}))}}(e))},children:"Submit"})]})})})},d=function(){var e=Object(r.c)((function(e){return e.placeData})),c=Object(r.c)((function(e){return e.theme}));return Object(o.jsx)("div",{className:"container2",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:" offset-md-4 col-4 offset-md-4 card",children:e.location?Object(o.jsxs)("div",{className:c?"row":"row dark",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("div",{className:"place",children:e.location.name}),Object(o.jsx)("p",{style:{marginTop:"-2px",fontSize:"15px"},children:e.location.localtime}),Object(o.jsx)("img",{style:{marginTop:"-2px",width:"100px",height:"100px"},src:e.current.condition.icon,alt:""}),Object(o.jsx)("div",{className:"desc",style:{paddingBottom:"20px"},children:e.current.condition.text})]}),Object(o.jsxs)("div",{className:"col-md-6",style:{marginTop:"30px"},children:[Object(o.jsxs)("div",{className:"temp",style:{fontFamily:"'Oswald', sans-serif"},children:[e.current.temp_c,"\xb0C"]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[e.forecast.forecastday[0].day.maxtemp_c,"\xb0C/"]}),Object(o.jsxs)("span",{children:[e.forecast.forecastday[0].day.mintemp_c,"\xb0C"]})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("p",{style:{fontSize:"20px"},children:[Object(o.jsxs)("span",{children:["Humidity: ",e.current.humidity,"%"]}),"\xa0\xa0\xa0\xa0",Object(o.jsxs)("span",{children:["Wind speed: ",e.current.wind_kph,"kmph"]})]}),Object(o.jsxs)("div",{className:"row whp",style:{paddingTop:"10px",borderTop:"1px solid black"},children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("p",{style:{marginTop:"-2px",fontSize:"18px"},children:"1AM"}),Object(o.jsx)("img",{className:"time_img",src:e.forecast.forecastday[0].hour[1].condition.icon,alt:""}),Object(o.jsxs)("p",{style:{marginTop:"-5px"},children:[e.forecast.forecastday[0].hour[1].temp_c,"\xb0C"]})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("p",{style:{marginTop:"-2px",fontSize:"18px"},children:"6AM"}),Object(o.jsx)("img",{className:"time_img",src:e.forecast.forecastday[0].hour[6].condition.icon,alt:""}),Object(o.jsxs)("p",{style:{marginTop:"-5px"},children:[e.forecast.forecastday[0].hour[6].temp_c,"\xb0C"]})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("p",{style:{marginTop:"-2px",fontSize:"18px"},children:"11AM"}),Object(o.jsx)("img",{className:"time_img",src:e.forecast.forecastday[0].hour[11].condition.icon,alt:""}),Object(o.jsxs)("p",{style:{marginTop:"-5px"},children:[e.forecast.forecastday[0].hour[11].temp_c,"\xb0C"]})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("p",{style:{marginTop:"-2px",fontSize:"18px"},children:"16AM"}),Object(o.jsx)("img",{className:"time_img",src:e.forecast.forecastday[0].hour[16].condition.icon,alt:""}),Object(o.jsxs)("p",{style:{marginTop:"-5px"},children:[e.forecast.forecastday[0].hour[16].temp_c,"\xb0C"]})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("p",{style:{marginTop:"-2px",fontSize:"18px"},children:"21AM"}),Object(o.jsx)("img",{className:"time_img",src:e.forecast.forecastday[0].hour[21].condition.icon,alt:""}),Object(o.jsxs)("p",{style:{marginTop:"-5px"},children:[e.forecast.forecastday[0].hour[21].temp_c,"\xb0C"]})]})]})]})]}):Object(o.jsx)("h2",{children:"Place not found"})})})})},j=function(){var e=Object(r.c)((function(e){return e.theme})),c=Object(r.b)();return Object(o.jsx)("div",{className:"toggle-theme",children:Object(o.jsx)("div",{className:e?"btn btn-light":"btn btn-dark",onClick:function(){c({type:"TOGGLE_THEME"})},children:e?"Dark":"Light"})})},p=function(){var e=Object(r.c)((function(e){return e.theme}));return Object(o.jsxs)("div",{className:e?"App":"App dark",children:[Object(o.jsx)(j,{}),Object(o.jsx)(l,{}),Object(o.jsx)(d,{})]})},m=t(3),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return"UPDATE_PLACE_DATA"===c.type?c.payload:e},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0;return"UPDATE_PLACE"===c.type?c.payload:e},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],c=arguments.length>1?arguments[1]:void 0;return"TOGGLE_THEME"===c.type?!e:e},f=Object(m.b)({place:b,placeData:h,theme:x}),O=t(9),u=Object(m.c)(f,Object(m.a)(O.a));a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(r.a,{store:u,children:Object(o.jsx)(p,{})})}),document.getElementById("root"))},6:function(e,c,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.49ecb445.chunk.js.map