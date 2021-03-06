import { renderHook, act } from '@testing-library/react-hooks';
import { useHotelCollection } from './hotel-collection.hook';


describe ('hotel-collection/hook specs', ()=>{
  describe('userHotelCollection', () => {
    it('should return empty Collection and return a function ', async () => {
      // Arrange

      // Act
      const {result} =  renderHook(() =>  useHotelCollection());

      // Assert
      expect(result.current.hotelCollection).toEqual([]);
      expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
    });
  });
});
