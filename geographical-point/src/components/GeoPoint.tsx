import { useState, useEffect } from "react";

const [latitude, setLatitude] = useState<number | null>(null)
const [longitude, setLongitude] = useState<number | null>(null)

useEffect (() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess)
  }
}, [])

const handleSuccess = ({
  coords: {
    latitude,
    longitude
  }
} : {
  coords: {
    latitude: number;
    longitude: number
  }
}) => {
  setLatitude(latitude)
  setLongitude(longitude)
}
