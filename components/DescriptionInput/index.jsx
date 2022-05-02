import { Surface, TextInput } from 'react-native-paper';

import styles from './styles';

export default function ({ description, setDescription }) {
  return (
    <Surface style={styles.textInput}>
      <TextInput
        autoComplete='' // typescript bug: reclama quando não coloca a propriedade
        label='Descrição'
        value={description}
        onChangeText={setDescription}
        // mode='outlined'
        multiline={true}
        numberOfLines={10}
      />
    </Surface>
  );
}
