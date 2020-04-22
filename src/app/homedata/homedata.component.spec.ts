import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { homedataComponent } from './homedata.component';

describe('homedataComponent', () => {
  let component: homedataComponent;
  let fixture: ComponentFixture<homedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ homedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(homedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
