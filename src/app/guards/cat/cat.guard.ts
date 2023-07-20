
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CatService } from 'src/app/cats/cat.service';

// export class CatGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }

// }

export const catGuard: CanActivateFn = (route, state) => {

  const catService = inject(CatService);
  const router = inject(Router);

  if  (catService.isLooggedIn()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }


}
