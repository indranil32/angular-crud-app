import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  item = { name: '', description: '' };

  constructor(private crudService: CrudService, private router: Router) {}

  createItem() {
    this.crudService.create(this.item).subscribe(response => {
      console.log('Item created:', response);
      this.router.navigate(['/details']);
    });
  }
}