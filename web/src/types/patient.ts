import z from "zod"

const patientSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.string(),
  gender: z.number(),
  chestpain: z.number(),
  restingBP: z.number(),
  serumcholestrol: z.number(),
  fastingbloodsugar: z.number(),
  restingrelectro: z.number(),
  maxheartrate: z.number(),
  exerciseangia: z.number(),
  oldpeak: z.number(),
  slope: z.number(),
  noofmajorvessels: z.number(),
  target: z.number()
})

export type Patient = z.infer<typeof patientSchema>

export const patientFormSchema = z.object({
  name: z.string(),
  age: z.string(),
  gender: z.string(),
  chestpain: z.string(),
  restingBP: z.string(),
  serumcholestrol: z.string(),
  fastingbloodsugar: z.string(),
  restingrelectro: z.string(),
  maxheartrate: z.string(),
  exerciseangia: z.string(),
  oldpeak: z.string(),
  slope: z.string(),
  noofmajorvessels: z.string(),
})

export type PatientForm = z.infer<typeof patientFormSchema>
