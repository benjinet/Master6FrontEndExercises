import { MemberEntity } from '../model/member';
import { getMock } from '../model/memberMockData';
import { promises } from 'dns';

 const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    console.log(response.statusText);
    throw new Error(response.statusText);
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data): Promise<MemberEntity[]> => {
  const members = data.map(({ id, login, avatar_url }) => ({
    id,
    login,
    avatar_url,
  }));

  return Promise.resolve(members);
}; 

const getAllMembers = (organizationName: string): Promise<MemberEntity[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  
/*   return getMock(organizationName).then(data => {
    if (data) {
      return Promise.resolve(data.member);
    } else {
      return Promise.reject('Not found');
    }
  }); */
  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data))
};

export const memberAPI = {
  getAllMembers,
};
