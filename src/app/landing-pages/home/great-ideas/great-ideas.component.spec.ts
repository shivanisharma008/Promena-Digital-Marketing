import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatIdeasComponent } from './great-ideas.component';

describe('GreatIdeasComponent', () => {
  let component: GreatIdeasComponent;
  let fixture: ComponentFixture<GreatIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreatIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
