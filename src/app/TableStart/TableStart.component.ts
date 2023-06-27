import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AppComponent } from '../app.component';
import { DataSet } from '../Data';

@Component({
  selector: 'app-TableStart',
  templateUrl: './TableStart.component.html',
  styleUrls: ['./TableStart.component.css']
})
export class TableStartComponent implements OnInit {

  constructor(private matdialog:MatDialog) { }

  ngOnInit() {
  }

  @ViewChild (MatTable) table:MatTable<DataSet> | undefined
  public DatArr:DataSet[]=[]
  pos=0
  k:number=0
  d=-1
  

  displayedColumns: string[] = ['Name', 'Address','State','Pincode','Mobile','Email','Dob','Sex','Interest','Button'];

  
  Edit(x:any){
    this.k=this.DatArr.indexOf(x)
    console.log(this.k)
    const edi= this.matdialog.open(AppComponent,{width:'60%',height:'90%',data:this.DatArr[this.k]})
    edi.afterClosed().subscribe(item=>{
      if(item){
        this.DatArr.splice(this.k,1,item)
      this.table?.renderRows()
      }
      else{}
      
    })

    

  }

  Add(){
    
    const ad= this.matdialog.open(AppComponent,{width:'60%',height:'90%'})
    ad.afterClosed().subscribe(item=>{
      if(item){
        this.DatArr.push(item)
        console.log(item)
        this.table?.renderRows()
      }
      else{}
     
    })
    

    

  }
  Delete(x:any){
    this.d=this.DatArr.indexOf(x)
    alert("File Deleted")
    console.log(this.d)
    console.log(x)
    this.DatArr.splice(this.d,1)

    this.table?.renderRows()
  }

}
