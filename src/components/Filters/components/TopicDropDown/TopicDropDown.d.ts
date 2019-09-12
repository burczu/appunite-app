export interface ITopicDropDownFromState {
  categories: string[];
  selectedCategory: string | undefined;
}

export interface ITopicDropDownFromDispatch {
  selectCategory: (value: string) => void;
}

export type ITopicDropDownProps = ITopicDropDownFromDispatch &
  ITopicDropDownFromState;
