import React from 'react';
import { View } from 'react-native';

import globalStyles from '../globalStyles';

import AnnotationCard from '../../components/AnnotationCard';
import FloatingButton from '../../components/FloatingButton';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

export default function ({ navigation }) {
  const dispatch = useDispatch();
  const annotations = useSelector((state) => state.annotations);

  React.useEffect(() => {
    dispatch(actions.getAllAnnotations());
  }, [dispatch]);

  const handleSelect = (id) => {
    navigation.navigate('Details', { id });
  };

  const handleDelete = (id) => {
    dispatch(actions.deleteAnnotation({ id }));
  };

  return (
    <View style={globalStyles.container}>
      {annotations.map((annotation) => (
        <AnnotationCard
          key={annotation.id}
          annotation={annotation}
          onPressSelect={handleSelect}
          onPressDelete={handleDelete}
        />
      ))}
      <FloatingButton
        icon='plus'
        onPress={() => navigation.navigate('CreateAnnotation')}
      />
    </View>
  );
}
