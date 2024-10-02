
import  {useState } from 'react'
import {Divider, HStack, Icon, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomBackButton from '@/components/customBackButton/Index';
import {sucesstick,errortick,dollarpoints} from '@/constants/image'
const Notifications = () => {
    const router=useRouter()
  return (
    <SafeAreaView>
          <View bg={'white'} p={'24px'}   height={"full"}>
        <CustomBackButton onPress={()=>router.push("/(menu)")} title='Notification'/>
          {/* sucess notfications */}
          <HStack mt={"20px"}>
          <Image source={sucesstick} alt="sucesstick" size={"42px"}/>
          <View  ml={'3'} pr={'70px'}>
          <Text fontWeight={'medium'} fontSize={'lg'}   >Your Order has been Placed 
            Successfully!!!</Text>
          {/* time */}
          <Text color={"primary.placeholderColor"}>Recently</Text>
          </View>
          </HStack>
          <Divider bg={"primary.bordercolor"} mt={3}/>
          {/* dollar points */}
          <HStack mt={"20px"}>
          <Image source={dollarpoints} alt="dollarpoints" size={"42px"}/>
          <View  ml={'3'} pr={'70px'}>
          <Text fontWeight={'medium'} fontSize={'lg'}   >You have achieved 50 points</Text>
          {/* time */}
          <Text color={"primary.placeholderColor"}>24 July 2024</Text>
          </View>
          </HStack>
          <Divider bg={"primary.bordercolor"} mt={3}/>
          {/* error notification or cancel notification */}
             <HStack mt={"20px"}>
          <Image source={errortick} alt="errortick" size={"42px"}/>
          <View  ml={'3'} pr={'70px'}>
          <Text fontWeight={'medium'} fontSize={'lg'}   >Your Order has been cancelled</Text>
          {/* time */}
          <Text color={"primary.placeholderColor"}>22 July 2024</Text>
          </View>
          </HStack>
          </View>
    </SafeAreaView>
  )
}

export default Notifications

