import React from 'react';
import { ContentView } from '../components/contentView/ContentView';
import { DetailsPizza } from '../components/pizzaScreen/detailsScreen/DetailsPizza';

export const DetailsPages = () => {
  return (
    <>
      <ContentView>
        <DetailsPizza />
      </ContentView>
    </>
  );
};
