"use server"

// next
import { revalidateTag } from 'next/cache'

export async function deletePatient(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paciente?id=${id}`, {
    method: 'DELETE',
    cache: "no-cache",
  })

  revalidateTag('patients')

  return res.status
}
