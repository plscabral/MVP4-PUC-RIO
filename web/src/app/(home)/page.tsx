import { HomeForm } from "./form"
import { HomeTable } from "./table"

// server-action
import { getPatients } from "@/actions/get-patients"

export default async function Home() {
  const data = await getPatients()

  return (
    <main className="flex flex-col gap-8 w-screen h-screen justify-center items-center">
      <HomeForm />
      <HomeTable data={data} />
    </main>
  )
}
