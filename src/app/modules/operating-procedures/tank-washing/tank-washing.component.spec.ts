import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankWashingComponent } from './tank-washing.component';

describe('TankWashingComponent', () => {
  let component: TankWashingComponent;
  let fixture: ComponentFixture<TankWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TankWashingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
