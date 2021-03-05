import { Component, OnInit } from '@angular/core';
import { ProjectStatusesService } from '../_services/project-statuses.service';
import { TaskService } from '../_services/task.service';
import { ProjectService } from '../_services/project.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public statuses: any;
  public task: any;
  public project: any;
  errorMessage = '';

  constructor(private projectId: string, private projectservices: ProjectService, private taskservice: TaskService, private projectstatusesservice: ProjectStatusesService) {
    this.statuses = [];
    this.task = [];
    this.project = [];
  }

  /*
  All Status Initialize
  */
  ngOnInit(): void {

    
    this.projectservices.getProject(this.projectId).subscribe(
      (response)=>{
        this.project = response;
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
       
      }
    )  
  
  }

}
