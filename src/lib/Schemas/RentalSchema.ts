import { z } from "zod"

export const RentalSchema = z.object({
    locator: z.object({
      name: z.string(),
      socialSecurityNumber: z.coerce.number(),
      identityCardNumber: z.coerce.number()
    }),
    renter: z.object({
      name: z.string(),
      socialSecurityNumber: z.coerce.number(),
      identityCardNumber: z.coerce.number()
    }),
    property: z.object({
      address: z.object({
        street: z.string(),
        number: z.coerce.number() || z.null(),
        zipCode: z.string() || z.coerce.number(),
        district: z.string(),
        city: z.string(),
        state: z.string(),
        complement: z.string() || z.null()
      })
    }),
    rental: z.object({
      startDate: z.string(),
      endDate: z.string(),
      daysRented: z.coerce.number() || z.null(),
      rentalAmount: z.coerce.number(),
      rentDueDate: z.coerce.number() || z.null()
    }),
    // witness: z.object({
    //   name: z.string(),
    //   socialSecurityNumber: z.coerce.number()
    // }) || z.null(),
    // guarantor: z.object({
    //   name: z.string()
    // }) || z.null(),
    // signature: z.string() || z.null()
})