"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const AddToCartButton = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false)
        }, 2000)

        return () => clearTimeout(timeout)
    },[])

  return (
    <Button size='lg' className="w-full">Add To cart</Button>
  )
}

export default AddToCartButton