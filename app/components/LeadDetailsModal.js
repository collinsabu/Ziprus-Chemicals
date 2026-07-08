"use client";

import { motion, AnimatePresence } from "framer-motion";


export default function LeadDetailsModal({
  lead,
  onClose,
}) {


  return (

    <AnimatePresence>


      <motion.div

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        exit={{
          opacity:0
        }}

        className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
        px-4
        "

      >



        <motion.div

          initial={{
            scale:0.9,
            opacity:0,
            y:30
          }}

          animate={{
            scale:1,
            opacity:1,
            y:0
          }}

          exit={{
            scale:0.9,
            opacity:0,
            y:30
          }}

          transition={{
            duration:0.25
          }}

          className="
          bg-white
          w-full
          max-w-xl
          rounded-2xl
          shadow-2xl
          overflow-hidden
          "

        >




          {/* HEADER */}

          <div

          className="
          bg-base_color
          text-white
          px-6
          py-4
          flex
          justify-between
          items-center
          "

          >

            <div>

              <h2
              className="
              text-xl
              font-bold
              "
              >

                Customer Enquiry

              </h2>


              <p
              className="
              text-sm
              opacity-80
              "
              >

                {lead.fullname}

              </p>


            </div>



            <button

            onClick={onClose}

            className="
            text-white
            text-2xl
            hover:text-red-300
            "

            >

              ×

            </button>


          </div>





          {/* BODY */}


          <div

          className="
          p-6
          space-y-4
          text-gray-700
          "

          >



            <div>

              <p
              className="
              text-sm
              text-gray-500
              "
              >
                Full Name
              </p>

              <p
              className="
              font-semibold
              "
              >

                {lead.fullname}

              </p>

            </div>





            <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            "
            >


              <div>

                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-medium">
                  {lead.phone}
                </p>

              </div>




              <div>

                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium break-all">
                  {lead.email}
                </p>

              </div>


            </div>







            <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            "
            >


              <div>

                <p className="text-sm text-gray-500">
                  Company
                </p>

                <p className="font-medium">
                  {lead.company || "-"}
                </p>

              </div>




              <div>

                <p className="text-sm text-gray-500">
                  Industry
                </p>

                <p className="font-medium">
                  {lead.industry || "-"}
                </p>

              </div>


            </div>







            <div>

              <p className="text-sm text-gray-500">
                Product Interest
              </p>


              <p
              className="
              font-semibold
              text-base_color
              "
              >

                {lead.productInterest || "-"}

              </p>


            </div>







            <div>


              <p className="text-sm text-gray-500">
                Message
              </p>


              <div

              className="
              bg-gray-100
              rounded-lg
              p-4
              mt-1
              text-sm
              leading-relaxed
              "

              >

                {lead.message || "No message provided"}

              </div>


            </div>







            <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            "
            >


              <div>

                <p className="text-sm text-gray-500">
                  Page Visited
                </p>


                <p className="font-medium">
                  {lead.pageVisited || "-"}
                </p>

              </div>





              <div>

                <p className="text-sm text-gray-500">
                  Submitted Date
                </p>


                <p className="font-medium">

                  {new Date(
                    lead.createdAt
                  ).toLocaleString()}

                </p>


              </div>


            </div>




          </div>







          {/* FOOTER */}

          <div

          className="
          px-6
          py-4
          border-t
          flex
          justify-end
          "

          >

            <button

            onClick={onClose}

            className="
            bg-base_color
            hover:opacity-90
            text-white
            px-5
            py-2
            rounded-lg
            "

            >

              Close

            </button>


          </div>




        </motion.div>


      </motion.div>



    </AnimatePresence>

  );

}