import { ReportesComponent } from './pages/reportes/reportes.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjustesComponent } from './pages/ajustes/ajustes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'ajustes', component: AjustesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
