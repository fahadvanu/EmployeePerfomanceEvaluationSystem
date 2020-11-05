import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/accounts/accounts-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    isLoggedIn: Observable<boolean>;

    constructor(public accountService: AccountService,
                private router: Router) { }

    ngOnInit(): void {
        this.isLoggedIn = this.accountService.isLoggedInObservable();
    }

    logout() {
        this.accountService.removeTokenFromStorage();
        this.router.navigate(['/login']);
    }
}
