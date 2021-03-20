<template>
  <div>
    <h1>hihi</h1>
    <ExpenseList :expenseList="expenseList" />
  </div>
</template>

<script>
import ExpenseList from "@/components/expense-dashboard/ExpenseList.vue";

export default {
  props: {
    expenseList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ExpenseList,
  },
};
</script>

<style scoped>
/* .table__wrapper {
  border: 2px solid blueviolet;
} */
</style>
