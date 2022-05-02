import { Surface, Button } from 'react-native-paper';

export default function ({ onPressSave }) {
  return (
    <Surface>
      <Button onPress={onPressSave} icon='content-save' mode='contained'>
        Salvar
      </Button>
    </Surface>
  );
}
