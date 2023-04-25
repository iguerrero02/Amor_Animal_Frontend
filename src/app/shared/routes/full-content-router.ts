import { Routes } from '@angular/router';
import { AdminAuthGuard } from 'src/app/guards/admin-auth.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const full_content: Routes = [
  { 
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
    //canActivate: [AuthGuard]
  },
  { 
    path: 'dashboardtres',
    loadChildren: () => import('../../components/dashboardtres/dashboardtres.module').then(m => m.DashboardtresModule)
  },
  { 
    path: 'dashboardtwo',
    loadChildren: () => import('../../components/dashboardtwo/dashboardtwo.module').then(m => m.DashboardtwoModule),
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'maps',
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'components',
    loadChildren: () => import('../../components/components/components.module').then(m => m.ComponentsModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'elements',
    loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'advanced-elements',
    loadChildren: () => import('../../components/advanced-elements/advanced-elements.module').then(m => m.AdvancedElementsModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule),
  },
  {
    path: 'forms',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
    //canActivate: [AuthGuard]
  },
  // {
  //   path: 'firebase',
  //   loadChildren: () => import('../../components/firebase/firebase.module').then(m => m.FirebaseModule)
  // }
]