import { Component, Input } from '@angular/core';
import { Iuser } from '../models/models';
import { UserService } from '../services/user';

@Component({
  selector: 'app-datauser',
  standalone: false,
  templateUrl: '../datauser/datauser.html',
  styleUrl: '../datauser/datauser.css',
})
export class DateUser {
  constructor(private UserService: UserService) {}
  @Input() userid!: number;
  @Input() date_create!: string | Date;
  user!: Iuser;
  ngOnInit(): void {
    // this.user = this.users.find((u) => u.id === this.userid)!;
    this.user = this.UserService.getUserById(this.userid)!;
  }
}
