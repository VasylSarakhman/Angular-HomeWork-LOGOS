// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.css']
// })
// export class BlogComponent implements OnInit {

//   constructor() { }

  // ngOnInit() {
  // }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  title = 'HomeWork02';
  messages: Array<IBlog> = [];
  userName: string = 'Guest';
  subject: string;
  notice: string;
  date: any;
  index: number;
  changeTitle: string;
  changeComment: string;
  editIndex: number;

  public sendNotice(): void {
    this.date = new Date();
    this.messages.push(new Blog(this.subject, this.notice, this.userName, this.date));
    this.subject = '';
    this.notice = '';
  }
  public editNotice(message: IBlog): void {
    this.editIndex = this.messages.indexOf(message);
    this.changeTitle = message.subject;
    this.changeComment = message.notice;
  }
  public saveEditNotice(): void {
    this.messages[this.editIndex].subject = this.changeTitle;
    this.messages[this.editIndex].notice = this.changeComment;
  }

  public deleteNotice(message: IBlog): void {
    const index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
  }

  ngOnInit() {
  }
}

interface IBlog {
  subject: string;
  notice: string;
  userName: string;
  date: any;
}

class Blog implements IBlog {
  constructor(
    public subject: string,
    public notice: string,
    public userName: string,
    public date: any
  ) { }
}