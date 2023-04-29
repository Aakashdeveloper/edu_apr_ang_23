import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes =[
    {path:'details', component:DetailsComponent},
    {path:'listing/:id', component:ListingComponent},
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'**',pathMatch:'full', component:NotfoundComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers:[],
    exports: [RouterModule]
})

export class AppRoutingModule {}