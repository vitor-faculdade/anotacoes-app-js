import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import FloatingButton from '../../components/FloatingButton';
import globalStyles from '../globalStyles';

export default function ({ navigation, route }) {
  const annotations = useSelector((state) => state.annotations);
  const { id } = route.params;

  const annotation = annotations.find((a) => a.id === id);

  const handleEdit = () => {
    navigation.navigate('Edit', { id });
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Card.Title title={annotation.name} />
        <Card.Content>
          <Text>{annotation.description}</Text>
        </Card.Content>
      </Card>
      <FloatingButton icon='file-document-edit-outline' onPress={handleEdit} />
    </View>
  );
}
