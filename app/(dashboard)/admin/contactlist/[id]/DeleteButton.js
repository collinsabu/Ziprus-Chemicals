"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// icons & UI
import { TiDelete } from 'react-icons/ti'

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    setIsLoading(true)
    
    const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: 'DELETE'
    })
    const json = await res.json()

    if (json.error) {
      console.log(error)
      setIsLoading(false)
    }
    if (!json.error) {
      router.refresh()
      router.push('http://localhost:3000/admin/contactlist')
      console.log("deleted successfully")
    }
  }

  return (
    <button 
    className="text-white bg-base_color border-2 px-7 py-2 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 mt-7 "  
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading && (
        <>
          <TiDelete />
          Deleting....
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete className='inline mr-2 text-2xl' />
          Delete Contact
        </>
      )}
    </button>
  )
}

/* C:\Users\44786\Desktop\supaBase\supabase-practice\src\app\api\auth\callback\route.js */