export default defineEventHandler((e) => {
  return sendRedirect(e, '/api/products', 302);
});
