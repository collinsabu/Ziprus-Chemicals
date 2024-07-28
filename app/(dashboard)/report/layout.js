
import ReportHeader from "../../components/ReportHeader";


export default async function layout( {children}) {

 
  return (
    <>
    <ReportHeader/>
    {children}
    </>
  )
}
