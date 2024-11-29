"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import {
    Form,
} from "@/components/ui/form"
import { Dropdown } from "./form-components/Dropdown"
import { types } from "@/services/type"
import { useState } from "react"
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function AddExpense() {
    const [type, setType] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    function handleTypeChange(value: string) {
        console.log(value);
        setType(value)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Dropdown
                    labelName={"Type"}
                    list={types}
                    handleChange={handleTypeChange}
                >
                </Dropdown>
                {
                    type && type == "other" &&
                    <div>
                        hello
                    </div>
                }
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
