import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminServiceService } from '../admin-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
 
  loanAmount: any;
  users: Observable<User[]> | any; //object used to store data from rest api


  constructor(
    private router:Router,
    private userservice:UserServiceService,
    private userloginService:AuthenticationService
    ) { }

  ngOnInit(): void {
    this.reloadData();
    this.loan();
    this.listuser();
  }

  reloadData() {
    this.users = [];
    
    this.userservice.findallusers().subscribe(res=>{
      debugger
      this.users= res;
    });
   
    
  }
  loan(){

    this.loanAmount=[];

    this.userservice.findalluserdetails().subscribe(res=>{
      debugger
      this.loanAmount=res;
    });
  }

  updateuser(id:any){
    this.userservice.updateuser(id).subscribe(r=>{

    });
    this.users = [];
    
    this.userservice.findallusers().subscribe(res=>{
      debugger
      this.users= res;
    });
  }

  deleteUser(id:string){
    this.userservice.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  docDetails(id:string)
  {
    this.router.navigate(['admin-doc-details' ,id]);
  }
  
  listuser(){
    this.users = [];
    this.userservice.getUserList().subscribe(res=>{
      debugger
      this.users= res;
    });
  }
  adminLogout() {

    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
function editUser(id: any, string: any) {
  throw new Error('Function not implemented.');
}









// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// import { AdminServiceService } from '../admin-service.service';
// import { UserServiceService } from '../user-service.service';
// import { User } from '../user';
// import { AuthenticationService } from '../authentication.service';
// import { HttpClient } from '@angular/common/http';
// import { Details } from '../details';

// @Component({
//   selector: 'app-admin-homepage',
//   templateUrl: './admin-homepage.component.html',
//   styleUrls: ['./admin-homepage.component.css']
// })
// export class AdminHomepageComponent implements OnInit {

 
//   loanAmount: any;
//   users: Observable<User[]> | any;
//   user: User | any;
//   details : Details[] | any;

//   constructor(
//     private router:Router,
//     private userservice:UserServiceService,
//     private userloginService:AuthenticationService,
//     private http:HttpClient
//     ) { }

//   ngOnInit(): void {
//     this.reloadData();
//     // this.loan();
  
//   }

//   reloadData() {
//     this.users = [];
    
//     this.userservice.findallusers().subscribe(res=>{
//       debugger
//       this.users= res;
//     });
   
    
//   }
//   listuser(id:any){
  
// }
  // loan(){

  //   this.loanAmount=""

  //   this.userservice.findalluserdetails().subscribe(res=>{
  //     debugger
  //     this.loanAmount=res;
  //   });
  // }
  
//   docDetails(id:string)
//   {
//     // this.router.navigate(['admin-doc-details' ,id]);
//     this.router.navigate(['admin-doc-details' ,id]);
//   }
  
//   deleteUser(id:string){
//     this.userservice.deleteUser(id)
//       .subscribe(
//         data => {
//           console.log(data);
//           this.reloadData();
//         },
//         error => console.log(error));
//   }
//   adminLogout() {

//     this.router.navigate(['/home']).then(() => {
//       window.location.reload();
//     });
//   }
// }
// function editUser(id: any, string: any) {
//   throw new Error('Function not implemented.');
// }




// updateuser(id:any, emailId:any){

//   this.users = [];
//   alert(id)

//   this.userservice.getuser(id).subscribe(res=>{
//     debugger
//     this.user= res;
//   });
//   alert("hey" )
//   this.details = this.http.get(`http://localhost:8989/dhl/api/getDetails/${emailId}`)
//   this.details.subscribe((r : any)=>{
//     this.loanAmount = r[0].loanAmount
//   });
  
//   alert(this.loanAmount)
//   this.userservice.updateuser(id, true, this.loanAmount)
//   this.users = [];
  
//   this.userservice.findallusers().subscribe(res=>{
//     debugger
//     this.users= res;
//   });
// }