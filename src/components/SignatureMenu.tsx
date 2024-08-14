import { useState } from "react"

import { TypeSignature } from "./TypeSignature"
import { DrawSignature } from "./DrawSignature"

export const SignatureMenu: React.FC = () => {

    const [signatureSelected, setSignatureSelected] = useState<string>("")

    return (
        <div>
            {
                signatureSelected === "draw" ?
                    <DrawSignature />
                : signatureSelected === "type" ?
                    <TypeSignature />
                : (
                    <section className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button
                          type="button"
                          className="bg-white border border-blue-800 hover:border-blue-400 text-blue-800 hover:text-blue-600 font-bold font-sans p-2 md:p-3 lg:p-4 text-lg md:text-md cursor-pointer"
                          onClick={() => setSignatureSelected("draw")}
                        >
                            Draw Signature
                        </button>

                        <button
                          type="button"
                          className="bg-white border border-blue-800 hover:border-blue-400 text-blue-800 hover:text-blue-600 font-bold font-sans p-2 md:p-3 lg:p-4 text-lg md:text-md cursor-pointer"
                          onClick={() => setSignatureSelected("type")}
                        >
                            Type Signature
                        </button>
                    </section>
                )
            }
        </div>
    )
}