import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import crudSlice from './slices/crudSlice';

// configureStore - createStore farkları
// 1- varasayılan olarak thunk kurulu gelir
// 2- verilen reducer'ları otomarik olar bileştirir
export default configureStore({
  reducer: { counterSlice, crudSlice },
});