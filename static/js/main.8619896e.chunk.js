(this["webpackJsonpmovie-page"]=this["webpackJsonpmovie-page"]||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),a=i(13),r=i.n(a),s=i(14),o=i(4),l=i(15),d=i(10),j="AllMovies",b="FindGenre",f="SearchFilm",u="FindFilm",m="FavFilms",h=i(1);function v(e){var t=e.setToLocalStorage,i=e.info,n=e.idGenre,a=e.favoriteMoiveArr,r=Object(o.b)();return Object(h.jsx)("div",{children:Object(h.jsx)(c.Fragment,{children:Object(h.jsxs)("div",{className:"movieBlock",children:[Object(h.jsx)("div",{className:"imgBlock",children:Object(h.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:"Poster"})}),Object(h.jsxs)("div",{children:[Object(h.jsxs)(d.b,{className:"movieTitle",to:"film/".concat(i.id),children:[i.title," "]}),Object(h.jsxs)("p",{children:["Genre:"," ",n.filter((function(e){return i.genre_ids.includes(e.id)})).map((function(e){return e.name}))," "]}),Object(h.jsx)("button",{className:"btnAdd",onClick:function(){return function(e){if(a.includes(e.title)){var i=a.filter((function(t){return t!==e.title}));r({type:m,payload:i}),t("favMovies",i)}else{var c=Object(l.a)(a);c.push(e.title),r({type:m,payload:c}),t("favMovies",c)}}(i)},children:a.includes(i.title)?"Delete from Watch List":"Add To Watch List"})]})]})},i.id)})}function O(e){var t=e.dispatch;return Object(h.jsxs)("div",{className:"headerBlock",children:[Object(h.jsx)("div",{children:Object(h.jsx)(d.b,{className:"favLink",to:"favoriteFilms",children:"Whatch List"})}),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{style:{fontSize:"50px"},children:"Popular Movies"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Search:"}),Object(h.jsx)("input",{onChange:function(e){return t({type:f,payload:e.target.value})},className:"searchMovie",type:"text",placeholder:"Search the movie"})]})]})}function x(e){var t=e.setToLocalStorage,i=Object(o.c)((function(e){return e.movie})),n=Object(o.c)((function(e){return e.idGenre})),a=Object(o.c)((function(e){return e.search})),r=Object(o.c)((function(e){return e.favoriteMoiveArr})),l=Object(o.b)();return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b54d85cb2be9820579d44930b497a17a").then((function(e){return e.json()})).then((function(e){return l({type:j,payload:e.results})}))}),[l]),Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b54d85cb2be9820579d44930b497a17a&language=en-US").then((function(e){return e.json()})).then((function(e){return l({type:b,payload:e.genres})}))}),[l]),i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{dispatch:l}),Object(h.jsx)("div",{className:"movieMain",children:i.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})).map((function(e){return Object(h.jsx)(v,Object(s.a)({setToLocalStorage:t,favoriteMoiveArr:r,info:e,idGenre:n},"favoriteMoiveArr",r))}))})]}):Object(h.jsx)("div",{children:"Loading..."})}var p=i(3);function g(e){var t=e.index,i=e.movie,n=e.deleteFavMovie;return Object(h.jsx)(c.Fragment,{children:Object(h.jsxs)("div",{className:"favBlock",children:[Object(h.jsx)("i",{className:"fa fa-bookmark","aria-hidden":"true",children:Object(h.jsx)("span",{className:"titleFav",children:i})}),Object(h.jsx)("button",{onClick:function(){return n(i)},children:"Delete Movie"})]})},t)}function F(e){var t=e.setToLocalStorage,i=Object(o.c)((function(e){return e.favoriteMoiveArr})),c=Object(o.b)();function n(e){var n=i.filter((function(t){return console.log(t,e),t!==e}));c({type:m,payload:n}),t("favMovies",n)}return Object(h.jsxs)("div",{className:"favMovieMain",children:[Object(h.jsx)("div",{className:"titleBlock",style:{textAlign:"center"},children:Object(h.jsx)("span",{children:"Whatch List:"})}),Object(h.jsx)("div",{children:i.map((function(e,t){return Object(h.jsx)(g,{index:t,movie:e,deleteFavMovie:n})}))}),Object(h.jsx)("div",{className:"linkToHome",style:{textAlign:"center"},children:Object(h.jsx)(d.b,{to:"/",children:"Go to HomePage"})})]})}function N(e){var t=e.setToLocalStorage,i=Object(p.e)().id,n=Object(o.b)(),a=Object(o.c)((function(e){return e.findFilm})),r=Object(o.c)((function(e){return e.favoriteMoiveArr}));return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=b54d85cb2be9820579d44930b497a17a")).then((function(e){return e.json()})).then((function(e){return n({type:u,payload:e})}))}),[n]),a?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"findFilmMain",children:[Object(h.jsxs)("div",{className:"findFimlTitleBlock",children:[a.title,Object(h.jsx)("span",{className:"linkToHomePage",children:Object(h.jsx)(d.b,{to:"/",children:"(go to home page...)"})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"findFimlInfoMain",children:[Object(h.jsxs)("div",{className:"findFilmPosterImg",children:[" ",Object(h.jsx)("img",{className:"findFilmPoster",src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:"Poster"})]}),Object(h.jsxs)("div",{className:"findFilmInfoBlock",children:[Object(h.jsxs)("div",{className:"findFilmInfoAboutFilm",children:[Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Title",children:"Status:"}),Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Text",children:a.status}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"findFilmInfoAboutFilm",children:[Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Title",children:"Release date:"}),Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Text",children:a.release_date}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"findFilmInfoAboutFilm",children:[Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Title",children:"Overview:"}),Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Text",children:a.overview}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"findFilmInfoAboutFilm",children:[Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Title",children:"Genres:"}),Object(h.jsx)("p",{className:"findFilmInfoAboutFilm_Text",children:a.genres.map((function(e){return e.name}))}),Object(h.jsx)("hr",{})]}),Object(h.jsx)("div",{className:"findFilmInfoAboutFilm",children:Object(h.jsx)("button",{className:"btnAdd",onClick:function(){return function(e){if(r.includes(e.title)){var i=r.filter((function(t){return t!==e.title}));n({type:m,payload:i}),t("favMovies",i)}else{var c=Object(l.a)(r);c.push(e.title),n({type:m,payload:c}),t("favMovies",c)}}(a)},children:r.includes(a.title)?"Delete from Watch List":"Add To Watch List"})})]})]})]})}):Object(h.jsx)("div",{children:"Loading..."})}function y(e,t){return localStorage.setItem(e,JSON.stringify(t))}var A=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",children:Object(h.jsx)(x,{setToLocalStorage:y})}),Object(h.jsx)(p.a,{path:"/favoriteFilms",children:Object(h.jsx)(F,{setToLocalStorage:y})}),Object(h.jsx)(p.a,{path:"/film/:id",children:Object(h.jsx)(N,{setToLocalStorage:y})})]})})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,36)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),a(e),r(e)}))},T=(i(34),i(9)),L=i(22);var k,I={favoriteMoiveArr:(k="favMovies",JSON.parse(localStorage.getItem(k))||[]),movie:null,idGenre:[],search:"",findFilm:""};var S=Object(L.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(T.a)(Object(T.a)({},e),{},{movie:t.payload});case b:return Object(T.a)(Object(T.a)({},e),{},{idGenre:t.payload});case f:return Object(T.a)(Object(T.a)({},e),{},{search:t.payload});case u:return Object(T.a)(Object(T.a)({},e),{},{findFilm:t.payload});case m:return Object(T.a)(Object(T.a)({},e),{},{favoriteMoiveArr:t.payload});default:return e}})),_=S;r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(o.a,{store:_,children:Object(h.jsx)(A,{})})}),document.getElementById("root")),M()}},[[35,1,2]]]);
//# sourceMappingURL=main.8619896e.chunk.js.map