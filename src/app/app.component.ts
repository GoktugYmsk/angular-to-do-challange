import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  user = 'Göktuğ';

  items = [
    { description: "kahvaltı", action: "No" },
    { description: "Sinema", action: "No" },
    { description: "Kahve", action: "No" },
    { description: "Ders", action: "No" },
    { description: "Angular", action: "No" },
  ];

}
