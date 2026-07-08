import LeadList from "../../../components/LeadList";


async function getLeads() {

  try {

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://www.zipruschemicals.com";


    const res = await fetch(
      `${baseUrl}/api/leads`,
      {
        cache:"no-store",
      }
    );


    console.log(
      "LEADS API STATUS:",
      res.status
    );


    const data = await res.json();


    console.log(
      "LEADS DATA:",
      data
    );


    if(!res.ok){

      throw new Error(
        "Failed to fetch leads"
      );

    }


    return data;


  } catch(error){

    console.error(
      "Error fetching leads:",
      error
    );


    return [];

  }

}





export default async function LeadsPage() {


  const leads = await getLeads();



  return (

    <main
      className="
      bg-base_two
      min-h-screen
      py-10
      px-4
      sm:px-10
      pt-40
      "
    >


      <h1
        className="
        text-3xl
        font-bold
        text-center
        mb-10
        text-base_text
        "
      >

        Website Leads

      </h1>



      <LeadList leads={leads}/>


    </main>

  );

}