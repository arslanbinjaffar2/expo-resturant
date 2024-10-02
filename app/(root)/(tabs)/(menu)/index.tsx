import {Icon, Box, Button, Center, FlatList, Heading, HStack, Image, Input, PresenceTransition, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { Divider } from 'native-base';
import { useRouter } from 'expo-router';
import { DimmymenuList } from '@/constants/data';
import CustomButton from '@/components/CustomButton/Index';
import { Dimensions,  useWindowDimensions } from 'react-native';
import DynamicIcons from '@/components/DyanmicIcons';
import { foodiesfeed } from '@/constants/image';
import Animated from 'react-native-reanimated'
import  AntDesign  from '@expo/vector-icons/AntDesign'

const Index = () => {
  const router = useRouter();
  const [isLayout,setIsLayout]=useState("grid")
  const navigateToMenu = (id:any) => {
    router.push(`/(menu)/menu-details/1`);
  };
  const scrollViewRef = useRef<any>(null);
  const Header_Max_Height = 340;
  const Header_Min_Height = 120;
  const [headerHeight, setHeaderHeight] = useState(Header_Max_Height);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isScrollContentEnd,setIsScrollContetnEnd]=useState(false)

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
  
    if (scrollY + screenHeight >= contentHeight) {
      console.log('User has scrolled to the end of the content');
      setIsScrollContetnEnd(true)
    }
  };
  const scrollToStart=()=>{
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
      setIsScrollContetnEnd(false)
  }
  const DynamicHeader = () => {
    return (
      <Box 
      >
         <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mt={5}>
        <Text     fontSize={'3xl'} fontWeight={'semibold'} color={'primary.text'} >Welcome, Josh!</Text>
        <Pressable
          p="2"
          rounded={'full'}
          backgroundColor={"primary.bg_2"}
          onPress={()=>router.push("/(notifications)")}>
            <Icon as={MaterialIcons} name='notifications' size={'lg'} color={'#000'}/>
        </Pressable>
        </Box >
        <Text fontFamily={'body'} fontSize={'20px'} fontWeight={'normal'} color={'primary.text'}>
        Explore our exquisite menu, A feast of flavors awaits
        </Text>
        <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Input rounded={'lg'} bg={"primary.bg"} placeholder='search' width={'90%'} h={'62px'} 
        borderWidth={'0'} 
        borderColor={'primary.bordercolor'} outlineColor={"primary.bordercolor"}
        placeholderTextColor={"primary.placeholderColor"}
        fontSize={'md'} fontWeight={'normal'}
        color={"primary.textasa"}
        />
        <Pressable
          onPress={()=>{
            router.push("/(filters)" )
          }}>
         <DynamicIcons iconType='Icofilter'/>   
        </Pressable>
        </Box>
        <HStack justifyContent={'flex-end'} alignItems={'center'} space={3} mt={'3'}>
          <Pressable bg={`${isLayout=="grid"?"red.500":"primary.bg"}`} p={2} rounded={'lg'} onPress={()=>setIsLayout("grid")}>
          <Icon as={Ionicons} name='grid' size={'20px'} color={isLayout=="grid"?"white":"primary.text"}/>
          </Pressable>
          <Pressable bg={`${isLayout=="list"?"red.500":"primary.bg"}`} p={2} rounded={'lg'} onPress={()=>setIsLayout("list")} >
          <Icon as={FontAwesome5} name='th-list' size={'20px'} color={isLayout=="list"?"white":"primary.text"}/>
          </Pressable>
        </HStack>
      </Box>
    );
  };
  return (
    <SafeAreaView >
      <View px={5}>
      <ScrollView 
    ref={scrollViewRef}
    onScroll={handleScroll}
    scrollEventThrottle={5}
    bounces={false}
    nestedScrollEnabled={true}
    persistentScrollbar={true}
    showsVerticalScrollIndicator={false}
    width={'100%'}
    bg={'white'}
    height={'full'}
    marginBottom={'24'}>
      <DynamicHeader />
       <>
       <HStack space={3} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mt={3} >
        <Text    color={"primary.textRed"} fontSize={'sm'} fontWeight={'semibold'}>Main Course</Text>
        <Divider
         width={'100%'}
        bg={"primary.bordercolor"}
        />
       </HStack>
        <VStack space={'3'} mt={3} width={'100%'} >
         {DimmymenuList.map(({category,description,img,name,price},i)=>{
          return(
            <>
            {category=="maincourse" &&   
            <SingleItem category={category} description={description} name={name} i={i} price={price} navigateToMenu={navigateToMenu}
            key={name}
            img={img} isLayout={isLayout}/>}
            </>
          )
         })}
        </VStack>
        <HStack space={3} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}  mt={3}>
        <Text    color={"primary.textRed"} fontSize={'sm'} fontWeight={'semibold'}>Desert</Text>
        <Divider
        width={'100%'}
        bg={"primary.bordercolor"}
        />
       </HStack>
       <VStack space={'3'} mt={3}>
         {DimmymenuList.map(({category,description,img,name,price},i)=>{
          return(
            <>
            {category=="desert" &&   
            <SingleItem category={category} description={description} name={name} i={i} price={price} navigateToMenu={navigateToMenu}
            key={name}
            isLayout={isLayout}
            img={img}/>}
            </>
          )
         })}
        </VStack>
       </>
      </ScrollView >
       <CustomButton title='Order Now'  mt={'auto'} position='fixed' bottom={'90px'} />
     {isScrollContentEnd &&  <Button position={'absolute'} right={0} bottom={'190px'} bg={'blue.100'} width={'50px'} height={'50px'} rounded={'full'} mr={'2'} onPress={()=>scrollToStart()}>
        <Icon as={AntDesign} name='arrowup' size={'28px'}  color={'primary.text'}/>
       </Button>}
      </View>

    </SafeAreaView>
  )
}

export default Index



interface Props{
  category:string
  navigateToMenu:(id:number)=>void
  price:number | string
  i:number
  name:string
  description:string
  img:any
  isLayout?:any
  setIsLayout?:any
}

const SingleItem=({category,navigateToMenu,price,i,name,description,img,isLayout}:Props)=>{
  return(
<>
  {isLayout == "grid" &&   <PresenceTransition
    visible={isLayout == "grid" }  initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 250,
        delay:100,
        
      }
    }}
    >
    <GridLayout
    category={category}
    description={description}
    name={name}
    i={i}
    price={price}
    navigateToMenu={navigateToMenu}
    key={name}
    img={img}
    />
    </PresenceTransition>}
{ isLayout == "list" &&   <PresenceTransition
    visible={isLayout == "list" } initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      transition: {
        duration: 500
      }
    }}
    >
    <ListLayout
    category={category}
    description={description}
    name={name}
    i={i}
    price={price}
    navigateToMenu={navigateToMenu}
    key={name}
    img={img}
    />
     </PresenceTransition>}
  </>
  )
}

const GridLayout=({category,navigateToMenu,price,i,name,description,img}:Props)=>{
  const {width}=useWindowDimensions()
  return(
      <VStack key={i} width={'100%'} justifyContent={'center'} alignItems={'center'} bg={'primary.bg'} rounded={'lg'} p={'3'}> 
            <Pressable onPress={()=>navigateToMenu(1)}>
             <VStack  alignItems={'flex-start'} >
             <Image width={width} height={'220px'} borderRadius={'3xl'} source={img}  alt="Alternate Text" />
            </VStack>
            <HStack pt={3}>
              <Text fontSize={'lg'} fontWeight={'semibold'} color={"primary.text"}  textBreakStrategy='balanced'  isTruncated width={'70%'}>{name}</Text>
             <Text ml={'auto'}  fontSize={'md'} fontWeight={'medium'} color={"primary.text"}  >$ {price}</Text>
            </HStack>
            {/* <Text mt={'6px'} fontSize={'md'} fontWeight={'normal'} >{description}</Text> */}
            </Pressable>
          </VStack>
  )
}



const ListLayout=({category,navigateToMenu,price,i,name,description,img}:Props)=>{
  return(
    <>
      <Fragment key={i}>
        
            <Pressable onPress={()=>navigateToMenu(1)}>
             <HStack  alignItems={'flex-start'} >
             <Box>
             <Image size={"64px"} borderRadius={'md'} source={img}  alt="Alternate Text" />
            </Box>
             <Box ml={3} flexDirection={'column'}  >
               <Text fontSize={'lg'} fontWeight={'semibold'} color={"primary.text"}  textBreakStrategy='balanced'  isTruncated width={'70%'}>{name}</Text>
               <Text mt={'6px'} fontSize={'md'} fontWeight={'normal'} color={"primary.text"} textBreakStrategy='balanced'  pr={10}>{description}</Text>
             </Box>
             <Text ml={'auto'}  fontSize={'md'} fontWeight={'medium'} color={"primary.text"}  >$ {price}</Text>
            </HStack>
            </Pressable>
          </Fragment>
    </>
  )
}