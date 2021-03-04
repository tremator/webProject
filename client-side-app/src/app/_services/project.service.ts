import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:5001/api/project/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject(id:string){
    return this.http.get(AUTH_API + id);
  }

  getProjects(){
    return this.http.get(AUTH_API)
  }

  postProject(projectinfo:any){
    return this.http.post(AUTH_API, projectinfo, httpOptions);
  }

  updateproject(id:string, projectinfo:any){
    return this.http.put(AUTH_API + id, projectinfo, httpOptions);
  }

  deleteProject(){
    return
  }

  

}
