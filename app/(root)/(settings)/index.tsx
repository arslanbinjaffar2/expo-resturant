
import  {useState } from 'react'
import {Divider, HStack, Icon, Image, Input, Pressable, Switch, Text, useColorMode, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomBackButton from '@/components/customBackButton/Index';
import {sucesstick,errortick,dollarpoints} from '@/constants/image'
const Notifications = () => {
    const router=useRouter()
    const {toggleColorMode}=useColorMode()
    const [isColorMode,setIsColorMode]=useState(false)
    const handleColorMode = () => {
      setIsColorMode((prevMode) => !prevMode); 
      ()=>toggleColorMode()
    };
  return (
    <SafeAreaView>
          <View bg={'white'} p={4}   height={"100%"} position={'relative'}>
        <CustomBackButton onPress={()=>router.push("/(account)")} title='Setting'/>
       <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack space={'3'}>
        <Text color={"primary.placeholderColor"}>Language</Text>
        <Text fontWeight={'medium'} fontSize={'lg'}   >English</Text>
        </VStack>
        <Pressable onPress={()=>{}}>
        <Text color={"primary.textRed"} fontWeight={'medium'}  >Edit</Text>
        </Pressable>
       </HStack>
        <Divider bg={"primary.bordercolor"} mt={"20px"}/>
        <Pressable onPress={handleColorMode}>
        <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack>
        <Text color={"primary.placeholderColor"} >Theme</Text>
        <Text fontWeight={'medium'} fontSize={'lg'} >Light</Text>
        </VStack>
        <Switch size="lg" colorScheme={'red'} isChecked={isColorMode} />
       </HStack>
         </Pressable>          
        <Divider bg={"primary.bordercolor"} mt={"20px"}/>   
        <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack space={'3'}>
        <Text color={"primary.placeholderColor"}>Notification</Text>
        <Text fontWeight={'medium'} fontSize={'lg'}   >On</Text>
        </VStack>
        <Switch size="lg" colorScheme={'red'}/>
       </HStack>
        <Divider bg={"primary.bordercolor"} mt={"20px"}/>   
        <Text color={"primary.placeholderColor"}  mt={'auto'} position="fixed" bottom={"40px"} textAlign={'center'}>version: 1.0.0</Text>
        </View>
    </SafeAreaView>
  )
}

export default Notifications

