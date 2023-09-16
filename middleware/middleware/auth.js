export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedin = 1;
  if (isLoggedin && to.path === "/login") {
    return navigateTo("/");
  }
  // return navigateTo("https://instagram.com", { external: true });
});
