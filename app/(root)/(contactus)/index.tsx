
import  {useState } from 'react'
import {Divider, HStack, Icon, Image, Input, Pressable, ScrollView, Text, TextArea, View, VStack } from 'native-base'
import {Href, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomBackButton from '@/components/customBackButton/Index';
import {brownie,BeefBurger,cheesecake, applogo} from '@/constants/image'
import CustomButton from '@/components/CustomButton/Index';
import DynamicIcons from '@/components/DyanmicIcons';
import { Platform } from 'react-native';
const Feedback = () => {
    const router=useRouter()
    const [rating,setRating]=useState(0)
  return (
    <SafeAreaView>
          <View bg={'white'} p={4}   height={"full"}>
        <CustomBackButton onPress={()=>router.push("/(root)/(tabs)/(account)/" )} title='About us'/>
            <ScrollView marginBottom={Platform.OS=="ios"?'5':0}> 
            <View mx={'auto'} bg={'primary.bg'} rounded={'lg'} width={'176px'} height={'136px'} justifyContent={'center'} alignItems={'center'} my={'5'}>
                <Image source={applogo} alt='applogo' width={'120px'} h={'90px'}/>
            </View>
            <Divider bg={'primary.bordercolor'}/>
            <VStack py={5}>
                <Text fontWeight={'semibold'}    fontSize={'20px'}>Our story</Text>
                <Text pt={3}>Our establishment takes great pride in the meticulous preparation of each and every item on our menu, ensuring that our customers have the opportunity to fully customize their dining experience.</Text>
                <Text pt={2}>Accepting pre orders without requiring prepayment, allowing for a more convenient and flexible ordering experience.</Text>
            </VStack>
            <Divider bg={'primary.bordercolor'}/>
            <VStack py={5}>
                <Text fontWeight={'semibold'}    fontSize={'20px'}>Contact</Text>
                <VStack space={3} mt={3}>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Pressable bg={'primary.bg'} size={'64px'} rounded={'2xl'} justifyContent={'center'} alignItems={'center'}>
                        <DynamicIcons iconType='Icointernet'/>
                        </Pressable>
                        <Text fontWeight={'medium'}    >www.lahoreintown.ca</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                    <Pressable bg={'primary.bg'} size={'64px'} rounded={'2xl'} justifyContent={'center'} alignItems={'center'}>
                        <DynamicIcons iconType='Icomail'/>
                        </Pressable>
                        <Text fontWeight={'medium'}    >info@lahoreintown.ca</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                    <Pressable bg={'primary.bg'} size={'64px'} rounded={'2xl'} justifyContent={'center'} alignItems={'center'}>
                        <DynamicIcons iconType='Icocall'/>
                        </Pressable>
                        <Text fontWeight={'medium'}    >www.lahoreintown.ca</Text>
                    </HStack>
                </VStack>
            </VStack>
            </ScrollView>
          </View>
    </SafeAreaView>
  )
}

export default Feedback

