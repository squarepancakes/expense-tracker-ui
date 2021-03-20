<template>
  <table class="table__wrapper">
    <tr>
      <th>Date</th>
      <th>Item Name</th>
      <th>Price</th>
    </tr>
    <tr v-for="expenseItem in expenseList" :key="expenseItem._id">
      <td>
        {{ dateFormatter(expenseItem.date) }}
      </td>
      <td>
        {{ expenseItem.item }}
      </td>
      <td>
        {{ expenseItem.price }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    expenseList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    dateFormatter(date) {
      return new Date(date).toLocaleString("en-GB");
    },
  },
};
</script>

<style scoped>
.table__wrapper {
  border: 2px solid blueviolet;
}
</style>
