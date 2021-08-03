import { Servicehead,Liststyle } from "./Serviceheader.style";
import Link from "next/link"
const Serviceheader = ()=>{
return (
  
   
  <Servicehead>
   
  <ul>
    <li>
  <Link href="/service"><span>Overview</span></Link>
   </li>
   <li>
  <Link href="/service/description"><span>Description</span></Link>
   </li>
   <li>
  <Link href="/service/seller"><span>Seller</span></Link>
   </li>
   <li>
  <Link href="/service/review"><span>Review</span></Link>
   </li>
</ul>

</Servicehead>
);
}
export default Serviceheader; 

