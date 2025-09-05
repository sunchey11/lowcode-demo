import * as React from 'react';
import { createElement } from 'react';
import { Table, Button, Space } from 'antd';
import './index.scss';

export interface AntdTableProps {
  /**
   * 表格数据
   */
  dataSource?: any[];
  /**
   * 列配置
   */
  columns?: any[];
  /**
   * 是否显示边框
   */
  bordered?: boolean;
  /**
   * 表格大小
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * 是否显示分页
   */
  pagination?: boolean | object;
  /**
   * 是否可滚动
   */
  scroll?: object;
  /**
   * 加载状态
   */
  loading?: boolean;
  /**
   * 行选择配置
   */
  rowSelection?: object;
  style?: React.CSSProperties;
}

class AntdTable extends React.Component<AntdTableProps> {
  static defaultProps = {
    dataSource: [
      {
        key: '1',
        name: '张三',
        age: 32,
        address: '北京市朝阳区',
        email: 'zhangsan@example.com'
      },
      {
        key: '2', 
        name: '李四',
        age: 28,
        address: '上海市浦东新区',
        email: 'lisi@example.com'
      },
      {
        key: '3',
        name: '王五',
        age: 35,
        address: '广州市天河区',
        email: 'wangwu@example.com'
      }
    ],
    columns: [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <Space size="middle">
            <Button type="link" size="small">编辑</Button>
            <Button type="link" size="small" danger>删除</Button>
          </Space>
        ),
      },
    ],
    bordered: true,
    size: 'middle',
    pagination: true,
    loading: false
  };

  render() {
    const { 
      dataSource, 
      columns, 
      bordered, 
      size, 
      pagination, 
      scroll, 
      loading, 
      rowSelection,
      style = {},
      ...otherProps 
    } = this.props;
    // const defaultDataSource = AntdTable.defaultProps.dataSource;
    // const defaultColumns = AntdTable.defaultProps.columns;
    return (
      <div style={style} {...otherProps}>
        <Table
          dataSource={dataSource }
          columns={columns}
          bordered={bordered}
          size={size}
          pagination={pagination}
          scroll={scroll}
          loading={loading}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default AntdTable;
