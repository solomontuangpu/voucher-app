import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAccountStore = create(persist((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  logout: () => set({ token: null })
}), {
  name: 'account-storage' // name of the item in the storage 
}));

export default useAccountStore;