import{s as _t,n as ut,c as vt}from"../chunks/scheduler.Cewbzyqj.js";import{S as xt,i as Et,e as b,t as j,s as r,c as y,a as L,b as F,f as l,d as w,m as A,g as xe,h as a,j as Re,u as f,l as wt,v as i,z as Ae,w as m,n as g,p as $,q as Rt,x as d}from"../chunks/index.2LxZN3s0.js";import{e as ct,B as Tt,g as bt}from"../chunks/Breadcrumb.CqPCQSoh.js";const yt=!0,kt=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt},Symbol.toStringTag,{value:"Module"}));function At(p){let s,o,h,R,_,v,x,E,u,S,D,J;return{c(){s=b("li"),o=b("span"),h=j(p[0]),R=r(),_=b("span"),v=j(p[1]),x=j(" - "),E=b("span"),u=j(p[2]),S=j(" | "),D=b("time"),J=j(p[3]),this.h()},l(P){s=y(P,"LI",{});var M=L(s);o=y(M,"SPAN",{class:!0});var O=L(o);h=F(O,p[0]),R=l(O),_=y(O,"SPAN",{class:!0});var k=L(_);v=F(k,p[1]),k.forEach(w),O.forEach(w),x=F(M," - "),E=y(M,"SPAN",{class:!0});var Te=L(E);u=F(Te,p[2]),Te.forEach(w),S=F(M," | "),D=y(M,"TIME",{class:!0});var Ee=L(D);J=F(Ee,p[3]),Ee.forEach(w),M.forEach(w),this.h()},h(){A(_,"class","italic"),A(o,"class","text-c-blue-2"),A(E,"class","text-c-blue-2 font-bold"),A(D,"class","text-c-blue-3")},m(P,M){xe(P,s,M),a(s,o),a(o,h),a(o,R),a(o,_),a(_,v),a(s,x),a(s,E),a(E,u),a(s,S),a(s,D),a(D,J)},p(P,[M]){M&1&&Re(h,P[0]),M&2&&Re(v,P[1]),M&4&&Re(u,P[2]),M&8&&Re(J,P[3])},i:ut,o:ut,d(P){P&&w(s)}}}function Pt(p,s,o){let{text:h}=s,{action:R}=s,{game:_}=s,{date:v}=s;return p.$$set=x=>{"text"in x&&o(0,h=x.text),"action"in x&&o(1,R=x.action),"game"in x&&o(2,_=x.game),"date"in x&&o(3,v=x.date)},[h,R,_,v]}class c extends xt{constructor(s){super(),Et(this,s,Pt,At,_t,{text:0,action:1,game:2,date:3})}}function ht(p,s,o){const h=p.slice();return h[2]=s[o],h}function pt(p){let s,o,h=p[2].shortTitle+"",R,_,v,x;return{c(){s=b("li"),o=b("a"),R=j(h),x=r(),this.h()},l(E){s=y(E,"LI",{class:!0});var u=L(s);o=y(u,"A",{class:!0,title:!0,href:!0});var S=L(o);R=F(S,h),S.forEach(w),x=l(u),u.forEach(w),this.h()},h(){A(o,"class","text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full"),A(o,"title",_=p[2].title),A(o,"href",v=p[2].url),A(s,"class","h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex")},m(E,u){xe(E,s,u),a(s,o),a(o,R),a(s,x)},p(E,u){u&2&&h!==(h=E[2].shortTitle+"")&&Re(R,h),u&2&&_!==(_=E[2].title)&&A(o,"title",_),u&2&&v!==(v=E[2].url)&&A(o,"href",v)},d(E){E&&w(s)}}}function Ct(p){let s,o,h,R,_,v,x,E,u,S,D='Hi, I&#39;m <a class="underline underline-offset-2 hover:font-bold text-white" href="mailto:sina.hosseini.gst@gmail.com">Sina</a>, and this is my independent project, to translate the whole in-game documents of each <span class="italic">Resident Evil</span> into Persian! Go select your desired title and explore the story!',J,P,M='<img class="w-2/5 min-w-c-2 mx-auto" src="./img/logo/logo.png" alt="Logo"/>',O,k,Te="This website is constantly being updated, and this means that every time you enter REdocs, you're likely to see more CONTENT! So, stay tuned!",Ee,H,q,mt="UPDATE LOG",Me,t,z,Le,B,Se,U,Ne,V,ke,G,Ie,W,De,Y,je,K,Fe,Q,Je,X,Oe,Z,He,ee,qe,te,ze,ae,Be,ne,Ue,re,Ve,le,Ge,se,We,oe,Ye,fe,Ke,ie,Qe,me,Xe,ge,Ze,$e,et,de,tt,ue,at,ce,nt,he,rt,pe,lt,ve,st,Pe,ot,_e,gt='Many thanks to <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://www.evilresource.com/">Evil Resource</a>, and <a target="_blank" class="underline underline-offset-2 hover:font-bold text-orange-500" href="https://residentevil.fandom.com/wiki/Resident_Evil_Wiki">Resident Evil Wiki</a>, for helping me shape the project!',be,we=ct(p[1]),C=[];for(let e=0;e<we.length;e+=1)C[e]=pt(ht(p,we,e));return v=new Tt({}),z=new c({props:{text:"All Main Files",action:"Translated",game:"RE1",date:"Jul 15, 2023"}}),B=new c({props:{text:"All Main Files",action:"Translated",game:"RE2",date:"Jul 15, 2023"}}),U=new c({props:{text:"All Main Files",action:"Translated",game:"RE3N",date:"Aug 27, 2023"}}),V=new c({props:{text:"Translation",action:"Started",game:"RE4",date:"Dec 6, 2023"}}),G=new c({props:{text:"Info on Ashley",action:"Translated",game:"RE4",date:"Dec 6, 2023"}}),W=new c({props:{text:"Info on Ashley",action:"Proofread",game:"RE4",date:"Dec 7, 2023"}}),Y=new c({props:{text:"Info on Ashley",action:"Proofread",game:"RE4",date:"Dec 10, 2023"}}),K=new c({props:{text:"Alert Order",action:"Translated",game:"RE4",date:"Dec 10, 2023"}}),Q=new c({props:{text:"About the Blue Medallions",action:"Translated",game:"RE4",date:"Jan 4, 2024"}}),X=new c({props:{text:"Chief's Note",action:"Translated",game:"RE4",date:"Jan 4, 2024"}}),Z=new c({props:{text:"Alert Order",action:"Proofread",game:"RE4",date:"Jan 7, 2024"}}),ee=new c({props:{text:"Chief's Note",action:"Proofread",game:"RE4",date:"Jan 7, 2024"}}),te=new c({props:{text:"Closure of the Church",action:"Translated",game:"RE4",date:"Jan 7, 2024"}}),ae=new c({props:{text:"Closure of the Church",action:"Proofread",game:"RE4",date:"Jan 29, 2024"}}),ne=new c({props:{text:"Anonymous Letter",action:"Translated",game:"RE4",date:"Jan 29, 2024"}}),re=new c({props:{text:"Closure of the Church",action:"Proofread",game:"RE4",date:"Fed 25, 2024"}}),le=new c({props:{text:"Sera and the 3rd Party",action:"Translated",game:"RE4",date:"Fed 25, 2024"}}),se=new c({props:{text:"Two Routes",action:"Translated",game:"RE4",date:"Fed 25, 2024"}}),oe=new c({props:{text:"Two Routes",action:"Proofread",game:"RE4",date:"Mar 4, 2024"}}),fe=new c({props:{text:"Security Manual",action:"Proofread",game:"RE3",date:"Mar 4, 2024"}}),ie=new c({props:{text:"Village's Last Defense",action:"Translated",game:"RE4",date:"Mar 4, 2024"}}),me=new c({props:{text:"Capture Luis Sera",action:"Translated",game:"RE4",date:"Mar 9, 2024"}}),ge=new c({props:{text:"Capture Luis Sera",action:"Proofread",game:"RE4",date:"Apr 8, 2024"}}),$e=new c({props:{text:"Village's Last Defense",action:"Proofread",game:"RE4",date:"Apr 8, 2024"}}),de=new c({props:{text:"Two Routes",action:"Proofread",game:"RE4",date:"Apr 8, 2024"}}),ue=new c({props:{text:"Sera and the 3rd Party",action:"Proofread",game:"RE4",date:"Apr 8, 2024"}}),ce=new c({props:{text:"About the Blue Medallions",action:"Proofread",game:"RE4",date:"Apr 8, 2024"}}),he=new c({props:{text:"Alert Order",action:"Proofread",game:"RE4",date:"Apr 8, 2024"}}),pe=new c({props:{text:"Target Practice",action:"Translated",game:"RE4",date:"Apr 9, 2024"}}),{c(){s=r(),o=b("header"),h=b("nav"),R=b("ul");for(let e=0;e<C.length;e+=1)C[e].c();_=r(),f(v.$$.fragment),x=r(),E=b("main"),u=b("section"),S=b("p"),S.innerHTML=D,J=r(),P=b("div"),P.innerHTML=M,O=r(),k=b("p"),k.textContent=Te,Ee=r(),H=b("details"),q=b("summary"),q.textContent=mt,Me=r(),t=b("ul"),f(z.$$.fragment),Le=r(),f(B.$$.fragment),Se=r(),f(U.$$.fragment),Ne=r(),f(V.$$.fragment),ke=r(),f(G.$$.fragment),Ie=r(),f(W.$$.fragment),De=r(),f(Y.$$.fragment),je=r(),f(K.$$.fragment),Fe=r(),f(Q.$$.fragment),Je=r(),f(X.$$.fragment),Oe=r(),f(Z.$$.fragment),He=r(),f(ee.$$.fragment),qe=r(),f(te.$$.fragment),ze=r(),f(ae.$$.fragment),Be=r(),f(ne.$$.fragment),Ue=r(),f(re.$$.fragment),Ve=r(),f(le.$$.fragment),Ge=r(),f(se.$$.fragment),We=r(),f(oe.$$.fragment),Ye=r(),f(fe.$$.fragment),Ke=r(),f(ie.$$.fragment),Qe=r(),f(me.$$.fragment),Xe=r(),f(ge.$$.fragment),Ze=r(),f($e.$$.fragment),et=r(),f(de.$$.fragment),tt=r(),f(ue.$$.fragment),at=r(),f(ce.$$.fragment),nt=r(),f(he.$$.fragment),rt=r(),f(pe.$$.fragment),lt=r(),ve=b("li"),st=j("Number of Files Translated => "),Pe=j(p[0]),ot=r(),_e=b("p"),_e.innerHTML=gt,this.h()},l(e){wt("svelte-1rtqr5z",document.head).forEach(w),s=l(e),o=y(e,"HEADER",{class:!0});var T=L(o);h=y(T,"NAV",{});var ye=L(h);R=y(ye,"UL",{class:!0});var $t=L(R);for(let it=0;it<C.length;it+=1)C[it].l($t);$t.forEach(w),ye.forEach(w),T.forEach(w),_=l(e),i(v.$$.fragment,e),x=l(e),E=y(e,"MAIN",{class:!0});var dt=L(E);u=y(dt,"SECTION",{class:!0});var I=L(u);S=y(I,"P",{class:!0,"data-svelte-h":!0}),Ae(S)!=="svelte-11eyv3h"&&(S.innerHTML=D),J=l(I),P=y(I,"DIV",{class:!0,"data-svelte-h":!0}),Ae(P)!=="svelte-3xlrdf"&&(P.innerHTML=M),O=l(I),k=y(I,"P",{class:!0,"data-svelte-h":!0}),Ae(k)!=="svelte-19vyq4f"&&(k.textContent=Te),Ee=l(I),H=y(I,"DETAILS",{class:!0});var Ce=L(H);q=y(Ce,"SUMMARY",{class:!0,"data-svelte-h":!0}),Ae(q)!=="svelte-1e13o84"&&(q.textContent=mt),Me=l(Ce),t=y(Ce,"UL",{});var n=L(t);i(z.$$.fragment,n),Le=l(n),i(B.$$.fragment,n),Se=l(n),i(U.$$.fragment,n),Ne=l(n),i(V.$$.fragment,n),ke=l(n),i(G.$$.fragment,n),Ie=l(n),i(W.$$.fragment,n),De=l(n),i(Y.$$.fragment,n),je=l(n),i(K.$$.fragment,n),Fe=l(n),i(Q.$$.fragment,n),Je=l(n),i(X.$$.fragment,n),Oe=l(n),i(Z.$$.fragment,n),He=l(n),i(ee.$$.fragment,n),qe=l(n),i(te.$$.fragment,n),ze=l(n),i(ae.$$.fragment,n),Be=l(n),i(ne.$$.fragment,n),Ue=l(n),i(re.$$.fragment,n),Ve=l(n),i(le.$$.fragment,n),Ge=l(n),i(se.$$.fragment,n),We=l(n),i(oe.$$.fragment,n),Ye=l(n),i(fe.$$.fragment,n),Ke=l(n),i(ie.$$.fragment,n),Qe=l(n),i(me.$$.fragment,n),Xe=l(n),i(ge.$$.fragment,n),Ze=l(n),i($e.$$.fragment,n),et=l(n),i(de.$$.fragment,n),tt=l(n),i(ue.$$.fragment,n),at=l(n),i(ce.$$.fragment,n),nt=l(n),i(he.$$.fragment,n),rt=l(n),i(pe.$$.fragment,n),lt=l(n),ve=y(n,"LI",{});var ft=L(ve);st=F(ft,"Number of Files Translated => "),Pe=F(ft,p[0]),ft.forEach(w),n.forEach(w),Ce.forEach(w),ot=l(I),_e=y(I,"P",{class:!0,"data-svelte-h":!0}),Ae(_e)!=="svelte-1drnf1u"&&(_e.innerHTML=gt),I.forEach(w),dt.forEach(w),this.h()},h(){document.title="REdocs",A(R,"class","flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16"),A(o,"class","fixed top-0 inset-x-0 bg-black z-10"),A(S,"class","text-justify text-pink-100"),A(P,"class","my-8"),A(k,"class","text-justify text-red-100 italic"),A(q,"class","text-c-blue-3 text-center font-bold cursor-pointer"),A(H,"class","my-2 py-2 text-white border-y-8 border-double border-c-gray-8"),A(_e,"class","text-justify text-orange-300 uppercase"),A(u,"class","p-4"),A(E,"class","max-w-c mx-auto")},m(e,N){xe(e,s,N),xe(e,o,N),a(o,h),a(h,R);for(let T=0;T<C.length;T+=1)C[T]&&C[T].m(R,null);xe(e,_,N),m(v,e,N),xe(e,x,N),xe(e,E,N),a(E,u),a(u,S),a(u,J),a(u,P),a(u,O),a(u,k),a(u,Ee),a(u,H),a(H,q),a(H,Me),a(H,t),m(z,t,null),a(t,Le),m(B,t,null),a(t,Se),m(U,t,null),a(t,Ne),m(V,t,null),a(t,ke),m(G,t,null),a(t,Ie),m(W,t,null),a(t,De),m(Y,t,null),a(t,je),m(K,t,null),a(t,Fe),m(Q,t,null),a(t,Je),m(X,t,null),a(t,Oe),m(Z,t,null),a(t,He),m(ee,t,null),a(t,qe),m(te,t,null),a(t,ze),m(ae,t,null),a(t,Be),m(ne,t,null),a(t,Ue),m(re,t,null),a(t,Ve),m(le,t,null),a(t,Ge),m(se,t,null),a(t,We),m(oe,t,null),a(t,Ye),m(fe,t,null),a(t,Ke),m(ie,t,null),a(t,Qe),m(me,t,null),a(t,Xe),m(ge,t,null),a(t,Ze),m($e,t,null),a(t,et),m(de,t,null),a(t,tt),m(ue,t,null),a(t,at),m(ce,t,null),a(t,nt),m(he,t,null),a(t,rt),m(pe,t,null),a(t,lt),a(t,ve),a(ve,st),a(ve,Pe),a(u,ot),a(u,_e),be=!0},p(e,[N]){if(N&2){we=ct(e[1]);let T;for(T=0;T<we.length;T+=1){const ye=ht(e,we,T);C[T]?C[T].p(ye,N):(C[T]=pt(ye),C[T].c(),C[T].m(R,null))}for(;T<C.length;T+=1)C[T].d(1);C.length=we.length}(!be||N&1)&&Re(Pe,e[0])},i(e){be||(g(v.$$.fragment,e),g(z.$$.fragment,e),g(B.$$.fragment,e),g(U.$$.fragment,e),g(V.$$.fragment,e),g(G.$$.fragment,e),g(W.$$.fragment,e),g(Y.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(ne.$$.fragment,e),g(re.$$.fragment,e),g(le.$$.fragment,e),g(se.$$.fragment,e),g(oe.$$.fragment,e),g(fe.$$.fragment,e),g(ie.$$.fragment,e),g(me.$$.fragment,e),g(ge.$$.fragment,e),g($e.$$.fragment,e),g(de.$$.fragment,e),g(ue.$$.fragment,e),g(ce.$$.fragment,e),g(he.$$.fragment,e),g(pe.$$.fragment,e),be=!0)},o(e){$(v.$$.fragment,e),$(z.$$.fragment,e),$(B.$$.fragment,e),$(U.$$.fragment,e),$(V.$$.fragment,e),$(G.$$.fragment,e),$(W.$$.fragment,e),$(Y.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(X.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(ae.$$.fragment,e),$(ne.$$.fragment,e),$(re.$$.fragment,e),$(le.$$.fragment,e),$(se.$$.fragment,e),$(oe.$$.fragment,e),$(fe.$$.fragment,e),$(ie.$$.fragment,e),$(me.$$.fragment,e),$(ge.$$.fragment,e),$($e.$$.fragment,e),$(de.$$.fragment,e),$(ue.$$.fragment,e),$(ce.$$.fragment,e),$(he.$$.fragment,e),$(pe.$$.fragment,e),be=!1},d(e){e&&(w(s),w(o),w(_),w(x),w(E)),Rt(C,e),d(v,e),d(z),d(B),d(U),d(V),d(G),d(W),d(Y),d(K),d(Q),d(X),d(Z),d(ee),d(te),d(ae),d(ne),d(re),d(le),d(se),d(oe),d(fe),d(ie),d(me),d(ge),d($e),d(de),d(ue),d(ce),d(he),d(pe)}}}function Mt(p,s,o){let h;vt(p,bt,_=>o(1,h=_));let R=0;for(let _=0;_<h.length;_++){const v=h[_];for(let x=0;x<v.files.length;x++)v.files[x],R++}return[R,h]}class It extends xt{constructor(s){super(),Et(this,s,Mt,Ct,_t,{})}}export{It as component,kt as universal};