import { Storage } from '@ionic/storage';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();
  lock = new Auth0Lock("UUk9TF3CdC6BpqjqYaQhbH9UzAlvn8TR", "mrxservices.eu.auth0.com");
  local: Storage = new Storage();
  user: Object;
  id_token: any;

  constructor(private authHttp: AuthHttp) {
    this.local.get('id_token').then(token => {
        this.id_token = token;
    }).catch(error => {
        console.log(error);
    });

    this.local.get('profile').then(profile => {
        this.user = JSON.parse(profile);
    }).catch(error => {
        console.log(error);
    });
  }

  public authenticated() {
     return tokenNotExpired(null, this.id_token);
  }

  public login() {
    // Show the Auth0 Lock widget
    this.lock.show({
      authParams: {
        scope: 'openid offline_access',
        device: 'Mobile device'
      }
    }, (err, profile, token, accessToken, state, refreshToken) => {
      if (err) {
        alert(err);
      }
      // If authentication is successful, save the items
      // in local storage
      this.local.set('profile', JSON.stringify(profile));
      this.local.set('id_token', token);
      this.local.set('refresh_token', refreshToken);
      this.id_token = token;
      this.user = profile;
    });    
  }

  public logout() {
    this.local.remove('profile');
    this.local.remove('id_token');
    this.local.remove('refresh_token');
    this.user = null;
    this.id_token = null;
  }
}