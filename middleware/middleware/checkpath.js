export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedin = true;
  if (!isLoggedin && to.path !== "/login") {
    return navigateTo("/login", { redirectCode: 301 });
  } else {
    if (from.path === "/" && to.path === "/home") {
      return true;
    } else if (from.path === "/home" && to.path === "/about") {
      return true;
    } else if (from.path === "/about" && to.path === "/contact") {
      return true;
    } else {
      return false;
    }
  }
});
