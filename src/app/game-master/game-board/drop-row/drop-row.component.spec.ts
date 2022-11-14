import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropRowComponent } from './drop-row.component';

describe('DropRowComponent', () => {
  let component: DropRowComponent;
  let fixture: ComponentFixture<DropRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
