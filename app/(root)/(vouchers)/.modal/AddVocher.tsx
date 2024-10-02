import React from 'react'
import { Button, Input, Modal, ScrollView, Text } from 'native-base';
import CustomButton from '@/components/CustomButton/Index';

const AddVocherModal = ({modalVisible, setModalVisible}:{modalVisible: boolean,setModalVisible:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [size, setSize] = React.useState("lg");
  
  
  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={size} >
        <Modal.Content maxH="247" rounded={'3xl'}>
          <Modal.Header borderBottomWidth={'0'} pb={0}  >
           <Text fontWeight={'semibold'} fontSize={'28px'} fontFamily={'Poppins-SemiBold'}>Add a voucher</Text>
            </Modal.Header>
          <Modal.Body pb={0} pt={'20px'}>
              <Input type='text' keyboardType='number-pad' placeholder='Enter Code' borderWidth={'0'} bg={'primary.bg'} height={'62px'}/>
          </Modal.Body>
          <Modal.Footer borderTopWidth={'0'} >
             <CustomButton title='+ Add' onPress={()=>setModalVisible(false)} rounded='2xl'/>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  )
}

export default AddVocherModal