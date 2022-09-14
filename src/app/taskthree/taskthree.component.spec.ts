import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskthreeComponent } from './taskthree.component';

describe('TaskthreeComponent', () => {
  let component: TaskthreeComponent;
  let fixture: ComponentFixture<TaskthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
