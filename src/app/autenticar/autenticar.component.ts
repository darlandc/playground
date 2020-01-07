import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.sass']
})
export class AutenticarComponent implements OnInit {

  constructor(public http: HttpClient) {}

  ngOnInit() {
  }


  public ping() {
    this.http.get('https://example.com/api/things')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}
