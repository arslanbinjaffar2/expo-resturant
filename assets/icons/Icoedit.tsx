import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SVGComponent = (props:SvgProps) =>(
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      id="edit_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24"
      d="M160-776v-3.779l19.771-19.791a1.736,1.736,0,0,1,.509-.318,1.541,1.541,0,0,1,.581-.112,1.828,1.828,0,0,1,.586.1,1.309,1.309,0,0,1,.523.343l1.6,1.61a1.263,1.263,0,0,1,.339.525,1.882,1.882,0,0,1,.091.572,1.673,1.673,0,0,1-.1.583,1.445,1.445,0,0,1-.327.509L163.779-776Zm20.256-18.617,2.244-2.216-1.667-1.667-2.215,2.244Z"
      transform="translate(-160 800)"
      fill="#d72e34"
    />
  </Svg>
);
export default SVGComponent;
