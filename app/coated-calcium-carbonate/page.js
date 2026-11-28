import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/coated-calcium-carbonate");
export const metadata=pageMetadata({title:"Coated Calcium Carbonate for Plastics in Nigeria | Ziprus Chemicals",description:"Request surface-treated calcium carbonate for PVC, masterbatch and polymer formulations. Confirm coating requirements and bulk supply with Ziprus Chemicals.",path:product.href});
export default function Page(){return <MineralDetail product={product}/>;}
