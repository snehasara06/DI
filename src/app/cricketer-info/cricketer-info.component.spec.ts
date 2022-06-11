import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerInfoComponent } from './cricketer-info.component';

describe('CricketerInfoComponent', () => {
  let component: CricketerInfoComponent;
  let fixture: ComponentFixture<CricketerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
