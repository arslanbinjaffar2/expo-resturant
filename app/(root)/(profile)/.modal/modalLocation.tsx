import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { Button, Modal, Text } from 'native-base';
interface Props{
    location: string
    setLocation:React.Dispatch<React.SetStateAction<string>>
    modalVisible:boolean
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>
}
export default function LocationModal({location,setLocation,modalVisible,setModalVisible}:Props) {
    const [errorMsg, setErrorMsg] = useState("");
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const [address, setAddress] = useState('');

    const userLocation = async () => {
        // Request location permissions
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        // Get current location
        let location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        // Update map region
        setMapRegion({
            latitude,
            longitude,
        });

        // Get address from location
        let reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (reverseGeocode.length > 0) {
            const address = reverseGeocode[0];
            setAddress(`${address.street}, ${address.city}, ${address.region}, ${address.country}`);
        }
    };

    useEffect(() => {
        userLocation();
    }, []);
    const handleConfirmChange=()=>{
        if(address==""){
            return;
        }
        setLocation(address)
        setModalVisible(false)
    }
    return (
        <Modal isOpen={modalVisible} onClose={setModalVisible} size={"full"} >
        <Modal.Content maxH="full" height={'full'} rounded={'3xl'}>
          <Modal.Header borderBottomWidth={'0'} pb={0}  >
            </Modal.Header>
          <Modal.Body pb={0} pt={'20px'}>
          <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: mapRegion.latitude,
                    longitude: mapRegion.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }}
                    title="Current Location"
                />
            </MapView>
            <Button onPress={userLocation} >
                Get Location
            </Button>
            {address ? (
                <Text style={styles.address}>{address}</Text>
            ) : (
                <Text style={styles.address}>{errorMsg || 'Fetching address...'}</Text>
            )}
        </View>
          </Modal.Body>
          <Modal.Footer borderTopWidth={'0'} >
            <Button onPress={handleConfirmChange} rounded={'2xl'} width={'100%'} bg={'primary.boxbutton'} _text={{ color:"white",fontSize:"20px",fontWeight:"semibold",fontFamily:"heading" }}>  
              Save location
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    map: {
        width: '100%',
        height: 1000,
    },
    address: {
        textAlign: 'center',
        margin: 10,
    },
});
