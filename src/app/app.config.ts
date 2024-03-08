import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './NGRX-reducers/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), provideClientHydration(), provideAnimations(), provideStore(),
  //Param1: Name of state
  //Para2: Name of Reducer
    provideState({name: 'counter', reducer: counterReducer}),
    provideHttpClient(withFetch())
  ]
};
