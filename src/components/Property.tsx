import { useEffect, useState } from "react"

import { useFormContext } from "react-hook-form"
import { FiSearch } from "react-icons/fi"

import { AddressProps, AddressResponseApiProps } from "@/@types"
import { getOnLocalStorage, setOnLocalStorage } from "@/utils"

export const Property: React.FC = () => {

  const [userAddress, setUserAddress] = useState<AddressProps>()
  const [, setOptionalAddressNumber] = useState<number>()
  const [, setOptionalAddressComplement] = useState<string>()
  const [zipCodeToSearchAddress, setZipCodeToSearchAddress] = useState<string>()
  const [hasNumber, setHasNumber] = useState<boolean>(false)

  const { register, setValue } = useFormContext()

  useEffect(() => {

    const userAddressLocalStorage = getOnLocalStorage("userAddress")
    const optionalAddressNumberLocalStorage = getOnLocalStorage("addressNumber")
    const optionalAddressComplementLocalStorage = getOnLocalStorage("addressComplement")

    const autoFillAddress = (field: string, value: string | number | undefined): void => setValue(field, value)

    if(userAddress) {

      // fill address fields automatic
      autoFillAddress("property.address.street", userAddress?.street)
      autoFillAddress("property.address.district", userAddress?.district)
      autoFillAddress("property.address.city", userAddress?.city)
      autoFillAddress("property.address.state", userAddress?.state)
      
      setOnLocalStorage("userAddress", JSON.stringify(userAddress))
      return
    } else if(userAddressLocalStorage) {

      const { street, district, city, state, zipcode }: AddressProps = JSON.parse(userAddressLocalStorage)

      // set on state
      setUserAddress({
        zipcode,
        street,
        district,
        city,
        state
      })

      // re-fill address fields automatic from local storage
      autoFillAddress("property.address.zipCode", zipcode)
      autoFillAddress("property.address.street", street)
      autoFillAddress("property.address.district", district)
      autoFillAddress("property.address.city", city)
      autoFillAddress("property.address.state", state)

      if(optionalAddressNumberLocalStorage) {

        setHasNumber(true)
        setOptionalAddressNumber(+optionalAddressNumberLocalStorage)
        autoFillAddress("property.address.number", +optionalAddressNumberLocalStorage)
      }

      if(optionalAddressComplementLocalStorage) {

        setOptionalAddressComplement(optionalAddressComplementLocalStorage)
        autoFillAddress("property.address.complement", optionalAddressComplementLocalStorage)
      }
    }
  }, [setValue, userAddress])
  
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

    if(!zipCodeToSearchAddress)
      return

    // get user address from viacep api
    const { logradouro, bairro, localidade, uf } = await getAddress()

    //set user address
    setUserAddress({
      zipcode: +zipCodeToSearchAddress,
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
          {...register("property.address.number", {
            onChange: e => {
              setOnLocalStorage("addressNumber", e.target.value)
              return setOptionalAddressNumber(+e.target.value)
            }
          })}
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
        {...register("property.address.complement", {
          onChange: e => {
            setOnLocalStorage("addressComplement", e.target.value)
            setOptionalAddressComplement(e.target.value)
          }
        })}
        disabled={userAddress ? false : true}
      />
    </section>
  )
}
