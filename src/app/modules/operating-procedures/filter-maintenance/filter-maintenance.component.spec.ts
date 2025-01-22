import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMaintenanceComponent } from './filter-maintenance.component';

describe('FilterMaintenanceComponent', () => {
  let component: FilterMaintenanceComponent;
  let fixture: ComponentFixture<FilterMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
