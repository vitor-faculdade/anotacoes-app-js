import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import DescriptionInput from '../../components/DescriptionInput';
import NameInput from '../../components/NameInput';
import SaveCancelButtons from '../../components/SaveCancelButtons';
import * as actions from '../../store/actions';
import globalStyles from '../globalStyles';

export default function ({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSave = async () => {
    dispatch(actions.createAnnotation({ name, description }));
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Title>Criar anotação</Title>

      <NameInput name={name} setName={setName} />

      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />

      <SaveCancelButtons
        onPressSave={handleSave}
        onPressCancel={() => navigation.goBack()}
      />
    </View>
  );
}
