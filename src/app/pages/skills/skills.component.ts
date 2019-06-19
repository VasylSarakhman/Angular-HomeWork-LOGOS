import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class TaskComponent implements OnInit {
  userTask: Array<ITask>;
  taskName: string;
  editName: string;
  editIndex: number;
  visability: boolean = true;

  constructor() {
    this.userTask = _userTask;
  }

  ngOnInit() {
  }
  public changeStatus(task: ITask): void {
    task.done = !task.done;
  }
  public createTask(): void {
    this.userTask.push(new Task(this.taskName, false));
    this.taskName = '';
  }
  public removeTask(task: ITask): void {
    const index = this.userTask.indexOf(task);
    this.userTask.splice(index, 1);
  }
  public editTask(index: number, task: ITask): void {
    this.editName = task.name;
    this.editIndex = index;
    this.visability = !this.visability;
  }
  public saveEditTask(): void {
    this.userTask[this.editIndex].name = this.editName;
    this.editName = '';
    this.visability = !this.visability;
  }
}

interface ITask {
  name: string;
  done: boolean;
}

class Task implements ITask {
  constructor(
    public name: string,
    public done: boolean
  ) { }
}

const _userTask: Array<ITask> = [
  <ITask>{
    name: 'HTML',
    done: true
  },
  <ITask>{
    name: 'CSS3',
    done: true
  },
  <ITask>{
    name: 'SCSS',
    done: false
  },
  <ITask>{
    name: 'JavaScript',
    done: false
  },
  <ITask>{
    name: 'jQuery',
    done: false
  },
  <ITask>{
    name: 'Angular',
    done: false
  },
];