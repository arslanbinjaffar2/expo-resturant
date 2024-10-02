
import  {useState } from 'react'
import {Divider, HStack, Icon, Image, Input, Pressable, Text, TextArea, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomBackButton from '@/components/customBackButton/Index';
import {brownie,BeefBurger,cheesecake} from '@/constants/image'
import CustomButton from '@/components/CustomButton/Index';
const Feedback = () => {
    const router=useRouter()
    const [rating,setRating]=useState(0)
  return (
    <SafeAreaView>
          <View bg={'white'} p={4}   height={"full"}>
        <CustomBackButton onPress={()=>router.push("/(root)/(tabs)/(account)/" )} title='Feedback'/>
        <TextArea autoCompleteType={'undefined'} h={200} placeholder="Tell Us About Your Feedback" w="100%" bg={'primary.bg'}  borderWidth={'0'} mt={'3.5'} 
    
        />
     {/* rating */}
     <VStack mt={4}>
        <Text    fontSize={'lg'} fontWeight={'semibold'}>Rate us</Text>
        <HStack space={3} mt={3} alignItems={'center'}>
      {Array(5)
        .fill('')
        .map((_, i) => (
          <Pressable 
          onPress={() => setRating(i + 1)}
          >
          <Icon
            key={i}
            as={Entypo}
            name={i < rating ? "star" : "star-outlined"}
            size={'2xl'}
            color={i < rating ? "primary.ratingColor" : "secondary.text"}
            />
            </Pressable>
        ))}
      <Text color={"primary.placeholderColor"}>{rating} star</Text>
    </HStack>

      </VStack>

        <CustomButton title='Submit'  mt={'auto'} position='fixed' bottom={'20px'} onPress={()=>{}}/>
          </View>
    </SafeAreaView>
  )
}

export default Feedback

