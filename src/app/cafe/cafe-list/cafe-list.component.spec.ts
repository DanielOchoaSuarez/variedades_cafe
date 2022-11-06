/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeServiceService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CafeListComponent],
      providers: [CafeServiceService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    component.listaCafe = [
      new Cafe(1, 'Nombre 1', 'Tipo 1', 'Region 1', 'Sabor', 2000, 'imagen 1'),
      new Cafe(2, 'Nombre 2', 'Tipo 2', 'Region 2', 'Sabor', 2001, 'imagen 2'),
      new Cafe(3, 'Nombre 3', 'Tipo 3', 'Region 3', 'Sabor', 2002, 'imagen 3'),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 table', () => {
    const table = debug.query(By.css('table'));
    expect(table).toHaveSize(1);
  });

  it('should have a thead', () => {
    const rowThead = debug.query(By.css('thead'));
    expect(rowThead).toHaveSize(1);
  });

  it('should have 3 coffes on tbody', () => {
    const rowTbody = debug.query(By.css('tbody'));
    expect(rowTbody.children).toHaveSize(3);
  });
});
