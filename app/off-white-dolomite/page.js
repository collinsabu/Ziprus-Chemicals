import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/off-white-dolomite");
export const metadata=pageMetadata({title:"Off-White Dolomite Supplier in Nigeria | Ziprus Chemicals",description:"Explore off-white dolomite for construction materials, ceramics and industrial fillers. Confirm colour tolerance, composition and bulk supply requirements.",path:product.href});
export default function Page(){return <MineralDetail product={product}/>;}
