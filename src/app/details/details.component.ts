import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  items: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getAll().subscribe(data => {
      this.items = data;
    });
  }
}
