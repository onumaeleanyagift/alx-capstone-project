import { create } from "zustand";

const useProfileStore = create((set) => ({
  profile: {
    name: "",
    role: "",
    image: null,
  },
  setProfile: (newProfile) => set({ profile: newProfile }),
}));

export default useProfileStore;
