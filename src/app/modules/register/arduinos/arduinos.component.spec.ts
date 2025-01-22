import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinosComponent } from './arduinos.component';

describe('ArduinosComponent', () => {
  let component: ArduinosComponent;
  let fixture: ComponentFixture<ArduinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArduinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArduinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
