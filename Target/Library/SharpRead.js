import t from"../Option/Index.js";var n=async(f,p)=>{const i=p.Input.split(".").pop();if(!i)return;const r={avci:"avif",avcs:"avif",avifs:"avif",heic:"heif",heics:"heif",heifs:"heif",jfif:"jpeg",jif:"jpeg",jpe:"jpeg",apng:"png",jpg:"jpeg"},e=typeof r[i]<"u"?r[i]:typeof f[i]<"u"?i:!1;if(e&&["avif","gif","heif","jpeg","png","raw","tiff","webp"].includes(e)&&typeof f[e]<"u"&&f[e]!==!1)return e in p.Buffer&&await p.Buffer[e](f[e]!==!0?f[e]:t.Image).toBuffer()};export{n as default};