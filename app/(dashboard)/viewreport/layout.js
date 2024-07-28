
import ViewReportHeader from "../../components/ViewReportHeader";


export default async function layout( {children}) {

 
  return (
    <>
    <ViewReportHeader/>
    {children}
    </>
  )
}
