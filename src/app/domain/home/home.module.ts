import { UiModule } from '@ab/ui/ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, BootcampsComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule],
})
export class HomeModule {}
