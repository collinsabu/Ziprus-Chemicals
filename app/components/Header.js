"use client";
import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {HiOutlineMenu,HiChevronDown} from "react-icons/hi";
import {IoClose} from "react-icons/io5";
import logo from "./logo_white.png";
const products=[["Calcium carbonate","/calcium-carbonate"],["Superfine calcium carbonate","/super-fine-calcium"],["Dolomite","/calcium-carbonate-dolomite"],["Animal feed limestone","/animal-feed-limestone"],["Glass grade limestone","/glass-grade-limestone"],["Other mineral grades","/quote"]];
const links=[["Home","/"],["About us","/about"],["FAQ","/faq"],["Contact","/contact"]];
export default function Header(){
 const path=usePathname(),[mobile,setMobile]=useState(false),[expanded,setExpanded]=useState(false);
 const header=useRef(null),toggle=useRef(null),productToggle=useRef(null);
 const close=()=>{setMobile(false);setExpanded(false);};
 useEffect(()=>{const outside=e=>{if(!header.current?.contains(e.target))close();};const key=e=>{if(e.key==="Escape"){if(mobile)toggle.current?.focus();else if(expanded)productToggle.current?.focus();close();}};document.addEventListener("pointerdown",outside);document.addEventListener("keydown",key);return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",key);};},[mobile,expanded]);
 const navLink=([label,href])=><Link key={href} href={href} onClick={close} aria-current={path===href?"page":undefined} className={path===href?"font-semibold text-base_text":"text-white hover:text-base_text"}>{label}</Link>;
 return <header ref={header} className="fixed inset-x-0 top-0 z-[60] shadow-md">
 <div className="h-10 bg-base_two text-white"><div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 text-xs sm:px-6 sm:text-sm"><a href="tel:+2347055552429">+234 705 555 2429</a><a className="hidden sm:block" href="mailto:info@zipruschemicals.com">info@zipruschemicals.com</a><a href="https://blog.zipruschemicals.com/">News &amp; insights</a></div></div>
 <div className="bg-base_color"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6">
 <Link href="/" onClick={close} aria-label="Ziprus Chemicals home"><Image src={logo} alt="Ziprus Chemicals" width={150} priority/></Link>
 <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
 {navLink(links[0])}
 <div className="relative"><button ref={productToggle} type="button" aria-expanded={expanded} aria-controls="product-navigation" onClick={()=>setExpanded(v=>!v)} className="flex items-center gap-1 text-white hover:text-base_text">Products <HiChevronDown/></button>
 {expanded&&<div id="product-navigation" className="absolute left-0 top-full mt-4 w-72 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5">{products.map(([label,href])=><Link key={href} href={href} onClick={close} className="block rounded-lg px-4 py-3 text-sm font-medium text-base_color hover:bg-emerald-50">{label}</Link>)}</div>}</div>
 {links.slice(1).map(navLink)}
 </nav>
 <Link href="/#order-form" onClick={close} className="hidden rounded-lg bg-base_text px-5 py-3 text-sm font-bold text-base_color lg:block">Request a quotation</Link>
 <button ref={toggle} type="button" aria-label={mobile?"Close navigation":"Open navigation"} aria-expanded={mobile} aria-controls="mobile-navigation" onClick={()=>{setMobile(v=>!v);setExpanded(false);}} className="p-2 text-3xl text-white lg:hidden">{mobile?<IoClose/>:<HiOutlineMenu/>}</button>
 </div></div>
 {mobile&&<nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-120px)] overflow-y-auto bg-base_color px-6 pb-6 pt-2 lg:hidden"><div className="flex flex-col gap-4">{links.map(navLink)}<p className="mt-2 text-xs font-bold uppercase tracking-widest text-base_text">Products</p>{products.map(navLink)}<Link href="/#order-form" onClick={close} className="mt-3 rounded-lg bg-base_text p-3 text-center font-bold text-base_color">Request a quotation</Link></div></nav>}
 </header>;
}
