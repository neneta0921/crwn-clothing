import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCartHidden = createSelector(
  [selectUser],
  cart => cart.hidden
)

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)


