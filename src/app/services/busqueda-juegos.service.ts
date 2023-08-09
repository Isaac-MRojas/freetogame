import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusquedaJuegosService {
  constructor(
    private http: HttpClient,
  ) { }

  obtenerCategoria(data?:any): Observable<any> {
    const headers = new HttpHeaders()
      .set("X-RapidAPI-Key", "d983a679b5msh1d8cd9a134dacdbp14e796jsn53be56e6a961")
      .set("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
    return this.http.get<any>(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${data}`,
      {headers: headers}
    );
    
  } 

  
}
