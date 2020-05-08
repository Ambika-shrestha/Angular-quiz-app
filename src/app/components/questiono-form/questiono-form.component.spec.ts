import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionoFormComponent } from './questiono-form.component';

describe('QuestionoFormComponent', () => {
  let component: QuestionoFormComponent;
  let fixture: ComponentFixture<QuestionoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
