
import  {Fragment, useState } from 'react'
import {Box, Divider, HStack, Icon, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import { startcoin} from '@/constants/image'
import CustomGradient from '@/components/customGradient/Index';
import { Dimensions } from 'react-native';
const History = () => {
    const router=useRouter()
    const {width}=Dimensions.get('window')
  return (
    <SafeAreaView>
        <CustomGradient />
        <Box mx={'20px'} my={5}>
        <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Pressable bg={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push("/(rewards)/")}>
        <Icon as={AntDesign} name='close' size={'lg'} color="primary.text"/>
        </Pressable>
        <Pressable bg={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'}> 
        <Icon as={AntDesign} name='question' size={'lg'} color="primary.text"/>
        </Pressable>
        </View>
        <ScrollView marginBottom={'16'} bg={'white'}  rounded={'2xl'} my={'5'} >
        <View  px={'20px'} >
          <Text fontWeight={'medium'} fontSize={'lg'}   mt={5}>Points History</Text>
          {new Array(116).fill('').map((item,i,array)=>{
            return(
              <Fragment key={i}>
              <HStack alignItems={'center'} justifyContent={width <= 413 ? "center":'space-between'} flexDirection={width <= 413 ? 'column':'row'} >
              <HStack mt={"20px"} space={3}   >
              <Image source={startcoin} alt="startcoin" size={"42px"}/>
              <View >
              <Text fontWeight={'medium'} fontSize={'lg'}   textBreakStrategy='balanced' >First purchase reward </Text>
              <Text color={"primary.placeholderColor"}>12 July, 2024 </Text>
              </View>
              </HStack>
              <Text color={"primary.boxbutton"}>200pts</Text>
              </HStack>
             {array.length-1!==i &&  <Divider bg={"primary.bordercolor"} mt={3}/>}
              </Fragment>
            )
          })}
          
        </View>
        </ScrollView>
         
        </Box>
    </SafeAreaView>
  )
}

export default History

