import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './Component/contact-manager/contact-manager.component';
import { AddContactComponent } from './Component/add-contact/add-contact.component';
import { EditContactComponent } from './Component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './Component/view-contact/view-contact.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'/contacts/admin',pathMatch:'full'},
  {path:'contacts/admin',component:ContactManagerComponent},
  {path:'contacts/add',component:AddContactComponent},
  {path:'contacts/edit/:contactId',component:EditContactComponent},
  {path:'contacts/view/:contactId',component:ViewContactComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
