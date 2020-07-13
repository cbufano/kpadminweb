import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalistaFormComponent } from './mensalista-form.component';

describe('MensalistaFormComponent', () => {
  let component: MensalistaFormComponent;
  let fixture: ComponentFixture<MensalistaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensalistaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensalistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
