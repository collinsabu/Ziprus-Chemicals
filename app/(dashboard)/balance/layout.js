
import BalanceHeader from "../../components/BalanceHeader";


export default async function layout( {children}) {

 
  return (
    <>
    <BalanceHeader/>
    {children}
    </>
  )
}
