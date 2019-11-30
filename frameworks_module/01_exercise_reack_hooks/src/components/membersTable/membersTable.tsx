import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';



interface Props {
  initialOrganization: string;
  onOrganizationUpdated: (newOrganization: string) => any;
}

const useMemberCollection = () => {
  const [memberCollection, setMemberCollection] = React.useState<
    MemberEntity[]
  >([]);

  const loadMemberCollection = (editingOrganization) => {
    console.log(editingOrganization);
    memberAPI.getAllMembers(editingOrganization).then(memberCollection => setMemberCollection(memberCollection)).catch(error => console.error(`Organization number ${editingOrganization} was not found`));
  };

  return { memberCollection, loadMemberCollection };
};


export const MembersTableComponent: React.StatelessComponent<Props> = props => {
  const { memberCollection, loadMemberCollection } = useMemberCollection();

  const [editingOrganization, setEditingOrganization] = React.useState(props.initialOrganization);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingOrganization(e.target.value);
  }

  React.useEffect(()=>{
    console.log(editingOrganization);
    loadMemberCollection(editingOrganization);
   },[]);
  
/*    const loadMembers = () => {
    memberAPI.getAllMembers(editingOrganization).then(members => setMembers(members));
  };  */
  
  return (
    <div className="row">
      <h2> Members Page</h2>
      <label>Organization: </label>
      <input value={editingOrganization} onChange={onChange}/>
      <button onClick={() =>loadMemberCollection(editingOrganization)}>Load</button>
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
          {
          memberCollection.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
