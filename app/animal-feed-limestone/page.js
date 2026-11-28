import {pageMetadata} from "../lib/seo";
import MineralDetail from "../components/MineralDetail";
import {products} from "../lib/products";
import banner from "./banner.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
const product=products.find(p=>p.href==="/animal-feed-limestone");
export const metadata=pageMetadata({title:"Animal Feed Limestone Supplier in Nigeria | Ziprus Chemicals",description:"Request feed grade limestone for poultry and livestock feed mills. Discuss calcium content, particle size, feed safety documentation and bulk quotations.",path:product.href,image:banner.src});
export default function Page(){return <MineralDetail product={product} banner={banner} gallery={[img1,img2,img3]}/>;}
