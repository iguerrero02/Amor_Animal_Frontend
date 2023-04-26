import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: ShopComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'product-details',
        component: ProductDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceoutingModule { }
