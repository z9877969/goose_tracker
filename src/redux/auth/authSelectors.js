// export const selectorIsAuth = (state) => state.auth.isAuth;
export const selectorIsAuth = (state) => state.auth.accessToken;
export const selectorUser = (state) => state.auth.user;
export const selectorBirthday = (state) => selectorUser(state).birthday;
