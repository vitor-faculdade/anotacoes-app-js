import { Card, IconButton, Surface } from 'react-native-paper';
import styles from './styles';

export default function ({ annotation, onPressSelect, onPressDelete }) {
  const { id, name } = annotation;

  return (
    <Surface style={styles.card}>
      <Card onPress={() => onPressSelect(id)}>
        <Card.Title title={name} />
        <Card.Actions>
          <IconButton icon='delete-outline' onPress={() => onPressDelete(id)} />
        </Card.Actions>
      </Card>
    </Surface>
  );
}
