import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{ path: '', redirectTo: '/details', pathMatch: 'full' },
{ path: 'details', component: DetailsComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: 'create', component: CreateComponent },
{ path: 'update/:id', component: UpdateComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }