<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ExpenseDashboard :expenseList="expenseList" />
  </div>
</template>

<script>
import expenseApi from "@/api/expense-api";
import ExpenseDashboard from "@/components/expense-dashboard/ExpenseDashboard.vue";

export default {
  name: "Home",
  components: {
    ExpenseDashboard,
  },
  data() {
    return {
      expenseList: [],
    };
  },
  async mounted() {
    this.expenseList = await expenseApi.getAllExpenses();
  },
};
</script>
