import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Button, Card, Tag } from '@alifd/next';

interface ComponentProps {
  title: string;
  content: string;
  buttonText?: string;
  showCard?: boolean;
}

const ExampleComponent = (props: ComponentProps, ref: any) => {
  const { title, content, buttonText = '点击我', showCard = true, ...others } = props;

  const handleClick = () => {
    console.log('按钮被点击了！');
  };

  return (
    <div ref={ref} className="ExampleComponent" {...others}>
      <h1>{title}</h1>
      {content || 'Hello Anders ExampleComponent'}
      
      {showCard && (
        <Card style={{ marginTop: 16 }}>
          <Card.Header title="这是一个卡片" />
          <Card.Content>
            <p>这里使用了 Fusion 的 Card 组件</p>
            <Tag color="blue">标签</Tag>
            <Button type="primary" onClick={handleClick} style={{ marginLeft: 8 }}>
              {buttonText}
            </Button>
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
