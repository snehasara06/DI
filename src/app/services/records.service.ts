import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  info1: string[]=["Mahendra Singh Dhoni","Chennai Super Kings", "Jersey:7"]

  info2: string[]=["Virat Kohli","Royal Challengers Bangalore","Jersey:18"]

  info3: string[]=["Shreyas Iyer","Kolkata Knight Riders","Jersey:41"]

  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }
}
