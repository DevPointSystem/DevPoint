import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionOfComponent } from './repartition-of.component';

describe('RepartitionOfComponent', () => {
  let component: RepartitionOfComponent;
  let fixture: ComponentFixture<RepartitionOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartitionOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartitionOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
