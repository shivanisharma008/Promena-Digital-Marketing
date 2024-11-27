import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingConsultancyComponent } from './branding-consultancy.component';

describe('BrandingConsultancyComponent', () => {
  let component: BrandingConsultancyComponent;
  let fixture: ComponentFixture<BrandingConsultancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandingConsultancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
