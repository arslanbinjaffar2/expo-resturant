
import  {useState } from 'react'
import {Divider, HStack, Icon, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomBackButton from '@/components/customBackButton/Index';
import {brownie,BeefBurger,cheesecake} from '@/constants/image'
import DynamicIcons from '@/components/DyanmicIcons';
const Favourites = () => {
    const router=useRouter()
  return (
    <SafeAreaView>
          <View bg={'white'} p={4}   height={"full"}>
        <CustomBackButton onPress={()=>router.push("/(menu)")} title='Favourites'/>
          <HStack mt={"20px"} width={"100%"} justifyContent={'space-between'} alignItems={'center'} space={3}>
          <Image source={BeefBurger} alt="BeefBurger" size={"64px"} alignSelf={'flex-start'}/>
          <VStack flex={'1'}>
          <Text fontWeight={'semibold'} fontSize={'lg'}   >Beef Burger</Text>
          <Text  textBreakStrategy='balanced' >Juicy beef patty, crisp lettuce, ripe tomatoes, melted cheddar…</Text>
          </VStack>
          <Pressable>
            <DynamicIcons iconType='Icodelete'/>
        </Pressable>
          </HStack>
          <Divider bg={"primary.bordercolor"} mt={"20px"}/>   
          </View>
    </SafeAreaView>
  )
}

export default Favourites

