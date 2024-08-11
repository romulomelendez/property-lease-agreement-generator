"use client"

import { ReactElement, useState } from "react"

import { PdfViewer, Locator } from "@/components"

const Home: React.FC = () => {

  const [forms, setForms] = useState<ReactElement[]>([
    <Locator key="locator-form" />,
  ])
  const [formSelected, setFormSelected] = useState<number>(0)

  const next = (): void => setFormSelected(formSelected + 1)
  const previous = (): void => setFormSelected(formSelected - 1)

  return (
    <main className="flex flex-col md:flex-row bg-yellow-500">
      <section className="flex flex-col justify-center items-center gap-4 p-10 h-screen md:w-1/2">
        <h1 className="text-center font-bold text-blue-800 text-8xl">Lease Agreement Generator</h1>
        <h6 className="text-center font-bold text-teal-700 text-3xl">Create your own custom lease agreement</h6>
        
        <section className="w-full p-5">
          <div className="flex flex-col w-min-[365px] h-max gap-6 p-5 xl:p-10 border border-blue-500 bg-white shadow-lg rounded-xl">
            { forms[formSelected] }
            <div className="flex gap-2 w-full items-center justify-between">
              <button
              type="button"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold p-4 text-3xl"
              onClick={previous}
              disabled={formSelected === 0 && true}
              >
                Previous
              </button>
              <button
              type="button"
              className="w-24 bg-blue-800 hover:bg-blue-700 text-white font-bold p-4 text-3xl"
              onClick={next}
              disabled={formSelected === 2 && true}
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