import { useState } from "react"

import { Witness } from "./Witness"
import { Guarantor } from "./Guarantor"

export const WitnessAndGuarantor: React.FC = () => {
    const [wantWitness, setWantWitness] = useState<boolean>(false)
    const [wantGuarantor, setWantGuarantor] = useState<boolean>(false)

    return (
        <div className="flex flex-col gap-8">
            <span className="font-bold font-sans text-center text-xl lg:text-3xl">
                WITNESS & GUARANTOR(OPTIONAL)
            </span>
            <div className="flex flex-col gap-4">
                {
                    wantWitness === false ?
                        <button type="button" className="bg-blue-800 hover:bg-blue-700 text-white font-bold font-sans p-4 text-lg md:text-xl" onClick={() => setWantWitness(true)}>Add Witness</button>
                    : <Witness />
                }

                {
                    wantGuarantor === false ?
                        <button type="button" className="bg-blue-800 hover:bg-blue-700 text-white font-bold font-sans p-4 text-lg md:text-xl" onClick={() => setWantGuarantor(true)}>Add Guarantor</button>
                    : <Guarantor />
                }
            </div>

            <span
              className="font-bold font-sans text-center text-sm md:text-md text-red-500">
                Note: It&apos;s necessary to give a down payment of 50% of the amount to complete the reservation. For more information, consult the owner. 
            </span>
        </div>
    )
}