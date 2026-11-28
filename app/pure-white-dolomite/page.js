import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/pure-white-dolomite");
export const metadata=pageMetadata({title:"Pure White Dolomite Supplier in Nigeria | Ziprus Chemicals",description:"Enquire about pure white dolomite for paint, ceramics and industrial fillers. Discuss whiteness, composition, sizing and bulk supply from Edo State.",path:product.href});
export default function Page(){return <MineralDetail product={product}/>;}
