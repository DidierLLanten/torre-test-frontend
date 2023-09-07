import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private apiURL = 'https://torre.ai/api/entities/_searchStream';

  listar(nombre: string): Observable<any[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestData = {
      excludeContacts: true,
      excludedPeople: [],
      identityType: 'person',
      limit: 10,
      meta: false,
      query: nombre,
      torreGgId: '194304',
    };

    const res = this.http.post(this.apiURL, requestData, {
      headers,
      responseType: 'text',
    });

    return new Observable<any[]>((observer) => {
      res.subscribe(
        (data: string) => {
          // Divide la respuesta en líneas
          const lines = data.trim().split('\n');

          // Modificación: Analiza cada línea como un objeto JSON y filtra resultados no válidos
          const results = lines
            .map((line) => {
              try {
                return JSON.parse(line);
              } catch (e) {
                // Si no se puede analizar la línea como JSON, devuelve null
                return null;
              }
            })
            .filter((result) => result !== null); // Filtra los resultados no nulos

          observer.next(results);
          observer.complete();
        },
        (error) => {
          console.log('Error en autocompleteOnInit: ', error);
          observer.error(error);
        }
      );
    });
  }
}
