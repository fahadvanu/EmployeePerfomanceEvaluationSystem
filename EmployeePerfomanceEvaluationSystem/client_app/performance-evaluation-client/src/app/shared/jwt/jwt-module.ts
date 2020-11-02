import { NgModule } from '@angular/core';
import { JwtModule } from "@auth0/angular-jwt";
import { Constant } from '../constant/constants';

export function tokenGetter() {
    return localStorage.getItem(Constant.JWT_TOKEN_KEY);
}

@NgModule({

    imports: [
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["*"],
                disallowedRoutes: [],
            },
        }),
    ],
})
export class AppJWTModule { }