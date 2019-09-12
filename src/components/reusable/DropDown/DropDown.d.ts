export interface IDropDownProps {
  options: string[];
  onSelect: (value: string) => void;
  value: string;
}
