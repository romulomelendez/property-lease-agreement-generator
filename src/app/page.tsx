"use client"

import { ReactElement, useState } from "react"

import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { BiSolidFilePdf } from "react-icons/bi"
import { useForm, SubmitHandler } from "react-hook-form"

import { Locator, PdfViewer, Rental1, Rental2, Renter, WitnessAndGuarantor, Signature } from "@/components"

const Home: React.FC = () => {

  const [forms, _] = useState<ReactElement[]>([
    <Locator key="locator-form" />,
    <Renter key="renter-form" />,
    <Rental1 key="rental1-form" />,
    <Rental2 key="rental2-form" />,
    <WitnessAndGuarantor key="witnessAndGuarantor-form" />,
    <Signature key="signature-form" />,
  ])
  const [formStep, setFormStep] = useState<number>(0)
  // const [formData, setFormData] = useState<FormProps>({})

  const next = (): void => setFormStep(formStep + 1)
  const previous = (): void => setFormStep(formStep - 1)

  return (
    <main className="flex flex-col md:flex-row bg-yellow-500">
      <section className="flex flex-col justify-center items-center gap-3 p-10 h-screen md:w-1/2">
        <span className="text-center font-bold text-blue-800 text-8xl">Lease Agreement Generator</span>
        <span className="text-center font-bold text-teal-700 text-3xl">Create your own custom lease agreement</span>
        
        <section className="w-full p-5">
          <form className="flex flex-col w-min-[365px] h-max gap-6 p-5 xl:p-10 border border-blue-500 bg-white shadow-lg rounded-xl">
            { forms[formStep] }
            <div className="flex gap-2 w-full items-center justify-between">
              <button
               type="button"
               className="rounded-full bg-blue-800 hover:bg-blue-700 p-2 text-white text-2xl"
               onClick={previous}
               disabled={formStep === 0 && true}
              >
                <MdOutlineNavigateBefore />
              </button>

              {
                formStep !== (forms.length - 1) ? (
                  <button
                  type="button"
                  className="rounded-full bg-blue-800 hover:bg-blue-700 p-2 text-white"
                  onClick={next}
                  >
                    <MdOutlineNavigateNext />
                  </button>
                ) : (
                  <button
                   type="button"
                   className="flex gap-1 items-center rounded-full bg-blue-800 hover:bg-blue-700 p-3 text-white text-3xl"
                  >
                    <BiSolidFilePdf />
                    <span className="font-sans text-white text-2xl">
                      Review
                    </span>
                  </button>
                )
              }
            </div>
          </form>
        </section>
      </section>
      
      <section className="w-screen md:w-1/2">
        <PdfViewer />
      </section>
    </main>
  )
}

export default Home