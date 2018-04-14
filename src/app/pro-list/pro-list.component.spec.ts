/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProListComponent } from './pro-list.component';

describe('ProListComponent', () => {
  let component: ProListComponent;
  let fixture: ComponentFixture<ProListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
