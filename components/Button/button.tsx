import React from 'react';

import './button.css';

export const ButtonColors = ['purple', 'white'] as const;
export type ButtonColor = typeof ButtonColors[number];

export const ButtonIconPositions = ['start', 'end'] as const;
export type ButtonIconPosition = typeof ButtonIconPositions[number];

export const ButtonSizes = ['small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'] as const;
export type ButtonSize = typeof ButtonSizes[number];

export interface ButtonProps {
  children: string | JSX.Element;
  color: ButtonColor;
  icon?: any;
  iconPosition?: ButtonIconPosition;
  size?: ButtonSize;
  fullWdith?: boolean;
  width?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showIcon: boolean;
}

const getButtonTextColor = (bgColor: ButtonColor): ButtonColor => {
  return bgColor === 'purple' ? 'white' : 'purple';
};

const getIconPositionClass = (position: ButtonIconPosition) => {
  return position === 'start' ? 'flex-row' : 'flex-row-reverse';
};

export default class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  renderChildren = () => {
    const Icon = this.props.icon;
    const { color, children, iconPosition, disabled, showIcon } = this.props;

    if (showIcon) {
      return (
        <span
          className={`flex justify-center items-center ${getIconPositionClass(
            iconPosition
          )} w-auto`}>
          <Icon
            className={`icon ${disabled ? 'text-gray-400' : `icon-${getButtonTextColor(color)}`}`}
          />
          <span
            className={`btn-txt ${
              disabled ? 'text-gray-400' : `txt-${getButtonTextColor(color)}`
            }`}>
            {children}
          </span>
        </span>
      );
    } else {
      return (
        <span
          className={`btn-txt ${disabled ? 'text-gray-400' : `txt-${getButtonTextColor(color)}`}`}>
          {children}
        </span>
      );
    }
  };

  render() {
    const { disabled, color } = this.props;
    var { size, iconPosition, icon } = this.props;

    // making default value since they are not mandatory props
    size = !size ? 'small' : size;
    iconPosition = !iconPosition ? 'start' : iconPosition;

    console.log('-------- icon ---------- \n', this.props.icon);

    return (
      <button
        className={`btn btn-bg-${color} ${icon ? 'min-w-36' : 'min-w-28'} w-auto`}
        disabled={disabled}
        onClick={this.props.onClick}>
        {this.renderChildren()}
      </button>
    );
  }
}
