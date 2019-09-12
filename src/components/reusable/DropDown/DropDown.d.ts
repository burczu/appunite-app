export interface IDropDownProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder: string;
  value: string | undefined;
}
