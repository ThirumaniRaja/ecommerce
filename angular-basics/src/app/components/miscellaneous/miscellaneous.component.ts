import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.scss']
})
export class MiscellaneousComponent implements OnInit {

  obj:any = {};
  constructor() { }

  ngOnInit(): void {
   
  }

  checkForRepeatedCharacters(){
    let str = "aabcvvvv"
    for(let x = 0, length = str.length; x < length; x++) {
      var l = str.charAt(x)
      let c  = "m";
      console.log("repeated--",l,"----",isNaN(this.obj[l]))
      this.obj[l] = (isNaN(this.obj[l]) ? 1 :this. obj[l] + 1);
      console.log("repeated--",isNaN(this.obj[l]))
      console.log("repeated--",this.obj)
    }
  }


}
