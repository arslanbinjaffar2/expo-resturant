import { Badge, Box, Divider, HStack, Icon, Image, Pressable, Radio, ScrollView, Text, View, VStack } from 'native-base'
import {Dimensions, View as ReactNativeView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import EvilIcons from '@expo/vector-icons/EvilIcons'

import { Href, useRouter } from 'expo-router'
import { coin, emptycircle, giftbox, vochersicon } from '@/constants/image'
import CustomButton from '@/components/CustomButton/Index'
import { Entypo } from '@expo/vector-icons'
const Details = () => {
    const router=useRouter()
    const navigateToClaimed = () => {
      router.push(`/(rewards)/claimed`as  Href<"/(rewards)/claimed">);
    };
    const [value, setValue] = React.useState("one");
    const {width}=Dimensions.get('screen')
  return (
    <SafeAreaView>
    <View mt={4}>
      <HStack space={3} alignItems="center" px={5}>
    <Pressable  bg={'primary.bg'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push(`/(vouchers)/`)}>
        <Icon as={AntDesign} name='close' size={'lg'} color="primary.text"/>
    </Pressable>
    <Text fontWeight={'semibold'} fontSize={'28px'}   textBreakStrategy='balanced'>Voucher Details </Text>
        </HStack>
   <ScrollView 
    marginBottom={width<=414?"10":"0"}
    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <VStack px={5} mt={3} space={2}>
             <Image source={vochersicon} alt='vochersicon' width={'42px'} height={'32px'}/>
             <Text   fontWeight={'semibold'} fontSize={'20px'}   textBreakStrategy='balanced' mt={'2'}>Get 15% Cashback on your first order</Text>
              <HStack space={'6px'}>
             <Text>VRHDU87</Text>
             <Badge colorScheme="error" alignSelf="center" variant={'subtle'} rounded={'full'} _text={{ fontSize:"xs",fontWeight:"medium",fontFamily:"Poppins-Medium",color:"primary.boxbutton" }}>
                New
               </Badge>
              </HStack>
             <Text fontSize={'sm'}>Min.spend $2 - Use by 30 July 2024</Text>        
           </VStack>
     <Divider mt={'5'}/>
     <View p={5} >
     <Text fontWeight={'semibold'} fontSize={'lg'}   textBreakStrategy='balanced' >Terms & Conditions</Text>
     <VStack space={'2.5'} mt={'3.5'}>
     <HStack alignItems={'center'} space={3}>
     <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
        <Text>Valid for minimum order of $2</Text>
     </HStack>
     <HStack alignItems={'center'} space={3}>
     <Image source={emptycircle} alt='emptycircle' size={'12px'}/>

        <Text>Valid for minimum order of $2</Text>
     </HStack>
     <HStack alignItems={'center'} space={3}>
     <Image source={emptycircle} alt='emptycircle' size={'12px'}/>

        <Text>Applicable for Delivery</Text>
     </HStack>
     <HStack alignItems={'center'} space={3}>
     <Image source={emptycircle} alt='emptycircle' size={'12px'}/>

        <Text>For selected users only</Text>
     </HStack>
     <HStack alignItems={'center'} space={3}>
     <Image source={emptycircle} alt='emptycircle' size={'12px'}/>

        <Text>For selected users only</Text>
     </HStack>
     </VStack>
     <Text mt={3}>We value our community and actively seek customer feedback to shape the app’s development. Our commitment extends beyond the dining table as we engage in various community programs and partnerships.</Text>
     </View>
     </ScrollView>

    </View>
    </SafeAreaView>
  )
}

export default Details