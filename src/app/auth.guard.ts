  import { Injectable } from '@angular/core';
  import {  ActivatedRouteSnapshot, CanActivate, CanActivateChild,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './_services/token-storage.service';

  @Injectable({
    providedIn: 'root'
  })


  export class AuthGuard implements CanActivate , CanActivateChild {
    isAuthenticated: boolean=false;
    userole: string = "";
    constructor(private tokenStorageService: TokenStorageService, private router: Router) { 
    }

    canActivateChild(){
      
      return false;

    
    
    }
      
    
    canActivate(){
      this.isAuthenticated=!!this.tokenStorageService.getToken();

      if(this.isAuthenticated){
        return  true ;
      }
      this.router.navigate(['/auth/login']);

      return false;
    }
      
    }
    

