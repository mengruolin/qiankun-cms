export interface UserInfo {
  name: string;
}

type MenuTypes = [0, 1];
export interface UserMenu {
  name: string;

  path: string;

  type: MenuTypes;

  icon: string;

  hidden: boolean;

  disabled: boolean;

  external: boolean;

  child: UserMenu[] | [];
}

export interface UserState {
  menuList: UserMenu[];

  headerMenuKey: string | null;
  siderMenuKey: string | null;

  userInfo: UserInfo | null;
}
