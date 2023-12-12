import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAchatComponent } from './order-achat.component';

describe('OrderAchatComponent', () => {
  let component: OrderAchatComponent;
  let fixture: ComponentFixture<OrderAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
