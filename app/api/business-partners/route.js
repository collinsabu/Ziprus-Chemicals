// app/api/business-partners/route.js
import connectMongoDB from "../../libs/mongodb";
import BusinessPartner from "../../models/BusinessPartner";



export async function POST(req) {
   try {
     await connectMongoDB();
 
     const body = await req.json();
     const { name, phoneNumber, category, description } = body;
 
     if (!name || !phoneNumber || !category) {
       return new Response(JSON.stringify({ message: "All required fields must be filled." }), {
         status: 400,
       });
     }
 
     const newPartner = new BusinessPartner({ name, phoneNumber, category, description });
     await newPartner.save();
 
     return new Response(JSON.stringify({ message: "Business partner added successfully!" }), {
       status: 201,
     });
   } catch (error) {
     return new Response(JSON.stringify({ message: "Failed to add business partner." }), {
       status: 500,
     });
   }
 }


 
 export async function GET(req) {
   try {
     await connectMongoDB();
 
     // Fetch all business partners
     const partners = (await BusinessPartner.find({})) || [];
 
     // Return the partners with a 200 status
     return new Response(JSON.stringify(partners), {
       status: 200,
       headers: { "Content-Type": "application/json" },
     });
   } catch (error) {
     // Log the error for debugging
     console.error("Error fetching business partners:", error);
 
     // Return a 500 error response
     return new Response(JSON.stringify({ message: "Failed to fetch data." }), {
       status: 500,
       headers: { "Content-Type": "application/json" },
     });
   }
 }
 

export async function DELETE(req) {
  try {
    await connectMongoDB();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required." }), {
        status: 400,
      });
    }

    await BusinessPartner.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Business partner deleted successfully." }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to delete data." }), {
      status: 500,
    });
  }
}

export async function PATCH(req) {
  try {
    await connectMongoDB();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const updates = await req.json();

    if (!id || !updates) {
      return new Response(JSON.stringify({ message: "ID and updates are required." }), {
        status: 400,
      });
    }

    const updatedPartner = await BusinessPartner.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedPartner) {
      return new Response(JSON.stringify({ message: "No data found with the given ID." }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedPartner), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to update data." }), {
      status: 500,
    });
  }
}
