import * as React from 'react';
import {render } from "@testing-library/react";
import { HotelCard } from './hotel-card.component';

describe ('pods/hotel-collection/components specs', ()=>{
  describe('hotel-card', () => {
    it('should return valid value for Card', () =>{
      // Arrange
      const props = {
        hotel: {
          id: '1',
          picture: 'picture',
          name: 'name Hotel',
          description: 'description',
          rating: 1,
          address: 'address',
        },
        'data-testid': 'cardMediaidTesting',
      }

      // Act
      const { getByText, getByTestId } = render ( <HotelCard {...props} />);

      // Assert
      const picture = getByTestId(props["data-testid"]);
      const name = getByText(props.hotel.name);
      const description = getByText(props.hotel.description);
      const address = getByText(props.hotel.address);
      const rating = getByText(props.hotel.rating.toString());

      expect(picture).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(rating).toBeInTheDocument();
    });


  });
});
