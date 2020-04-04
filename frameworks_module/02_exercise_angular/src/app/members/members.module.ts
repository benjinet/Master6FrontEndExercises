import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {
  MemberInputComponent,
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    MemberInputComponent,
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
  ],
  exports: [
    MembersTableComponent,
  ]
})
export class MembersModule { }
