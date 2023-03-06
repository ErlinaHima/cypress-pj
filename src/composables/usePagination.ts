import { computed, onBeforeMount, ref, watch } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

import router from "@/router";
import { ROUTES_WITH_PAGINATION } from "@/constants";

/**
 * The current page.
 */
const page: Ref<number | undefined> = ref(undefined);

/**
 * Total number of pages.
 */
const totalRecords: Ref<number | undefined> = ref(undefined);

/**
 * The current route where the pagination occurs.
 */
const baseRoute: Ref<string | undefined> = ref(undefined);

export const usePagination = () => {
  const route = useRoute();

  /**
   * Retrieves the current page from the current route
   */
  const getCurrentPage = computed(() => {
    const routePage = (route.params.page as string) || "1";

    return parseInt(routePage);
  });

  /**
   * Value setter for the numberOfPages reference object.
   * @param {number} pagesNumber
   */
  const setTotalRecords = (pagesNumber: number) => {
    totalRecords.value = pagesNumber;
  };

  /**
   * Value setter for the baseRoute reference object.
   * @param {number} pagesNumber
   */
  const setBaseRoute = (route: string) => {
    baseRoute.value = route;
  };

  /**
   * Navigates to a given page number.
   * @param {number} page
   */
  const goToPage = (page: number | undefined) => {
    if (!baseRoute.value) return;

    if (page && page > 1) {
      router.push(`${baseRoute.value}/${page}`);
    } else {
      router.push(`${baseRoute.value}`);
    }
  };

  const routeHasPagination = computed(() => {
    const routeName = route.name as string;
    return ROUTES_WITH_PAGINATION.includes(routeName);
  });

  onBeforeMount(() => {
    page.value = getCurrentPage.value;
  });

  const stopWatchingPage = watch(page, () => {
    if (!page.value) {
      stopWatchingPage();
    } else {
      goToPage(page.value);
    }
  });

  return {
    getCurrentPage,
    page,
    totalRecords,
    setTotalRecords,
    goToPage,
    setBaseRoute,
    routeHasPagination,
  };
};
