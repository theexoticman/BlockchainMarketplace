import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuscribeComponent } from './email-suscribe.component';

describe('EmailSuscribeComponent', () => {
  let component: EmailSuscribeComponent;
  let fixture: ComponentFixture<EmailSuscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSuscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSuscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
