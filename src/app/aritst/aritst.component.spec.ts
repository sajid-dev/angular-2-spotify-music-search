import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AritstComponent } from './aritst.component';

describe('AritstComponent', () => {
  let component: AritstComponent;
  let fixture: ComponentFixture<AritstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AritstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AritstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
