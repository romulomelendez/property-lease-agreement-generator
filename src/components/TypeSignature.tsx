import { useState } from "react"

export const TypeSignature: React.FC = () => {

    const [signature, setSignature] = useState<string>("")

    return (
        <section className="flex flex-col gap-1 p-1 w-full h-64">
            <input
              type="text"
              className="font-sans text-lg text-blue-800 mb-2 p-2 border-2 border-slate-400 outline-none"
              value={signature}
              onChange={e => setSignature(e.target.value)}
              placeholder="Type your Signature here"
            />
            <div className="flex flex-col gap-2">
                <span className="font-sans text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500">{ signature }</span>
                <span className="font-serif text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500">{ signature }</span>
                <span className="font-mono text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500">{ signature }</span>
                <span className="font-normal text-md text-blue-500 cursor-pointer h-10 p-2 border border-blue-500">{ signature }</span>
            </div>
        </section>
    )
}