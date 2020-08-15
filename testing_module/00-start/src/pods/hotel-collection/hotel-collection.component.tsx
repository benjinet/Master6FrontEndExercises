import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HotelEntityVm } from './hotel-collection.vm';
import { HotelCard } from './components/hotel-card.component';

const useStyles = makeStyles({
  listLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

interface Props {
  hotelCollection: HotelEntityVm[];
  'data-testid'?:string;
}

export const HotelCollectionComponent: React.FunctionComponent<
  Props
> = props => {
  const { hotelCollection } = props;
  const classes = useStyles(props);
  const dataTestIdHotelCard = props['data-testid'];

  return (
    <div className={classes.listLayout}>
      {hotelCollection.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel}  data-testid={dataTestIdHotelCard}/>
      ))}
    </div>
  );
};
