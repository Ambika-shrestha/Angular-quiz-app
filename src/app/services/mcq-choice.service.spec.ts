import { TestBed } from '@angular/core/testing';

import { McqChoiceService } from './mcq-choice.service';

describe('McqChoiceService', () => {
  let service: McqChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McqChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
