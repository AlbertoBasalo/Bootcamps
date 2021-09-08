import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BootcampsService {
  constructor(private http: HttpClient) {}
  getBootcamps$(): Observable<Record<string, string>[]> {
    return this.http.get<Record<string, string>[]>(`${environment.apiHost}`);
  }
}
