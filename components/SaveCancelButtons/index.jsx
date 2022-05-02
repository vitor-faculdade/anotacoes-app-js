import { View } from 'react-native';
import SaveButton from '../SaveButton';
import CancelButton from '../CancelButton';

import styles from './styles';

export default function ({ onPressSave, onPressCancel }) {
  return (
    <View style={styles.saveAndCancelButtons}>
      <SaveButton onPressSave={onPressSave} />
      <CancelButton onPressCancel={onPressCancel} />
    </View>
  );
}
