<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { getSupplier } from "@/api/getSupplier";
import { useRoute } from "vue-router";

const supplierName = ref("");
const supplierDescription = ref("");

const route = useRoute();
const supplierId = route.params.id as string;

onBeforeMount(async () => {
  const supplier = await getSupplier({ id: parseInt(supplierId) });

  supplierName.value = supplier.name;
  supplierDescription.value = supplier?.description || "";
});
</script>

<template>
  <div class="single-supplier">
    <h2>{{ supplierName }}</h2>
    <p>{{ supplierDescription }}</p>
  </div>
</template>
