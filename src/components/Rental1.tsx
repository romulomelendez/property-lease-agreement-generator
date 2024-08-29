import { useFormContext } from "react-hook-form"

export const Rental1: React.FC = () => {

    const { register } = useFormContext()

    return (
        <section className="flex flex-col gap-8">
            <span className="font-bold font-sans text-center text-3xl">
                RENTAL 1/2
            </span>
            <div className="flex flex-col gap-4 mb-5">
                <div className="flex flex-col gap-1">
                    <span className="font-bold font-sans text-left text-xl text-blue-500">Start Date:</span>
                    <input
                      type="date"
                      className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                      {...register("rental.startDate")}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-bold font-sans text-left text-xl text-blue-500">End Date:</span>
                    <input
                      type="date"
                      className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                      {...register("rental.endDate")}
                    />
                </div>
            </div>
        </section>
    )
}