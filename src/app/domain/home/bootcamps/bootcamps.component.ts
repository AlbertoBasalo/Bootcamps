import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss'],
})
export class BootcampsComponent implements OnInit {
  private original: Record<string, string>[] | undefined;
  private lastSortKey: string = '';
  @Input() bootcamps: Record<string, string>[] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.original = [...(this.bootcamps || [])];
    this.sort('');
  }

  public searchByText(text: string) {
    this.bootcamps = this.original?.filter((b) => {
      return JSON.stringify(b)
        .toLocaleLowerCase()
        .includes(text.trim().toLocaleLowerCase());
    });
    if (this.bootcamps?.length === 0) {
      this.bootcamps = this.original;
    }
    this.sort(this.lastSortKey);
  }

  public sort(key: string) {
    this.lastSortKey = key;
    if (key === 'price') {
      this.sortByPrice();
    } else if (key === 'tags') {
      this.sortByTag();
    }
  }

  private sortByPrice() {
    this.bootcamps = this.bootcamps?.sort((a, b) => {
      return (
        Number.parseFloat(b.Price || '0') - Number.parseFloat(a.Price || '0')
      );
    });
  }

  private sortByTag() {
    this.bootcamps = this.bootcamps?.sort((a, b) => {
      return (b.Tags || '') > (a.Tags || '') ? 1 : -1;
    });
  }
}
