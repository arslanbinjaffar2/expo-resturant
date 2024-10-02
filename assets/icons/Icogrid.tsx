import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SVGComponent = (props:SvgProps) =>{
  console.log(props.color,"color")
  console.log(props.width,"width")

  console.log(props.height,"height")

  return(
    <Svg
    height={props.height ?? "24px"}
    viewBox="0 -960 960 960"
    width={props.width ?? "24px"}
    fill={props.color ?? "#1c244b"}
    {...props}
    >
      <Path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
    </Svg>
  );
}
export default SVGComponent;
