
import AdminHeader from "../../components/AdminHeader";


export default async function layout( {children}) {

 
  return (
    <>
    <AdminHeader/>
    {children}
    </>
  )
}
