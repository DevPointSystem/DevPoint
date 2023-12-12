import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtReceptionComponent } from './mvt-reception.component';

describe('MvtReceptionComponent', () => {
  let component: MvtReceptionComponent;
  let fixture: ComponentFixture<MvtReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtReceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvtReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
