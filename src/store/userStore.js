import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      // Private — never shown to others
      realName: "",
      age: null,
      gender: "",
      email: "",
      password: "",
      isAuthenticated: false,

      // Public — shown to matches
      anonymousId: "",
      traits: [],
      supportPreference: "Mixed",
      currentMood: "Calm",
      note: "",
      isOnboarded: false,
      matches: [],
      journalEntries: [],

      // Actions
      setPrivateInfo: (data) => set((state) => ({ ...state, ...data })),
      setPublicInfo: (data) => set((state) => ({ ...state, ...data })),
      setTraits: (traits) => set({ traits }),
      setAnonymousId: (id) => set({ anonymousId: id }),
      setMood: (mood) => set({ currentMood: mood }),
      setSupport: (pref) => set({ supportPreference: pref }),
      addJournalEntry: (entry) => set((state) => ({
        journalEntries: [entry, ...state.journalEntries]
      })),
      addMatch: (profile) => set((state) => {
        const exists = state.matches.find(m => m.id === (profile.id || profile.anonymousId));
        return { 
          matches: exists ? state.matches : [...state.matches, profile] 
        };
      }),
      login: (data) => set({ ...data, isAuthenticated: true }),
      logout: () => set({
        realName: "",
        age: null,
        gender: "",
        email: "",
        password: "",
        anonymousId: "",
        traits: [],
        supportPreference: "Mixed",
        currentMood: "Calm",
        note: "",
        isOnboarded: false,
        isAuthenticated: false,
        matches: [],
        journalEntries: []
      }),
      reset: () => set({
        realName: "",
        age: null,
        gender: "",
        email: "",
        password: "",
        anonymousId: "",
        traits: [],
        supportPreference: "Mixed",
        currentMood: "Calm",
        note: "",
        isOnboarded: false,
        isAuthenticated: false,
      }),
    }),
    {
      name: 'meetzy-secure-storage',
    }
  )
);

export default useUserStore;
