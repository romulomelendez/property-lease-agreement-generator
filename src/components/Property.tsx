import { useEffect, useState } from "react"

import { useFormContext } from "react-hook-form"
import { FiSearch } from "react-icons/fi"

import { AddressProps, AddressResponseApiProps } from "@/@types"

export const Property: React.FC = () => {

  const [userAddress, setUserAddress] = useState<AddressProps>()
  const [zipCodeToSearchAddress, setZipCodeToSearchAddress] = useState<string>()
  const [hasNumber, setHasNumber] = useState<boolean>(false)

  const { register, setValue } = useFormContext()

  useEffect(() => {

    const userAddressLocalStorage = getAddressOnLocalStorage("userAddress")

    const autoFillAddress = (field: string, value: string | undefined | null): void => setValue(field, value, { shouldTouch: true })

    if(userAddress) {

      // fill address fields automatic
      autoFillAddress("property.address.street", userAddress?.street)
      autoFillAddress("property.address.district", userAddress?.district)
      autoFillAddress("property.address.city", userAddress?.city)
      autoFillAddress("property.address.state", userAddress?.state)
      
      setAddressOnLocalStorage("userAddress", JSON.stringify(userAddress))
      return
    } else if(userAddressLocalStorage) {

      const { street, district, city, state }: AddressProps = JSON.parse(userAddressLocalStorage)

      // re-fill address fields automatic
      autoFillAddress("property.address.street", street)
      autoFillAddress("property.address.district", district)
      autoFillAddress("property.address.city", city)
      autoFillAddress("property.address.state", state)
      return
    }
    
  }, [setValue, userAddress])

  const getAddressOnLocalStorage = (key: string): string | null => localStorage.getItem(key)

  const setAddressOnLocalStorage = (key: string, value: string): void => localStorage.setItem(key, value)
  
  const getAddress = async (): Promise<AddressResponseApiProps> => {

    // const addressRespondeData: AddressResponseApiProps = await (
    //   await fetch(process.env.NEXT_PUBLIC_API_CEP_URL + `${zipCodeToSearchAddress}/json/`)
    // ).json()

    const fakeApiData: AddressResponseApiProps = {
      logradouro: "Ladeira Felipe Neri",
      bairro: "Saúde",
      localidade: "Rio de Janeiro",
      uf: "RJ"
    }

    return fakeApiData
  }

  const handleAddress = async (): Promise<void> => {

    // get user address from viacep api
    const { logradouro, bairro, localidade, uf } = await getAddress()

    //set user address
    setUserAddress({
      street: logradouro,
      district: bairro,
      city: localidade,
      state: uf
    })

    // Enable address number field
    setHasNumber(true)
  }

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
          {...register("property.address.zipCode", {
            onChange: e => setZipCodeToSearchAddress(e.target.value)
          })}
        />
        <button
          type="button"
          className="text-xl p-3 border border-blue-500 border-s-0"
          onClick={handleAddress}
        >
          <FiSearch />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <input
          type="text"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="Street"
          {...register("property.address.street")}
          disabled={!userAddress?.street ? true : false}
        />
        <input
          type="number"
          className="font-sans p-2 w-14 sm:w-20 h-max border border-blue-500 text-center text-2xl text-cyan-600 outline-none disabled:border-slate-300 [&::-webkit-inner-spin-button]:appearance-none"
          placeholder={hasNumber ? "Number": "---------------"}
          {...register("property.address.number")}
          disabled={!hasNumber}
        />
        <input
          type="checkbox"
          className="h-6 w-6 cursor-pointer"
          onChange={() => setHasNumber(!hasNumber)}
          checked={hasNumber}
        />
      </div>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          className="font-sans p-2 w-48 h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="District"
          {...register("property.address.district")}
          disabled={!userAddress?.district ? true : false}
        />
        <input
          type="text"
          className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="City"
          {...register("property.address.city")}
          disabled={!userAddress?.city ? true : false}
        />  
        <input
          type="text"
          className="font-sans p-2 h-max w-16 border border-blue-500 text-center text-2xl text-cyan-600 outline-none disabled:border-slate-300"
          placeholder="UF"
          {...register("property.address.state")}
          disabled={!userAddress?.state ? true : false}
        />
      </div>
      <input
        type="text"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none disabled:border-slate-300"
        placeholder="Complement"
        {...register("property.address.complement")}
        disabled={userAddress ? false : true}
      />
    </section>
  )
}
