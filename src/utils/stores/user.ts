// NOTE: Dummy data for now later on fetched from the backend

import { createStore } from "solid-js/store";

export interface User {
  username: string;
}

export interface UserStore extends User { };


export const [userStore, setUserStore] = createStore<UserStore>({
  username: "bolton12"
});
