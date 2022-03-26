import { FC } from "react";
import withInnerWidth from "./withInnerWidth";

type Props = {
  innerWidth: number
}

const SampleComponent: FC<Props> = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>

export default withInnerWidth(SampleComponent)
