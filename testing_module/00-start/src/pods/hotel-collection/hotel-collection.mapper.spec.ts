import { basePicturesUrl } from '../../core';
import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';
import { mapFromApiToVm } from './hotel-collection.mapper';


describe ('hotel-collection/mapper specs', ()=>{
  describe('mapping tests', () => {
    it('should return a HotelEntitityVm when  it feeds a HotelEntityApi ', () =>{
      // Arrange
      const api: apiModel.HotelEntityApi = {
        id: '1',
        type: 'type',
        name: 'name',
        created: new Date(),
        modified: new Date(),
        address1: 'address1',
        airportCode: 'airportCode',
        amenityMask: 1,
        city: 'city',
        confidenceRating: 1,
        countryCode: 'countryCode',
        deepLink: 'deepLink',
        highRate: 1,
        hotelId: 1,
        hotelInDestination: true,
        hotelRating: 1,
        location: {
          latitude: 1,
          longitude: 1,
        },
        locationDescription: 'locationDescription',
        lowRate: 1,
        metadata: {
          path: 'path',
        },
        postalCode: 1,
        propertyCategory: 1,
        proximityDistance: 1,
        proximityUnit: 'proximityUnit',
        rateCurrencyCode: 'rateCurrencyCode',
        shortDescription: 'shortDescription',
        stateProvinceCode: 'stateProvinceCode',
        thumbNailUrl: '/thumbNailUrl',
        tripAdvisorRating: 1,
        tripAdvisorRatingUrl: 'tripAdvisorRatingUrl',
      }

      // Act
      const result:viewModel.HotelEntityVm = mapFromApiToVm(api);

      // Assert
      const expectedResult: viewModel.HotelEntityVm ={
        id: '1',
        picture: `${basePicturesUrl}/thumbNailUrl`,
        name: 'name',
        description: `shortDescription`,
        rating: 1,
        address: 'address1',
      };

      expect(result).toEqual(expectedResult);
    });
  });
});
