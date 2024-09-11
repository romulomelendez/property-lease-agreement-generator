import { useFormContext } from "react-hook-form"

export const Witness: React.FC = () => {
  
  const { register } = useFormContext()

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Witness Name"
        {...register("witness.name")}
      />
      <input
        type="number"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="Social Security Number"
        {...register("witness.socialSecurityNumber")}
      />
    </div>
  )
}
