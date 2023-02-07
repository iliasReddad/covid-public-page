import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/_services/auth.service";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit  {
 
  form: any = {
    username: null,
    email: null,
    password: null,
    role: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  showModal = false;
  userole:string= "";
  
  constructor(private authService: AuthService, private tokenService : TokenStorageService) { }

  ngOnInit(): void {
    this.userole = this.tokenService.getUser().roles[0];

  }
  toggleModal(){
    this.showModal = !this.showModal;
  }

  onSubmit(): void {
    const { username, email, password , role } = this.form;

    this.authService.register(username, email, password,role).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
            setTimeout(function(){  window.location.reload() ; }, 3000);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  
}
