import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricLedgerComponent } from './fabric-ledger.component';

describe('FabricLedgerComponent', () => {
  let component: FabricLedgerComponent;
  let fixture: ComponentFixture<FabricLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricLedgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
