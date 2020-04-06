import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-member-input',
  templateUrl: './member-input.component.html',
  styles: []
})
export class MemberInputComponent{

  @Input() members: MemberEntity[];
  @Output() childEvent = new EventEmitter();

  constructor(private membersApi: MembersApiService) { }

  loadMembers(organization:string) {
    this.membersApi.getAllMembers(organization)
      .subscribe(
        (ms) =>{ this.members = ms;  console.log("organization: ", organization); this.childEvent.emit(ms);},
        (error) => console.log(error)
      );

  }


}
