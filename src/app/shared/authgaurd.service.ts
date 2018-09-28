import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PersistanceService } from './persistance.service'
@Injectable()
export class AuthgaurdService implements CanActivate {

  constructor(private persistanceService: PersistanceService) { }

  canActivate() {
    if (this.persistanceService.IsAuthenticated) {
      return true;
    }
    return false;
  }
}
