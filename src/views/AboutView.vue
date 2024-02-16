<template>
  <h1>This is About page.</h1>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <VForm>
    <VField
      name="email"
      type="email"
      rules="required|email"
    />
    <ErrorMessage name="email"/>
  </VForm>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
