"use client"
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Hero() {
    return(
        <div className="p-10  md:px-24 lg:px-48 xl:px-60 mt-20">
            <h2 className="text-5xl font-bold text-center">Design High Quality <span className="text-primary">WEbsite and Mobile App</span> Designs</h2>
            <p className="text-center text-gray-600 text-lg mt-3">Imagine your idea into reality</p>
            <div className="flex mt-5 w-full gap-6 items-center justify-center">
            <InputGroup className="max-w-xl bg-white z-10 rounded-2xl">
            <InputGroupTextarea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-24 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="Enter what design you want to create" />
         <InputGroupAddon align="block-end">
         <Select>
            <SelectTrigger className="w-[180px]">
             <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            Submit
          </InputGroupButton>
         </InputGroupAddon>
         </InputGroup>
         </div>
        </div>
    )
}

export default Hero;