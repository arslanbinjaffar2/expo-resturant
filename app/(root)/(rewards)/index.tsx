
import  {Fragment, useState } from 'react'
import {Box, Button, Divider, HStack, Icon, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import CustomBackButton from '@/components/customBackButton/Index';
import {sucesstick,errortick,dollarpoints, facebook, google, coin, startcoin, giftbox} from '@/constants/image'
import CustomGradient from '@/components/customGradient/Index';
import  Entypo  from '@expo/vector-icons/Entypo';
import  Feather  from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { Dimensions } from 'react-native';
const Rewards = () => {
    const router=useRouter()
    const navigateToMenu = (id:any) => {
      router.push(`/(rewards)/details/1`);
    };
    const {width}=Dimensions.get('window')
  return (
    <SafeAreaView>
        <CustomGradient />
        <Box mx={'20px'} my={5} height={'full'}>
        <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Pressable bg={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push("/(account)")}>
        <Icon as={EvilIcons} name='chevron-left' size={'2xl'} color="primary.text"/>
        </Pressable>
        <Pressable bg={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push("/(rewards)/history")}> 
        <Icon as={AntDesign} name='question' size={'lg'} color="primary.text"/>
        </Pressable>
        </View>
        <View bg={'white'}  rounded={'2xl'} px={'30px'} my={'5'} py={"20px"} justifyContent={'center'} alignItems={'center'}>
          <HStack space={'24px'}>
          <Image source={coin} alt='coin' size={'80px'}/>
          <VStack>
          <HStack   space={'2'} alignItems={'center'}>
            <Text fontWeight={'semibold'} fontSize={'28px'} fontFamily={'Poppins-SemiBold'}>260.42 pts</Text>
            <Pressable bg={'rgba(243, 245, 248, 1)'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'}>
             <Icon as={Entypo} name='chevron-right' size={'md'} color="primary.text"/>
            </Pressable>
          </HStack>
          <Text mt={'6px'} color={"primary.text"}>Total points earned</Text>
          </VStack>
          </HStack>
           <Divider bg={"primary.bordercolor"} mt={3}/>
            <Text color={"primary.placeholderColor"} mt={3} alignSelf={'flex-start'}>Referral code</Text>
            <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={1}>
             <Text fontWeight={'medium'}    textBreakStrategy='balanced'  flex={'1'}>https://www.yourwebsite.com</Text>
             <Pressable flexDirection={'row'} alignItems={'center'} >
             <Icon as={Feather} name='share' size={'sm'} color={"primary.boxbutton"}/>
             <Text fontWeight={'semibold'}    color={"primary.boxbutton"} ml={2}>Share</Text>
             </Pressable>
            </HStack>
            
        </View>
        <ScrollView  bg={'white'} rounded={'2xl'} marginBottom={'20'} width={'100%'}>
        <View  px={'20px'}   height={'100%'} width={'100%'}>
          <Text fontWeight={'medium'} fontSize={'lg'}    mt={5} >Rewards</Text>
          {new Array(5).fill('').map((item,i,array)=>{
            return(
              <Fragment key={i}>
              <HStack alignItems={'center'} justifyContent={'space-between'} width={'100%'} pb={array.length-1!==i?0:5} flexWrap={'wrap'}>
              <HStack mt={"20px"} space={3} >
              <Image source={giftbox} alt="giftbox" size={"42px"}/>
              <VStack maxWidth={'80%'}>
              <Text fontWeight={'semibold'} fontSize={'lg'}   textBreakStrategy='balanced'  >7 Days of free superz 7 </Text>
              <Text >200pts</Text>
              </VStack>
              </HStack>
              <Button onPress={()=>navigateToMenu(i)} px={3} py={2} height={'40px'} bg={'primary.boxbutton'} rounded={'2xl'} _text={{ color:"white",fontWeight:'semibold',fontFamily:'Poppins-SemiBold' }} >Claim</Button>
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

export default Rewards

