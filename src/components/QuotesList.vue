<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import type { Ref } from "vue";

import { getQuotesList } from "@/api";
import type { Api } from "@/types/api";
import { onBeforeRouteUpdate } from "vue-router";
import { usePagination } from "@/composables";

const { page, setTotalRecords, setBaseRoute } = usePagination();

const quotes: Ref<Api.ApiV1QuotesList.ResponseBody["results"]> = ref([]);

/**
 * Simple formatting date utility (could go in a utils directory).
 * @param isoDate
 */
const formatDate = (isoDate: string) => {
  const today = new Date(isoDate);
  return today.toLocaleString("en-UK");
};

/**
 * Requests quotes list, update pagination and triggers a quotes re-rendering.
 */
const loadQuotes = async () => {
  const quotesList = await getQuotesList({ page: page.value });

  setTotalRecords(quotesList.count); // Updates pagination

  quotes.value = quotesList.results;
};

onBeforeMount(() => {
  setBaseRoute("/quotes");
  loadQuotes();
});
onBeforeRouteUpdate(loadQuotes);
</script>

<template>
  <ul class="quotes-list">
    <li
      v-for="quote in quotes"
      :key="quote.id"
      class="quotes-list__item card mb-3"
    >
      <div class="card-body">
        <h3 class="card-title h4">{{ quote.title }}</h3>
        <ul class="list-group-flush">
          <li class="list-group-item">Amount: {{ quote.amount }}</li>
          <li class="list-group-item" v-if="quote.created">
            Created: {{ quote.created && formatDate(quote.created) }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
