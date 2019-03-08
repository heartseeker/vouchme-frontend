import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        const profile = JSON.parse(localStorage.getItem('profile')) || {};
 
        // Clone the request to add the new header
        const clonedRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer ${profile.accessToken}`) });
 
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}
