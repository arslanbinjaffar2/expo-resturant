import  { ReactNode } from 'react'
import { Button, Icon } from 'native-base'
import React from 'react'
interface Props{
    title:string
    mt?:number | string
    mb?:number | string
    position?:"fixed"| "absolute",
    top?:string| number
    bottom?:string | number
    onPress?:()=>void
    rounded?:string
    px?:number | string
 
}
const CustomButton = ({title,position,bottom,top,mt,onPress,rounded,mb,px}:Props) => {
  return (
    <Button px={px}  mb={mb} width={'100%'} h={'62px'}  rounded={rounded ?? "lg"} position={position} top={top} bottom={bottom} mt={mt} onPress={onPress}
       _text={{ color:"white",fontSize:"20px",fontWeight:"semibold",fontFamily:"heading" }}>

      {title}
       </Button>
  )
}

export default CustomButton