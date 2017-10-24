import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltViewComponent } from './alt-view.component';

describe('AltViewComponent', () => {
  let component: AltViewComponent;
  let fixture: ComponentFixture<AltViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
