import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaumeComponent } from './royaume.component';

describe('RoyaumeComponent', () => {
  let component: RoyaumeComponent;
  let fixture: ComponentFixture<RoyaumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
