import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { FairsComponent } from "./shared/components/fairs/fairs.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { NoPageReloadComponent } from "./shared/components/no-page-reload/no-page-reload.component";
import { UsersFormComponent } from "./shared/components/users-form/users-form.component";
import { UsersDetailComponent } from "./shared/components/users-detail/users-detail.component";
import { UsersDashboardComponent } from "./shared/components/users-dashboard/users-dashboard.component";

const routes : Routes = [
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : '',
        redirectTo : 'home',
        pathMatch: 'full'
    },
    {
        path : 'users',
        component : UsersDashboardComponent
    },
    {
        path: 'users/addUser',
        component: UsersFormComponent
    },
    {
        path: 'users/:userId',
        component: UsersDetailComponent
    },
    {
        path: 'users/:userId/edit',
        component: UsersFormComponent
    },
    {
        path : 'products',
        component : ProductsComponent
    },
    {
        path : 'fairs',
        component : FairsComponent
    },
    {
        path : '**',
        component : NoPageReloadComponent
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
    
}