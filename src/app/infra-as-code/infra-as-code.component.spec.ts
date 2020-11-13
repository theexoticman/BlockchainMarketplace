import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraAsCodeComponent } from './infra-as-code.component';

describe('InfraAsCodeComponent', () => {
  let component: InfraAsCodeComponent;
  let fixture: ComponentFixture<InfraAsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraAsCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraAsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
