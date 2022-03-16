import { useState, useEffect } from "react";

const [latitude, setLatitude] = useState<number | null>(null)
const [longitude, setLongitude] = useState<number | null>(null)

useEffect (() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess)
  }
}, [])

function handleSuccess(handleSuccess: any) {
  throw new Error("Function not implemented.");
}
