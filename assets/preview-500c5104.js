import"./index-aa8430a9.js";import{s as E}from"./index-d475d2ea.js";import"./index-d37d4223.js";var m="links";const{addons:i,makeDecorator:c}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:l,SELECT_STORY:O}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:o,HTMLElement:L}=E,d=e=>i.getChannel().emit(O,e),s=e=>{let{target:t}=e;if(!(t instanceof L))return;let _=t,{sbKind:r,sbStory:a}=_.dataset;(r||a)&&(e.preventDefault(),d({kind:r,story:a}))},n=!1,p=()=>{n||(n=!0,o.addEventListener("click",s))},v=()=>{n&&(n=!1,o.removeEventListener("click",s))},k=c({name:"withLinks",parameterName:m,wrapper:(e,t)=>(p(),i.getChannel().once(l,v),e(t))}),f=[k];export{f as decorators};
//# sourceMappingURL=preview-500c5104.js.map
