import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeServiceService } from '../cafe-service.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
})
export class CafeListComponent implements OnInit {
  cafeOrigen: number = 0;
  cafeBlend: number = 0;
  listaCafe: Array<Cafe> = [];

  constructor(private cafeService: CafeServiceService) {}

  ngOnInit() {
    this.getListaCafe();
  }

  getListaCafe() {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.listaCafe = cafes;

      this.listaCafe.forEach((element) => {
        if (element.tipo === 'Blend') {
          this.cafeBlend++;
        } else {
          this.cafeOrigen++;
        }
      });
    });
  }
}
