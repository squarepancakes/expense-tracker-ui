<template>
  <div>
    <h1>hihi</h1>
    <div>
      <form @submit="handleAddNewItem">
        <input placeholder="Item purchased" v-model="newItem.item" />
        <input placeholder="Price" v-model="newItem.price" type="number" />
        <button type="submit">Add</button>
      </form>
    </div>
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
  data() {
    return {
      newItem: {
        item: "",
        price: null,
        category: ["food"],
      },
    };
  },
  methods: {
    handleAddNewItem() {
      this.$emit("add-new-item", this.newItem);
    },
  },
};
</script>

<style scoped></style>
