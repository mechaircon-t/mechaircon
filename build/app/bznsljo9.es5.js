/*! Built with http://stenciljs.com */
App.loadBundle("bznsljo9",["exports"],function(e){var t=window.App.h,n=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"app-home"},t("ma-header",null))},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){this.index=0,this.carouselImgs=["assets/img/hvac1.jpg","assets/img/hvac2.jpg","assets/img/hvac3.jpg"]}return e.prototype.componentDidLoad=function(){var e=this;console.log("rerendering"),this.clear=setInterval(function(){console.log("incrementing index"),e.index=e.index===e.carouselImgs.length-1?0:e.index+1},5e3)},e.prototype.componentDidUnload=function(){clearInterval(this.clear)},e.prototype.render=function(){return t("section",{class:"hero is-dark is-bold is-fullheight"},t("div",{class:"hero-carousel slide-active"},t("ul",{class:"carousel-container"},t("li",null,t("img",{class:"is-background",src:this.carouselImgs[this.index],alt:""})))),t("div",{class:"hero-head"}),t("div",{class:"hero-body"},t("div",{class:"container has-text-centered"},t("figure",null,t("img",{src:"assets/img/gear.svg",alt:"Logo"})),t("p",{class:"title"},"Design Consulting Execution"),t("p",{class:"subtitle"},"Complete HVAC Solution"))),t("div",{class:"hero-foot"}))},Object.defineProperty(e,"is",{get:function(){return"ma-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{carouselImgs:{state:!0},clear:{state:!0},index:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".hero-carousel{position:absolute;overflow:hidden;width:100vw;height:100vh}.carousel-container{margin:0;padding:0}.carousel-container li{margin:0;padding:0;width:100%;list-style:none;text-align:center}.carousel-container li img{width:100%;opacity:.5}"},enumerable:!0,configurable:!0}),e}();e.AppHome=n,e.MaHeader=r,Object.defineProperty(e,"__esModule",{value:!0})});