import * as React from 'react';
import { render } from "@testing-library/react";
import { HotelCollectionComponent } from './hotel-collection.component';

describe ('pods/hotel-collection specs', ()=>{
  describe('hotel-collection.component', () => {
    it('should return values', () =>{

      // Arrange
      const props = {
        hotelCollection: [{
          id: '1',
          picture: 'picture',
          name: 'name Hotel',
          description: 'description',
          rating: 1,
          address: 'address',
        },
        {
          id: '2',
          picture: 'picture 2',
          name: 'name Hotel 2',
          description: 'description 2',
          rating: 2,
          address: 'address 2',
        }],
        'data-testid': 'testIDList',
      }

      // Act
      const { getAllByTestId } = render(<HotelCollectionComponent {...props} />);

      // Assert
      const elements = getAllByTestId(props["data-testid"]);

      expect(elements.length).toEqual(2);
      expect(elements[0].title).toEqual(props.hotelCollection[0].name);
      expect(elements[1].title).toEqual(props.hotelCollection[1].name);
      expect(true).toBe(true);
    });
  });
});
