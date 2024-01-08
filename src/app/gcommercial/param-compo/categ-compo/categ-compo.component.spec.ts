import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategCompoComponent } from './categ-compo.component';

describe('CategCompoComponent', () => {
  let component: CategCompoComponent;
  let fixture: ComponentFixture<CategCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
