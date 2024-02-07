import { HttpInterceptorFn } from '@angular/common/http';

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interceptor');
  return next(req);
};
