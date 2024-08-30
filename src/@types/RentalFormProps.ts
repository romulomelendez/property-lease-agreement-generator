import { z } from "zod"

import { RentalSchema } from "@/lib/Schemas"

export type RentalFormProps = z.infer<typeof RentalSchema>