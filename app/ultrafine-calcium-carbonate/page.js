import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/ultrafine-calcium-carbonate");
export const metadata={title:"Ultrafine Calcium Carbonate Supplier in Nigeria | Ziprus Chemicals",description:product.description,alternates:{canonical:product.href}};
export default function Page(){return <MineralDetail product={product}/>;}
