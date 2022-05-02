import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionInput from '../../components/DescriptionInput';
import NameInput from '../../components/NameInput';
import SaveCancelButtons from '../../components/SaveCancelButtons';
import * as actions from '../../store/actions';
import globalStyles from '../globalStyles';

export default function ({ navigation, route }) {
  const dispatch = useDispatch();

  const annotations = useSelector((state) => state.annotations);
  const [newName, setNewName] = React.useState('');
  const [newDescription, setNewDescription] = React.useState('');

  React.useEffect(() => {
    const annotation = annotations.find(
      (annotation) => annotation.id === route.params.id
    );
    setNewName(annotation.name);
    setNewDescription(annotation.description);
  }, []);

  const handleEdit = async () => {
    const { id } = route.params;
    dispatch(actions.editAnnotation({ id, newName, newDescription }));
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Title>Editar anotação</Title>

      <NameInput name={newName} setName={setNewName} />

      <DescriptionInput
        description={newDescription}
        setDescription={setNewDescription}
      />

      <SaveCancelButtons
        onPressSave={handleEdit}
        onPressCancel={() => navigation.goBack()}
      />
    </View>
  );
}
