import { Surface, Button } from 'react-native-paper';

export default function ({ onPressCancel }) {
  return (
    <Surface>
      <Button icon='cancel' onPress={onPressCancel}>
        Cancelar
      </Button>
    </Surface>
  );
}
