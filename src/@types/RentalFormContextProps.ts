import { RentalFormProps } from "./RentalFormProps"

export type RentalFormContextProps = {
    rentalFormData: RentalFormProps,
    setRentalFormData: (newRentalFormData: RentalFormProps) => void
}