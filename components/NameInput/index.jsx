import { Surface, TextInput } from 'react-native-paper';

import styles from './styles';

export default function ({ name, setName }) {
  return (
    <Surface style={styles.textInput}>
      <TextInput
        autoComplete='' // typescript bug: reclama quando não coloca a propriedade
        label='Nome'
        value={name}
        onChangeText={setName}
        // mode='outlined'
      />
    </Surface>
  );
}
