import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqchoiceFormComponent } from './mcqchoice-form.component';

describe('McqchoiceFormComponent', () => {
  let component: McqchoiceFormComponent;
  let fixture: ComponentFixture<McqchoiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqchoiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqchoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
