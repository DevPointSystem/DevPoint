import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CltComponent } from './clt.component';

describe('CltComponent', () => {
  let component: CltComponent;
  let fixture: ComponentFixture<CltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
