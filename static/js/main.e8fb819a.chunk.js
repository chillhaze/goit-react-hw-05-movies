(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{29:function(A,e,n){},56:function(A,e,n){"use strict";n.r(e);var t=n(0),c=n.n(t),i=n(20),a=n.n(i),o=n(8),r=(n(29),n(7)),s=n(17),l=n.n(s),p=n(21),d="https://api.themoviedb.org/3",x="501ee89e0c17f106a2023a872eb6ff32";function b(){return j.apply(this,arguments)}function j(){return j=Object(p.a)(l.a.mark((function A(){var e,n,t,c=arguments;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},A.next=4,fetch(e,n);case 4:if(!(t=A.sent).ok){A.next=11;break}return A.next=8,t.json();case 8:A.t0=A.sent,A.next=12;break;case 11:A.t0=Promise.reject(new Error("carrrramba! nothing found!"));case 12:return A.abrupt("return",A.t0);case 13:case"end":return A.stop()}}),A)}))),j.apply(this,arguments)}var O,h,u,g,f,m,v,w,E,R,y,I,q,M,D,V,S,z,U,k,N,B,L,W,F,T,Y,H,J,Z,X,P,G,Q,K,C,_,$,AA,eA,nA,tA,cA,iA,aA,oA,rA=n.p+"static/media/poster-not-available.b93b25a7.jpg",sA=n(12),lA=n.n(sA),pA=n(2),dA=n(3),xA=dA.a.div(O||(O=Object(pA.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),bA=dA.a.div(h||(h=Object(pA.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),jA=dA.a.h2(u||(u=Object(pA.a)(["\n  /* padding: 20px 0; */\n  line-height: 42px;\n  font-size: 24px;\n  font-weight: bold;\n  border-bottom: 1px solid #ede9e9;\n"]))),OA=dA.a.ul(g||(g=Object(pA.a)(["\n  padding-top: 25px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),hA=dA.a.li(f||(f=Object(pA.a)(["\n  max-width: 180px;\n\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),uA=dA.a.img(m||(m=Object(pA.a)(["\n  width: 100%;\n  height: 270px;\n"]))),gA=dA.a.p(v||(v=Object(pA.a)(["\n  /* margin-top: 10px; */\n  padding: 10px 0;\n  font-size: 12px;\n  text-align: center;\n  line-height: 24px;\n  font-weight: 600;\n"]))),fA=n(1),mA=function(A){var e=A.title,n=A.onClick,c=Object(t.useState)(null),i=Object(r.a)(c,2),a=i[0],s=i[1],l=Object(t.useState)("idle"),p=Object(r.a)(l,2),j=p[0],O=p[1];return Object(t.useEffect)((function(){O("pending"),b("".concat(d,"/trending/movie/week?api_key=").concat(x)).then((function(A){s(A.results),O("resolved")})).catch((function(A){console.log(A),O("rejected")})),O("idle")}),[]),Object(fA.jsx)(fA.Fragment,{children:Object(fA.jsxs)(bA,{children:[Object(fA.jsx)(jA,{children:e}),"pending"===j&&Object(fA.jsx)(xA,{children:Object(fA.jsx)(lA.a,{type:"TailSpin",color:"#ff8d23",height:60,width:60,className:"Loader"})}),"resolved"===j&&Object(fA.jsx)(OA,{children:a.map((function(A){var e=A.id,t=A.original_title,c=A.title,i=A.name,a=A.poster_path,r="https://image.tmdb.org/t/p/w500/".concat(a);return null===a&&(r=rA),Object(fA.jsx)(hA,{children:Object(fA.jsxs)(o.b,{to:"movies/".concat(e),onClick:function(){return n(e)},name:e,children:[Object(fA.jsx)(uA,{src:r,alt:c}),Object(fA.jsx)(gA,{children:c||(t||i)})]})},e)}))})]})})},vA=n(6),wA=dA.a.div(w||(w=Object(pA.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),EA=dA.a.div(E||(E=Object(pA.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),RA=dA.a.form(R||(R=Object(pA.a)(["\n  margin: 20px 10px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  background-color: #fff;\n  border: 1px solid #aba7a7;\n  border-radius: 3px;\n  /* box-shadow: 1px 3px 10px -4px #050505; */\n  overflow: hidden;\n"]))),yA=dA.a.input(y||(y=Object(pA.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  :placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),IA=dA.a.button(I||(I=Object(pA.a)(["\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  ::hover {\n    opacity: 1;\n  }\n"]))),qA=dA.a.span(q||(q=Object(pA.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),MA=dA.a.ul(M||(M=Object(pA.a)(["\n  padding-top: 25px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),DA=dA.a.li(D||(D=Object(pA.a)(["\n  max-width: 180px;\n  /* border: 1px solid #222222; */\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),VA=dA.a.img(V||(V=Object(pA.a)(["\n  min-width: 180px;\n  width: 100%;\n  height: 270px;\n"]))),SA=dA.a.p(S||(S=Object(pA.a)(["\n  overflow: hidden;\n  /* margin-top: 10px; */\n  padding: 10px 0;\n  font-size: 12px;\n  text-align: center;\n  line-height: 24px;\n  font-weight: 600;\n"]))),zA=function(A){var e=A.onClick,n=Object(t.useState)(""),c=Object(r.a)(n,2),i=c[0],a=c[1],s=Object(t.useState)(null),l=Object(r.a)(s,2),p=l[0],j=l[1],O=Object(t.useState)("idle"),h=Object(r.a)(O,2),u=h[0],g=h[1],f=Object(vA.g)().url;Object(t.useEffect)((function(){var A;""!==i&&(g("pending"),(A=i,b("".concat(d,"/search/movie?api_key=").concat(x,"&language=en-US&query=").concat(A,"&page=1"))).then((function(A){j(A.results),g("resolved")})).catch((function(A){console.log(A),g("rejected")})),g("idle"))}),[i]);var m=function(A){A.preventDefault(),""!==i.trim()?a(""):console.log("empty field")};return Object(fA.jsxs)(EA,{children:[Object(fA.jsxs)(RA,{onSubmit:m,children:[Object(fA.jsx)(yA,{value:i,onChange:function(A){a(""),a(A.currentTarget.value.toLowerCase())},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),Object(fA.jsx)(IA,{type:"submit",onClick:m,children:Object(fA.jsx)(qA,{children:"Search"})})]}),"pending"===u&&Object(fA.jsx)(wA,{children:Object(fA.jsx)(lA.a,{type:"TailSpin",color:"#ff8d23",height:60,width:60,className:"Loader"})}),"resolved"===u&&Object(fA.jsx)(MA,{children:p.map((function(A){var n=A.id,t=A.original_title,c=A.title,i=A.name,a=A.poster_path,r="https://image.tmdb.org/t/p/w500/".concat(a);return null===a&&(r=rA),Object(fA.jsx)(DA,{children:Object(fA.jsxs)(o.b,{to:"".concat(f,"/").concat(n),onClick:function(){return e(n)},name:n,children:[Object(fA.jsx)(VA,{src:r,alt:c}),Object(fA.jsx)(SA,{children:c||(t||i)})]})},n)}))})]})},UA=dA.a.div(z||(z=Object(pA.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 40px;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),kA=dA.a.div(U||(U=Object(pA.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n"]))),NA=dA.a.ul(k||(k=Object(pA.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n"]))),BA=dA.a.li(N||(N=Object(pA.a)(["\n  max-width: 130px;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),LA=dA.a.img(B||(B=Object(pA.a)(["\n  min-height: 200px;\n  width: 100%;\n"]))),WA=dA.a.div(L||(L=Object(pA.a)(["\n  padding: 5px 10px;\n"]))),FA=dA.a.p(W||(W=Object(pA.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),TA=dA.a.p(F||(F=Object(pA.a)(["\n  font-size: 12px;\n"]))),YA=function(){var A=Object(vA.f)(),e=Object(t.useState)({}),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(t.useState)(A.movieId),o=Object(r.a)(a,2),s=o[0],l=(o[1],Object(t.useState)("idle")),p=Object(r.a)(l,2),j=p[0],O=p[1];Object(t.useEffect)((function(){null!==s&&(O("pending"),function(A){return b("".concat(d,"/movie/").concat(A,"/credits?api_key=").concat(x))}(s).then((function(A){i(A),O("resolved")})).catch((function(A){console.log(A)})),O("idle"))}),[s]);var h=c.cast;return Object(fA.jsxs)(kA,{children:["pending"===j&&Object(fA.jsx)(UA,{children:Object(fA.jsx)(lA.a,{type:"TailSpin",color:"#ff8d23",height:60,width:60,className:"Loader"})}),"resolved"===j&&Object(fA.jsx)(NA,{children:h&&h.map((function(A,e){var n=A.profile_path,t=A.character,c=A.name,i="https://image.tmdb.org/t/p/w500/".concat(n);return Object(fA.jsxs)(BA,{children:[Object(fA.jsx)(LA,{src:n?i:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERDZEMzhFNTMxODUxMUU3ODRFNENBOThCRDQyMzA4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERDZEMzhFNjMxODUxMUU3ODRFNENBOThCRDQyMzA4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRENkQzOEUzMzE4NTExRTc4NEU0Q0E5OEJENDIzMDhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRENkQzOEU0MzE4NTExRTc4NEU0Q0E5OEJENDIzMDhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgBbwD7AwERAAIRAQMRAf/EAIcAAQABBAMBAQAAAAAAAAAAAAAIAQUGCQIDBwQKAQEAAAAAAAAAAAAAAAAAAAAAEAABAwMBBAUJBAUKBwAAAAAAAQIDEQQFBiExEgdBURMVCGHRIlLSkxRUlHGBkTLwQmIjFrHxcjNDNEW1djeh4YJjgyQlEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADi5yNptSqrRGqtFX+iiI5XL5EQDvbDK5qvbFO9qfrMgmVqf9SxogHXsTYvEirVEa9qxrXqRHKquVPIBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVEr9yKqquxERNqqq9SIBccPhstqHJW2HwePu8rlLx6Mt7KzhdLK+qpWR1ERkULEWrnuVGNTaqoBNPQXhFZ2UF/wAxcrK6VUa/+HcFOjYo06Ir7LPa50z2psVIGsbt2OXeBKLT3K3l/peNrMNo/A2zmtREuZbGO9vlXYirJeXvxFy5aIlfT3gZ5HBDCzs4YYoo93ZxxsYzq/K1EbuAx/K6O0nnY3w5nTOCycT97b3FWNwq+VHyQK9rq9KKBHvWnhR0Nmo57nSst1pLIq1yxQskfkMJI9U9BJ7K4ctzA1HdMUzUT1VAg/r/AJaav5cZD4TU2P7OCdzvgcvaK6fE5Braf3e5RjEjl4VRVikRkidSgYB006aV8i7aLRdyqi7wAAAAAAAAAAAAAAAAAAAAAAAAAAAZDpXS+Z1nn8fpvA2vxOSyMnDHxV7C3hYqOuLy6ejVSKzs4V4pHLSu5KrRANqfK3lRpzljh22uOiZeZq6jYuaz00afF5CZaPfHGq1W3sGP2RxItEREV1V2geqAAAAABZs/p/DanxV3hM/j7bKYu9jVlxaXcbZI3erI1VTiimiXax7VRzF2oqAauec/J+/5WZqN0D5r/SmXlmXC5KSrp4JGVldisk6lPi4InVY/Yk0aVTajkQPFgAAAAAAAAAAAAAAAAAAAAAAAAAVaJxLurT7VpWifYm0DZZ4ZeWsWktIxapyNvTUOroI7nikb+8ssHV0mPsm8acbHXLVSeXocrmp+qBJwAAAAAAADEdc6PxWu9L5TTOXiR1tfwKkM6I3tbC8jRXWeQt3rtimtJqORU20qm5VA0953B3+ms1lNP5SNYshh8jc425Sio18tvMrEmi4tvYXEatljr/ZuQC0gAAAAAAAAAAAAAAAAAAAAAAAGY8vdNfxhrjS2m3MV8OVzNrDeIm9MfDx3WQduXYy1t3feqAbk4oYoI2RQsbHFExkcUbERrI42NRjGRtRKNY1jURETYiIB2AAAAAAAAP8Al/w2ga7PFxpSLGazwuqbeJWxamxTrO9ciei7JYZzI2Pc5ETbJYXMada9nvAiUAAAAAAAAAAAAAAAAAAAAAAAASL8LFmy65u2Ez/8OwWdvY0/7r4YLCv3R3rgNnoAAAAAAAAABErxg2UUug9O3617ay1XBBH1cF9ismsn38VowDXYAAAAAAAAAAAAAAAAAAAAAAAASJ8LN8y05vY+B/8AiOCzllHsX+tbFDfpt3f1di4DZ+AAAAAAAAAARH8YV/HDoXTeOX+tv9VR3Ea9HBj8VkUk/F140DXeAAAAAAAAAAAAAAAAAAAAAAAAZZoPUjtIaz0xqVKrHh8zZ3V0jX8KusHP+HyDKbEXjspnpvA3K288NzDDPbyNmgmhinhlYvEySGVjXxSNd0tkY5FTyAd4AAAAAAAFFWnQq/Z/KBrl8Wuq4sxrjE6Yt38cGlcZ214iOq1uUy8kMz2K1tUV8FhDElN9Xqi7gIpAAAAAAAAAAAAAAAAAAAAAAAAFFajkVHIioqKiou5WrvRU6UWgGyPwwczY9T6WbozJ3THag0pC2G37SRyy5LApRlrcM4/SfJYOckEqdCIxekCUwAAAAAAAGF8wNa4vl/pXJ6mysjUjs4lbaWyuRJchkZEcllYQN/M+S4nREWm1rEc7oA0+ZjMX+oMtks5k5VmyOXvrrI3km2i3F49ZZEj4tqRxo5GMToa1ALcAAAAAAAAAAAAAAAAAAAAAAAAAL1pzUWZ0lm8fqHA3j7LJ4ydJ7eVqK+N9VRs0NxEnD21pcwpwyxqqo5OlF2gbTeU3OHT3M/Eo+CSLHaktYmuzGnXyos9s5KMdd2Ln8Lr3GSu/LI1KsrwvRq7w9gqi7OlKV+/cBUAAAoqoiVXrRPvVaJ+KqBYNSaowWkcRdZ3UOQgxuMtGK588z0rK+i8FvaxIqyXN1MqUZGxFc5egDVvzi5tZTmnnWzUksdNYx0jMFiXPqqI9VR+SveBysff3TUp0tjYnC3pc4PHwAAAAAAAAAAAAAAAAAAAAAAAAAAfeqdSoqoqL0KioqLVAPuxuTyOGvbfJYm+usbkLSVJra9spn29zBIjkdWOWNUciLSipuVKoqKi0AmPoDxb3loyHHcxMS/INa1rFz+Bjhbd0TYsl/ipJIoXuRN7oXMVeiNQJQaf508sNSxxrjdZ4aOaRGf8AqZK5Zibxj37mLb5FLdXP/oq5K9IGfNzuEe3jbmMU9tPzNyForfKtUmVKAY9meY+gsBG6XL6x05YojFfwSZazfMqJuWO3hkluJFVehrVUCPmtfFppXFxzWujcddamvkR7GX94x+Lwcb6JwSvWVO8LqOv6rI46+sgEJdbcwdV8wMimS1NlJLxY6/BWUSJBjcdGtKxWNlGqxRIvClXqr5Hom1y7gMK6VXpWlV6Vpu2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFRFSioip1KlUArsSrWpws2UoqV3baojEZt+wDi1rW1o1Equ2iJt8q7EA5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSu4AAAAVoqb0UCgAAAAAAAAAAAAAAAAAAAAAAAAAAAH6ba08u5HLVPsA7YIZbmVsFtDNczu3Q20T7mZdlURsVukkjnKm5ESoHpGF5M808/wOx+iM22KSisnyMDcRCtdu1+UfaUSi76UA9Mx3hP5pXiIt6/TOJRVSrbrKzXMrNlUc5mPs7iJaL0JJv8AIBmlr4Ns5IjUvtc4yBKektniLudyOqi+gs9zbbAL4ngxt1b6XMS44v2dMRIn2L/92oFvufBpex/3DX1rKu+l5gJYm1/8OVn/ABAxTI+EbmHbovwOb0rkabUR0+QsHu2LsRJLO4ZWvW5EA83y/h95vYZHPn0fcX0TUV3a4a9sMoitbWq9lb3HxKLRNyx1A8syeEzGFmWDMYnJ4mZP7PJ2NzYP6dqJdRx8SbN6VQC2JRf1molUbxK5OGqpVNqVWi9e4AAAAAAAAAAAAAAAAAAAAAAqU37Onb9lf5AO62trm8nitbO2uLy7uHpFb2lpFJcXVxIq7I4LeJj3yv8AsrRAJEaM8L/MfU3ZXWYitdIY2Sj+PLOW4yjmfsYq2VHROcm1Emkj8qIqUAlBpfwq8tMJwS5uPI6tu0ornZKd1pj6otW8Fhj3RLRFStJJJU6wPfMJpbTenIkhwGBxGHjRKUx2PtrRztlKvfDGyR6qm9XKqqBfVRFSi7gCtau9qL9qIoBERNyUr/MBUABThStaJXr6fxAcKVRabUrRequ/8QPlvbCxyMDrXIWdrf2z/wA9veW8V1A70Vb6UU7HsVeFVTd0geL6n8O3KnUvE9dOJg7t9US907O/FqiqnTaMSTHu27dsO3pUCNmr/CHqSwbNc6LztpnoU4nR4zLsbisnSq0ZHexukxs7m/ttgRfIBFzUWl9RaTvu79SYXIYS72oyO+tpYY50atFfazuV8F1Gq/rRve3ygWDpp09XT+H3gAAAAAAAAAAAAAAAAFFWib0Teq1WlGolXO6Vo1N67gJE8qvDxqjmCltlsw6TTWlpeF8V7NFXKZSBFRH912UrU7OJybEuJk4OlrXbAJ/6I5YaL5eWiW+mMNb21wrOC4ylyiXWXvNlFdc5GRvbUdvVrOCOu5qAeggAAAAAAAAAAAAAAWfN4DD6jsZsZncZY5bHztVJLTIWsV1CtUpxNa9OKN7d6OaqORdy7gIV8zvCi+BlxmOWlw+VqKskmlchNxP4GpXhxGRldxPc1K8MM6qq7EbIm4CFV1a3Vjc3Fle21xZ3tpI6G7tLmJ0M9tO1yosM8b6PjclOqnUB0AAAAAAAAAAAAAAqm1USlaqiU27a7KJTbXqAmV4deQ9vm4LXX+tLTt8asnxOmMFct/c3yMd+7y+Sjcn7y1Y9F+GiXY+iPdVKIoT7Y1rWta1qNa1qI1rUVrWoiURrW7Ea1ETYnQByAAAAAAAAAAAAAAAAAKKiLsVEVN23aBH3ndyQxnMrHS5TFRQ4/WdhA59jfonDHlmxN9HF5SiemyRE4Ypa8UTl6W1RA1h3lnd466uLC/tpbS+sp5rS8tpkcya2ubeR0UsErFRP3jHtWq9VAPmAAAAAAAAAAAADPOWOkP4617prTEiO+Ev71J8i5u9uLsWSXl/5EWWC3VieV6AbhLW3gtLeG2to44ba3hjt4IYmoyOGGFqRxxRtTcyNjURE6KAfQAAAAAAAAAAAAAAAAAAABf0/RKKBrx8WuiosRqHC6zs7dsUepYprLLrG1rWd6Y6Nj4blzW7e1u7FaPXpWGu9QIi7U2LsVNip5U2L9u0AAAAAAAAAAAAJL+E+KOXmurntq+30rm54nImxrviMTbLXqdwXL0+9QNmIAAAAAAAAAAAAAAAAAAAAAEVfF5BE7lrip1anaQ6wxzY30/Ik+MzCS7eivAn3ogGuHft66L/P5QAAAAAAAAAAAAk34Sf91Ln/AEhm/wDMsIBstAAAAAAAAAAAAAAAAAAAAAAi14vP9rbD/WOI/wAuzQGtwAAAAAAAAAAAAJL+E6WKDmncvnkjhb/CGa9KV7Y27clg6JxPVEq5F2dYGyXvHH/PWf1MPtgO8cf89Z/Uw+2A7xx/z1n9TD7YDvHH/PWf1MPtgO8cf89Z/Uw+2A7xx/z1n9TD7YDvHH/PWf1MPtgO8cf89Z/Uw+2A7xx/z1n9TD7YDvHH/PWf1MPtgO8cf89Z/Uw+2A7xx/z1n9TD7YDvHH/PWf1MPtgO8cf89Z/Uw+2A7xx/z1n9TD7YDvHH/PWf1MPtgO8cf89Z/Uw+2A7xx/z1n9TD7YDvHH/PWf1MPtgRf8W11bT8sLFkFzBM/wDjDEKrIpo5HI3u/Mt4lRjlVGorkqu5Kga4/wAF+xUVPuVNigAAAAAAAAAAABRWtd+ZqO6uJEVE3JWlNqpt8v4AcOzZ6kfu084Ds2epH7tPOA7NnqR+7TzgOzZ6kfu084Ds2epH7tPOA7NnqR+7TzgOzZ6kfu084Ds2epH7tPOA7NnqR+7TzgOzZ6kfu084Ds2epH7tPOA7NnqR+7TzgOzZ6kfu084Ds2epH7tPOA7NnqR+7TzgOzZ6kfu084Ds2epH7tPOA7NnqR+7TzgOzZ6kfu084HJrEbWiNbX1Wo2u+leveByqq71qtETp3IlETaqrREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==",alt:c}),Object(fA.jsxs)(WA,{children:[Object(fA.jsx)(FA,{children:c}),Object(fA.jsxs)(TA,{children:["Character: ",t]})]})]},e)}))})]})},HA=dA.a.div(T||(T=Object(pA.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 40px;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),JA=dA.a.div(Y||(Y=Object(pA.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n"]))),ZA=dA.a.ul(H||(H=Object(pA.a)([""]))),XA=dA.a.li(J||(J=Object(pA.a)(["\n  margin-bottom: 20px;\n  padding: 10px 0;\n  border-bottom: 1px solid #ede9e9;\n"]))),PA=dA.a.p(Z||(Z=Object(pA.a)(["\n  padding: 10px 0;\n"]))),GA=dA.a.p(X||(X=Object(pA.a)(["\n  font-style: italic;\n"]))),QA=dA.a.span(P||(P=Object(pA.a)(["\n  line-height: 24px;\n  font-weight: 600;\n  margin-left: 5px;\n"]))),KA=function(){var A=Object(vA.f)(),e=Object(t.useState)({}),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(t.useState)(A.movieId),o=Object(r.a)(a,2),s=o[0],l=o[1],p=Object(t.useState)("idle"),j=Object(r.a)(p,2),O=j[0],h=j[1];Object(t.useEffect)((function(){s&&(h("pending"),function(A){return b("".concat(d,"/movie/").concat(A,"/reviews?api_key=").concat(x))}(s).then((function(A){i(A),h("resolved")})).catch((function(A){console.log(A)})),l(null),h("idle"))}),[s]);var u=c.results;return Object(fA.jsxs)(JA,{children:["pending"===O&&Object(fA.jsx)(HA,{children:Object(fA.jsx)(lA.a,{type:"TailSpin",color:"#ff8d23",height:60,width:60,className:"Loader"})}),"resolved"===O&&0===u.length&&Object(fA.jsx)("p",{children:"we don't have any reviews for this movie"}),"resolved"===O&&u&&Object(fA.jsx)(ZA,{children:u.map((function(A,e){var n=A.author,t=A.content;return Object(fA.jsxs)(XA,{children:[Object(fA.jsxs)(PA,{children:["Name: ",Object(fA.jsx)(QA,{children:n})]}),Object(fA.jsx)(GA,{children:t})]},e)}))})]})},CA=dA.a.div(G||(G=Object(pA.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 40px;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),_A=dA.a.div(Q||(Q=Object(pA.a)(["\n  padding: 10px;\n  margin-top: 10px;\n  background-color: white;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),$A=dA.a.div(K||(K=Object(pA.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ae=dA.a.div(C||(C=Object(pA.a)(["\n  padding: 10px 30px;\n"]))),ee=dA.a.h2(_||(_=Object(pA.a)(["\n  margin-bottom: 10px;\n  font-size: 34px;\n  font-weight: 900;\n  line-height: 38px;\n  border-bottom: 1px solid #ede9e9;\n"]))),ne=dA.a.h3($||($=Object(pA.a)(["\n  margin-top: 15px;\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 30px;\n"]))),te=dA.a.p(AA||(AA=Object(pA.a)(["\n  margin-top: 15px;\n"]))),ce=dA.a.span(eA||(eA=Object(pA.a)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),ie=dA.a.img(nA||(nA=Object(pA.a)(["\n  height: 350px;\n  box-shadow: 1px 3px 17px -1px #050505;\n"]))),ae=dA.a.div(tA||(tA=Object(pA.a)(["\n  margin-top: 10px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #ede9e9;\n  font-weight: 600;\n"]))),oe=function(){var A=Object(vA.f)(),e=Object(t.useState)({}),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(t.useState)(A.movieId),s=Object(r.a)(a,2),l=s[0],p=(s[1],Object(t.useState)("idle")),j=Object(r.a)(p,2),O=j[0],h=j[1];Object(t.useEffect)((function(){null!==l&&(h("pending"),function(A){return b("".concat(d,"/movie/").concat(A,"?api_key=").concat(x,"&language=en-US"))}(l).then((function(A){i(A),h("resolved")})).catch((function(A){console.log(A),h("rejected")})),h("idle"))}),[l]);var u=c.poster_path,g=c.backdrop_path,f=c.original_title,m=c.title,v=c.vote_average,w=c.overview,E=c.genres,R="".concat(10*v,"%"),y=("https://image.tmdb.org/t/p/w500/".concat(g),"https://image.tmdb.org/t/p/w500/".concat(u));return null===u&&(y=rA),Object(fA.jsxs)(_A,{children:["pending"===O&&Object(fA.jsx)(CA,{children:Object(fA.jsx)(lA.a,{type:"TailSpin",color:"#ff8d23",height:60,width:60,className:"Loader"})}),"resolved"===O&&Object(fA.jsxs)(fA.Fragment,{children:[Object(fA.jsxs)($A,{children:[Object(fA.jsx)(ie,{src:y,alt:m}),Object(fA.jsxs)(Ae,{children:[Object(fA.jsx)(ee,{children:f||m}),Object(fA.jsxs)(te,{children:["User Score: ",Object(fA.jsx)(ce,{children:R})]}),Object(fA.jsx)(ne,{children:"Overview"}),Object(fA.jsx)(te,{children:w}),Object(fA.jsx)(ne,{children:"Genres"}),Object(fA.jsx)(te,{children:E&&E.map((function(A){return"".concat(A.name,",  ")}))})]})]}),Object(fA.jsxs)(ae,{children:[Object(fA.jsx)(o.c,{to:"/movies/".concat(l,"/cast"),children:"Cast"}),Object(fA.jsx)(o.c,{to:"/movies/".concat(l,"/reviews"),children:"Reviews"})]})]}),Object(fA.jsx)(vA.a,{path:"/movies/:movieId/cast",children:Object(fA.jsx)(YA,{})}),Object(fA.jsx)(vA.a,{path:"/movies/:movieId/reviews",children:Object(fA.jsx)(KA,{})})]})},re=dA.a.header(cA||(cA=Object(pA.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  border-bottom: 1px solid #222222;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),se=dA.a.div(iA||(iA=Object(pA.a)(["\n  display: flex;\n  align-items: center;\n"]))),le=dA.a.h1(aA||(aA=Object(pA.a)(["\n  font-weight: 900;\n  cursor: pointer;\n"]))),pe=dA.a.button(oA||(oA=Object(pA.a)(["\n  margin-right: 10px;\n  cursor: pointer;\n"]))),de=n(23),xe=function(A){var e=A.title;return Object(fA.jsxs)(re,{children:[Object(fA.jsx)(o.c,{to:"/",children:Object(fA.jsxs)(se,{children:[Object(fA.jsx)(de.a,{}),Object(fA.jsx)(le,{children:e})]})}),Object(fA.jsxs)("div",{children:[Object(fA.jsx)(pe,{children:Object(fA.jsx)(o.c,{exact:!0,to:"/",children:"Home"})}),Object(fA.jsx)(pe,{children:Object(fA.jsx)(o.c,{to:"/movies",children:"Movies"})})]})]})},be=function(){var A=Object(t.useState)(null),e=Object(r.a)(A,2),n=e[0],c=e[1],i=function(A){c(A)};return Object(fA.jsxs)(fA.Fragment,{children:[Object(fA.jsx)(xe,{title:"React Movies App"}),Object(fA.jsx)("main",{children:Object(fA.jsxs)(vA.c,{children:[Object(fA.jsx)(vA.a,{exact:!0,path:"/",children:Object(fA.jsx)(mA,{title:"Tranding today",onClick:i})}),Object(fA.jsx)(vA.a,{exact:!0,path:"/movies",children:Object(fA.jsx)(zA,{onClick:i})}),Object(fA.jsx)(vA.a,{path:"/movies/:movieId",children:n&&Object(fA.jsx)(oe,{})})]})})]})},je=function(A){A&&A instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,t=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(A),t(A),c(A),i(A),a(A)}))};a.a.render(Object(fA.jsx)(c.a.StrictMode,{children:Object(fA.jsx)(o.a,{children:Object(fA.jsx)(be,{})})}),document.getElementById("root")),je()}},[[56,1,2]]]);
//# sourceMappingURL=main.e8fb819a.chunk.js.map