import type React, { JSX } from 'react';

export type ButtonType = 'filled' | 'outlined' | 'non-selected';
export type ButtonSize = 'normal' | 'large';
export type TextColor =
  | 'primary-blue'
  | 'white'
  | 'gray'
  | 'light-blue'
  | 'blue'
  | 'black'
  | 'text-ascendRed'
  | 'text-descentBlue';
export type TextSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'text-3xl'
  | 'text-4xl';
export type DoughnutChartType = 'repay-complete' | 'investing';
export type DateUnit = 'day' | 'week' | 'month';
export type TextWeight =
  | 'thin' // 100
  | 'extralight' // 200
  | 'light' // 300
  | 'regular' // 400
  | 'medium' // 500
  | 'semibold' // 600
  | 'bold' // 700
  | 'extrabold' // 800
  | 'black'; // 900

export interface TextProps {
  text: string | React.ReactNode;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
}

export interface ButtonProps {
  label: TextProps;
  variant: ButtonType;
  size: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

export interface StatCardProps {
  icon: 'users' | 'trendingUp' | 'clock';
  value: string;
  label: string;
}

export interface ServiceInfoCardProps {
  icon: 'shield' | 'users' | 'trendingUp' | 'clock';
  value: string;
  label: JSX.Element;
}

export interface BasicInfoCardProps {
  icon: 'creditCard' | 'trendingUp' | 'clock' | 'arrowUpRight';
  value: string;
  label: string;
}

export interface UserInfoCardProps {
  icon: 'clock' | 'triangleAlert';
  title: TextProps;
  category: TextProps;
  categoryValue: TextProps;
  totalCount: TextProps;
  changeRate: TextProps;
}

export interface ChartInfoCardProps {
  category: TextProps;
  title: TextProps;
  categoryCount: TextProps;
  totalCount: TextProps;
  changeValue: TextProps;
}

export interface DoughnutChartProps {
  percentage: number;
  type: DoughnutChartType;
  label?: string;
}

export interface PieChartProps {
  labels: string[];
  data: number[];
  colors?: string[];
}

export interface BarLineChartProps {
  labels: string[]; // 날짜
  rawBarData: { [category: string]: number[] };
  rawLineData: number[];
  dateUnit?: DateUnit;
  displayCount?: number;
  barCategories: string[];
  barLabel?: string;
  lineLabel?: string;
  barColors?: string[];
  lineColor?: string;
}

export interface BarChartProps {
  labels: string[];
  values: number[];
  title?: string;
}

export interface SliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  labelLeft?: string;
  labelRight?: string;
}

export interface SliderGroupItemProps {
  title: string;
  valueText: string;
  sliderValue: number;
  min: number;
  max: number;
  step?: number;
  labelLeft?: string;
  labelRight?: string;
  onChange: (value: number) => void;
  bgColor?: 'light-blue' | 'none';
}

export interface InvestmentResultPanelProps {
  amount: number; // 투자 금액
  duration: number; // 투자 기간_개월월
  rate: number; // 연ㄴ수익률 (%)
}

export interface InvestmentInputPanelProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
}

export interface SectionTab {
  label: TextProps;
  href: string;
}

export interface SectionTabNavProps {
  title: TextProps;
  description: TextProps;
  tabs: SectionTab[];
  activeIndex: number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTabClick: (_index: number) => void;
}

export interface BasicTableCell {
  key: string;
  content: string | number | React.ReactNode;
}

export interface BasicTableRow {
  key: string;
  cells: BasicTableCell[];
}

export interface BasicTableProps {
  title?: string;
  columns: string[];
  rows: BasicTableRow[];
  className?: string;
  viewAllLink?: string;
  showHeader?: boolean;
}

export interface ProgressItem {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ProgressGroupProps {
  title?: string;
  items: ProgressItem[];
}
