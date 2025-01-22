import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirsComponent } from './reservoirs.component';

describe('ReservoirsComponent', () => {
  let component: ReservoirsComponent;
  let fixture: ComponentFixture<ReservoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservoirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
