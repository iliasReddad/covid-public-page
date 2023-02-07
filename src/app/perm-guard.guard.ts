import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermGuardGuard implements CanActivate {
  isAuthenticated: boolean=false;
  userole: string = "";
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { 
  }
  
  canActivate(){
    this.userole=this.tokenStorageService.getUser().roles;
    if(this.userole=="ROLE_ADMIN"){
      return true;
    }
    this.router.navigate(['/admin']);
    return false;

  }


  
  
  
}
