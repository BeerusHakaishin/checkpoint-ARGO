import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaumeCrudComponent } from './royaume-crud.component';

describe('RoyaumeCrudComponent', () => {
  let component: RoyaumeCrudComponent;
  let fixture: ComponentFixture<RoyaumeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaumeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaumeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
