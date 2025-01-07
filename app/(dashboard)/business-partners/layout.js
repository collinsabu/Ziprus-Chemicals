import PhoneBookNav from "../../components/PhoneBookNav";




export default async function layout( {children}) {

 
  return (
    <>
   <PhoneBookNav/>
    {children}
    </>
  )
}