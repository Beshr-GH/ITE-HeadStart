/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProListService } from './pro-list.service';

describe('ProListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProListService]
    });
  });

  it('should ...', inject([ProListService], (service: ProListService) => {
    expect(service).toBeTruthy();
  }));
});
