import { SelectionModel } from '@angular/cdk/collections';
import { formatCurrency } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataSet } from './Data';
import { SuccessComponent } from './Success/Success.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private route:Router,@Inject(MAT_DIALOG_DATA)public data:DataSet, private ref:MatDialogRef<AppComponent>){}
  
  d1= new DataSet();
  
  i:number=0
 
 
  Inter: string[] = ['Sport','Eating','Drawing','Sleeping'];
  

  
  // d2= new DataSet();
  
  
  title = 'Form3';
  
  
  states:string[]=[
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu & Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Maharashtra',
    'Madhya Pradesh',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Tripura',
    'Telangana',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman & Nicobar (UT)',
    'Chandigarh (UT)',
    'Dadra & Nagar Haveli (UT)',
    'Daman & Diu (UT)',
    'Lakshadweep (UT)',
    'Puducherry (UT)'
  ];



  LoginForm=new FormGroup({
    
    Name:new FormControl('Subi',[Validators.required,Validators.maxLength(20)]),
    Address:new FormControl('fdgfdfdgfd',[Validators.required]),
    State:new FormControl('Kerala',[Validators.required]),
    PinCode:new FormControl(691537,[Validators.required,Validators.maxLength(7)]),
    Mobile:new FormControl(9072949299,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    Email:new FormControl('iamsubin307@gmail.com',[Validators.required,Validators.email]),
    Dob:new FormControl([Validators.required]),
    Sex:new FormControl('Male',[Validators.required]),
    Interest:new FormControl()
    
  })

  onclick(){
    console.log(this.LoginForm)
  }
  get Position(){
    return this .LoginForm.get('Position')
  }
  get Name(){
    return this .LoginForm.get('Name')
  }
  get Address() {
    return this.LoginForm.get('Address')
  }
  get State (){
    return this.LoginForm.get("State")
  }
  get PinCode(){
    return this.LoginForm.get('PinCode')
  }
  get Mobile (){
    return this.LoginForm.get('Mobile')
  }
  get Email(){
    return this.LoginForm.get('Email')
  }
  get Dob(){
    return this.LoginForm.get('Dob')
  }
  get Sex(){
    return this.LoginForm.get('Sex')
  }
  get Interest(){
    return this.LoginForm.get('Interest')
  }

  





 

  
  
  Success()
  {  
  
    // this.d1= new DataSet();
    
    // this.pos=this.DatArr[this.k].Position

    //  if(this.hid==false)
    //  {
    //   this.pos+=1
    //  }
           
    if(this.LoginForm.valid){  

      
      this.d1.Name=this.Name?.value
      this.d1.Address=this.Address?.value
      this.d1.State=this.State?.value
      this.d1.PinCode=this.PinCode?.value
      this.d1.Mobile=this.Mobile?.value
      this.d1.Email=this.Email?.value
      this.d1.Dob=this.Dob?.value
      this.d1.Sex=this.Sex?.value
      this.d1.Interest=this.Interest?.value
     
      this.ref.close(this.d1)

      console.log(this.LoginForm)


    }

    else{
      alert("Enter valid information")
      // this.route.navigate(['/Form'])
    }
  }
  maxDate: Date = new Date ();
  
  num(item:any){
    let value=item.charCode
    if(value>47&&value<58){
      return true
    }
    return false
  }

  ch(item:any){
    let value=item.charCode
    if((value>=65&&value<=90)||(value>=97&&value<=122)||value==32){
      return true
    }
    return false
  }
  
  ngOnInit(){
    this.LoginForm.setValue({
        
      Name:this.data?.Name,
      Address:this.data?.Address,
      State:this.data?.State,
      PinCode:this.data?.PinCode,
      Mobile:this.data?.Mobile,
      Email:this.data?.Email,
      Dob:this.data?.Dob,
      Sex:this.data?.Sex,
      Interest:this?.data.Interest
      
    })
  } 
  

   
  

 

  cancel(){
    this.LoginForm.reset()

  }

  




}

