import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Array<User>
  input_user: string;
  input_pass: string;
  constructor(
    private userService: UserService,
    public router: Router
  ) {
  }
  hide = true;
  private snackBar: any;
  ngOnInit(): void {
    this.userService.list().subscribe(
      users => this.users = users
    );
  }

  public login(){
    let auth = this.users.filter((us) => {
      return us.login === this.input_user.toLowerCase();
    });

    if (auth){
      if(auth[0].pass === this.input_pass.toLowerCase()) {
        this.router.navigate(['/listing-areas']);
      }
    }
  }

}
