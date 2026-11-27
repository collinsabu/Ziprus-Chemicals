"use client";
import {useEffect,useRef,useState} from "react";
import Script from "next/script";
import {captureAttribution} from "../lib/attribution";
const products=["Pure White Dolomite","Off-White Dolomite","Calcium Carbonate","Superfine Calcium Carbonate","Ultrafine Calcium Carbonate","Coated Calcium Carbonate","Animal Feed Grade Limestone","Glass Grade Limestone","Kaolin","Other"];
const siteKey=process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
export default function WebsiteSubmissionForm({type, dark=false, initialProduct=""}){
 const [ready,setReady]=useState(false),[token,setToken]=useState(""),[busy,setBusy]=useState(false),[error,setError]=useState(""),[reference,setReference]=useState("");
 const container=useRef(null),widget=useRef(null),attempt=useRef(null),lock=useRef(false);
 const commercial=["order","quotation"].includes(type),career=type==="career";
 useEffect(()=>{
  if(!ready||!siteKey||!container.current||!window.turnstile||reference)return;
  widget.current=window.turnstile.render(container.current,{sitekey:siteKey,callback:setToken,"expired-callback":()=>setToken(""),"error-callback":()=>{setToken("");setError("Verification unavailable. Please retry.");}});
  return ()=>{if(widget.current!=null)window.turnstile.remove(widget.current);widget.current=null;};
 },[ready,reference]);
 const field="w-full rounded-lg bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700";
 async function submit(e){
  e.preventDefault();if(lock.current)return;setError("");
  if(!token){setError("Please complete verification.");return;}
  lock.current=true;setBusy(true);
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),25000);
  try{
   const form=new FormData(e.currentTarget),data=Object.fromEntries(form.entries());
   delete data.privacy;
   if(data.quantity) data.quantity=Number(data.quantity);else delete data.quantity;
   if(career){const file=form.get("cv");delete data.cv;if(!file||file.size>2097152||!file.size||file.type!=="application/pdf")throw Error("Please choose a PDF CV up to 2 MiB.");
    data.cvBase64=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result).split(",")[1]);reader.onerror=()=>reject(Error("Unable to read CV."));reader.readAsDataURL(file);});}
   data.attribution=captureAttribution();
   const fingerprint=JSON.stringify(data);if(attempt.current?.fingerprint!==fingerprint)attempt.current={fingerprint,key:crypto.randomUUID()};
   const response=await fetch("https://os.zipruschemicals.com/api/public/website/"+type,{method:"POST",signal:controller.signal,credentials:"omit",headers:{"Content-Type":"application/json","Idempotency-Key":attempt.current.key},body:JSON.stringify({...data,turnstileToken:token})});
   const result=await response.json().catch(()=>null);if(!result)throw Error("The server returned an unexpected response. Please retry.");if(!response.ok||!result.success||!result.reference)throw Error(result.message||"Unable to submit. Please try again.");
   setReference(result.reference);attempt.current=null;
  }catch(err){setError(err.name==="AbortError"?"The request is taking longer than expected. Please retry without changing your details so we can avoid duplicate submissions.":err.message||"Unable to submit. Please try again.");}
  finally{clearTimeout(timeout);setBusy(false);lock.current=false;setToken("");if(widget.current!=null){try{window.turnstile?.reset(widget.current);}catch{setError("Please refresh the page if verification does not restart.");}}}
 }
 if(reference)return <div role="status" className="rounded-xl bg-green-50 p-5 text-green-900 shadow-sm"><h3 className="font-bold">Thank you. Your request has been received.</h3><p className="mt-2 break-all text-sm">Reference: {reference}</p><p className="mt-2 text-sm">{type==="order"?"This is an order request, not a confirmed order.":"Our team will review your submission."}</p></div>;
 return <form onSubmit={submit} className={"mx-auto w-full max-w-2xl space-y-4 rounded-xl p-4 sm:p-6 shadow-lg "+(dark?"bg-base_two text-white":"bg-white text-slate-900")}>
 <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={()=>setReady(true)} onError={()=>setError("Verification could not load.")}/>
 <fieldset disabled={busy} className="space-y-4">
 <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm">Full name *<input className={field} name="fullName" autoComplete="name" required maxLength={200}/></label>{!career&&<label className="block text-sm">Company {commercial?"*":""}<input className={field} name="companyName" autoComplete="organization" required={commercial} maxLength={200}/></label>}
 <label className="block text-sm">Email {type==="callback"?"":"*"}<input className={field} name="email" type="email" autoComplete="email" required={type!=="callback"} maxLength={254}/></label><label className="block text-sm">Phone *<input className={field} name="phone" type="tel" autoComplete="tel" required maxLength={50}/></label></div>
 {(commercial||type==="callback")&&<label className="block text-sm">Product {commercial?"*":""}<select className={field} name="product" defaultValue={products.includes(initialProduct)?initialProduct:""} required={commercial}><option value="">Select product</option>{products.map(p=><option key={p}>{p}</option>)}</select></label>}
 {commercial&&<div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm">Estimated quantity (tonnes) {type==="order"?"*":"(optional)"}<input className={field} name="quantity" type="number" min="0.001" max="1000000" step="any" required={type==="order"}/></label><label className="block text-sm">Delivery location *<input className={field} name="deliveryLocation" required maxLength={500}/></label></div>}
 {career&&<><label className="block text-sm">Position *<input className={field} name="position" required maxLength={200}/></label><label className="block text-sm">CV (PDF, up to 2 MiB) *<input className={field} name="cv" type="file" accept="application/pdf,.pdf" required/></label></>}
 <label className="block text-sm">{career?"Cover letter":"Message / requirements"} {type==="contact"?"*":""}<textarea className={field} name="message" rows={3} maxLength={10000} required={type==="contact"}/></label>
 <div className="hidden" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off"/></div>
 <label className="flex items-start gap-2 text-xs"><input name="privacy" type="checkbox" required/><span>I have read the <a href="/policy" target="_blank" rel="noopener noreferrer" className="underline">privacy policy</a> and agree to the processing of my submission.</span></label>
 </fieldset>
 <div ref={container} className="max-w-full overflow-hidden"/>
 {!siteKey&&<p className="text-sm">Online submission is not configured yet.</p>}
 {error&&<p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>}
 <button type="submit" disabled={busy||!token||!siteKey} className="w-full rounded-full bg-base_color px-5 py-3 font-semibold text-white shadow-sm hover:bg-lime-950 disabled:opacity-50">{busy?"Submitting…":({contact:"Send enquiry",order:"Request order",quotation:"Request quotation",callback:"Request callback",career:"Submit application"})[type]}</button>
 </form>;
}
