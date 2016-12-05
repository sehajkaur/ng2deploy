/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartoonCharacterService } from './cartoon-character.service';

describe('Service: CartoonCharacter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartoonCharacterService]
    });
  });

  it('should ...', inject([CartoonCharacterService], (service: CartoonCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
