import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss'],
})
export class BootcampsComponent implements OnInit {
  @Input() bootcamps: Record<string, string>[] | null = null;
  constructor() {}

  ngOnInit(): void {}
}
