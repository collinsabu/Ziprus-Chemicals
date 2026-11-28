import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
import banner from "./banner.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
const product=products.find(p=>p.href==="/calcium-carbonate");
export const metadata=pageMetadata({title:"Calcium Carbonate Powder Supplier in Nigeria | Ziprus Chemicals",description:"Source industrial calcium carbonate powder for paint, plastics and adhesives. Discuss grade, particle size and bulk supply with Ziprus Chemicals in Edo State.",path:product.href,image:banner.src});
export default function Page(){return <MineralDetail product={product} banner={banner} gallery={[img1,img2,img3]}/>;}
