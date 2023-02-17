import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import GenericText from './components/GenericText';
import GenericHeader from './components/GenericHeader';
import {requestCameraPermission} from './utils/permission';
import ScanningAnimmation from './ScanningAnimation';

const QRscanner = () => {
  let [isCamera, updateState] = useState(false);
  useEffect(() => {
    // getCameraPermission()
  }, []);
  const getCameraPermission = async () => {
    if (await requestCameraPermission()) {
      updateState(true);
    }
  };
  const onSuccess = e => {
    alert(e.data);
  };

  const renderCustomMarker = () => (
    <View>
      <View style={styles.customstyles} />
      <View style={{top: 20}}>
        <GenericText color={'white'}>
          {' Point the camera to the QR code in'}
        </GenericText>
        <GenericText color={'white'}>
          {'   the Money Lesson Smart Book'}
        </GenericText>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <View style={styles.QR}>
        <GenericHeader
          titleColor={'black'}
          backButtonStyle={styles.backButton}
          style={{top: 20}}
        />
      </View>
      <QRCodeScanner
        showMarker
        customMarker={renderCustomMarker}
        onRead={onSuccess}
        permissionDialogTitle={'Allow mobile to access camera'}
        permissionDialogMessage="We need to access camera to scan QR code"
        cameraStyle={{height: '100%'}}
      />
      <View style={styles.text}>
        <ScanningAnimmation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 40,
  },
  customstyles: {
    width: 250,
    height: 250,
    borderColor: 'grey',
    borderWidth: 4,
    borderRadius: 30,
    marginTop: -160,
  },
  text: {
    position: 'absolute',
    zIndex: 1,
    width: 300,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    bottom: 15,
  },
  QR: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default QRscanner;
