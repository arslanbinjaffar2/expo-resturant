
import  {Fragment, useState } from 'react'
import {Badge, Box, Button, CheckIcon, Divider, HStack, Icon, Image, Input, Pressable, ScrollView, Select, Text, View, VStack } from 'native-base'
import {Href, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import CustomBackButton from '@/components/customBackButton/Index';
import {sucesstick,errortick,dollarpoints, facebook, google, coin, startcoin, substractionshape, vochersicon} from '@/constants/image'
import CustomGradient from '@/components/customGradient/Index';
import  Entypo  from '@expo/vector-icons/Entypo';
import  Feather  from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { Dimensions, ImageBackground, Platform } from 'react-native';
import AddVocherModal from '@/app/(root)/(vouchers)/.modal/AddVocher'
const Rewards = () => {
    const {width,height}=Dimensions.get('window')
    const router=useRouter()
    const navigateToMenu = (id:any) => {
      router.push(`/(rewards)/details/1`);
    };
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
        <CustomGradient />
        <View mx={'20px'} my={5} height={"full"}>
        <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Pressable bg={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push("/(account)")}>
        <Icon as={EvilIcons} name='chevron-left' size={'2xl'} color="primary.text"/>
        </Pressable>
        <Pressable bg={'white'} rounded={'full'} justifyContent={'center'} alignItems={'center'} size={'32px'} onPress={()=>router.push("/(rewards)/history")}> 
        <Icon as={AntDesign} name='question' size={'lg'} color="primary.text"/>
        </Pressable>
        </View>
       <View  rounded={'2xl'}>
        <ImageBackground source={substractionshape} alt='substractionshape' style={{ minHeight:200 }}>
        <Text textAlign={'center'} pt={'30px'} fontWeight={'semibold'} fontSize={'28px'}   textBreakStrategy='balanced'>0.00 Rs</Text>
        <Text textAlign={'center'}>Saved this month</Text>
        <Divider bg={'white'} borderWidth={'1'} borderColor={'primary.bordercolor'} borderStyle={'dashed'} mt={3} width={"70%"} mx={'auto'} />
        <HStack  space="2" alignItems="center" justifyContent={'center'} mt={width>=768 && width!==450?"7":'2'}>
         <Image source={vochersicon} alt='vochersicon' width={'20px'} height={'16px'}/>
         <Pressable onPress={()=>setModalVisible(true)}>
         <Text fontWeight={'semibold'}    color={'primary.boxbutton'}>+ Add a voucher </Text>
         
         </Pressable>
        </HStack>
        </ImageBackground>
       </View>
       <ScrollView mt={width>=768 && width!=450 ?"7":"0"}  bg={'white'} rounded={'2xl'} marginBottom={20} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>  
        <VStack  px={'20px'} py={5}  height={'100%'} >  
        <HStack justifyContent={'space-between'}>
        <Text fontWeight={'semibold'}    fontSize={'20px'}>Vouchers</Text>
        <Select
        _selectedItem={{ _icon:{color:"primary.text",width:"6.8px",height:"12px",}}}
        p={2}
        accessibilityLabel="Choose Service" 
        placeholder="sort"
        rounded={"2xl"}
        borderColor={"primary.bordercolor"}
        borderWidth={'1'}
        _text={{ fontSize:"xs",color:"primary.text" }}
        minWidth="50"
        width={"100px"}   
        placeholderTextColor={"primary.placeholderColor"}   
        >
        <Select.Item label="Sort" value="js" color={"primary.text"} />
        <Select.Item label="TypeScript" value="ts" color={"primary.text"}/>
        <Select.Item label="C" value="c" color={"primary.text"}/>
        <Select.Item label="Python" value="py" color={"primary.text"}/>
        <Select.Item label="Java" value="java" color={"primary.text"}/>
      </Select>
        </HStack>
         <VStack pt={5} space={3}>
         {new Array(5).fill('').map((item,i)=>{
          return(
            <VStack borderWidth={'1'} borderColor={'primary.bordercolor'} rounded={'2xl'} py={5} px={'3.5'} key={i}>
            <HStack space={3}>
             <VStack alignItems={'center'}>
             <Image source={vochersicon} alt='vochersicon' width={'42px'} height={'32px'}/>
             <Text fontWeight={'semibold'}    color={'primary.boxbutton'}>15%</Text>
             </VStack>
             <VStack >
             <Text textAlign={'center'}  fontWeight={'semibold'} fontSize={'sm'}   textBreakStrategy='balanced'pr={10} >Get 15% Cashback on your first order</Text>
              <HStack space={'6px'}>
             <Text>VRHDU87</Text>
             <Badge colorScheme="error" alignSelf="center" variant={'subtle'} rounded={'full'} _text={{ fontSize:"sm",fontWeight:"medium",fontFamily:"Poppins-Medium",color:"primary.boxbutton" }}>
                New
               </Badge>
              </HStack>
             </VStack>
            </HStack>
            <Divider bg={''} borderWidth={'1'} borderColor={'primary.bordercolor'} borderStyle={'dashed'} mt={3} width={"100%"} mx={'auto'} />
            <HStack justifyContent={'space-between'} alignItems={'center'} pt={3}>
             <Text fontSize={'sm'} textBreakStrategy='balanced' pr={'10'}>Min.spend $2 - Use by 30 July 2024</Text>
             <Pressable onPress={()=>router.push("/(vouchers)/details/1" as  Href<"/(vouchers)/details/1">)}>
             <Text fontWeight={'semibold'} fontSize={'sm'}   textBreakStrategy='balanced' color={"primary.boxbutton"}>Details</Text>
             </Pressable>
            </HStack>
        
           </VStack>
          )
         })}
         </VStack>
        </VStack>
        </ScrollView>
        </View>
       <AddVocherModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </SafeAreaView>
  )
}

export default Rewards






