import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MemberEntity } from './models/member.model';

const membersLemoncode: MemberEntity[] = [
  {
   id: 1,
   login: 'string',
   avatar_url: 'https://image.freepik.com/free-photo/cat-lying_1160-435.jpg',

  }
 ];

const membersEodis: MemberEntity[] = [
  {
    id: 1,
    login: 'rebeca',
    avatar_url: 'https://image.freepik.com/free-photo/cat-lying_1160-435.jpg',

   },
   {
    id: 2,
    login: 'benji',
    avatar_url: 'https://image.freepik.com/free-photo/cat-lying_1160-435.jpg',

   },
]

@Injectable({
  providedIn: 'root'
})
export class MembersApiService {
  constructor(private http: HttpClient) { }

  getAllMembers(organizationName: string): Observable<MemberEntity[]> {
    const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
    return this.http.get<MemberEntity[]>(gitHubMembersUrl);

    // console.log(organizationName);
    // let members: MemberEntity[];
    // switch(organizationName){
    //   case 'lemoncode':
    //     members = membersLemoncode;
    //     break;
    //   case 'eodis':
    //     members = membersEodis;
    //     break;
    //   default:
    //     members = [];

    // }


    // return of<MemberEntity[]>(members);
  }
}


