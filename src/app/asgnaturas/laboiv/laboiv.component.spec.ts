import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboivComponent } from './laboiv.component';

describe('LaboivComponent', () => {
  let component: LaboivComponent;
  let fixture: ComponentFixture<LaboivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboivComponent]
    });
    fixture = TestBed.createComponent(LaboivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
