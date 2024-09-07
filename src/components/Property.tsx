import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { FiSearch } from "react-icons/fi"

import { AddressProps } from "@/@types"

export const Property: React.FC = () => {

  const [address, setAddress] = useState<AddressProps>()
  const [hasNumber, setHasNumber] = useState<boolean>(true)

  const { register, watch, setValue } = useFormContext()

  const fieldsWatched = watch([
    "property.address.zipCode",
    "property.address.number",
    "property.address.complement"
  ])

  const getZipCode = async (): Promise<void> => {

    const addressRespondeData = await (await fetch(process.env.NEXT_PUBLIC_API_CEP_URL + fieldsWatched[0] + "/json/")).json()
    
    setAddress({
      zipCode: addressRespondeData.cep,
      street: addressRespondeData.logradouro,
      city: addressRespondeData.localidade,
      state: addressRespondeData.uf
    })
  }

  useEffect(() => {

    const handleAddress = (field: string, value: string | undefined): void => setValue(field, value)
    
    handleAddress("property.address.street", address?.street)
    handleAddress("property.address.city", address?.city)
    handleAddress("property.address.state", address?.state)
  }, [address, setValue])

  return (
    <section className="flex flex-col gap-4 w-full h-max">
      <span className="font-bold font-sans text-center text-3xl">
        PROPERTY
      </span>
      <div className="flex">
        <input
          type="number"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="Zip Code"
          {...register("property.address.zipCode")}
        />
        <button
          type="button"
          className="text-xl p-3 border border-blue-500 border-s-0"
          onClick={getZipCode}
        >
          <FiSearch />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <input
          type="text"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="Address"
          {...register("property.address.street")}
          disabled={!address?.street ? true : false}
        />
        <input
          type="number"
          className="font-sans p-2 w-14 sm:w-20 h-max border border-blue-500 text-center text-2xl text-cyan-600 outline-none disabled:border-slate-300 [&::-webkit-inner-spin-button]:appearance-none"
          placeholder={!hasNumber ? "Number": "---------------"}
          {...register("property.address.number")}
          disabled={hasNumber}
        />
        <input
          type="checkbox"
          className="h-6 w-6 cursor-pointer"
          onChange={() => setHasNumber(!hasNumber)}
          disabled={address?.zipCode ? false : true}
        />
      </div>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="City"
          {...register("property.address.city")}
          disabled={!address?.city ? true : false}
        />
        <input
          type="text"
          className="font-sans p-2 h-max w-16 border border-blue-500 text-center text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="UF"
          {...register("property.address.state")}
          disabled={!address?.state ? true : false}
        />
      </div>
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
        placeholder="Complement"
        {...register("property.address.complement")}
        disabled={!address ? true : false}
      />
    </section>
  )
}
