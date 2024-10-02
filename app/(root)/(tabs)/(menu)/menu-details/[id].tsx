import React, { useState } from 'react'
import { Box, Button, Divider, FlatList, HStack, Icon, Image, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import pastawhite from '@/assets/images/pasta(whitesauce).png'
import  Entypo  from '@expo/vector-icons/Entypo';
import CustomButton from '@/components/CustomButton/Index';
import { Dimensions } from 'react-native';
const Detail = () => {
  const {id} = useLocalSearchParams();
  const router=useRouter()
  const [favourite,setFavourite]=useState(false)
  const {width}=Dimensions.get('screen')
  return (
    <SafeAreaView >
    <View bg={'white'} py={'24px'}  px={5} h={'full'}>
      <Pressable onPress={()=>router.push("/(menu)")} bg={"primary.bg_2"} width={'32px'} h={'32px'} rounded={'full'} justifyContent={'center'} alignItems={'center'}  >
    <Icon as={MaterialIcons} name="chevron-left" size={'2xl'} color="primary.text" />
    </Pressable>
    <ScrollView 
    scrollEventThrottle={5}
    bounces={false}
    nestedScrollEnabled={true}
    persistentScrollbar={true}
    showsVerticalScrollIndicator={false}
    width={'100%'}
    bg={'white'}
    height={'full'}
    marginBottom={'24'}
    >
    <View bg={"primary.bg"} rounded={'lg'} mt={5} justifyContent={'center'} alignItems={'center'} p={"20px"} h={'200px'}>
   <Image source={pastawhite} alt='pasta sauce' width={"227px"} height={'142px'}/>
   <Pressable onPress={()=>setFavourite(true)} ml={'auto'} mb={'4'}>
   <Icon as={MaterialIcons} name="favorite" size={'lg'} color={favourite?"primary.boxbutton":"primary.placeholderColor"}  />
   </Pressable>
    </View>
    <HStack my={5} justifyContent={'center'} alignItems={'center'} width={"100%"} px={'20px'}  space={3}>
     <View pr={width<=413?'5':"32px"} borderRightWidth={'1'} borderColor={"primary.bordercolor"}>
      <Text fontSize={'md'} fontWeight={'semibold'} fontFamily={'Poppins-SemiBold'}>Price</Text>
      <Text fontSize={'md'} mt={2} fontWeight={'normal'}>$12.6</Text>
     </View>
     <View px={width<=413?'5':"32px"} borderRightWidth={'1'} borderColor={"primary.bordercolor"}>
      <Text fontSize={'md'} fontWeight={'semibold'} fontFamily={'Poppins-SemiBold'}>Category</Text>
      <Text fontSize={'md'} mt={2} fontWeight={'normal'}>Main Course</Text>
     </View>
     <View>
      <Text fontSize={'md'} fontWeight={'semibold'} fontFamily={'Poppins-SemiBold'}>Rating</Text>
      <Box flexDirection={'row'} alignItems={'center'} mt={2}>
        <Icon as={Entypo} name='star' size={'2xl'} color={"primary.ratingColor"}/>
        <Text fontSize={'md'} ml={2} fontWeight={'normal'}>4 stars</Text>
        </Box>
     </View>
    </HStack>
      <VStack>
       <Text fontSize={'28px'} fontWeight={'semibold'} fontFamily={'Poppins-SemiBold'}>Pasta (White sauce)</Text>
       <Text mt={3}>Perfectly cooked pasta with zesty tomato sauce, Italian herbs, garlic, and a sprinkle of fresh parsley 
       </Text >
       <Text mt={'5'}> Classic pasta with robust Bolognese sauce,
       ground beef, ripe tomatoes, and a topping of Parmesan cheese.</Text>
       <Text fontWeight={'semibold'} mt={'18px'}>Delivery Information:</Text>
       <Text>Perfectly cooked pasta with zesty tomato sauce, Italian herbs, garlic, and a sprinkle of fresh parsley </Text>
      </VStack>
    </ScrollView>
      <CustomButton title='Order Now'  rounded='2xl' mt={'auto'} position='fixed' bottom={'60px'} />
    </View>
    </SafeAreaView>
  )
}

export default Detail