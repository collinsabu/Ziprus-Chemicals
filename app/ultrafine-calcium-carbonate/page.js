import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
const product=products.find(p=>p.href==="/ultrafine-calcium-carbonate");
export const metadata=pageMetadata({title:"Ultrafine Calcium Carbonate Supplier in Nigeria | Ziprus Chemicals",description:"Explore ultrafine calcium carbonate for fine coatings and polymer compounds. Discuss particle size, dispersion and bulk quotations with Ziprus Chemicals.",path:product.href});
export default function Page(){return <MineralDetail product={product}/>;}
