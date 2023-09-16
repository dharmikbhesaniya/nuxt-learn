export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedin = true;
  if (!isLoggedin) {
    return navigateTo("/login");
  } 
});
