import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SVGComponent = (props:SvgProps) => {
    return(
        <Svg
        width={props.width}
        height={props.height}
        viewBox="0 0 32 31.634"
        {...props}
      >
        <Path
          id="home_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24"
          d="M200-759.906v-19.546l16-12.088,16,12.088v19.546H220.132v-10.139h-8.264v10.139Z"
          transform="translate(-200 791.54)"
          fill={props.color ?? "#d72e34"}
        />
      </Svg>
    )
}
export default SVGComponent;
