import { useState, useEffect } from "react";
import GeoLocate from "./GeoLocate";

const GeoLocateContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  const handleSuccess = ({
    coords: {
      latitude,
      longitude
    }
  }: {
    coords: {
      latitude: number
      longitude: number
    }
  }) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  useEffect (() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess)
    }
  }, [])

  return (
    <GeoLocate latitude={latitude} longitude={longitude} />
  )
}

export default GeoLocateContainer

