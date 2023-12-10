"use client"

// form
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// types
import { patientFormSchema, PatientForm } from "@/types/patient"

// components
import { Form, FormField, FormItem } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

// server-action
import { createPatient } from "@/actions/create-patient"

export function HomeForm() {
  const { toast } = useToast()

  const form = useForm<PatientForm>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      chestpain: "",
      restingBP: "",
      serumcholestrol: "",
      fastingbloodsugar: "",
      maxheartrate: "",
      exerciseangia: "",
      oldpeak: "",
      slope: "",
      noofmajorvessels: "",
    },
  })

  async function onSubmit(data: PatientForm) {
    const status = await createPatient(data)

    if (status === 201) {
      toast({
        type: "background",
        className: "bg-emerald-600 text-white border-none",
        title: "Paciente cadastrado com sucesso!",
        duration: 3000
      })

      form.reset()
    }
    else {
      toast({
        variant: "destructive",
        title: "Erro ao cadastrar paciente!",
        description: "Houve um problema com a sua solicitação.",
        duration: 3000
      })
    }
  }

  return (
    <Card className="w-[90%] bg-white/80">
      <CardHeader>
        <CardTitle>Analysis of cardiovascular problems</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="name" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Age</Label>

                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="age" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="gender" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="chestpain">Chest pain</Label>
                <FormField
                  control={form.control}
                  name="chestpain"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="chestpain" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="restingBP">Resting BP</Label>
                <FormField
                  control={form.control}
                  name="restingBP"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="restingBP"  {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="serumcholestrol">Serum cholesterol</Label>
                <FormField
                  control={form.control}
                  name="serumcholestrol"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="serumcholestrol" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fastingbloodsugar">Fasting blood sugar</Label>
                <FormField
                  control={form.control}
                  name="fastingbloodsugar"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="fastingbloodsugar" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="restingrelectro">Resting electrocardiogram</Label>
                <FormField
                  control={form.control}
                  name="restingrelectro"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="restingrelectro" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="maxheartrate">Max heart rate</Label>
                <FormField
                  control={form.control}
                  name="maxheartrate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="maxheartrate" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="exerciseangia">Exercise angina</Label>
                <FormField
                  control={form.control}
                  name="exerciseangia"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="exerciseangia" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="oldpeak">Oldpeak</Label>
                <FormField
                  control={form.control}
                  name="oldpeak"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="oldpeak" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="slope">Slope</Label>
                <FormField
                  control={form.control}
                  name="slope"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="slope" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="noofmajorvessels">Number of major vessels</Label>
                <FormField
                  control={form.control}
                  name="noofmajorvessels"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Input id="noofmajorvessels" {...field} />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex gap-2 mt-4">
        <Button
          variant="outline"
          onClick={() => form.reset()}>
          Clear
        </Button>

        <Button
          form="form"
          type="submit">
          Register
        </Button>
      </CardFooter>
    </Card>
  )
}
