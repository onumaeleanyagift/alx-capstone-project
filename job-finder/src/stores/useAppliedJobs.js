import { create } from "zustand";

const useAppliedJobs = create((set) => ({
  appliedJobs: [],
  applyToJob: (job) =>
    set((state) => ({
      appliedJobs: [...state.appliedJobs, job],
    })),
}));

export default useAppliedJobs;
