import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './shared/logo/logo.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DummyContentComponent } from './shared/dummy-content/dummy-content.component';
import { SidebarMenuItemComponent } from './shared/sidebar-menu-item/sidebar-menu-item.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { HomeComponent } from './pages/home/home.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { JsonIconComponent } from './shared/json-icon/json-icon.component';
import { ExcelIconComponent } from './shared/excel-icon/excel-icon.component';
import { YearSelectorComponent } from './shared/year-selector/year-selector.component';
import { DescargarIconComponent } from './shared/descargar-icon/descargar-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SidebarComponent,
    NavbarComponent,
    DummyContentComponent,
    SidebarMenuItemComponent,
    ReportesComponent,
    HomeComponent,
    DocumentosComponent,
    AjustesComponent,
    JsonIconComponent,
    ExcelIconComponent,
    YearSelectorComponent,
    DescargarIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
