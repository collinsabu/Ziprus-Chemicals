import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/kaolin");
export const metadata=pageMetadata({title:"Kaolin Clay Supplier in Nigeria | Ziprus Chemicals",description:"Request industrial kaolin for paint and ceramic manufacturing. Discuss brightness, mineralogy, particle size and bulk supply with Ziprus Chemicals.",path:product.href});
export default function Page(){return <MineralDetail product={product}/>;}
