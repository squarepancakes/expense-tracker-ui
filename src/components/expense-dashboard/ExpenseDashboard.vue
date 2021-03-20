<template>
  <div>
    <h1>hihi</h1>
    <ul>
      <li v-for="expenseItem in expenseList" :key="expenseItem._id">
        {{ expenseItem }}
      </li>
    </ul>
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
};
</script>

<style></style>
