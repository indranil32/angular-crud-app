import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  item: any = { name: '', description: '' };
  id: number;

  constructor(private route: ActivatedRoute, private crudService: CrudService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.crudService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem() {
    this.crudService.update(this.id, this.item).subscribe(response => {
      console.log('Item updated:', response);
      this.router.navigate(['/details']);
    });
  }
}