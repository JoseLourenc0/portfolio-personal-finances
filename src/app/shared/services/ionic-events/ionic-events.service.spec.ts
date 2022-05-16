import { TestBed } from '@angular/core/testing';

import { IonicEventsService } from './ionic-events.service';

describe('IonicEventsService', () => {
  let service: IonicEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
