import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PageComponent } from './page/page.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [PageComponent, CardComponent, TagComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageComponent, CardComponent, TagComponent],
})
export class UiModule {}
