import connectMongoDB from "../../libs/mongodb";
import Lead from "../../models/Lead";
import { NextResponse } from "next/server";
import { sendLeadEmail } from "./email";


export const dynamic = "force-dynamic";
export const revalidate = 0;



export async function GET() {

  try {

    await connectMongoDB();


    const leads = await Lead
      .find({})
      .sort({createdAt:-1})
      .exec();


    return NextResponse.json(
      leads,
      {status:200}
    );


  } catch(error){

    console.error(
      "Error fetching leads:",
      error
    );


    return NextResponse.json(
      {
        error:"Error fetching leads"
      },
      {
        status:500
      }
    );

  }

}




export async function POST(request){

  try {


    const data = await request.json();



    const {
      fullname,
      phone,
      email,
      company,
      industry,
      productInterest,
      message,
      pageVisited
    } = data;



    if(!fullname || !phone){

      return NextResponse.json(
        {
          error:"Name and phone are required"
        },
        {
          status:400
        }
      );

    }



    await connectMongoDB();



    const newLead = await Lead.create({

      fullname: fullname.trim(),

      phone: phone.trim(),

      email: email?.trim() || "",

      company: company?.trim() || "",

      industry: industry || "",

      productInterest:
        productInterest || "",

      message:
        message || "",

      pageVisited:
        pageVisited || "/",


      status:"New"

    });





    // SEND EMAIL NOTIFICATION

    try {

      await sendLeadEmail(newLead);

    }

    catch(emailError){

      console.error(
        "Lead email failed:",
        emailError
      );

    }





    return NextResponse.json(

      {
        message:"Lead created successfully",
        lead:newLead
      },

      {
        status:201
      }

    );



  }

  catch(error){


    console.error(
      "Error creating lead:",
      error
    );


    return NextResponse.json(

      {
        error:"Error creating lead"
      },

      {
        status:500
      }

    );


  }


}


export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Lead ID is required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return NextResponse.json(
        { message: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Lead deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Lead Error:", error);

    return NextResponse.json(
      { message: "Error deleting lead" },
      { status: 500 }
    );
  }
}