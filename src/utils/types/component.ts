import { JSX, Component } from "solid-js";

export type RequiredParentProps<P extends Record<string, any> = {}> = P & {
  children: JSX.Element;
};

/**
 * `RequiredParentComponent` forces `children` prop with the usual
 * type in JSX, `JSX.Element` (which allows elements, arrays, functions, etc.).
 * Use this for components that you want to require children.
 */
export type RequiredParentComponent<P extends Record<string, any> = {}> = Component<RequiredParentProps<P>>;

