import { FC } from "react";

type Props = {
  latitude: number | null
  longitude: number | null
}

const GeoLocate: FC<Props> = ({
  latitude,
  longitude
}) => (
  <div>
    <h1>
      Geo Locate
    </h1>
    <div>
      <output>latitude: {latitude}</output>
      <output>longitude: {longitude}</output>
    </div>
  </div>
)

export default GeoLocate
