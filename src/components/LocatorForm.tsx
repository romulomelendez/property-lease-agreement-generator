import { useFormContext } from "react-hook-form"

export const Locator: React.FC = () => {

  const { register } = useFormContext()
  
  return (
    <div className="flex flex-col gap-4 w-full h-max">
      <span className="font-bold font-sans text-center text-3xl">
        LOCATOR
      </span>
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Name"
        {...register("locator.name")}
      />
      <section className="flex flex-col md:flex-row justify-evenly gap-4">
        <input
          type="number"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
          placeholder="Social Secutiry Number"
          {...register("locator.socialSecurityNumber")}
        />
        <input
          type="number"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
          placeholder="Identity Card Number"
          {...register("locator.identityCardNumber")}
        />
      </section>
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Property Address"
        {...register("property.address")}
      />
    </div>
  )
}
