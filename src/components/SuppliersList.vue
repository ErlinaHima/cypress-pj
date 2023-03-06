<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import type { Ref } from "vue";

import { getSuppliersList } from "@/api/getSuppliersList";
import type { Api } from "@/types/api";
import { usePagination } from "@/composables";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

const suppliers: Ref<Api.ApiV1SuppliersList.ResponseBody["results"]> = ref([]);

const loadSuppliers = async () => {
  const suppliersList = await getSuppliersList({ page: page.value });

  setTotalRecords(suppliersList.count); // Updates the pagination

  suppliers.value = suppliersList.results;
};

const { page, setTotalRecords, setBaseRoute } = usePagination();

onBeforeMount(() => {
  setBaseRoute("/suppliers");
  loadSuppliers();
});
onBeforeRouteUpdate(loadSuppliers);
</script>

<template>
  <div class="suppliers-list">
    <ul class="suppliers list-group list-group-flush">
      <li
        v-for="supplier in suppliers"
        :key="supplier.name"
        class="list-group-item"
      >
        <RouterLink :to="`/supplier/${supplier.id}`">{{
          supplier.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
