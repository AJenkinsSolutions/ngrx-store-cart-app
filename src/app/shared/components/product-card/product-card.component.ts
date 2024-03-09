import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../../models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { 

  //This component is now the 'child component' of the ProductComponent
  //Meaning it will receive data from the parent component


  @Input() product!: IProduct;
  constructor(){}
  
}
