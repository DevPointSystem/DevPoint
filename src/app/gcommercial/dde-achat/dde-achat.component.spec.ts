import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdeAchatComponent } from './dde-achat.component';

describe('DdeAchatComponent', () => {
  let component: DdeAchatComponent;
  let fixture: ComponentFixture<DdeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdeAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
