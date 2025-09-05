import * as React from 'react';
import { Button } from 'antd';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "default" | "dashed" | "link" | "text";
  /**
   * 背景颜色
   */
  color?: string;
  /**
   * 尺寸
   */
  size?: "small" | "middle" | "large";
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 按钮文本
   */
  children?: React.ReactNode;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 鼠标进入事件
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 鼠标离开事件
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 获得焦点事件
   */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   * 失去焦点事件
   */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = function ColorfulButton({
  type = 'primary',
  color,
  size = 'middle',
  disabled = false,
  title = 'my antd button',
  style = {},
  children = 'antd button',
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...otherProps
}) {
  const _style: React.CSSProperties = { ...style };
  if (color) {
    _style.backgroundColor = color;
  }
  
  return (
    <Button 
      type={type} 
      size={size}
      disabled={disabled}
      style={_style} 
      title={title}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;


