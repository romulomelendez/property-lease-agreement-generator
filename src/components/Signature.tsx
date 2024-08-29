import { TypeSignature } from "./TypeSignature"

export const Signature: React.FC = () => (
    <div className="flex flex-col gap-8">
        <span className="font-bold font-sans text-center text-2xl md:text-xl lg:text-3xl">
            SIGNATURE(Optional)
        </span>
        <TypeSignature />
    </div>
)