import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alt2ViewComponent } from './alt2-view.component';

describe('Alt2ViewComponent', () => {
  let component: Alt2ViewComponent;
  let fixture: ComponentFixture<Alt2ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alt2ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alt2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
