export const isAuthenticated = () => {
  const user = localStorage.getItem('@Marvel: user');
  return !!(user);
};
