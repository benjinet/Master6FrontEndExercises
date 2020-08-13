import { mapToCollection } from './collection.mapper';

interface api {
  id: number;
  name: string;
}

interface vm {
  id: string;
  name: string;
}

const mapFromApiToVm =  (element: api): vm =>({
  id: element.id.toString(),
  name: element.name,
});




describe ('common/mappers specs', ()=>{

  describe('Collection mapper Test', () => {
    it('undefined collection should return empty collection', () =>{
      // Arrange
      const members:api[] = undefined;

      // Act
      const result = mapToCollection(members, mapFromApiToVm);

      // Assert
      const expectedResult:vm[] =[];
      expect(result).toEqual(expectedResult);

    });
    it('null collection should return empty collection', () =>{
       // Arrange
      const members:api[] = null;

      // Act
      const result = mapToCollection(members, mapFromApiToVm);

      // Assert
      const expectedResult:vm[] =[];
      expect(result).toEqual(expectedResult);
    });
    it('empty collection should return empty collection', () =>{
       // Arrange
      const members:api[] = [];

      // Act
      const result = mapToCollection(members, mapFromApiToVm);

      // Assert
      const expectedResult:vm[] =[];
      expect(result).toEqual(expectedResult);
    });
    it('one value in collection should return collection with one value', () =>{
       // Arrange
      const members:api[] = [{
        id:1,
        name: 'Pepe',
      }];
      // Act
      const result = mapToCollection(members, mapFromApiToVm);
      // Assert
      const expectedResult:vm[] = [{
        id:'1',
        name: 'Pepe',
      }];
      expect(result).toEqual(expectedResult);
    });
    it('collection should return  collection', () =>{
      // Arrange
      const members:api[] = [{
        id:1,
        name: 'Pepe',
      },{
        id:2,
        name: 'Juan',
      }];
      // Act
      const result = mapToCollection(members, mapFromApiToVm);
      // Assert
      const expectedResult:vm[] = [{
        id:'1',
        name: 'Pepe',
      },{
        id:'2',
        name: 'Juan',
      }];
      expect(result).toEqual(expectedResult);
    });
  });
});
