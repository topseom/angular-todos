import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/take';

@Injectable()
export class TodosService{
    url = "https://haunted-plague-11559.herokuapp.com/api/todos";
    constructor(private http:HttpClient){

    }

    getAll(){
        return new Promise<any>((resolve,reject)=>{
            this.http.get(this.url).subscribe((data)=>{
                resolve(data);
            },(err)=>{
                reject(err);
            });
        });
    }

    add(data){
        return new Promise<any>((resolve,reject)=>{
            this.http.post(this.url,data).subscribe((data)=>{
                resolve(1);
            },(err)=>{
                reject(err);
            });
        });
    }
    update(data){
        return new Promise<any>((resolve,reject)=>{
            this.http.patch(this.url+'/'+data._id,data).subscribe((data)=>{
                resolve(1);
            },(err)=>{
                reject(err);
            });
        });
    }

    remove(id){
        return new Promise<any>((resolve,reject)=>{
            this.http.delete(this.url+'/'+id).subscribe((data)=>{
                resolve(1);
            },(err)=>{
                reject(err);
            });
        });
    }
}