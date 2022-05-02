import React from 'react';
import { Appbar } from 'react-native-paper';

export default function TopBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title='Anotações' />
    </Appbar.Header>
  );
}
