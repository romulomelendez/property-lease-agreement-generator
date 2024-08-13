"use client"

import { ReactElement, useState } from "react"

import { PdfViewer, Locator, Renter, Rental1, Rental2 } from "@/components"

const Home: React.FC = () => {

  const [forms, _] = useState<ReactElement[]>([
    <Locator key="locator-form" />,
    <Renter key="renter-form" />,
    <Rental1 key="rental1-form" />,
    <Rental2 key="rental2-form" />,
  ])
  const [formStep, setFormStep] = useState<number>(0)

  const next = (): void => setFormStep(formStep + 1)
  const previous = (): void => setFormStep(formStep - 1)

  return (
    <main className="flex flex-col md:flex-row bg-yellow-500">
      <section className="flex flex-col justify-center items-center gap-3 p-10 h-screen md:w-1/2">
        <h1 className="text-center font-bold text-blue-800 text-8xl">Lease Agreement Generator</h1>
        <h6 className="text-center font-bold text-teal-700 text-3xl">Create your own custom lease agreement</h6>
        
        <section className="w-full p-5">
          <div className="flex flex-col w-min-[365px] h-max gap-6 p-5 xl:p-10 border border-blue-500 bg-white shadow-lg rounded-xl">
            { forms[formStep] }
            <div className="flex gap-2 w-full items-center justify-between">
              <button
              type="button"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold font-sans p-4 text-xl"
              onClick={previous}
              disabled={formStep === 0 && true}
              >
                Previous
              </button>
              <button
              type="button"
              className="w-24 bg-blue-800 hover:bg-blue-700 text-white font-bold font-sans p-4 text-xl"
              onClick={next}
              disabled={formStep === (forms.length - 1) && true}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </section>
      
      <section className="w-screen md:w-1/2">
        <PdfViewer />
      </section>
    </main>
  )
}

export default Home