import { useFormContext } from "react-hook-form"

export const Guarantor: React.FC = () => {

  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Guarantor Name"
        {...register("guarantor.name")}
      />
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Social Security Number"
        {...register("guarantor.socialSecurityNumber")}
      />
    </div>
  )
}