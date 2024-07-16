function E({view:i="dayGridMonth",locale:d="en",firstDay:c=1,events:h=[],eventContent:l=null,selectable:w=!1,onEventClick:o=!1,dayMaxEvents:u=!1,moreLinkContent:r=null,resources:v=[],hasContextMenu:a=!1,options:f={}}){return{calendarEl:null,init:async function(){this.calendarEl=this.$el;let t=this,n={view:i,resources:v,eventSources:[{events:(e,s,p)=>this.$wire.getEventsJs(e)}],locale:d,firstDay:c,dayMaxEvents:u,selectable:a,editable:!1,eventStartEditable:!1,eventDurationEditable:!1,eventClick:e=>{if(e.event.extendedProps.url){let s=e.event.extendedProps.url_target??"_blank";window.open(e.event.extendedProps.url,s)}else o&&this.$wire.onEventClick(e)}};a&&(n.dateClick=e=>{t.$el.querySelector("[calendar-context-menu]").dispatchEvent(new CustomEvent("calendar--open-menu",{detail:e}))},n.select=e=>{t.$el.querySelector("[calendar-context-menu]").dispatchEvent(new CustomEvent("calendar--open-menu",{detail:e}))}),l!==null&&(n.eventContent=e=>({html:t.getEventContent(e)})),r!==null&&(n.moreLinkContent=e=>({html:t.getMoreLinkContent(e)})),this.ec=new EventCalendar(this.$el.querySelector("div"),{...n,...f}),window.addEventListener("ec-add-event",this.addEvent),window.addEventListener("calendar--refresh",()=>this.ec.refetchEvents())},addEvent:function(t){this.ec.addEvent(t)},getEventContent:function(t){if(typeof l=="string")return this.wrapContent(l,t);if(typeof l=="object"){let n=t.event.extendedProps.model,e=l[n];return this.wrapContent(e,t)}},getMoreLinkContent:function(t){return this.wrapContent(r,t)},wrapContent:function(t,n){let e=document.createElement("div");return e.innerHTML=t,e.setAttribute("x-data",JSON.stringify(n)),e.classList.add("w-full"),e.outerHTML}}}export{E as default};
