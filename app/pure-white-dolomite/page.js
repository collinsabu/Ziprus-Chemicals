import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/pure-white-dolomite");
export const metadata={title:"Pure White Dolomite Supplier in Nigeria | Ziprus Chemicals",description:product.description,alternates:{canonical:product.href}};
export default function Page(){return <MineralDetail product={product}/>;}
