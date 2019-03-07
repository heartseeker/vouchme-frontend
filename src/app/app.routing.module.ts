import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { SearchResultComponent } from './pages/home/search-result/search-result.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: SearchResultComponent,
        pathMatch: 'full',
    },
    {
        path: 'registration',
        component: RegisterComponent,
        pathMatch: 'full',
    },
    {
        path: 'users',
        loadChildren: 'src/app/components/users/users.module#UsersModule',
        canActivate: []
    },
    {
        path: ':user',
        component: UserComponent,
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
