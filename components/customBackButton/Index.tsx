import { HStack, Icon, Pressable, Text } from 'native-base'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
interface Props{
    onPress:()=>void
    title:string
}
const CustomBackButton = ({onPress,title}:Props) => {
  return (
    <HStack alignItems={'center'}  space={3}>
    <Pressable   onPress={onPress} bg={"primary.bg_2"} width={'32px'} h={'32px'} rounded={'full'} justifyContent={'center'} alignItems={'center'}  >
    <Icon as={MaterialIcons} name="chevron-left" size={'2xl'} color="primary.text" />
    </Pressable>
    <Text fontSize={'28px'} fontWeight={'semibold'}   >{title}</Text>
        </HStack>
  )
}

export default CustomBackButton