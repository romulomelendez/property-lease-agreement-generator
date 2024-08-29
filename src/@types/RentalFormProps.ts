export type RentalFormProps = {
    locator: {
        name: string,
        socialSecurityNumber: number,
        identityCardNumber: number,
    },
    renter: {
        name: string,
        socialSecurityNumber: number,
        identityCardNumber: number,
    },
    property: {
        address: string,
    },
    rental: {
        startDate: string | Date,
        endDate: string | Date,
        daysRented: number | null,
        rentalAmount: number,
        rentDueDate: number | null,
    },
    witness: {
        name: string | null,
        socialSecurityNumber: number,
    },
    guarantor: {
        name: string | null,
    },
    signature: {
        firm: string | null,
        type: string | null,
    }
}