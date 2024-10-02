import { Box, Button, Divider, HStack, Icon, Image, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import {Alert, Share} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { useRouter } from 'expo-router'
import { coin, giftbox, giftboxcircle, partyimg } from '@/constants/image'
import CustomButton from '@/components/CustomButton/Index'
import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system'
import {Asset} from 'expo-asset'
const Details = () => {
  const [imageUri,setImageUri]=useState("")

    const router=useRouter()
    const navigateToDetail = () => {
      router.push(`/(rewards)/details/1`);
    };



    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared

          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error: any) {
        Alert.alert(error.message);
        console.log(error,"error")
      }
    };
    useEffect(()=>{
     
    const loadAsset=async()=>{
      const asset=Asset.fromModule(require("@/assets/images/beefburger.png"))
      await asset.downloadAsync()
      setImageUri(asset.localUri || "")
    }
    loadAsset()
    },[])


    const shareImage=async ()=>{
      try {
        if(imageUri!==""){
          await Sharing.shareAsync(imageUri)
        }
        else{
          console.log("Image uri is not set")
        }
      } catch (error) {
        console.log("something went wrong here ")
      }
    }
  return (
    <SafeAreaView>
    <View  px={'24px'} height={'full'} >
    <Pressable mt={'24px'} bg={'primary.bg'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>navigateToDetail()}>
        <Icon as={AntDesign} name='close' size={'lg'} color="primary.text"/>
    </Pressable>
    <HStack >
    <HStack alignItems={'center'} justifyContent={'center'}  width={'100%'} height={"203px"}>
    <Image source={partyimg} alt='partimg' width={'260px'} height={'100%'} position={'relative'} />
    <Image source={giftboxcircle} alt='giftboxcircle' size={'130px'} position={'absolute'} justifyContent={'center'} alignItems={'center'}/>
    </HStack>
    </HStack>
    <Text fontWeight={'semibold'} fontSize={'20px'}   textBreakStrategy='balanced' color={"primary.boxbutton"} 
    textAlign={'center'}>
        You have got 7 Days of free superz</Text>
  <VStack  space="5" mt={'5'}>
   <VStack borderColor={"primary.bordercolor"} borderWidth={'1'} py={3} px={4} rounded={'lg'} space={'1'}>
    <Text  fontWeight={'medium'}    textBreakStrategy='balanced' >7 Days Super</Text>
    <Text fontSize={'sm'} color={"primary.placeholderColor"} textBreakStrategy='balanced'>Subscription ends on 24 July 2024</Text>
   </VStack>
   <VStack borderColor={"primary.bordercolor"} borderWidth={'1'} py={3} px={4} rounded={'lg'} space={'1'}>
    <Text  fontWeight={'medium'}    textBreakStrategy='balanced' >Auto renewal</Text>
    <Text fontSize={'sm'} color={"primary.placeholderColor"} textBreakStrategy='balanced'>Get premium until you cancel</Text>
   </VStack>
  </VStack>
       <Pressable width={'100%'} h={'62px'} bg={"primary.boxbutton"} rounded={"lg"} position={"fixed"} bottom={"20px"} mt={"auto"} 
       flexDirection={'row'}
       justifyContent={'center'}
       alignItems={'center'}
       onPress={shareImage}
       >
        <Icon name="share-alternative" as={Entypo} size={'md'} color={"white"} mr={'2'}/>
        <Text fontSize={'20px'} fontWeight={'semibold'}    color={"white"}>Share with friends</Text>
       </Pressable>
    </View>
    </SafeAreaView>
  )
}

export default Details