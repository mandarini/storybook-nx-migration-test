import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOtherComponent } from './test-other.component';

describe('TestOtherComponent', () => {
  let component: TestOtherComponent;
  let fixture: ComponentFixture<TestOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
