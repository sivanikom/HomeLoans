import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
// import { Documents } from '../documents';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
 
})
export class DocumentsComponent implements OnInit {

  documentForm: FormGroup | any;
  
  email:string|any=sessionStorage.getItem('username');
  
  panFile:File|any;
  voterFile:File|any;
  salaryFile:File|any;
  loaFile:File|any;
  nocFile:File|any;
  agreementFile:File|any;

  panUrl:String|any;
  voterUrl:String|any;
  salaryUrl:File|any;
  loaUrl:File|any;
  nocUrl:String|any;
  agreementUrl:String|any;

  constructor(private router:Router,private http:HttpClient, private formBuilder:FormBuilder) { }
 
  
  ngOnInit(): void 
  {
    this.documentForm = this.formBuilder.group({
      panFile: ['',[ Validators.required,]],
      voterFile: ['',[ Validators.required,]],
      salaryFile: ['', [Validators.required,]],
      loaFile: ['', [Validators.required]],
      nocFile: ['', [Validators.required]],
      agreementFile:  ['', [Validators.required]],
  });
  

   }
   
   

   pan(event: any) 
   {
     // Instantiate an object to read the file content
     let reader = new FileReader();
 
     reader.onload = (event: any) => {
       this.panUrl=event.target.result;
     };
     if(event.target.files.length > 0)
     {
      alert("Please insert the valid document for pan")
     }
     // when the load event is fired and the file not empty
     if(event.target.files && event.target.files.length > 0) {
       // Fill file variable with the file content
       this.panFile = event.target.files[0];
     }
 
     reader.readAsDataURL(this.panFile)
   }

   voter(event: any) 
   {
     // Instantiate an object to read the file content
     let reader = new FileReader();
 
     reader.onload = (event: any) => {
       this.voterUrl=event.target.result;
     };
 
     // when the load event is fired and the file not empty
     if(event.target.files && event.target.files.length > 0) {
       // Fill file variable with the file content
       this.voterFile = event.target.files[0];
     }
 
     reader.readAsDataURL(this.voterFile)
   }

   salary(event: any) 
   {
     // Instantiate an object to read the file content
     let reader = new FileReader();
 
     reader.onload = (event: any) => {
       this.salaryUrl=event.target.result;
     };
 
     // when the load event is fired and the file not empty
     if(event.target.files && event.target.files.length > 0) {
       // Fill file variable with the file content
       this.salaryFile = event.target.files[0];
     }
 
     reader.readAsDataURL(this.salaryFile)
   }

   loa(event: any) 
   {
     // Instantiate an object to read the file content
     let reader = new FileReader();
 
     reader.onload = (event: any) => {
       this.loaUrl=event.target.result;
     };
 
     // when the load event is fired and the file not empty
     if(event.target.files && event.target.files.length > 0) {
       // Fill file variable with the file content
       this.loaFile = event.target.files[0];
     }
 
     reader.readAsDataURL(this.loaFile)
   }

   noc(event: any) 
   {
     // Instantiate an object to read the file content
     let reader = new FileReader();
 
     reader.onload = (event: any) => {
       this.nocUrl=event.target.result;
     };
 
     // when the load event is fired and the file not empty
     if(event.target.files && event.target.files.length > 0) {
       // Fill file variable with the file content
       this.nocFile = event.target.files[0];
     }
 
     reader.readAsDataURL(this.nocFile)
   }

   agreement(event: any) 
   {
     // Instantiate an object to read the file content
     let reader = new FileReader();
 
     reader.onload = (event: any) => {
       this.agreementUrl=event.target.result;
     };
 
     // when the load event is fired and the file not empty
     if(event.target.files && event.target.files.length > 0) {
       // Fill file variable with the file content
       this.agreementFile = event.target.files[0];
     }
 
     reader.readAsDataURL(this.agreementFile)
   }
 
  
  onSubmit(){

    // this.doc = this.registerForm.value;

    let body = new FormData();
    body.append('panFile', this.panFile)
    alert(this.panFile)
    body.append('voterFile', this.voterFile)
    alert(this.voterFile)
    body.append('salaryFile', this.salaryFile)
    body.append('loaFile', this.loaFile)
    body.append('nocFile', this.nocFile)
    body.append('agreementFile', this.agreementFile)

    body.append('panUrl', this.panUrl)
    body.append('voterUrl', this.voterUrl)
    body.append('salaryUrl', this.salaryUrl)
    body.append('loaUrl', this.loaUrl)
    body.append('nocUrl', this.nocUrl)
    body.append('agreementUrl', this.agreementUrl)


    body.append('email', this.email)
    alert(this.email)

    this.http.post(`http://localhost:8989/dhl/api/upload`, body)
    .subscribe(
      // Admire results
      (data) => {alert(data)},
      // Or errors :-(
      error => alert(error),
      // tell us if it's finished
      () => { alert("completed") }
    );

    // this.doc = new Documents();
    this.next();

  }
  next() {
    this.router.navigate(['/loan-tracker'])
   
  }
//   public noWhitespaceValidator(control: FormControl) {
//     const isWhitespace = (control.value || '').trim().length === 0;
//     const isValid = !isWhitespace;
//     return isValid ? null : { 'whitespace': true };
// }
  
}


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-documents',
//   templateUrl: './documents.component.html',
//   styleUrls: ['./documents.component.css'],
 
// })
// export class DocumentsComponent implements OnInit {

//   msg:string | any
//   selectedFile:File |any;
//   selectedFiles?: FileList;
//   currentFile?: File;
//   progress = 0;
//   message = '';
//   fileInfos?: Observable<any>;
//   constructor(private uploadService: FileUploadService) { }
//   selectFile(event: any): void {
//     this.selectedFiles = event.target.files;
//   }
  
//   constructor(private router:Router,
//     private Http:HttpClient) { }
 
//     upload(): void {
//       this.progress = 0;
//       if (this.selectedFiles) {
//         const file: File | null = this.selectedFiles.item(0);
//         if (file) {
//           this.currentFile = file;
//           this.uploadService.upload(this.currentFile).subscribe({
//             next: (event: any) => {
//               if (event.type === HttpEventType.UploadProgress) {
//                 this.progress = Math.round(100 * event.loaded / event.total);
//               } else if (event instanceof HttpResponse) {
//                 this.message = event.body.message;
//                 this.fileInfos = this.uploadService.getFiles();
//               }
//             },
//             error: (err: any) => {
//               console.log(err);
//               this.progress = 0;
//               if (err.error && err.error.message) {
//                 this.message = err.error.message;
//               } else {
//                 this.message = 'Could not upload the file!';
//               }
//               this.currentFile = undefined;
//             }
//           });
//         }
//         this.selectedFiles = undefined;
//       }
//     }


//   ngOnInit(): void {

//    }
   

 
//   clickEvent(){
//     this.msg='Successfully Submitted!';
//     return this.msg;
//   }
  
//   next() {
//     this.router.navigate(['/loan-tracker'])
   
//   }

  
// }

