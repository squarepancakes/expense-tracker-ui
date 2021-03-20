<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ExpenseDashboard
      :expenseList="expenseList"
      @add-new-item="handleAddNewItem"
    />
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
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.expenseList = await expenseApi.getAllExpenses();
    },
    async handleAddNewItem(newItem) {
      await expenseApi.addNewExpense(newItem);
      this.init();
    },
  },
};
</script>
