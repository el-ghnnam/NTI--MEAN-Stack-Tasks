import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrls: ['./server.css'],
})
export class Server {
  ishere = false;
  users = ['ali', 'ahmed', 'amgad'];
  result = 'error';
  parentUsername = '';

  changeevent(event: any) {
    console.log(event?.target.value);
  }
}
