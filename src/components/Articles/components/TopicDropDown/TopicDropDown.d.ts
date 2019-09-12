export interface ITopicDropDownFromState {
  categories: string[];
  selectedCategory: string;
}

export interface ITopicDropDownFromDispatch {
  selectCategory: (value: string) => void;
}

export type ITopicDropDownProps = ITopicDropDownFromDispatch &
  ITopicDropDownFromState;
