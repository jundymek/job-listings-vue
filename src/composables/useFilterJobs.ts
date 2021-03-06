import { ComputedRef, Ref, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import jobs from "../../data.json";

export interface JobType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const sortBy = ref<string[]>([]);
const allJobs = ref<JobType[]>(jobs);

export const useFilterJobs = (): {
  sortBy: Ref<string[]>;
  addSortElement: (item: string) => void;
  removeSortElement: (item: string) => void;
  removeAllSortElements: () => void;
  filteredJobs: ComputedRef<JobType[]>;
} => {
  const addSortElement = (item: string) => {
    if (sortBy.value.includes(item)) {
      return;
    } else {
      sortBy.value.push(item);
    }
  };

  const removeSortElement = (item: string) => {
    sortBy.value = sortBy.value.filter((element) => element !== item);
  };

  const removeAllSortElements = () => {
    sortBy.value = [];
  };

  const filteredJobs = computed(() => {
    return allJobs.value.filter((job) => {
      const filterOptions = job.languages.concat(
        ...job.tools,
        job.role,
        job.level
      );
      return sortBy.value.every((item) => filterOptions.includes(item));
    });
  });

  return {
    sortBy,
    addSortElement,
    removeSortElement,
    filteredJobs,
    removeAllSortElements,
  };
};
