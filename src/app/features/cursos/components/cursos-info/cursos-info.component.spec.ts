import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInfoComponent } from './cursos-info.component';

describe('CursosInfoComponent', () => {
  let component: CursosInfoComponent;
  let fixture: ComponentFixture<CursosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
