(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{147:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),i=a(27),s=a.n(i),l=(a(139),a(24)),o=(a(147),a(42)),u=a.n(o),j=a(53),d=a(7),h=a(81),b=a.n(h),p=b.a.create({baseURL:"https://api.openweathermap.org/data/2.5/",responseType:"json"}),m=b.a.create({baseURL:"https://openweathermap.org/img/wn/",responseType:"json"}),O=function(e){if(e)return m.get("".concat(e).concat("@2x.png")).then((function(e){return e.request.responseURL})).catch((function(e){console.log(e)}))},x=function(e){return p.get("weather?q="+e+"&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530").then((function(e){return e.data}))},y=function(e,t){if(e&&t)return p.get("onecall?lat="+e+"&lon="+t+"&exclude=minutely&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530").then((function(e){return e.data}))},f="SET_TEMP",_="SET_EXTRA_DATA",w="SET_LCALITY",g="SET_URL_IMAGE",v="SET_NAME_LOCALITY",D="SET_COORDINATES",N="SET_ERROR",T={temperature:{},extraData:{},locality:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",imageUrl:"",nameLocality:"",onError:!1,coordinates:{}},E=function(e){return{type:w,locality:e}},L=function(e){return{type:g,url:e}},R=function(e){return{type:D,obj:e}},k=function(e){return{type:N,er:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},{temperature:t.obj});case _:return Object(d.a)(Object(d.a)({},e),{},{extraData:t.objData});case w:return Object(d.a)(Object(d.a)({},e),{},{locality:t.locality});case g:return Object(d.a)(Object(d.a)({},e),{},{imageUrl:t.url});case v:return Object(d.a)(Object(d.a)({},e),{},{nameLocality:t.name});case D:return Object(d.a)(Object(d.a)({},e),{},{coordinates:t.obj});case N:return Object(d.a)(Object(d.a)({},e),{},{onError:t.er});default:return e}},A=a(14),I=a(131),U=a(282),M=a(283),F=a(130),Z=(a(165),function(e){var t=e.setLocality,a=U.a.useForm(),c=Object(I.a)(a,1)[0];return Object(r.jsxs)(U.a,{form:c,name:"basic",onFinish:function(e){e.text&&(t(e.text),c.resetFields())},initialValues:{remember:!0},style:{display:"flex",margin:"10px"},children:[Object(r.jsx)(U.a.Item,{placeholder:"input search text",style:{width:200,margin:"0"},name:"text",children:Object(r.jsx)(M.a,{})}),Object(r.jsx)(U.a.Item,{children:Object(r.jsx)(F.a,{type:"primary",htmlType:"submit",children:"search"})})]})}),W=function(e){return e?"".concat(Math.round(e),"\xb0"):e},C=(a(264),function(e){var t,a=e.urlIcon,c=e.onError,n=e.nameLocality,i=e.description,s=e.temperature,l=s.temp,o=s.feels_like,u=s.humidity,j=a?Object(r.jsx)("img",{src:a,className:"weather-breafly__icon",alt:"icon weather"}):"...Loading";return Object(r.jsxs)("div",{className:"weather-breafly",children:[Object(r.jsxs)("div",{className:"weather-breafly__card",children:[Object(r.jsxs)("h2",{className:"weather-breafly__title",children:["\u041f\u043e\u0433\u043e\u0434\u0430: ",!c&&n]}),Object(r.jsx)("h2",{className:"weather-breafly__degree",children:W(l)}),Object(r.jsxs)("p",{className:"weather-breafly__feels-like",children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",W(o)]}),Object(r.jsxs)("p",{className:"weather-breafly__humidity",children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",u,"%"]})]}),Object(r.jsxs)("div",{className:"weather-breafly__icon-block",children:[j,Object(r.jsx)("span",{className:"weather-breafly__description",children:(t=i,t?t[0].toUpperCase()+t.slice(1):t)})]})]})}),Y=Object(A.d)(Object(l.b)((function(e){return{locality:e.weatherReducer.locality,temperature:e.weatherReducer.temperature,extraData:e.weatherReducer.extraData,urlIcon:e.weatherReducer.imageUrl,nameLocality:e.weatherReducer.nameLocality,onError:e.weatherReducer.onError,onLoading:e.weatherReducer.onLoading}}),{getExtraData:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:r=t.sent,a((i=r.weather[0],{type:_,objData:i})),a((n=r.name,{type:v,name:n})),a((c=r.main,{type:f,obj:c})),a(R(r.coord)),a(k(!1)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),a(k(!0)),console.log("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430");case 15:case"end":return t.stop()}var c,n,i}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},getIconUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"01n";return function(){var t=Object(j.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(e);case 3:r=t.sent,a(L(r)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u041d\u0435\u0442 \u0418\u043a\u043e\u043d\u043a\u0438");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setLocality:E}))((function(e){var t=e.temperature,a=e.extraData,n=e.locality,i=e.getExtraData,s=e.getIconUrl,l=e.urlIcon,o=e.nameLocality,u=e.onError,j=a.description,d=a.icon;return Object(c.useEffect)((function(){s(d),i(n)}),[n,i,d,s]),Object(r.jsx)("div",{children:Object(r.jsx)(C,{urlIcon:l,onError:u,nameLocality:o,description:j,temperature:t})})})),B="SET_LOADING",G="SET_TEMP_DAILY",P="SET_TEMP_CURRENT",X="SET_WIND_DAILY",q="SET_EXTRA_DATA_DAILY",z="SET_URL_ICON_DAILY",H="SET_HOURLY_DATA",J="SET_DAILY_FORECAST",V="SET_DETAILED_WEATHER",K={onLoading:!1,dailyTemp:{},pop:{},humidity:"",hourlyTemp:[],extraDataDaily:{},iconDailyUrl:"",wind:{},hourlyData:[],dailyForecast:[],timeZone:0,detailedWeather:{}},Q=function(e){return{type:B,load:e}},$=function(e){return{type:P,arr:e}},ee=function(e){return{type:H,arr:e}},te=function(e){return{type:V,arr:e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(d.a)(Object(d.a)({},e),{},{onLoading:t.load});case G:return Object(d.a)(Object(d.a)({},e),{},{dailyTemp:t.temp,pop:t.pop,humidity:t.humidity,timeZone:t.time});case P:return Object(d.a)(Object(d.a)({},e),{},{hourlyTemp:t.arr});case H:var a=t.arr.slice(0,6).map((function(e){return{date:e.dt,temperature:e.temp,icon:e.weather[0].icon,pop:e.pop}}));return Object(d.a)(Object(d.a)({},e),{},{hourlyData:a});case J:var r=t.arr.slice(0,6).map((function(e){return{date:e.dt,tempMin:e.temp.min,tempMax:e.temp.max,icon:e.weather[0].icon,pop:e.pop}}));return Object(d.a)(Object(d.a)({},e),{},{dailyForecast:r});case V:return Object(d.a)(Object(d.a)({},e),{},{detailedWeather:t.arr});case q:return Object(d.a)(Object(d.a)({},e),{},{extraDataDaily:t.obj});case z:return Object(d.a)(Object(d.a)({},e),{},{iconDailyUrl:t.url});case X:return Object(d.a)(Object(d.a)({},e),{},{wind:{speed:t.speed,deg:t.deg}});default:return e}},re=(a(265),function(e){var t=e.temp,a=e.title;return Object(r.jsx)("div",{className:"weather-column",children:Object(r.jsxs)("div",{className:"weather-column__section",children:[Object(r.jsx)("div",{className:"weather-column__title",children:Object(r.jsx)("p",{children:a})}),Object(r.jsx)("div",{className:"weather-column__value",children:Object(r.jsx)("p",{children:t})})]})})}),ce=(a(266),a(267),function(e,t,a,c){return Object(r.jsxs)("div",{className:"extra",children:[Object(r.jsx)("div",{className:"extra__data",children:Object(r.jsxs)("p",{children:[e," ",t]})}),Object(r.jsx)("div",{className:"extra__description",children:Object(r.jsxs)("p",{children:[a," ",c]})})]})}),ne=function(e){var t,a=e.nameLocality,c=e.dailyTemp,n=e.humidity,i=e.pop,s=e.wind,l=c.morn,o=c.day,u=c.eve,j=c.night,d=c.min,h=c.max,b=s.speed,p=s.deg,m=(t=p)>=0&&t<22.5?"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439":t>=22.5&&t<67.5?"\u0421\u0435\u0432\u0435\u0440\u043e-\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":t>=67.5&&t<112.5?"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":t>=112.5&&t<157.5?"\u042e\u0433\u043e-\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":t>=157.5&&t<202.5?"\u042e\u0436\u043d\u044b\u0439":t>=202.5&&t<247.5?"\u042e\u0433\u043e-\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439":t>=247.5&&t<292.5?"\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439":t>=292.5&&t<337.5?"\u0421\u0435\u0432\u0435\u0440\u043e-\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439":t>=337.5?"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439":void console.log(t),O=ce("\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u041e\u0441\u0430\u0434\u043a\u043e\u0432","".concat(Math.floor(100*i),"%"),"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c","".concat(n,"%")),x=ce("".concat(W(d)," / ").concat(W(h)),"","\u043c\u0438\u043d/\u043c\u0430\u043a\u0441 \u2103"),y=ce("\u0412\u0435\u0442\u0435\u0440",m,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430","".concat(Math.floor(b)," \u043c/\u0441")),f=function(e,t,a,c){return Object(r.jsx)(re,{title:e,temp:W(t),humidity:a,pop:c})},_=f("\u0423\u0442\u0440\u043e",l,n,i),w=f("\u0414\u0435\u043d\u044c",o,n,i),g=f("\u0412\u0435\u0447\u0435\u0440",u,n,i),v=f("\u041d\u043e\u0447\u044c",j,n,i);return Object(r.jsxs)("div",{className:"weather-daily",children:[Object(r.jsxs)("h2",{children:["\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",a]}),Object(r.jsxs)("div",{className:"weather-daily__card",children:[Object(r.jsxs)("div",{className:"weather-daily__box-temp",children:[_,w,g,v]}),Object(r.jsxs)("div",{className:"weather-daily__box-extradata",children:[O,x,y]})]})]})},ie=a(281),se=(a(268),function(e){var t=e.children;return Object(r.jsx)("div",{className:"custom-wrapper",children:t})}),le=Object(A.d)(Object(l.b)((function(e){return{coordinates:e.weatherReducer.coordinates,dailyTemp:e.weatherDailyReducer.dailyTemp,humidity:e.weatherDailyReducer.humidity,pop:e.weatherDailyReducer.pop,extraDataDaily:e.weatherDailyReducer.extraDataDaily,wind:e.weatherDailyReducer.wind,iconDailyUrl:e.weatherDailyReducer.iconDailyUrl,nameLocality:e.weatherReducer.nameLocality}}),{getDailyWeather:function(e,t){return function(){var a=Object(j.a)(u.a.mark((function a(r){var c,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y(e,t);case 3:c=a.sent,n=c.daily[0],r((h=c.daily,{type:J,arr:h})),r((o=n.temp,u=n.pop,j=n.humidity,d=c.timezone_offset,{type:G,temp:o,pop:u,humidity:j,time:d})),r((s=n.wind_speed,l=n.wind_deg,{type:X,speed:s,deg:l})),r(ee(c.hourly)),r((i=n.weather[0],{type:q,obj:i})),r($(c.daily[0])),r(te(c.current)),r(Q(!1)),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),r(Q(!0));case 18:case"end":return a.stop()}var i,s,l,o,u,j,d,h}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}()},imageDailyWeather:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(e);case 3:r=t.sent,a({type:z,url:r}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.getDailyWeather,a=e.coordinates,n=e.dailyTemp,i=e.humidity,s=e.nameLocality,l=e.pop,o=e.wind,u=e.imageDailyWeather,j=e.extraDataDaily,d=a.lat,h=a.lon,b=j.icon;return Object(c.useEffect)((function(){t(d,h),u(b)}),[t,d,h,u,b]),b?Object(r.jsx)("div",{children:Object(r.jsx)(se,{children:Object(r.jsx)(ne,{wind:o,humidity:i,dailyTemp:n,pop:l,nameLocality:s})})}):Object(r.jsx)(ie.a,{tip:"Loading..."})})),oe=(a(272),function(e){var t=100*e;return Math.round(t)}),ue=function(e){var t=e.hourlyData,a=e.timeZone,c=t.map((function(e){var t=e.date,c=e.temperature,n=e.pop,i=e.icon,s=W(c),l=new Date(1e3*(t+a)).toLocaleTimeString("en-GB",{timeZone:"UTC"}).slice(0,-3);return Object(r.jsxs)("li",{className:"hourly-block__list",children:[Object(r.jsx)("p",{className:"hourly-block__time",children:l}),Object(r.jsx)("p",{className:"hourly-block__icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:"gg"})}),Object(r.jsx)("p",{className:"hourly-block__temp",children:s}),Object(r.jsxs)("p",{className:"hourly-block__pop",children:[oe(n),"%"]})]},t)}));return Object(r.jsxs)("div",{className:"weather-hourly",children:[Object(r.jsx)("h2",{children:"\u041f\u043e\u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437:"}),Object(r.jsx)("ul",{className:"hourly-block",children:c})]})},je=Object(A.d)(Object(l.b)((function(e){return{hourlyData:e.weatherDailyReducer.hourlyData,timeZone:e.weatherDailyReducer.timeZone}})))((function(e){var t=e.hourlyData,a=e.timeZone;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(se,{children:Object(r.jsx)(ue,{hourlyData:t,timeZone:a})})})})),de=(a(273),function(e){var t=e.dailyForecast.map((function(e){var t=e.date,a=e.tempMin,c=e.tempMax,n=e.pop,i=e.icon,s=W(a),l=W(c),o=he(t);return Object(r.jsxs)("li",{className:"hourly-block__list",children:[Object(r.jsx)("p",{className:"hourly-block__time",children:o}),Object(r.jsx)("p",{className:"hourly-block__icon",children:Object(r.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:"gg"})}),Object(r.jsx)("p",{className:"hourly-block__temp-max",children:l}),Object(r.jsx)("p",{className:"hourly-block__temp-min",children:s}),Object(r.jsxs)("p",{className:"hourly-block__pop",children:[oe(n),"%"]})]},t)}));return Object(r.jsxs)("div",{className:"weather-hourly",children:[Object(r.jsx)("h2",{children:"\u0421\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437:"}),Object(r.jsx)("ul",{className:"hourly-block",children:t})]})}),he=function(e){var t=new Date(1e3*e),a=t.getDate(),r=t.getDay();return"".concat(["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"][r]," ").concat(a)},be=Object(A.d)(Object(l.b)((function(e){return{dailyForecast:e.weatherDailyReducer.dailyForecast}})))((function(e){var t=e.dailyForecast;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(se,{children:Object(r.jsx)(de,{dailyForecast:t})})})})),pe=a.p+"static/media/sun_up.71d4a893.svg",me=a.p+"static/media/sun_down.d413b24c.svg",Oe=(a(274),function(e,t){return new Date(1e3*(e+t)).toLocaleTimeString("en-GB",{timeZone:"UTC"}).slice(0,-3)}),xe=function(e){var t=e.detailedWeather,a=e.timeZone,c=t.feels_like,n=t.pressure,i=t.humidity,s=t.dew_point,l=t.uvi,o=t.clouds,u=t.wind_speed,j=t.sunrise,d=t.sunset,h=Object(r.jsxs)("p",{style:{color:"white"},children:["\u0412\u043e\u0441\u0445\u043e\u0434: ",Object(r.jsx)("img",{src:pe,alt:"up",className:"weather-current__up"})," ",Oe(j,a)," / \u0417\u0430\u0445\u043e\u0434: ",Object(r.jsx)("img",{src:me,alt:"down",className:"weather-current__down"})," ",Oe(d,a)]}),b=a?h:Object(r.jsx)(ie.a,{});return Object(r.jsxs)("div",{className:"weather-current",children:[Object(r.jsx)("h2",{children:"\u041f\u043e\u0433\u043e\u0434\u0430 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(r.jsx)("div",{children:b}),Object(r.jsxs)("div",{className:"weather-current__list",children:[Object(r.jsxs)("ul",{className:"weather-current__item",children:[ye("\u041f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044e",W(c)),ye("\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435",n),ye("\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",i),ye("\u0422\u043e\u0447\u043a\u0430 \u0440\u043e\u0441\u044b",W(s))]}),Object(r.jsxs)("ul",{className:"weather-current__item",children:[ye("\u0423\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",l),ye("\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c",o),ye("\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0412\u0435\u0442\u0440\u0430",u),Object(r.jsx)("li",{})]})]})]})},ye=function(e,t){var a;return a="\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"===e?"%":"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0412\u0435\u0442\u0440\u0430"===e?"\u043c/\u0441":"",Object(r.jsxs)("li",{children:[e,":  ",Object(r.jsxs)("span",{children:[t," ",a]})]})},fe=Object(A.d)(Object(l.b)((function(e){return{detailedWeather:e.weatherDailyReducer.detailedWeather,timeZone:e.weatherDailyReducer.timeZone}})))((function(e){var t=e.detailedWeather,a=e.timeZone;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(se,{children:Object(r.jsx)(xe,{detailedWeather:t,timeZone:a})})})})),_e=(a(275),a.p+"static/media/google.13cd331f.svg"),we=a.p+"static/media/telega.4b7f3fd5.svg",ge=a.p+"static/media/viber.69713efe.svg",ve=a.p+"static/media/git_hub.b4f5bb28.svg",De=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsxs)("div",{className:"footer__link",children:[Object(r.jsx)("span",{children:"\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441\u043e \u043c\u043d\u043e\u0439:"}),Object(r.jsx)("a",{href:"mailto:snstotti@gmail.com",children:Object(r.jsx)("img",{src:_e,alt:"gmail"})}),Object(r.jsx)("a",{href:"viber://chat?number=+79674901470",children:Object(r.jsx)("img",{src:ge,alt:"viber"})}),Object(r.jsx)("a",{href:"https://github.com/snstotti",children:Object(r.jsx)("img",{src:ve,alt:"github"})}),Object(r.jsx)("a",{href:"https://t.me/NikolayKhanzhin",children:Object(r.jsx)("img",{src:we,alt:"telega"})})]}),Object(r.jsxs)("div",{className:"footer__progectLinks",children:[Object(r.jsx)("span",{children:"\u0415\u0449\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://snstotti.github.io/starDB",children:"StarDB"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://snstotti.github.io/fun-box-test-app",children:"fun box test app"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://snstotti.github.io/test-app-adminka/",children:"Adminka"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://snstotti.github.io/to-do/",children:"To-do"})})]})]}),Object(r.jsxs)("div",{className:"footer__apiLink",children:[Object(r.jsx)("span",{children:"API:"}),Object(r.jsx)("a",{href:"https://openweathermap.org/",children:Object(r.jsx)("img",{src:"https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png",alt:"api"})})]})]})},Ne=(a(276),function(){return Object(r.jsxs)("div",{className:"head",children:["\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",Object(r.jsxs)("span",{className:"head__date",children:[" ",(new Date).toLocaleDateString("en-GB").split("/").map((function(e){return e.length<=1?"0"+e:e})).join(" . ")," "]})]})}),Te=Object(A.d)(Object(l.b)((function(e){return{}}),{setLocality:E}))((function(e){var t=e.setLocality;return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("header",{className:"header",children:Object(r.jsx)(Ne,{})}),Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)("main",{className:"app__main",children:[Object(r.jsx)(Z,{setLocality:t}),Object(r.jsx)(Y,{}),Object(r.jsx)(fe,{}),Object(r.jsx)(le,{}),Object(r.jsx)(je,{}),Object(r.jsx)(be,{})]})}),Object(r.jsx)("footer",{children:Object(r.jsx)(De,{})})]})})),Ee=a(128),Le=Object(A.c)({weatherReducer:S,weatherDailyReducer:ae}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,ke=Object(A.e)(Le,Re(Object(A.a)(Ee.a)));s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(l.a,{store:ke,children:Object(r.jsx)(Te,{})})}),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.ae6887fd.chunk.js.map