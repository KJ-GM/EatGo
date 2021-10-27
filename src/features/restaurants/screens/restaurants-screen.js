import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area-component';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../component/restaurant_info_card-component';
import { Spacer } from '../../../components/spacer/spacer-component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants-context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../component/search-component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer direction='bottom' variant='large'>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
