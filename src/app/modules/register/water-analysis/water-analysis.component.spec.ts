import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterAnalysisComponent } from './water-analysis.component';

describe('WaterAnalysisComponent', () => {
  let component: WaterAnalysisComponent;
  let fixture: ComponentFixture<WaterAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
