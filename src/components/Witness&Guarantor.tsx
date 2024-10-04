import { Guarantor } from "./Guarantor"
import { Witness } from "./Witness"

export const WitnessAndGuarantor: React.FC = () => (
  <header className="flex flex-col gap-5">
    <span className="font-bold font-sans text-center text-xl lg:text-3xl">
      WITNESS & GUARANTOR(OPTIONAL)
    </span>
    <Witness />
    <Guarantor />
    <span className="font-bold font-sans text-center text-[0.688rem] md:text-md text-red-500">
      Note: It&apos;s necessary to give a down payment of 50% of the amount to
      complete the reservation. For more information, consult the owner.
    </span>
  </header>
)
