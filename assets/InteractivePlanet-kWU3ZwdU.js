import{r as o,j as t}from"./index-Bwp66OR0.js";const u=()=>{const s=o.useRef(null);return o.useEffect(()=>{const r=s.current;if(!r)return;const a=document.createElement("style");a.textContent=`
      @keyframes sparkle {
        0% { 
          opacity: 1; 
          transform: scale(1); 
        }
        100% { 
          opacity: 0; 
          transform: scale(0) rotate(180deg); 
        }
      }
    `,document.head.appendChild(a);const i=c=>{for(let l=0;l<8;l++){const e=document.createElement("div");e.className="absolute w-1 h-1 bg-white rounded-full pointer-events-none",e.style.left=Math.random()*100+"%",e.style.top=Math.random()*100+"%",e.style.animation="sparkle 0.8s ease-out forwards",c.appendChild(e),setTimeout(()=>e.remove(),800)}},n=()=>{r&&i(r)};return r.addEventListener("click",n),()=>{r.removeEventListener("click",n),document.head.removeChild(a)}},[]),t.jsx("div",{className:"flex justify-center items-center py-20",children:t.jsxs("div",{ref:s,className:"relative w-72 h-72 rounded-full cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-180 group",style:{background:"radial-gradient(circle at 30% 30%, hsl(var(--tech-pink)), hsl(var(--cyber-purple)), hsl(var(--tech-green)))",boxShadow:"0 0 50px hsla(var(--tech-green) / 0.5)"},children:[t.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"}),t.jsx("div",{className:"absolute inset-4 rounded-full border border-white/20"}),t.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 group-hover:text-white transition-colors duration-300",children:t.jsx("i",{className:"fas fa-globe text-4xl"})})]})})};export{u as default};
