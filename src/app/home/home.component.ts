import { Component, OnInit } from '@angular/core';

import { User } from '../-models/index';
import { UserService , UserdataService} from '../-services/index';

import { BmiCalculatorComponent } from 'app/bmi-calculator/bmi-calculator.component';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})


export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    
    constructor(private userService: UserService, private userDataService: UserdataService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {

        this.loadAllUsers();
        this.calcBmr();
        
    }
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
        this.delUser2();
        
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    
    bmr : number;
    calcBmr(){
        this.bmr = 66 + (13.17 * this.currentUser.weight) + (5 * (this.currentUser.height * 100) - (6.8 * this.currentUser.age));
        
    }

  delUser2() {
   {
      this.userDataService.deleteUser2().subscribe()
    }
  }

   
    
//   bmiCalc() {
//     this.bmiNumber = this.currentUser.weight / (this.currentUser.height * this.currentUser.height);
//     this.bmiNumber = Math.round(this.bmiNumber * 100) / 100;
    
//     //bmiNumber > 500 there because it was equating to infinity if the height was equal to zero
//     if (this.bmiNumber > 29.9 && this.bmiNumber < 500) {
//       this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the ";
//       this.range = "obese range";
//     }
//     else if (this.bmiNumber <= 29.9 && this.bmiNumber > 24.9) {
//       this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the ";
//       this.range =  "overweight range";
//     }
//     else if (this.bmiNumber <= 24.9 && this.bmiNumber > 18.4) {
//       this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the "
//       this.range = "normal range";
//     }
//     else if (this.bmiNumber <= 18.4 && this.bmiNumber > 0) {
//       this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the ";
//       this.range = "underweight range";
//     }
//     else {
//       this.bmiString = "One or mores values not entered. Enter height and/or weight, and click the button again";
//     }
//      this.bmiString = "Your estimated BMI is " + this.bmiNumber + ", this is in the " + this.range ;
//     return this.bmiString;
//   }    
}