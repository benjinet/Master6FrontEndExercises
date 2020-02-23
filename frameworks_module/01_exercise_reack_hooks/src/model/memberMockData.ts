import { MemberEntity } from './member';

export interface ListMemberEntity {
  name: string;
  member: MemberEntity[];
}

export const MembersMockData: ListMemberEntity[] = [
  {
    name: "lemoncode",
    member: [
      {
        id: 1457912,
        login: 'brauliodiez',
        avatar_url: 'https://avatars.githubusercontent.com/u/1457912?v=3',
      },
      {
        id: 4374977,
        login: 'Nasdan',
        avatar_url: 'https://avatars.githubusercontent.com/u/4374977?v=3',
      },],
  },
  {
    name: "eodis",
    member: [
      {
        id: 1457912,
        login: 'benji',
        avatar_url: 'https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_35_2560_1536/master/2560.jpg?width=300&quality=85&auto=format&fit=max&s=6dc12c01b7d052a59201b5e2b4697ff1',
      },
      {
        id: 4374977,
        login: 'rebeca',
        avatar_url: 'https://vignette.wikia.nocookie.net/lossimpson/images/0/0b/Marge_Simpson.png/revision/latest?cb=20090415001251&path-prefix=es',
      },],
  }
];

export const getMock = (name: string): Promise<ListMemberEntity> => {
  const data = MembersMockData.find(item => item.name === name);
  return Promise.resolve(data);
}