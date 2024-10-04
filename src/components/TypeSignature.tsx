import { useState } from "react"

export const TypeSignature: React.FC = () => {
  const [signature, setSignature] = useState<string>("")
  const [_, setFont] = useState<string>("sans")

  return (
    <section className="flex flex-col gap-2">
      <input
        type="text"
        className="font-sans text-3xl text-blue-500 mb-2 p-2 border-b-2 border-blue-500 outline-none"
        placeholder="Type your Signature here"
        onChange={e => setSignature(e.target.value)}
      />
      {
        signature && (
          <>
            <button
              type="button"
              className="font-vibes text-3xl text-blue-500 cursor-pointer h-max p-2 border border-slate-300 focus:ring focus:ring-green-300 text-nowrap overflow-x-scroll no-scrollbar"
              onClick={() => setFont("vibes")}

            >
              {signature}
            </button>
            <button
              type="button"
              className="font-dancing text-3xl text-blue-500 cursor-pointer h-max p-2 border border-slate-300 focus:ring focus:ring-green-300 text-nowrap overflow-x-scroll no-scrollbar"
              onClick={() => setFont("dancing")}
            >
              {signature}
            </button>
            <button
              type="button"
              className="font-allura text-3xl text-blue-500 cursor-pointer h-max p-2 border border-slate-300 focus:ring focus:ring-green-300 text-nowrap overflow-x-scroll no-scrollbar"
              onClick={() => setFont("allura")}
            >
              {signature}
            </button>
          </>
        )
      }
    </section>
  )
}
