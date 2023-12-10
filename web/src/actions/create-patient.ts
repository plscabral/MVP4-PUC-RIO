"use server"

// next
import { revalidateTag } from 'next/cache'

// types
import { PatientForm } from "@/types/patient"

export async function createPatient(data: PatientForm) {
  const formData = new FormData()
  formData.append('idade', data.idade)
  formData.append('leucocitos', data.leucocitos)
  formData.append('basofilos', data.basofilos)
  formData.append('creatinina', data.creatinina)
  formData.append('proteina_c', data.proteina_c)
  formData.append('hemoglobina', data.hemoglobina)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paciente`, {
    method: 'POST',
    body: formData
  })

  revalidateTag('patients')

  return res.status
}
