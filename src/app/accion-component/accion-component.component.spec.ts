import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionComponentComponent } from './accion-component.component';

describe('AccionComponentComponent', () => {
  let component: AccionComponentComponent;
  let fixture: ComponentFixture<AccionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
