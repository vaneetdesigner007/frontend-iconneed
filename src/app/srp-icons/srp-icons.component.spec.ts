import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpIconsComponent } from './srp-icons.component';

describe('SrpIconsComponent', () => {
  let component: SrpIconsComponent;
  let fixture: ComponentFixture<SrpIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrpIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrpIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
