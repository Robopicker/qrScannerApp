import {
  PERMISSIONS,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import {Platform} from 'react-native';

export const cameraPermission =
  Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

export const requestCameraPermission = () =>
  request(cameraPermission)
    .then(result => {
      // [RESULTS.UNAVAILABLE]: 'This feature is not available (on this device / in this context)'
      if (result === RESULTS.UNAVAILABLE) {
        return Promise.resolve(false);
      }

      // [RESULTS.DENIED]: 'The permission has not been requested / is denied but requestable'
      if (result === RESULTS.DENIED) {
        return Promise.resolve(false);
      }

      // [RESULTS.LIMITED]: 'The permission is limited: some actions are possible'
      // [RESULTS.BLOCKED]: 'The permission is denied and not requestable anymore'
      if ([RESULTS.LIMITED, RESULTS.BLOCKED].includes(result)) {
        return openSettings().catch(() => Promise.resolve(false));
      }

      // [RESULTS.GRANTED]: 'The permission is granted'
      return Promise.resolve(true);
    })
    .catch(() =>
      Promise.reject(
        new Error('Please open settings and give camera permission'),
      ),
    );
