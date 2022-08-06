import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPacksComponent } from './icon-packs.component';

describe('IconPacksComponent', () => {
  let component: IconPacksComponent;
  let fixture: ComponentFixture<IconPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
