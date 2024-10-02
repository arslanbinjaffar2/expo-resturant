import React,{useState } from 'react';
import {Divider, HStack, Icon, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import CustomBackButton from '@/components/customBackButton/Index';
import {sucesstick,errortick,dollarpoints, facebook, google} from '@/constants/image'
import { Platform } from 'react-native';
import DynamicIcons from '@/components/DyanmicIcons';
import EditInputModal from './.modal/Index'
import LocationModal from './.modal/modalLocation'
const Notifications = () => {
    const router=useRouter()
    const [formInputData, setFormInputData] = useState({
      name: "Jhos Inglish",
      email: "JhosInglish123@gmail.com",
      phone: "+92 5421 6489 62"
    });
    const [currentField, setCurrentField] = useState(""); // to keep track of the currently edited field
    const [isEditShowModal, setIsEditShowModal] = useState<boolean>(false);
    const [location,setLocation]=useState('1234 Delicious Avenue, Suite 567 Foodie Town, FL 12345')
    const [isShowLocationModal,setIsShowLocationModal]=useState(false)
    const handleEditModal = (field:any) => {
      setCurrentField(field);
      setIsEditShowModal(true);
    };
    console.log(isEditShowModal,"isEditShowModal")
  return (
    <SafeAreaView shouldRasterizeIOS>
          <View bg={'white'} p={4} height={'full'}>
        <CustomBackButton onPress={()=>router.push("/(tabs)/(account)")} title='Profile'/>
        <ScrollView marginBottom={Platform.OS=="ios"?'5':"5"} pr={3} >
        <HStack space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack space={'3'}>
        <Text color={"primary.placeholderColor"}>Name</Text>
        <Text fontWeight={'medium'} fontSize={'lg'}   >{formInputData.name}</Text>
        </VStack>
        <Pressable onPress={()=>handleEditModal("Name")}>
        <DynamicIcons iconType='Icoedit'/>
        </Pressable>
       </HStack>
        <Divider bg={"primary.bordercolor"} mt={"20px"}/>          
        <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack space={'3'}>
        <Text color={"primary.placeholderColor"}>Email</Text>
        <Text fontWeight={'medium'} fontSize={'lg'}   >{formInputData.email}</Text>
        </VStack>
        <Pressable onPress={()=>handleEditModal("Email")}>
        <DynamicIcons iconType='Icoedit'/>
        </Pressable>
       </HStack>
        <Divider bg={"primary.bordercolor"} mt={"20px"}/>   
        <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack space={'3'}>
        <Text color={"primary.placeholderColor"}>Phone No</Text>
        <Text fontWeight={'medium'} fontSize={'lg'}   >{formInputData.phone}</Text>
        </VStack>
        <Pressable onPress={()=>handleEditModal("Phone")}>
            <DynamicIcons iconType='Icoedit'/>
        </Pressable>
       </HStack>
        <Divider bg={"primary.bordercolor"} mt={"20px"}/>   
        <HStack  space="3" alignItems="center" justifyContent={'space-between'} mt={'20px'}>
        <VStack space={'3'}>
        <Text color={"primary.placeholderColor"}>Address</Text>
        <Text fontWeight={'medium'} fontSize={'lg'}    textBreakStrategy='balanced'>{location}</Text>
        </VStack>
        <Pressable onPress={()=>setIsShowLocationModal(true)}>
            <Icon as={MaterialIcons} name='my-location' size={'lg'} color={"primary.textRed"}/>
        </Pressable>
       </HStack>
       <Text fontWeight={'medium'} fontSize={'20px'}   mt={'24px'}>Connected Accounts</Text>
       <HStack  alignItems="center" justifyContent={'space-between'} bg={"primary.bg"} px={3} rounded={'lg'} py={'3.5'} mt={'20px'}>
        <HStack alignItems={'center'} space={3}>
        <Image source={facebook} alt='facebook' size={'30px'}/>
        <VStack>
        <Text color={"primary.blulish"} fontWeight={"medium"}   fontSize={'lg'}>Facebook</Text>
        <Text color={"primary.boxbutton"} fontSize={'sm'}>Connected</Text>
        </VStack>
        </HStack>
        <Pressable>
        <DynamicIcons iconType='Icodelete'/>
        </Pressable>
       </HStack>
       <HStack  alignItems="center" justifyContent={'space-between'} bg={"primary.bg"} px={3} rounded={'lg'} py={'3.5'} mt={3}>
        <HStack alignItems={'center'} space={3}>
        <Image source={google} alt='google' size={'30px'}/>
        <VStack>
        <Text color={"primary.blulish"} fontWeight={"medium"}   fontSize={'lg'}>Gmail</Text>
        <Text color={"primary.boxbutton"} fontSize={'sm'}>Connected</Text>
        </VStack>
        </HStack>
        <Pressable>
       <DynamicIcons iconType='Icodelete'/>
        </Pressable>
       </HStack>
       </ScrollView>

        </View>
        <LocationModal location={location} setLocation={setLocation} modalVisible={isShowLocationModal} setModalVisible={setIsShowLocationModal}/>
        <EditInputModal currentField={currentField} modalVisible={isEditShowModal} setModalVisible={setIsEditShowModal} formInputData={formInputData} setFormInputData={setFormInputData}/>
    </SafeAreaView>
  )
}

export default Notifications



