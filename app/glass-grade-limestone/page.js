import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
import banner from "./banner.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
const product=products.find(p=>p.href==="/glass-grade-limestone");
export const metadata={title:product.name+" Supplier in Nigeria | Ziprus Chemicals",description:product.description+" Request bulk supply information from Ziprus Chemicals in Edo State.",alternates:{canonical:product.href},openGraph:{title:product.name+" | Ziprus Chemicals",description:product.description,url:product.href}};
export default function Page(){return <MineralDetail product={product} banner={banner} gallery={[img1,img2,img3]}/>;}
