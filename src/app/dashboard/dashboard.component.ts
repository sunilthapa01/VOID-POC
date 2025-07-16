import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [HeaderComponent,CategoriesComponent]
})
export class DashboardComponent {

}
