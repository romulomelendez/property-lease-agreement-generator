import { useState, useEffect } from "react"

import { useFormContext } from "react-hook-form"

export const TypeSignature: React.FC = () => {

    const [signature, setSignature] = useState<string>("")
    const [_, setFont] = useState<string>("")
    const { register, watch } = useFormContext()
    
    useEffect(() => {
        const subscription = watch((signatureData) => setSignature(signatureData.signature))
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <section className="flex flex-col gap-1 p-1 w-full h-64">
            <input
              type="text"
              className="font-sans text-lg text-blue-800 mb-2 p-2 border-2 border-slate-400 outline-none"
              value={signature}
              placeholder="Type your Signature here"
              {...register("signature")}
            />
            <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className="font-sans text-left text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500 focus:ring focus:ring-green-300"
                  onClick={() => setFont("sans")}
                >
                    { signature }
                </button>
                <button
                  type="button"
                  className="font-serif text-left text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500 focus:ring focus:ring-green-300"
                  onClick={() => setFont("serif")}
                >
                    { signature }
                </button>
                <button
                  type="button"
                  className="font-mono text-left text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500 focus:ring focus:ring-green-300"
                  onClick={() => setFont("mono")}
                >
                    { signature }
                </button>
                <button
                  type="button"
                  className="font-normal text-left text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500 focus:ring focus:ring-green-300"
                  onClick={() => setFont("normal")}
                >
                    { signature }
                </button>
            </div>
        </section>
    )
}