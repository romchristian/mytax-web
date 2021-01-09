import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarIconComponent } from './descargar-icon.component';

describe('DescargarIconComponent', () => {
  let component: DescargarIconComponent;
  let fixture: ComponentFixture<DescargarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
