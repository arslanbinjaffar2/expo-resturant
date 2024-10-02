import React, { useState } from 'react'
import { Button, Input, Modal,  PresenceTransition,  Text } from 'native-base';
interface Props{
  formInputData: any
  modalVisible: boolean
  currentField:any
  setModalVisible:React.Dispatch<React.SetStateAction<boolean>>
  setFormInputData: React.Dispatch<React.SetStateAction<any>>
}
const EditInputModal = ({modalVisible, setModalVisible,formInputData,setFormInputData,currentField}:Props) => {  
  const [tempValue, setTempValue] = useState('');

 
  React.useEffect(() => {
    setTempValue(formInputData[currentField.toLowerCase()]);
  }, [currentField, formInputData]);

 
  const handleUpdateTempValue = (value: string) => {
    setTempValue(value);
  };

  
  const handleConfirmChange = () => {
    setFormInputData((prev:any) => ({
      ...prev,
      [currentField.toLowerCase()]: tempValue,
    }));
    setTempValue("")
    setModalVisible(false); 
  };
  return (
    <PresenceTransition visible={modalVisible} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 250
      }
    }}>
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={"lg"} >
        <Modal.Content maxH="247" width={'90%'} rounded={'3xl'}>
          <Modal.Header borderBottomWidth={'0'} pb={0}  >
           <Text fontWeight={'semibold'} fontSize={'28px'} fontFamily={'Poppins-SemiBold'}>Edit Profile {currentField.toLowerCase()}</Text>
            </Modal.Header>
          <Modal.Body pb={0} pt={'20px'}>
              <Input type='text' keyboardType='default' placeholder={`Please Enter  ${currentField.toLowerCase()}`} borderWidth={'0'} bg={'primary.bg'} height={'62px'}
              onChangeText={(text: string) => handleUpdateTempValue(text)}
              value={tempValue}
              />
          </Modal.Body>
          <Modal.Footer borderTopWidth={'0'} >
            <Button onPress={handleConfirmChange} rounded={'2xl'} width={'100%'} bg={'primary.boxbutton'} _text={{ color:"white",fontSize:"20px",fontWeight:"semibold",fontFamily:"heading" }}>  
              Save
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </PresenceTransition>

  )
}

export default EditInputModal