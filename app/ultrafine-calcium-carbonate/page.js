import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/ultrafine-calcium-carbonate");
export const metadata=pageMetadata({title:product.name+" Supplier in Nigeria | Ziprus Chemicals",description:product.description+" Discuss bulk supply from Edo State, Nigeria.",path:product.href});
export default function Page(){return <MineralDetail product={product}/>;}
