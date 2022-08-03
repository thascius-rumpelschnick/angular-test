import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
    { path: 'Bundesland/:state', component: StateComponent },
    { path: '', component: StatesComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
