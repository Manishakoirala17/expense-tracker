import * as React from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    labelName: string,
    list: Array<string>,
    handleChange: (value: string) => void
}
export function Dropdown(props: Props) {
    return (
        <Select onValueChange={props.handleChange}>
            <SelectTrigger className="w-[180px] capitalize">
                <SelectValue className="capitalize" placeholder={props.labelName} />
            </SelectTrigger>
            <SelectContent>
                {
                    props.list.map((item, index) => {
                        return (
                            <SelectItem key={index} value={item} className="capitalize">{item}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>


    )
}
