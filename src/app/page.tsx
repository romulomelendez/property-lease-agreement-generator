"use client"

import { ReactElement, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { BiSolidFilePdf } from "react-icons/bi"
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md"

import { RentalFormProps } from "@/@types"
import {
  PdfViewer,
  Locator,
  Property,
  Rental1,
  Rental2,
  Renter,
  Signature,
  WitnessAndGuarantor
} from "@/components"
import { RentalSchema } from "@/lib/Schemas"

const Home: React.FC = () => {

  const [forms, _] = useState<ReactElement[]>([
    <Locator key="locator-form" />,
    <Property key="property-form" />,
    <Renter key="renter-form" />,
    <Rental1 key="rental1-form" />,
    <Rental2 key="rental2-form" />,
    <WitnessAndGuarantor key="witnessAndGuarantor-form" />,
    <Signature key="signature-form" />
  ])
  const [formStep, setFormStep] = useState<number>(0)

  const next = (): void => setFormStep(formStep + 1)
  const previous = (): void => setFormStep(formStep - 1)
  const onSubmit: SubmitHandler<RentalFormProps> = (formData): void => console.log("DATA >>> ", formData)

  const methods = useForm<RentalFormProps>({
    resolver: zodResolver(RentalSchema)
  })

  return (
    <main className="flex flex-col md:flex-row bg-yellow-500">
      <section className="flex flex-col justify-center items-center gap-3 p-10 h-screen md:w-1/2">
        <span className="text-center font-bold text-blue-800 text-8xl">
          Lease Agreement Generator
        </span>
        <span className="text-center font-bold text-teal-700 text-3xl">
          Create your own custom lease agreement
        </span>
        <section className="w-full p-5">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col w-min-[365px] h-max gap-6 p-5 xl:p-10 border border-blue-500 bg-white shadow-lg rounded-xl"
            >
              {forms[formStep]}
              <div className="flex gap-2 w-full items-center justify-between">
                <button
                  type="button"
                  className={`rounded-full ${formStep === 0 ? "bg-slate-800 hover:bg-slate-700" : "bg-blue-800 hover:bg-blue-700"}  p-2 text-white text-2xl`}
                  onClick={previous}
                  disabled={formStep === 0 && true}
                >
                  <MdOutlineNavigateBefore />
                </button>

                {formStep !== forms.length - 1 ? (
                  <button
                    type="button"
                    className="rounded-full bg-blue-800 hover:bg-blue-700 p-2 text-white text-2xl"
                    onClick={next}
                  >
                    <MdOutlineNavigateNext />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex gap-1 items-center rounded-full bg-blue-800 hover:bg-blue-700 p-3 text-white text-3xl cursor-pointer"
                  >
                    <BiSolidFilePdf />
                    <span className="font-sans text-white text-2xl">
                      Review
                    </span>
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </section>
      </section>

      <section className="w-screen md:w-1/2">
        <PdfViewer />
      </section>
    </main>
  )
}

export default Home
