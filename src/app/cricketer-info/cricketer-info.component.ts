import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';
@Component({
  selector: 'app-cricketer-info',
  templateUrl: './cricketer-info.component.html',
  styleUrls: ['./cricketer-info.component.scss'],
  providers:[RecordsService]
})
export class CricketerInfoComponent implements OnInit {

  constructor(private recordService:RecordsService) { }

  ngOnInit(): void {
  }

    info1: string[]=[];

    info2: string[]=[];

    info3: string[]=[]; 

  

  // Getting from Record Service
    getInfo1(){
      this.info1 = this.recordService.getInfo1()
    }

    getInfo2(){
      this.info2 = this.recordService.getInfo2()
    }

    getInfo3(){
      this.info3 = this.recordService.getInfo3()
    }

}
