(this["webpackJsonpcovid-19-vaccine-tracker"]=this["webpackJsonpcovid-19-vaccine-tracker"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),l=t(8),i=t.n(l),o=t(7),s=t(2),r=t(3),d=(t(13),t(0));function p(e){var a=e.data;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{className:"card__name",children:a.name}),Object(d.jsxs)("p",{className:"card__partially-vaccinated",children:[a.peoplePartiallyVaccinated.toLocaleString()," partially vaccinated"," ",Object(d.jsx)("span",{className:"card__percentage",children:a.population?"(".concat((a.peoplePartiallyVaccinated/a.population*100).toFixed(2),"%)"):""})]}),Object(d.jsxs)("p",{className:"card__fully-vaccinated",children:[a.peopleVaccinated.toLocaleString()," fully vaccinated"," ",Object(d.jsx)("span",{className:"card__percentage",children:a.population?"(".concat((a.peopleVaccinated/a.population*100).toFixed(2),"%)"):""})]})]})}function u(e){var a=e.displayedData;return Object(d.jsx)("div",{className:"cards-container",children:a.map((function(e){return Object(d.jsx)(p,{data:e},e.name)}))})}function j(e){var a=e.filterOption,t=e.setFilterOption;return Object(d.jsxs)("div",{className:"filter",children:[Object(d.jsx)("label",{className:"filter__label",children:"Vaccines administered by:"}),Object(d.jsxs)("select",{className:"filter__select",value:a,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{className:"filter__option",children:"Sovereign state"}),Object(d.jsx)("option",{className:"filter__option",children:"Continent"})]})]})}var b=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)([]),i=Object(r.a)(l,2),p=i[0],b=i[1],O=Object(c.useState)([]),m=Object(r.a)(O,2),v=(m[0],m[1]),h=Object(c.useState)([]),f=Object(r.a)(h,2),A=(f[0],f[1]),_=Object(c.useState)([]),g=Object(r.a)(_,2),S=g[0],y=g[1],x=Object(c.useState)([]),V=Object(r.a)(x,2),N=(V[0],V[1]),k=Object(c.useState)([]),D=Object(r.a)(k,2),P=D[0],U=D[1];return Object(c.useEffect)((function(){if(JSON.parse(localStorage.getItem("covidVaccineData"))&&Date.now()-JSON.parse(localStorage.getItem("covidVaccineData")).timestamp<36e5){var e=JSON.parse(localStorage.getItem("covidVaccineData"));b(Object(s.a)(e.sovereignStates)),v(Object(s.a)(e.unitedKingdom)),A(Object(s.a)(e.europeanUnion)),y(Object(s.a)(e.continents)),N(Object(s.a)(e.world)),n("Sovereign state")}else fetch("https://covid-api.mmediagroup.fr/v1/vaccines").then((function(e){return e.json()})).then((function(e){var a=[],t=[],c=[],n=[],l=[];return Object.keys(e).forEach((function(i){switch(i){case"England":case"Northern Ireland":case"Scotland":case"Wales":a.push({name:i,vaccinesAdministered:e[i].All.administered,peopleVaccinated:e[i].All.people_partially_vaccinated,peoplePartiallyVaccinated:e[i].All.people_vaccinated,population:e[i].All.population,continent:e[i].All.continent,location:e[i].All.location,lastUpdated:e[i].All.updated});break;case"European Union":t.push({name:i,administered:e[i].All.administered,peopleVaccinated:e[i].All.people_partially_vaccinated,peoplePartiallyVaccinated:e[i].All.people_vaccinated,lastUpdated:e[i].All.updated,population:e[i].All.population});break;case"Europe":case"North America":case"South America":case"Oceania":case"Asia":case"Africa":n.push({name:i,administered:e[i].All.administered,peopleVaccinated:e[i].All.people_partially_vaccinated,peoplePartiallyVaccinated:e[i].All.people_vaccinated,lastUpdated:e[i].All.updated});break;case"World":l.push({name:i,administered:e[i].All.administered,peopleVaccinated:e[i].All.people_partially_vaccinated,peoplePartiallyVaccinated:e[i].All.people_vaccinated,lastUpdated:e[i].All.updated,population:e.Global.All.population});break;case"Global":break;default:c.push({name:i,vaccinesAdministered:e[i].All.administered,peopleVaccinated:e[i].All.people_partially_vaccinated,peoplePartiallyVaccinated:e[i].All.people_vaccinated,population:e[i].All.population,continent:e[i].All.continent,location:e[i].All.location,lastUpdated:e[i].All.updated})}})),{sovereignStates:c,unitedKingdom:a,europeanUnion:t,continents:n,world:l}})).then((function(e){b(Object(s.a)(e.sovereignStates)),v(Object(s.a)(e.unitedKingdom)),A(Object(s.a)(e.europeanUnion)),y(Object(s.a)(e.continents)),N(Object(s.a)(e.world)),n("Sovereign state"),localStorage.setItem("covidVaccineData",JSON.stringify(Object(o.a)(Object(o.a)({},e),{},{timestamp:Date.now()})))}))}),[]),Object(c.useEffect)((function(){U("Sovereign state"===t?p:S)}),[t]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title",children:"COVID-19 Vaccine Tracker"}),Object(d.jsx)(j,{filterOption:t,setFilterOption:n}),Object(d.jsx)(u,{displayedData:P})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),l(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.45f7fa25.chunk.js.map