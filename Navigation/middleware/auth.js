export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.params.name) {
    return navigateTo("/404");
  }
});
