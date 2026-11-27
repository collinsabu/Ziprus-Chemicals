"use client";
import {useState} from "react";
export default function ProductMediaImage({image,fallback,className}){const [failed,F]=useState(false);if(failed&&!fallback)return <div className={className+" bg-emerald-50 p-5 text-slate-700"}>Product photograph temporarily unavailable</div>;return <img src={failed?fallback:"https://os.zipruschemicals.com/api/public/website-media?id="+image.id} alt={image.alt} className={className} onError={()=>F(true)} loading="lazy"/>}
