import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';



interface Props {
  initialOrganization: string;
  onOrganizationUpdated: (newOrganization: string) => any;
}

export const MembersTableComponent: React.StatelessComponent<Props> = props => {
  const [members, setMembers] = React.useState([] as MemberEntity[]);

  const [editingOrganization, setEditingOrganization] = React.useState(props.initialOrganization);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingOrganization(e.target.value);
  }
  const loadMembers = () => {
    memberAPI.getAllMembers(editingOrganization).then(members => setMembers(members));
  };
  console.log(editingOrganization);
  return (
    <div className="row">
      <h2> Members Page</h2>
      <label>Organization: </label>
      <input value={editingOrganization} onChange={onChange} />
      <button onClick={loadMembers}>Load</button>
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
          {members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
