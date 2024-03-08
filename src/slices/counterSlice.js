/*
 * Hem reducer'ları
 * Hem aksiyon'ları
 * farklı dosylarda oluşturmak yerine
 * slice yapısı oluştuurak ikisinide tek noktada tanılayabiliyoruz

  ? slice oluşturma
  1 ) import createSlice
  2 ) gerekli parametrleri tanımla
  - - name: slice ismi "string"
  - - initialState: başlangıç state'i
  - - reducers: aksiyonların görevini tanımladığımız fonksiyonlar
*/

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // slice ismi
  initialState: { count: 0, is_dark_theme: true },
  // state'in nasıl değiceğine karar veren fonksiyonalar
  // reducer/aksiyon fonksiyonları
  // bütün aksiyon fonksiyonları iki parametre alır
  // 1- state'in son hali
  // 2- aksiyon objesi
  reducers: {
    // aksiyon fonksiyonların redux'taki reducer'larda
    // tanımladığımzı case'lerden temel farkı state'i doğrudan güncellemeleri
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count !== 0 && state.count--;
    },

    // payloadı kullanıcaksak ikinci parametrye aksiyonu alırız
    set_count: (state, action) => {
      state.count = action.payload;
    },

    changeTheme: (state) => {
      state.is_dark_theme = !state.is_dark_theme;
    },
  },
});

// createSlice methodu bizim için klasik redux'ta switc case'lerle
// tanımladığımız reducer fonskiyonunu kendisi oluşturu
export default counterSlice.reducer;

// crete slice methodu bizim oluşturüumzu aksiyon oluşturan fonksiyonları
// kendisi otomatil oluşturu biz ise sadece export edip siteğimiz
// bileşenlerde kullanırırz
export const { increase, decrease, set_count, changeTheme } =
  counterSlice.actions;