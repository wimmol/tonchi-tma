import { createSlice } from '@reduxjs/toolkit';
import { rootStateType } from '@core/store/types.ts';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    balance: 0,
    isOnboardingComplete: false,
    isTutorialComplete: false,
  } as rootStateType,
  reducers: {
    increment(state) {
      state.balance += 1;
    },
    completeOnboarding(state) {
      state.isOnboardingComplete = true;
    },
    completeTutorial(state) {
      state.isTutorialComplete = true;
    },
  },
});

export const { reducer: rootReducer, actions: rootActions } = rootSlice;
