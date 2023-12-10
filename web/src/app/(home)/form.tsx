"use client"

// form
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// types
import { patientFormSchema, PatientForm } from "@/types/patient"

// components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
      restingrelectro: "",
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
        title: "Patient registered successfully!",
        duration: 3000
      })

      form.reset()
    }
    else {
      toast({
        variant: "destructive",
        title: "Error when registering patient!",
        description: "There was a problem with your request.",
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
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="0">Female</SelectItem>
                        <SelectItem value="1">Male</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="chestpain">Chest pain</Label>

                <FormField
                  control={form.control}
                  name="chestpain"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="0">Typical angina</SelectItem>
                        <SelectItem value="1">Atypical angina</SelectItem>
                        <SelectItem value="2">Non-anginal pain</SelectItem>
                        <SelectItem value="3">Asymptomatic</SelectItem>
                      </SelectContent>
                    </Select>
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
                      <Input id="restingrelectro" {...field} />
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
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="0">No</SelectItem>
                        <SelectItem value="1">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="restingrelectro">Resting electrocardiogram</Label>

                <FormField
                  control={form.control}
                  name="restingrelectro"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="0">Normal</SelectItem>
                        <SelectItem value="1">ST-T wave abnormality</SelectItem>
                        <SelectItem value="2">Probable or definite left ventricular hypertrophy</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="0">No</SelectItem>
                        <SelectItem value="1">Yes</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="1">Upsloping</SelectItem>
                        <SelectItem value="2">Flat</SelectItem>
                        <SelectItem value="3">Downsloping</SelectItem>
                      </SelectContent>
                    </Select>
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
