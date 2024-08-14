import { useRef, useState } from "react"

import SignatureCanvas from "react-signature-canvas"
import { FaSave, FaTrash } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export const DrawSignature: React.FC = () => {

    const [_, setDrawSignatureImg] = useState<string>("")

    const sigPad = useRef<any | undefined>({})

    const clearSignature = (): void => sigPad.current.clear()

    const saveSignature = (): void => {
        const signatureImage: string = sigPad.current.toDataURL()
        setDrawSignatureImg(signatureImage)
        toast.success("Signature Saved!")
    }

    return (
        <div className="flex flex-col gap-4">
            <SignatureCanvas
              penColor="blue"
              backgroundColor="#cecece"
              canvasProps={{width: 500, height: 200, className: "sigCanvas"}}
              ref={sigPad}
            />
            <section className="flex justify-around gap-4">
                <button
                  type="button"
                  className="flex items-center font-sans gap-2 rounded-lg bg-red-700 text-white p-2"
                  onClick={clearSignature}
                >
                    <FaTrash />
                    Clear
                </button>
                <button
                  type="button"
                  className="flex items-center font-sans gap-2 rounded-lg bg-green-700 text-white p-2"
                  onClick={saveSignature}
                >
                    <FaSave />
                    Save
                </button>
            </section>
            <ToastContainer position="top-center" />
        </div>
    )
}