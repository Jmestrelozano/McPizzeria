import React from 'react';
import { ContentView } from '../components/contentView/ContentView';
import { PizzaScreen } from '../components/pizzaScreen/PizzaScreen';

export const PizzaPages = () => {
  return (
    <>
      <ContentView>
        <PizzaScreen />
      </ContentView>
    </>
  );
};
