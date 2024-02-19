import * as React from 'react';
import { InputProps } from './types';
export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
export declare const InputUI: React.ForwardRefExoticComponent<InputUIProps & React.RefAttributes<HTMLInputElement>>;
export declare function Input({ children, id, label, classNameContainer, description, icon, isLoading, iconDirection, ...rest }: InputProps): JSX.Element;
