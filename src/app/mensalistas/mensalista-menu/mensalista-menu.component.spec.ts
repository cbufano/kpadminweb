import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalistaMenuComponent } from './mensalista-menu.component';

describe('MensalistaMenuComponent', () => {
  let component: MensalistaMenuComponent;
  let fixture: ComponentFixture<MensalistaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensalistaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensalistaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
