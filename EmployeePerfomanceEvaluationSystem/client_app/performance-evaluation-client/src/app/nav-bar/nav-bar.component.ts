import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/accounts/accounts-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    isLoggedIn: Observable<boolean>;

    constructor(public accountService: AccountService) { }

    ngOnInit(): void {
        this.isLoggedIn = this.accountService.isLoggedInObservable();
    }

}
