
import  {useState } from 'react'
import {Divider, HStack, Icon, Image, Input, Pressable, ScrollView, Text, TextArea, View, VStack } from 'native-base'
import {Href, Link, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomBackButton from '@/components/customBackButton/Index';
import {brownie,BeefBurger,cheesecake, applogo, emptycircle} from '@/constants/image'
import CustomButton from '@/components/CustomButton/Index';
import DynamicIcons from '@/components/DyanmicIcons';
import { ExternalLink } from '@/components/ExternalLink';
import { Dimensions } from 'react-native';
const Feedback = () => {
    const router=useRouter()
    const [rating,setRating]=useState(0)
    const {height}=Dimensions.get('window')

  return (
    <SafeAreaView>
          <View bg={'white'} p={4}   height={"full"} mt={4}>
        <CustomBackButton onPress={()=>router.push("/(root)/(tabs)/(account)/" )} title='Terms & policies'/> 
            <ScrollView  marginBottom={'40px'} >
            <VStack pt={5}>
                <Text fontWeight={'semibold'}    fontSize={'20px'}>Introduction:</Text>
                <Text pt={2}>Welcome to Lahore In town.These terms and policies govern your use of our app</Text>
            </VStack>
            <VStack pt={5}>
                <Text fontWeight={'semibold'}    fontSize={'20px'}>User Agreement:</Text>
                <Text pt={3}>By using Lahore In town, you agree to these terms.</Text>
                <VStack space={'2.5'} mt={3}>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>Data Collection</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>Data Usage</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>Data Sharing</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>User Rights:</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>Data Security</Text>
                    </HStack>
                </VStack>
            </VStack>
            <VStack pt={5}>
                <Text fontWeight={'semibold'}    fontSize={'20px'}>Legal Disclaimers:</Text>
                <Text pt={3}>By using Lahore In town, you agree to these terms.</Text>
                <VStack space={'2.5'} mt={3}>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>Limitation of Liability</Text>
                    </HStack>
                    <HStack  space={'3'} alignItems={'center'}>
                        <Image source={emptycircle} alt='emptycircle' size={'12px'}/>
                        <Text>Indemnification</Text>
                    </HStack>
                </VStack>
            </VStack>
            <VStack pt={5}>
                <Text fontWeight={'semibold'}    fontSize={'20px'}>Contact Information:</Text>
                <Text pt={2}  >For any questions or support, contact us at <ExternalLink  href='' style={{ 
                    fontFamily:"Poppins-Medium",fontWeight:"500",
                    textDecorationLine:"underline" }}>
                info@lahoreintown.ca
                    </ExternalLink></Text>
            </VStack>
            </ScrollView>

          </View>
    </SafeAreaView>
  )
}

export default Feedback

