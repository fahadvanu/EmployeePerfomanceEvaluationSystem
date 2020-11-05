import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccountService } from '../services/accounts/accounts-service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public accountService: AccountService,
                public router: Router) { }

    canActivate(): boolean {

        if (!this.accountService.isAuthenticated()) {

            this.router.navigate(['/unauthorized']);
            return false;
        }

        return true;
    }

}