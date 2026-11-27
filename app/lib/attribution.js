// In-memory only: no cookies or browser storage. Retained across client-side navigation.
let attribution;
export function captureAttribution(){
 if(typeof window==="undefined")return;
 const params=new URLSearchParams(window.location.search);
 const clean=(v,n=200)=>String(v||"").trim().slice(0,n);
 const source=clean(params.get("utm_source"));
 if(attribution&&!source)return attribution;
 let ref="";
 try{const url=new URL(document.referrer);if(url.origin!==window.location.origin&&url.hostname.replace(/^www\./,"")!==window.location.hostname.replace(/^www\./,""))ref=url.hostname;}catch{}
 attribution={source:source||ref||"direct",medium:clean(params.get("utm_medium"))||(ref?"referral":""),campaign:clean(params.get("utm_campaign")),landingPage:clean(window.location.pathname,500)};
 return attribution;
}
