import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proudcts',
  standalone: true,
  imports: [],
  templateUrl: './proudcts.component.html',
  styleUrl: './proudcts.component.scss'
})
export class ProudctsComponent {
  
  // Add HttpClient Object
  //* We add the HttpClientModule in the providers Array in the app.config
  http = inject(HttpClient);

  
 

  constructor(){}

}
