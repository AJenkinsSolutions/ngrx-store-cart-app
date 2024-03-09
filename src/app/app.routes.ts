import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'counter',
    //Whenever my path is equal to 'counter' load this standalone component
    loadComponent: ()=> import('./counter/counter.component').then(a=> a.CounterComponent)
  },
  {
    path: 'products',
    //Whenever my path is equal to 'counter' load this standalone component
    loadComponent: ()=> import('./products/products.component').then(a=> a.ProductsComponent)
  },

  {
    path: '',
    redirectTo: 'products', 
    pathMatch: 'full'
  },



  // {
  //   path: '',
  //   loadComponent: ()=> import('./pages/home/home.component')
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./pages/login/login.component')
  // }

];
