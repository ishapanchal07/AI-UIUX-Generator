"use client"
import React, { useState } from "react";
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
import { ChevronRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { suggestions } from "@/data/constant";

function Hero() {

  const [userInput, setUserInput] = useState<string>("")
  const [device, setDevice] = useState<string>("Website")

  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-48 xl:px-60 mt-8">
      <div className="flex items-center justify-center w-full mb-4">
        <div className="group relative max-w-sm mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
          <span
            className={cn(
              "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉
          <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium">
            Introducing Magic UI
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
        Design High Quality{" "}
        <span className="text-primary">Website and Mobile App</span>{" "}
        Designs
      </h2>

      <p className="text-center text-gray-600 text-sm sm:text-lg mt-2">
        Imagine your idea into reality
      </p>

      <div className="flex mt-6 w-full justify-center">
        <InputGroup className="w-full max-w-xl bg-white z-10 rounded-2xl">
          <InputGroupTextarea
            data-slot="input-group-control"
            className="min-h-24 w-full resize-none bg-transparent px-3 py-2.5 text-sm sm:text-base outline-none"
            placeholder="Enter what design you want to create"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <InputGroupAddon align="block-end">
            <Select
              value={device}
              onValueChange={(value) => setDevice(value)}
            >
              <SelectTrigger className="w-[120px] sm:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>

            <InputGroupButton size="sm">
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex gap-3 mt-4 flex-wrap justify-center">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="px-4 py-2 border rounded-full flex items-center gap-2 bg-white z-10 cursor-pointer hover:bg-gray-100 transition text-sm"
            onClick={() => setUserInput(suggestion?.description)}
          >
            <span>{suggestion?.icon}</span>
            <span className="whitespace-nowrap">{suggestion?.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero;
