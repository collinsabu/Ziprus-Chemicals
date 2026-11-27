import {markets} from "../lib/markets";
import {industries} from "../lib/industries";
import {products} from "../lib/products";
export async function GET(){const paths=[...new Set(["","/about","/contact","/products","/industries","/markets",...markets.map(m=>"/markets/"+m.slug),...industries.map(i=>"/industries/"+i.slug),"/calcium-carbonate-dolomite","/faq","/career","/guarantee","/impact","/testimonial","/partnership","/term","/policy",...products.map(p=>p.href)])];return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(path=>"<url><loc>https://zipruschemicals.com"+path+"</loc></url>").join("")+"</urlset>",{headers:{"Content-Type":"application/xml"}});}
