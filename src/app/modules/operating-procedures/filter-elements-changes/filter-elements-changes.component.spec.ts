import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterElementsChangesComponent } from './filter-elements-changes.component';

describe('FilterElementsChangesComponent', () => {
  let component: FilterElementsChangesComponent;
  let fixture: ComponentFixture<FilterElementsChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterElementsChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterElementsChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
