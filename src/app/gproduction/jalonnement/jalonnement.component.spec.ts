import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JalonnementComponent } from './jalonnement.component';

describe('JalonnementComponent', () => {
  let component: JalonnementComponent;
  let fixture: ComponentFixture<JalonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JalonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JalonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
