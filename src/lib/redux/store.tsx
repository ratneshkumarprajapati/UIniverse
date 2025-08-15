import { configureStore } from '@reduxjs/toolkit'
import { resourceApi } from './services/resourceApi'
import { categoryApi } from './services/categoriesApi'

export const store = configureStore({
  reducer: {
    [resourceApi.reducerPath]: resourceApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(resourceApi.middleware)
      .concat(categoryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
