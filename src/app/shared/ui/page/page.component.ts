import { Component, Input } from '@angular/core';

@Component({
  selector: 'ab-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input() pageTitle = '';
}
