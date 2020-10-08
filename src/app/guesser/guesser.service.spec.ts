import { TestBed } from '@angular/core/testing';

import { GuesserService } from './guesser.service';

describe('GuesserService', () => {
  let service: GuesserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuesserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
