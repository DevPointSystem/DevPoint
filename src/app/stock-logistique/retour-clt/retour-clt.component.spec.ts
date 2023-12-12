import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourCltComponent } from './retour-clt.component';

describe('RetourCltComponent', () => {
  let component: RetourCltComponent;
  let fixture: ComponentFixture<RetourCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
