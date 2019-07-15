import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {SERVER_API_URL} from '../app.constants';

type EntityResponseType = HttpResponse<string>;

@Injectable({providedIn: 'root'})
export class CalculatorService {
  private resourceUrl = SERVER_API_URL + '/api/compute';

  constructor(private http: HttpClient) {
  }

  compute(expression: string): Observable<EntityResponseType> {
    return this.http
      .get<string>(`${this.resourceUrl}/${expression}`, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

}
