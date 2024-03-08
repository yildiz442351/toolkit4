import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

// başlangıç state'i tanımla
const initialState = {
  tasks: [
    {
      id: 'asd123',
      title: 'Navbar Animasyonu',
      author: 'Ahmet',
      assigned_to: 'Mehmet',
      end_date: '2024-01-01',
    },
    {
      id: 'sdf45',
      title: 'Footer Responsive',
      author: 'Ali',
      assigned_to: 'Ayşe',
      end_date: '2024-02-01',
    },
  ],
};

//2) slice oluştur
const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // a) todo'ya id ekle
      action.payload.id = v4();

      // b) veriyi task'lerin arasına ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // 1.Yöntem > filter
      // const filtred = state.tasks.filter(
      //   (task) => task.id !== action.payload
      // );

      // state.tasks = filtred;

      // 2.yöntem splice
      // a) silincek elemanın sırasını bulma
      const i = state.tasks.findIndex((t) => t.id === action.payload);

      // elemanı diziden kaldırm
      state.tasks.splice(i, 1);
    },

    editTask: (state, action) => {
      // güncellenicek elemanın dizideki sırasını bul
      const i = state.tasks.findIndex(
        (t) => t.id === action.payload.id
      );

      // elemanı güncelle
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

// 3) aksiyonları tek tek export et
export const { addTask, editTask, deleteTask } = crudSlice.actions;

// 4) reducer'ı export et
export default crudSlice.reduce