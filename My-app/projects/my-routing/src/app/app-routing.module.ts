import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: RoutingHomeComponent },
  { path: 'home', component: RoutingHomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
