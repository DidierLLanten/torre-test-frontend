import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private apiURL = 'https://localhost:7118/api/users';

  public obtenerPorNombre(nombre: string): Observable<any> {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(
      `${this.apiURL}/buscarPorNombre`,
      JSON.stringify(nombre),
      { headers }
    );
  }

  public addFavorite(user: any) {
    return this.http.post(this.apiURL, user);
  }
}
