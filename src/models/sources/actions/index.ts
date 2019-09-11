import { createAsyncAction } from 'typesafe-actions';
import {
  _GET_FAILURE,
  _GET_REQUEST,
  _GET_SUCCESS,
} from './../constants/actions';
import { ISource } from './../types';

export const getSources = createAsyncAction(
  _GET_REQUEST,
  _GET_SUCCESS,
  _GET_FAILURE,
)<undefined, ISource[], Error>();
