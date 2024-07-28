import ElearningNav from "../../components/ElearningNav";




export default async function layout( {children}) {

 
  return (
    <>
   <ElearningNav/>
    {children}
    </>
  )
}
