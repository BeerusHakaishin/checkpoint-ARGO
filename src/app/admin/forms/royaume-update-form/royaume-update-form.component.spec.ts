import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaumeUpdateFormComponent } from './royaume-update-form.component';

describe('RoyaumeUpdateFormComponent', () => {
  let component: RoyaumeUpdateFormComponent;
  let fixture: ComponentFixture<RoyaumeUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaumeUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaumeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
