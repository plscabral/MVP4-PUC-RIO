"use server"

export async function getPatients() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pacientes`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    next: { tags: ["patients"] }
  })

  const data = await res.json()

  return data.pacientes
}
