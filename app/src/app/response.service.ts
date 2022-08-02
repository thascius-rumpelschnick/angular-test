import { Injectable } from '@angular/core';
import { response, ResponseData, State, PersonIndexCount } from './response-data';

@Injectable()
export class ResponseService {
    response: ResponseData = response;

    getStateList(): State[] {
        return this.response.stateList;
    }

    getPersonIndexCounts(): PersonIndexCount {
        return this.response.personIndexCounts;
    }
}
