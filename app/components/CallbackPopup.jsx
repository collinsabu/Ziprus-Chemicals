"use client";
import {useEffect,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import WebsiteSubmissionForm from "./WebsiteSubmissionForm";
export default function CallbackPopup(){
 const [show,setShow]=useState(false);
 useEffect(()=>{try{if(localStorage.getItem("ziprus_callback_seen"))return;}catch{}const timer=setTimeout(()=>{setShow(true);try{localStorage.setItem("ziprus_callback_seen","true");}catch{}},25000);return ()=>clearTimeout(timer);},[]);
 return <AnimatePresence>{show&&<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] max-w-md rounded-xl bg-white p-4 shadow-2xl"><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold text-base_color">Request a callback</h2><button type="button" aria-label="Close callback form" onClick={()=>setShow(false)} className="px-3 py-1 text-xl">×</button></div><div className="max-h-[55vh] overflow-y-auto"><WebsiteSubmissionForm type="callback"/></div></motion.div>}</AnimatePresence>;
}
