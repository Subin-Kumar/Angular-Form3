/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableStartComponent } from './TableStart.component';

describe('TableStartComponent', () => {
  let component: TableStartComponent;
  let fixture: ComponentFixture<TableStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
