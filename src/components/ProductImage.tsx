"use client"
import Image from "next/image"

import type { ProductImagePath } from "@/app/page"

export default function ProductImage({ imagePath }: ProductImagePath) {
  return (
    <>
      <div className="mobile:block relative hidden basis-1/2">
        <Image
          src={imagePath.desktop}
          alt="chanel perfume bottle with leaves places aside it"
          height={900}
          width={600}
          priority={true}
          className="h-full"
        />
      </div>
      <div className="mobile:hidden relative flex basis-1/2 items-center justify-center ">
        <Image
          src={imagePath.mobile}
          alt="chanel perfume bottle with leaves places aside it"
          height={480}
          width={686}
          priority={true}
          className="w-full"
        />
      </div>
    </>
  )
}
