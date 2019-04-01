import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCarComponent } from './about-car.component';

describe('AboutCarComponent', () => {
  let component: AboutCarComponent;
  let fixture: ComponentFixture<AboutCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
