import { FAB } from 'react-native-paper';
import styles from './styles';

export default function ({ icon, onPress }) {
  return <FAB icon={icon} style={styles.fab} onPress={onPress} />;
}
