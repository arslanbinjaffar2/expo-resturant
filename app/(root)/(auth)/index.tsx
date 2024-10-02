import {SetStateAction,Dispatch} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, useRouter } from 'expo-router'
import { Center, CheckIcon, HStack, Input,  Select,  Text, View, VStack,Image, Divider, Button, Icon, Pressable, Modal, ScrollView } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useRef, useState } from 'react';
import { denmarkflag, facebook, google, mailimg, startcoin } from '@/constants/image';
import CustomButton from '@/components/CustomButton/Index';
import CustomGradient from '@/components/customGradient/Index';
import { Entypo } from '@expo/vector-icons';
import DynamicIcons from '@/components/DyanmicIcons';
import { Alert, Dimensions, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { InterfaceViewProps } from 'native-base/lib/typescript/components/basic/View/types';
import { DismissKeyboardView } from '@/components/DismissKeyboardView/Index';
import {CountryPicker} from "react-native-country-codes-picker";
import { useOAuth } from '@clerk/clerk-expo'

const Index = () => {
  const [showCountryPicker, setShowCountryPicker] = useState(false)
  const [countryCode, setCountryCode] = useState("+45");
  const [countryFlag,setCountryFlag]=useState("🇩🇰")
  const router =useRouter()
  const {height,width}=Dimensions.get('screen')



  


  return (
    <SafeAreaView>
    <CustomGradient/>
    <DismissKeyboardView>
    <View  mx={4} mt={'4'} px={4} py={5} bg={'white'}  rounded={'2xl'} height={height} >
    <Text fontWeight={"semibold"}  fontSize={'28px'} >Sign up to continue</Text>
     <HStack justifyContent={'flex-start'} alignItems={'center'} space={'3'} pt={4}>
     <CustomFlagSelect countryCode={countryCode} setOpen={setShowCountryPicker} countryFlag={countryFlag}/>
        <HStack bg={'primary.bg'} alignItems={'center'} px={'3'} py={'20px'} rounded={'2xl'} height={'62px'} width={width<=413?'200px':'239px'}>  
        <Text   fontWeight={'medium'}>{countryCode}</Text>
        <Input type='text'  keyboardType='numeric' maxWidth={'100%'} flex={'1'} pt={Platform.OS=="android"?'16px':'0'}   borderWidth={'0'} bg={"transparent"} placeholder='Phone Number'  _focus={{ bg:"transparent" }}/>
        </HStack>
      </HStack>   
      <CustomButton title='Continue' rounded='2xl' mt={3} onPress={()=>router.push("/(tabs)/(menu)")}/>
      <HStack alignItems={'center'}  space={'2'}  my={'20px'} width={'100%'} justifyContent={'center'}>
        <Divider  width={'45%'}  bg={"primary.bordercolor"}/>
        <Text color='primary.bordercolor'>or</Text>
        <Divider width={'45%'} bg="primary.bordercolor"/>
      </HStack>
     <VStack space={'3'} mt={'20px'}>
     <Pressable width={'100%'} h={'62px'} bg={"primary.bg"} rounded={"2xl"} position={"fixed"} bottom={"20px"} mt={"auto"}  
       flexDirection={'row'}
    justifyContent={'center'}
       alignItems={'center'} >
        <Image  source={google} alt='google' size={'30px'} mr={3}/>
        <Text fontSize={'20px'} fontWeight={'semibold'}    color={"primary.blulish"}>Continue with Google</Text>
       </Pressable>
       <Pressable width={'100%'} h={'62px'} bg={"primary.bg"} rounded={"2xl"} position={"fixed"} bottom={"20px"} mt={"auto"}  
       flexDirection={'row'}
    justifyContent={'center'}
       alignItems={'center'} >
        <Image  source={facebook} alt='facebook' size={'30px'} mr={3}/>
        <Text fontSize={'20px'} fontWeight={'semibold'}    color={"primary.blulish"}>Continue with Facebook</Text>
       </Pressable>
       <Pressable width={'100%'} h={'62px'} bg={"primary.bg"} rounded={"2xl"} position={"fixed"} bottom={"20px"} mt={"auto"}  
       flexDirection={'row'}
    justifyContent={'center'}
       alignItems={'center'} >
        <Image  source={mailimg} alt='mailimg' width={'30px'} height={'23px'} mr={3}/>
        <Text fontSize={'20px'} fontWeight={'semibold'}    color={"primary.blulish"}>Continue with Email</Text>
       </Pressable>
     </VStack>
      <View >
      <Divider bg="primary.bordercolor"/>
      {/* <Text pt={3} fontSize={'sm'} color={"primary.placeholderColor"}>By proceeding, you consent to receive calls, WhatsApp messages, or SMS messages, including those sent by automated means, from Lahore Town and its affiliates to the number you provided.</Text> */}
      <Text pt={3} fontSize={'sm'} color={"primary.placeholderColor"}>
        For more information on our policies and guidelines, please review our <Text color={"primary.text"} textDecorationLine={'underline'}>
          <Link href="/(termsandpolicies)">Terms of Service</Link>
        </Text>
        </Text>
      </View>
      <CountryPicker
      lang={'en'}
        show={showCountryPicker}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setCountryFlag(item.flag)
          setShowCountryPicker(false);
        }}
      />
    </View>
    </DismissKeyboardView>

    </SafeAreaView>
  )
}

export default Index




function CustomFlagSelect({countryFlag,countryCode,setOpen}:{countryFlag:any,countryCode:any,setOpen:Dispatch<SetStateAction<boolean>>}){


  return(
  <>
  <Pressable px={5} flexDirection={'row'} onPress={()=>setOpen(true)} bg={'primary.bg'} h={'62px'} width={'100px'} rounded={'2xl'} justifyContent={'space-between'} alignItems={'center'} >
   <Text size={'32px'} pt={Platform.OS=="android"?'1':"0"}>{countryFlag}</Text>
    <DynamicIcons iconType='Icodropdown'/>
  </Pressable>
 
  </>
  )
}




