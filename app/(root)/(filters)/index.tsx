
import  {useState } from 'react'
import {HStack, Icon, Input, KeyboardAvoidingView, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import {useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import  Entypo  from '@expo/vector-icons/Entypo';
import {Platform, StyleSheet} from 'react-native'
const Filter = () => {
    const router=useRouter()
    const [filter, setFilter] = useState<string[]>([]);
    const [rating,setRating]=useState(0)
  return (
    <SafeAreaView>
    <View bg={'white'} p={4}   height={"full"}>
    <ScrollView marginBottom={Platform.OS=="android"?"10":"24"} pr={'2'}>
        <HStack  mt={4} justifyContent={'space-between'} alignItems={'center'}>
        <CustomBackButton onPress={()=>router.push("/(menu)")} title='Filters'/>
        <HStack alignItems={'center'} space={2}>
    <Pressable   onPress={()=>router.push("/(menu)")}  width={'32px'} h={'32px'} rounded={'full'} justifyContent={'center'} alignItems={'center'}  >
      <DynamicIcons iconType='Icoautonew'/>
    </Pressable>
    <Text fontWeight={'semibold'} fontFamily={'Poppins-SemiBold'}>Clear</Text>
        </HStack>
        </HStack>
        <HStack mt={'20px'} flexWrap={'wrap'}>
         {DimmyFilters.map((filtername,i)=>{
            return(
                <Pressable key={filtername+i}
                mt={3}
                ml={2}
                px="3"
                py={'2.5'}
                borderWidth="0"
                bg={filter.includes(filtername)? "primary.boxbutton" : "primary.bg"}
               
                rounded={'full'}
                onPress={() => {
                  setFilter((prev) =>
                    prev.includes(filtername) ? prev.filter((f) => f !== filtername) : [...prev, filtername]
                  );
                }}
            
            >
                <Text    color={ filter.includes(filtername)?"white":"primary.text"}>{filtername}</Text>
            </Pressable>
            )
         })}
            
        </HStack>
        {/* range */}
        <VStack mt={3}>
        <Text fontWeight={'medium'}   fontSize={'lg'}> Price ($)</Text>
      <RangeSlider/>
        </VStack>
      {/* rating */}
      <VStack mt={3}>
        <Text    fontSize={'lg'} fontWeight={'semibold'}>Rating</Text>
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
      </ScrollView>

        <CustomButton title='Apply'  mt={'auto'} position='fixed' bottom={'0px'} onPress={()=> router.push("/(menu)")}/>
    </View>
    </SafeAreaView>
  )
}

export default Filter

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { DimmyFilters } from '@/constants/data';
import CustomButton from '@/components/CustomButton/Index';
import CustomBackButton from '@/components/customBackButton/Index';
import DynamicIcons from '@/components/DyanmicIcons';


const CustomMarkerLeft = (props: any) => {
  return (
    <View style={styles.markerContainer}>
      <View style={styles.markerLeft} />
      <View style={styles.tooltip}>
        <Text style={styles.tooltipText}>Min: {props.value} hee</Text>
      </View>
    </View>
  );
};

const CustomMarkerRight = (props: any) => {
  return (
    <View position={'absolute'} top={"-20"}>
      <View style={styles.markerRight} width={"40px"} height={"20px"} rounded={'lg'} />
      <View style={styles.tooltip}>
        <Text style={styles.tooltipText}>Max: {props.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    markerContainer: {
      position: 'absolute',
      top: -20,
    },
    markerLeft: {
      width: 40,
      height: 20,
      borderRadius: 10,
      position: 'absolute',
      left: -10,
    },
    markerRight: {
      width: 20,
      height: 20,
      borderRadius: 10,
      position: 'absolute',
      right: -10,
    },
    tooltip: {
      position: 'absolute',
      backgroundColor: '#D72E34',
      borderColor: 'gray',
      borderWidth: 5,
      padding: 5,
      top: 20, // Adjusted to position the tooltip below the marker
      left: -10,
      width:200,
      height:200
    },
    tooltipText: {
      fontSize: 12,
    },
  });
const RangeSlider=()=>{
    
    const [twoWayValue, setTwoWayValue] = useState([10, 1000]);
    
   
    
    const handleTwoWaySliderChange = (value: React.SetStateAction<number[]>) => {
      setTwoWayValue(value);
    };
    
  
return (
  <VStack>
  <HStack space={3} alignItems={'center'} width={"100%"}>
    <Text > {twoWayValue[0]}</Text>
    <MultiSlider
      // customMarkerLeft={(props) => <CustomMarkerLeft {...props} value={twoWayValue[0]} />}
      // customMarkerRight={(props) => <CustomMarkerRight {...props} value={twoWayValue[1]} />}
      values={twoWayValue}
      onValuesChange={handleTwoWaySliderChange}
      sliderLength={220}
      min={0}
      max={100}
      step={1}
      allowOverlap={false}
      snapped={true}
      markerStyle={{ backgroundColor: '#D72E34',height:20,width:20 }}
      selectedStyle={{ backgroundColor: '#D72E34',height:6 }}
      unselectedStyle={{ backgroundColor: '#F3F5F8' ,height:6}}
      />
    <Text> {twoWayValue[1]}</Text>

  </HStack>
  <HStack  space="2.5" alignItems="center">
  <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{marginBottom:Platform.OS === 'ios' ?40:0}}
    >
  <Input keyboardType='numbers-and-punctuation' width={'100px'} height={'48px'}  borderWidth={0} bg={'primary.bg'} placeholder='Min' rounded={'lg'} />
    </KeyboardAvoidingView>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{marginBottom:Platform.OS === 'ios' ?40:0}}
    >
  <Icon name='dash' as={Octicons} color={"primary.text"}/>
    </KeyboardAvoidingView>
  <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{marginBottom:Platform.OS === 'ios' ?40:0}}
    >
  <Input keyboardType='numbers-and-punctuation' width={'100px'} height={'48px'} borderWidth={0} bg={'primary.bg'}  placeholder='Max' rounded={'lg'}/>
    </KeyboardAvoidingView>
  </HStack>
  

  </VStack>
);
}
