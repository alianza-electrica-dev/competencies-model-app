import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useAuthUserStore = create(
  devtools(
    persist(
      set => ({
        user: null,
        setAuthUser: authUser => set(state => ({ user: authUser })),
      }),
      { name: 'authUserStore' },
    ),
  ),
);
