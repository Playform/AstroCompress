let p;var P=(...[r={}])=>{Object.entries(r).forEach(([e,a])=>Object.defineProperty(r,e,{value:a===!0?u[e]:r[e]}));const{Path:o,Cache:s,Logger:g,Map:l,Exclude:h,Action:d,CSS:S,HTML:b,Image:j,JavaScript:A,SVG:T,Parser:y}=f(u,r),n=new Set;return typeof o<"u"&&(Array.isArray(o)||o instanceof Set)&&o.forEach(e=>n.add(e)),typeof y=="object"&&Object.entries(y).forEach(([e,a])=>Object.defineProperty(y,e,{value:Array.isArray(a)?a:[a]})),{name:"astro-compress",hooks:{"astro:config:done":async({config:{outDir:{pathname:e}}})=>{p=(await import("path")).parse(e).dir.replace(/\\/g,"/"),p.startsWith("/")&&(p=p.substring(1))},"astro:build:done":async({dir:e})=>{if(console.log(`
${(await import("kleur")).bgGreen((await import("kleur/colors")).black(" astro-compress processing "))}`),typeof l=="object"){n.size||n.add(e),typeof s=="object"&&s.Search===x&&(s.Search=e);for(const[a,i]of Object.entries({CSS:S,HTML:b,Image:j,JavaScript:A,SVG:T})){if(!(i&&l[a])||typeof i!="object")return;m=f(d,f(d,{Wrote:async({Buffer:t,Input:c})=>{switch(a){case"CSS":return(await import("csso")).minify(t.toString(),i.csso).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),i["html-minifier-terser"]);case"JavaScript":return(await(await import("terser")).minify(t.toString(),i.terser)).code??t;case"Image":return await(await import("../Function/Image/Writesharp.js")).default(i.sharp,{Buffer:t,Input:c});case"SVG":{const{data:I}=(await import("svgo")).optimize(t.toString(),i.svgo);return I??t}default:return t}},Fulfilled:async t=>t.Files>0?`${(await import("kleur")).green(`\u2713 Successfully compressed a total of ${t.Files} ${a} ${t.Files===1?"file":"files"} for ${await(await import("files-pipe/Target/Function/Bytes.js")).default(t.Info.Total)}.`)}`:!1})),a==="Image"&&(m=f(m,{Read:async({Input:t})=>{const{format:c}=await w(t).metadata();return w(t,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:c==="webp"||c==="gif"})}}));for(const t of n)await(await(await(await new(await import("files-pipe")).default(s,g).In(t)).By(l[a]??"**/*")).Not(h)).Pipe(m)}}}}}};const{default:u}=await import("../Variable/Option.js"),{default:{Cache:{Search:x}}}=await import("files-pipe/Target/Variable/Option.js"),{default:f}=await import("typescript-esbuild/Target/Function/Merge.js"),{default:w}=await import("sharp");let m;export{u as Default,w as Defaultsharp,f as Merge,x as Search,p as System,m as _Action,P as default};
