import { BootcampsService } from '@ab/data/bootcamps.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public bootcamps$!: Observable<Record<string, unknown>[]>;
  constructor(private service: BootcampsService) {}

  ngOnInit(): void {
    this.bootcamps$ = this.service.getBootcamps$();
  }
}
