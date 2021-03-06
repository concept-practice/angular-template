import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/features/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
