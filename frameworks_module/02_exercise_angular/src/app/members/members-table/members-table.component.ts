import { Component, Input } from '@angular/core';
import { MemberEntity } from '../models/member.model';


@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
   membersParent: MemberEntity[];

}
