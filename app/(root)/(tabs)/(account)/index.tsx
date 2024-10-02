import { Box, Center, Divider, HStack, Icon, Image, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { Href, useRouter } from 'expo-router'
import {profileimg,vochersicon} from '@/constants/image'
import { generalaccountList } from '@/constants/data'
import CustomButton from '@/components/CustomButton/Index'
import DynamicIcons from '@/components/DyanmicIcons'
const Index = () => {
    const router = useRouter();
  return (
    <SafeAreaView>
    <View bg={'white'} px={'4'} height={'full'}>
    <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mt={5}>
        <Text     fontSize={'28px'} fontWeight={'semibold'} color={'primary.text'} >Account</Text>
        <Pressable
          p="2"
          rounded={'full'}
          backgroundColor={"primary.bg_2"}
          onPress={()=>router.push("/(settings)")}>
            <Icon as={Ionicons} name='settings' size={'lg'} color={'#000'}/>
        </Pressable>
    </Box>
   <HStack bg={'primary.bg'} py={'5'} px={'3.5'} rounded={'lg'} justifyContent={'space-between'} alignItems={'center'} mt={5}>
    <HStack alignItems={'center'} space={3}>
        <Image source={profileimg} alt="profile" size={"42px"}/>
        <Text fontWeight={'medium'}  >Jhos Inglish</Text>
    </HStack>
    <Pressable  onPress={()=>router.push("/(profile)")}>
    <Text color={"primary.boxbutton"}      fontWeight={'semibold'}>View profile</Text>
    </Pressable>
   </HStack>
   <ScrollView pr={3} marginTop={'24px'}  marginBottom={'24'} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true} >
    <Text fontWeight={'medium'}   fontSize={'20px'} >General</Text>
    {generalaccountList.map(({name,icon,route})=>{
        return(
            <Pressable onPress={()=>router.push(`${route}` as Href<string>)} mt={"20px"} key={name}>
            <HStack justifyContent={'space-between'}>
            <HStack space={3} alignItems={'center'}>
            <DynamicIcons iconType={icon}/>
           <Text fontWeight={'medium'}  >{name}</Text>
            </HStack>
            <Icon as={Entypo} name='chevron-right' size={'lg'} color={"primary.text"}/>
           </HStack>
            <Divider bg={"primary.bordercolor"} mt={"20px"}/>
            </Pressable>
        )
    })}
   </ScrollView>
   
   <CustomButton title='Logout'  mt={'auto'} position="fixed" bottom={"100px"} onPress={()=>router.push('/(root)/(auth)/')}/>
    </View>
    </SafeAreaView>
  )
}

export default Index



