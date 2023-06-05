import { createSelector } from 'reselect';
import type { RootState } from '../../store';
import type { IHomePageState } from './types';

const selectHomePage = (state: RootState): IHomePageState => state.homePage;

export const makeSelectAnimePage = createSelector(
  selectHomePage,
  homePage => homePage.animePage
);
