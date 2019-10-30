import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaFormaComponent } from './liga-forma.component';

describe('LigaFormaComponent', () => {
  let component: LigaFormaComponent;
  let fixture: ComponentFixture<LigaFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
