import { useState, useEffect } from "react";

const GeoLocateContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
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
}
