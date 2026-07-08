"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CallbackPopup() {

  const [show, setShow] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

    fullname: "",
    phone: "",
    email: "",
    company: "",
    productInterest: "",
    message: "",

  });



  // SHOW POPUP AFTER 25 SECONDS
  useEffect(() => {


    const alreadyShown =
      localStorage.getItem(
        "ziprus_callback_seen"
      );


    if (alreadyShown) return;



    const timer = setTimeout(() => {


      setShow(true);


      localStorage.setItem(
        "ziprus_callback_seen",
        "true"
      );


    }, 25000);



    return () => clearTimeout(timer);


  }, []);





  const handleChange = (e) => {


    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });


  };





  const handleSubmit = async (e) => {


    e.preventDefault();


    setLoading(true);



    try {


      const res = await fetch(
        "/api/leads",
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },


          body: JSON.stringify({

            ...formData,

            pageVisited:
              window.location.pathname,

          }),


        }
      );



      if (res.ok) {

        setSubmitted(true);

      }


    } catch (error) {


      console.error(
        "Lead submission error:",
        error
      );


    }



    setLoading(false);


  };





  return (

    <AnimatePresence>


      {show && (


        <motion.div


          initial={{

            opacity: 0,

            x: -120,

          }}


          animate={{

            opacity: 1,

            x: 0,

          }}


          exit={{

            opacity: 0,

            x: -120,

          }}


          transition={{

            duration: 0.5,

            ease: "easeOut",

          }}



          className="
          fixed
          z-50
          left-5
          bottom-5
          w-[360px]
          max-w-[calc(100%-2rem)]
          sm:max-w-[360px]
          "


        >



          <motion.div


            animate={{

              boxShadow:[

                "0 10px 30px rgba(0,0,0,.15)",

                "0 20px 45px rgba(0,0,0,.25)",

                "0 10px 30px rgba(0,0,0,.15)"

              ]

            }}


            transition={{

              duration:3,

              repeat:Infinity,

            }}



            className="
            bg-white
            rounded-3xl
            overflow-hidden
            border
            shadow-xl
            "


          >





            {/* HEADER */}

            <div

              className="
              bg-base_color
              text-white
              p-5
              "

            >



              <div className="flex justify-between items-start">


                <div>



                  <div className="
                  flex
                  items-center
                  gap-2
                  ">


                    <span className="
                    w-3
                    h-3
                    bg-green-400
                    rounded-full
                    animate-pulse
                    "></span>


                    <span className="
                    text-xs
                    ">

                    Technical Support Available

                    </span>


                  </div>





                  <h2 className="
                  text-lg
                  font-bold
                  mt-2
                  ">


                    Need Help Choosing Materials?


                  </h2>



                </div>





                <button

                  onClick={() => setShow(false)}

                  className="
                  text-xl
                  hover:text-red-300
                  "

                >

                  ×

                </button>



              </div>




              <p className="
              text-sm
              text-gray-200
              mt-3
              ">

                Our technical team can help you
                select the right mineral for your
                industrial application.

              </p>



            </div>







            {submitted ? (



              <div className="
              p-7
              text-center
              ">


                <div className="
                text-5xl
                mb-3
                ">

                ✅

                </div>




                <h3 className="
                text-xl
                font-bold
                text-gray-800
                ">

                  Thank You!

                </h3>




                <p className="
                text-gray-600
                text-sm
                mt-3
                ">

                  One of our technical sales
                  representatives will contact you shortly.

                </p>



                <p className="
                mt-5
                font-semibold
                text-gray-800
                ">


                  For urgent enquiries:

                  <br />

                  📞 07085544340


                </p>


              </div>



            ) : (





              <form

                onSubmit={handleSubmit}

                className="
                p-5
                space-y-3
                "


              >




                <input

                  required

                  name="fullname"

                  placeholder="Full Name"

                  onChange={handleChange}

                  className="
                  inputStyle
                  "

                />





                <input

                  required

                  name="phone"

                  placeholder="Phone Number"

                  onChange={handleChange}

                  className="
                  inputStyle
                  "

                />





                <div className="
                grid
                grid-cols-2
                gap-2
                ">


                  <input

                    name="company"

                    placeholder="Company"

                    onChange={handleChange}

                    className="
                    inputStyle
                    "

                  />





                  <select

                    name="productInterest"

                    onChange={handleChange}

                    className="
                    inputStyle
                    "

                  >

                    <option value="">
                      Product
                    </option>


                    <option>
                      Limestone
                    </option>


                    <option>
                      Calcium Carbonate
                    </option>


                    <option>
                      Dolomite
                    </option>


                    <option>
                      Kaolin
                    </option>


                  </select>



                </div>





                <input

                  name="email"

                  placeholder="Email"

                  onChange={handleChange}

                  className="
                  inputStyle
                  "

                />





                <textarea

                  name="message"

                  placeholder="Tell us what you need"

                  rows="2"

                  onChange={handleChange}

                  className="
                  inputStyle
                  "

                />







                <button

                  disabled={loading}

                  className="
                  w-full
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  "

                >


                  {loading

                    ? "Sending..."

                    : "Request A Callback"

                  }


                </button>







                <div className="
                text-xs
                text-center
                text-gray-500
                ">


                  ✓ Free consultation

                  <br />

                  ✓ Technical guidance

                  <br />

                  ✓ Fast response


                </div>



              </form>



            )}



          </motion.div>



        </motion.div>



      )}



    </AnimatePresence>


  );

}