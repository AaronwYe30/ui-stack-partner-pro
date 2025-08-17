import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'hello-app',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  message = '';
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get('http://localhost:8080/hello', { responseType: 'text' })
      .subscribe({
        next: (res) => this.message = res,
        error: (err) => console.error(err)
      });
  }
}

bootstrapApplication(AppComponent);

