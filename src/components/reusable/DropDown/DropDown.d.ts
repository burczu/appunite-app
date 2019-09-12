export interface IDropDownProps {
  className?: string;
  options: string[];
  onSelect: (value: string) => void;
  placeholder: string;
  value: string | undefined;
}
