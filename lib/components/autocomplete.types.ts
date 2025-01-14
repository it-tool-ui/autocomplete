export enum PositionType {
  Top,
  Bottom,
}

export interface AutocompleteProps {
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options: string[];
  onChange: (value: string) => void;
}
