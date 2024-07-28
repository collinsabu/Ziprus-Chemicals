
import LoadingPaymentHeader from "../../components/LoadingPaymentHeader";


export default async function layout( {children}) {

 
  return (
    <>
    <LoadingPaymentHeader/>
    {children}
    </>
  )
}
