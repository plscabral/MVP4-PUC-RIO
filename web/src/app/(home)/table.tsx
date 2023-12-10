"use client"

// types
import { Patient } from "@/types/patient"

// components
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

// server-action
import { deletePatient } from "@/actions/delete-patient"

// icons
import { LuTrash2 } from "react-icons/lu"

// -------------------------------------------------------------

type Props = {
  data: Patient[]
}

// -------------------------------------------------------------

export function HomeTable({ data }: Props) {
  const { toast } = useToast()

  async function handleDelete(id: string) {
    const status = await deletePatient(id)

    if (status === 200) {
      toast({
        type: "background",
        className: "bg-emerald-600 text-white border-none",
        title: "Patient deleted successfully!",
        duration: 3000
      })
    }
    else {
      toast({
        variant: "destructive",
        title: "Error when deleting patient!",
        description: "There was a problem with your request.",
        duration: 3000
      })
    }
  }

  return (
    <Card className="w-[90%] bg-white/80">
      <Table className="w-full rounded-lg">
        {data?.length === 0 && <TableCaption className="my-2">No items found.</TableCaption>}

        <TableHeader className="text-left text-xs">
          <TableRow className="rounded-lg bg-gray-100 hover:bg-gray-100">
            <TableHead className="rounded-s-lg"></TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Name</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Age</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Gender</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Chest pain</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Resting BP</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Serum cholesterol</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Fasting blood sugar</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Resting electrocardiogram</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Max heart rate</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Exercise angina</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Oldpeak</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Slope</TableHead>
            <TableHead className="text-black text-center max-w-[400px]">Number of major vessels</TableHead>
            <TableHead className="rounded-e-lg text-black text-center max-w-[400px]">Diagnosis</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="hover:bg-transparent text-xs">
              <TableCell>
                <Button
                  size={"icon"}
                  className="bg-red-500 hover:bg-red-500/90"
                  onClick={() => handleDelete(item.id)}
                >
                  <LuTrash2 className="w-4 h-4" />
                </Button>
              </TableCell>
              <TableCell className="max-w-[200px] text-center">{item.name}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.age}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.gender}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.chestpain}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.restingBP}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.serumcholestrol}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.fastingbloodsugar}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.restingrelectro}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.maxheartrate}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.exerciseangia}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.oldpeak}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.slope}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.noofmajorvessels}</TableCell>
              <TableCell className="max-w-[200px] text-center">{item.target}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
