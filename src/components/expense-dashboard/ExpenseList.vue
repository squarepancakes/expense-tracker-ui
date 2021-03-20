<template>
  <div>
    <table class="table__wrapper">
      <thead>
        <tr>
          <th>Date</th>
          <th>Item Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expenseItem in expenseList" :key="expenseItem._id">
          <td class="table__item">
            {{ dateFormatter(expenseItem.date) }}
          </td>
          <td class="table__item">
            {{ expenseItem.item }}
          </td>
          <td class="table__item">
            {{ expenseItem.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  margin: auto;
}
</style>
