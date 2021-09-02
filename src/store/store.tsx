import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from '../reducers/AuthReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UiReducer } from '../reducers/UiReducer';
// ...
const reducers = combineReducers({
  auth: authReducer,
  Ui :UiReducer
  // notes: notesReducer,
});
export const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

