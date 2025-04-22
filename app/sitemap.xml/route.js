// app/sitemap.xml/route.js

export async function GET() {
   const baseUrl = 'https://www.zipruschemicals.com';
 
   const staticPages = [
     '',
     '/about',
     '/contact',
     '/animal-feed-limestone',
     '/calcium-carbonate',
     '/glass-grade-limestone',
     '/calcium-carbonate-dolomite',
     '/faq',
     '/career',
     '/guarantee',
     '/impact',
     '/testimonial',
     '/partnership',
     '/term',
   ];
 
   const body = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map(
         (path) => `
       <url>
         <loc>${baseUrl}${path}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>`
       )
       .join('')}
   </urlset>`;
 
   return new Response(body, {
     headers: {
       'Content-Type': 'application/xml',
     },
   });
 }
 