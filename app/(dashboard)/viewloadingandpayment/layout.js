import ViewLoadingandPaymentHeader from "../../components/ViewLoadingandPaymentHeader"



export default async function layout( {children}) {

 
  return (
    <>
    <ViewLoadingandPaymentHeader/>
    {children}
    </>
  )
}
