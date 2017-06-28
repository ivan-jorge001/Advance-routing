import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactServiceService } from './contact-service.service';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


const routes: Routes = [
  {path:'',redirectTo:'contacts',pathMatch:'full'},
  {path:'contacts',component:ContactListComponent},
  {path:'contact/:id',component:ContactsComponent,
  children:[ { path: '', component: ContactOverviewComponent },
      { path: 'edit', component: ContactEditComponent }

  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactsComponent,
    ContactOverviewComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
