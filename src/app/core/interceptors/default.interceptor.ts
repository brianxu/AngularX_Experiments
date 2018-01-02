import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import * as express from 'express';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
	constructor(
		@Inject(PLATFORM_ID)
		private platformId: string,
		private injector: Injector
	) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({ withCredentials: true });
		if (!isPlatformBrowser(this.platformId)) {
			let req: express.Request = this.injector.get('REQUEST');
			let rootDomain = req.hostname.split('.').slice(-2).join('.');
			let a = request.url.match(/^https?:\/\/([^/:]+)/);
			console.log(req.cookies);
			if (a) {
				let cookieString = Object.keys(req.cookies).reduce((accumulator, cookieName) => {
					accumulator += cookieName + '=' + req.cookies[cookieName] + ';';
					return accumulator;
				}, '');

				console.log(cookieString);
				request = request.clone({
					headers: request.headers.set('Cookie', cookieString)
				});
			}
		}
		return next.handle(request).do((event) => {
			// console.log(request);
			// console.log(event);
		});
	}
}