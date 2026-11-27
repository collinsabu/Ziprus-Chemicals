import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/coated-calcium-carbonate");
export const metadata={title:"Coated Calcium Carbonate Supplier in Nigeria | Ziprus Chemicals",description:product.description,alternates:{canonical:product.href}};
export default function Page(){return <MineralDetail product={product}/>;}
