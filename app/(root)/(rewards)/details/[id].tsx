import { Box, Divider, HStack, Icon, Image, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import {View as ReactNativeView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import EvilIcons from '@expo/vector-icons/EvilIcons'

import { Href, useRouter } from 'expo-router'
import { coin, giftbox } from '@/constants/image'
import CustomButton from '@/components/CustomButton/Index'
import { Entypo } from '@expo/vector-icons'
import { rewardsDetailAboutList } from '@/constants/data'
import DynamicIcons from '@/components/DyanmicIcons'
const Details = () => {
    const router=useRouter()
    const navigateToClaimed = () => {
      router.push(`/(rewards)/claimed`as  Href<"/(rewards)/claimed">);
    };
  return (
    <SafeAreaView>
      <View height={'full'}>
    <Pressable m={5} bg={'primary.bg'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push(`/(rewards)`)}>
        <Icon as={AntDesign} name='close' size={'lg'} color="primary.text"/>
    </Pressable>
    <ScrollView marginBottom={10}>
    <View py={5}>
     <VStack justifyContent={'center'} alignItems={'center'} space={2}>
        <Image source={giftbox} alt='giftbox' size={'64px'}/>
        <Text fontWeight={'semibold'} fontSize={'lg'}   textBreakStrategy='balanced' mt={2}>7 Days of free superz </Text>
        <Text >200pts</Text>
     </VStack>
     <Divider mt={'7'}/>
     <View p={5}>
     <Text fontWeight={'semibold'} fontSize={'lg'}   textBreakStrategy='balanced' mt={2}>About this reward</Text>
     <VStack mt={'3'} space={3}>
      {rewardsDetailAboutList.map(({id,descripition,icon,title},i)=>{
        return(
            <HStack space={3} pr={'65px'} key={id}>
            <Box  bg="primary.bg" p="20px" rounded="lg" size={'64px'}>
              <DynamicIcons iconType={icon}/>
                {/* <Image source={coin} alt='coin' width={'24px'} height={'27px'}/> */}
            </Box>
            <VStack space={1}>
                <Text color={"primary.placeholderColor"} fontSize={'sm'} fontWeight={'medium'}  >{title}</Text>
                <Text fontWeight={'medium'}   textBreakStrategy='balanced' >{descripition}</Text>
            </VStack>
          </HStack>
        )
      })}
     </VStack>
     </View>
     <View p={5}>
     <Text fontWeight={'semibold'} fontSize={'lg'}   textBreakStrategy='balanced' mt={2}>Important Info</Text>
     <Text mt={3}>We value our community and actively seek customer feedback to shape the app’s development. Our commitment extends beyond the dining table as we engage in various community programs and partnerships.</Text>
     <Pressable flexDirection={'row'} mt={'2.5'} alignItems={'center'}onPress={()=>router.push("/(root)/(termsandpolicies)/")}>
        <Text color="primary.boxbutton" fontWeight={'semibold'} fontSize={'sm'}  fontFamily={'Poppins-SemiBold'}>Privacy policy</Text>
        <Icon as={EvilIcons} name='chevron-right' size={'2xl'} color="primary.boxbutton"/>
    </Pressable>
     </View>
    </View>
    </ScrollView>
    <View px={'24px'}>
     <CustomButton title='Claim'  mt={'auto'} position="fixed" bottom={"20px"} onPress={()=>navigateToClaimed()}
        />
        </View>
        </View>

    </SafeAreaView>
  )
}

export default Details