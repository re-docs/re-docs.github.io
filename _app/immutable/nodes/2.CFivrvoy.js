import{a as c,t as d}from"../chunks/disclose-version.UERM2Wr9.js";import{p as T,f,a as U,$ as V,c as r,s as t,t as p,r as s,n as j}from"../chunks/runtime.Did4smys.js";import{s as z,h as B,b as C,a as A}from"../chunks/store.CtHX3vqK.js";import{i as G}from"../chunks/props.CHryXNgJ.js";import{s as I}from"../chunks/snippet.ChFZRRZx.js";import{g as M,s as S}from"../chunks/gameStore.LkgFEKjO.js";import{V as q}from"../chunks/VerticalCarousel.DC_TIAkO.js";import{A as x}from"../chunks/Arrow.Cdm4NdPP.js";import{p as D}from"../chunks/stores.aUN1ULZI.js";var F=d('<!> <a class="flex items-center h-full xl:px-2 px-1.5 underline decoration-dotted underline-offset-4 shrink-0 whitespace-nowrap"> </a>',1),J=d('<!> <a class="flex items-center h-full xl:px-2 px-1.5 underline decoration-dotted underline-offset-4 shrink-0 whitespace-nowrap"> </a>',1),K=d('<header class="fixed inset-x-0 top-0 z-10 text-sm text-white bg-black border-b border-gray-500 xl:text-base"><nav class="max-w-[96rem] w-full relative h-12 mx-auto xl:h-14"><ul class="flex h-full overflow-auto"><a class="flex items-center h-full font-bold xl:px-2 px-1.5" href="/">REdocs</a> <!> <a href="/games" class="flex items-center h-full xl:px-2 px-1.5 underline decoration-dotted underline-offset-4 shrink-0 whitespace-nowrap">Games</a> <!> <!></ul> <a class="absolute items-center hidden border border-white rounded xl:gap-2 xl:p-2 sm:flex xl:right-2 xl:inset-y-2 gap-1.5 right-1.5 p-1.5 inset-y-1.5" href="https://github.com/Sina-Hosseini-GST/resident-evil-fa/tree/sv5" target="_blank"><span class="whitespace-nowrap">Rate This Repo on GitHub</span> <svg class="h-full fill-white" xmlns="http://www.w3.org/2000/svg" role="img" fill="currentColor" color="" viewBox="0 0.3 24 23.41"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></nav></header> <main class="max-w-[96rem] w-full mx-auto text-white xl:pt-[calc(3.5rem+1.75rem+1px)] lg:pt-[calc(3rem+1.5rem+1px)] pt-[calc(3rem+1.25rem+1px)] md:flex md:justify-between xl:px-7 xl:pb-7 lg:px-6 lg:pb-6 px-5 pb-5"><!> <!></main>',1);function ee(R,h){T(h,!0);const u=z(),e=()=>C(D,"$page",u),g=()=>C(M,"$gameStore",u);var v=K();B(i=>{V.title="REdocs - Games"});var n=f(v),w=r(n),b=r(w),_=t(r(b),2);x(_);var $=t(_,4);G($,()=>e().params.game,i=>{var l=F(),o=f(l);x(o);var a=t(o,2),m=r(a,!0);p(()=>A(m,e().params.game.toUpperCase())),s(a),p(()=>S(a,"href",`/games/${e().params.game}/files`)),c(i,l)});var H=t($,2);G(H,()=>e().params.file,i=>{var l=J(),o=f(l);x(o);var a=t(o,2),m=r(a,!0);p(()=>A(m,e().params.file.replaceAll("-s-","'s").replaceAll("'s","'s ").replaceAll("-"," ").toUpperCase())),s(a),p(()=>S(a,"href",`/games/${e().params.game}/files/${e().params.file}`)),c(i,l)}),s(b),j(2),s(w),s(n);var k=t(n,2),y=r(k);q(y,{get items(){return g()},get searchedItems(){return g()},type:"game"});var E=t(y,2);I(E,()=>h.children),s(k),c(R,v),U()}export{ee as component};