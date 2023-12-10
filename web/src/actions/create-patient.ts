"use server"

// next
import { revalidateTag } from 'next/cache'

// types
import { PatientForm } from "@/types/patient"

export async function createPatient(data: PatientForm) {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('age', data.age)
  formData.append('gender', data.gender)
  formData.append('chestpain', data.chestpain)
  formData.append('restingBP', data.restingBP)
  formData.append('serumcholestrol', data.serumcholestrol)
  formData.append('fastingbloodsugar', data.fastingbloodsugar)
  formData.append('restingrelectro', data.restingrelectro)
  formData.append('maxheartrate', data.maxheartrate)
  formData.append('exerciseangia', data.exerciseangia)
  formData.append('oldpeak', data.oldpeak)
  formData.append('slope', data.slope)
  formData.append('noofmajorvessels', data.noofmajorvessels)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paciente`, {
    method: 'POST',
    body: formData
  })

  revalidateTag('patients')

  return res.status
}
