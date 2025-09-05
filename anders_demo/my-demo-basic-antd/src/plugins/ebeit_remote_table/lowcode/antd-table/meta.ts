
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AntdTableMeta: IPublicTypeComponentMetadata = {
  "componentName": "AntdTable",
  "title": "AntdTable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "ebeit_remote_table",
    "version": "0.1.0",
    "exportName": "AntdTable",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dataSource",
            "zh-CN": "表格数据"
          },
          "tip": "dataSource | 表格数据"
        },
        "name": "dataSource",
        "description": "表格数据",
        "display": "block",  // 使用块级显示
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "name": "key",
                      "description": "唯一标识",
                      "setter": "StringSetter",
                      "isRequired": true
                    },
                    {
                      "name": "name",
                      "description": "姓名",
                      "setter": "StringSetter",
                      "isRequired": true
                    },
                    {
                      "name": "age",
                      "description": "年龄",
                      "setter": "NumberSetter",
                      "isRequired": false
                    },
                    {
                      "name": "address",
                      "description": "地址",
                      "setter": "StringSetter",
                      "isRequired": false
                    },
                    {
                      "name": "email",
                      "description": "邮箱",
                      "setter": "StringSetter",
                      "isRequired": false
                    }
                  ]
                }
              },
              "initialValue": {
                "key": "1",
                "name": "张三",
                "age": 32,
                "address": "北京市朝阳区",
                "email": "zhangsan@example.com"
              }
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columns",
            "zh-CN": "列配置"
          },
          "tip": "columns | 列配置"
        },
        "name": "columns",
        "description": "列配置",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "name": "title",
                      "description": "列标题",
                      "setter": "StringSetter",
                      "isRequired": true
                    },
                    {
                      "name": "dataIndex",
                      "description": "数据字段",
                      "setter": "StringSetter",
                      "isRequired": true
                    },
                    {
                      "name": "key",
                      "description": "唯一标识",
                      "setter": "StringSetter",
                      "isRequired": true
                    },
                    {
                      "name": "width",
                      "description": "列宽度",
                      "setter": "NumberSetter",
                      "isRequired": false
                    },
                    {
                      "name": "fixed",
                      "description": "固定列",
                      "setter": "StringSetter",
                      "isRequired": false
                    }
                  ]
                }
              },
              "initialValue": {
                "title": "姓名",
                "dataIndex": "name",
                "key": "name",
                "width": 100,
                "fixed": ""
              }
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bordered",
            "zh-CN": "是否显示边框"
          },
          "tip": "bordered | 是否显示边框"
        },
        "name": "bordered",
        "description": "是否显示边框",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "表格大小"
          },
          "tip": "size | 表格大小"
        },
        "name": "size",
        "description": "表格大小",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "options": [
              {
                "label": "小",
                "value": "small"
              },
              {
                "label": "中",
                "value": "middle"
              },
              {
                "label": "大",
                "value": "large"
              }
            ]
          },
          "initialValue": "small"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pagination",
            "zh-CN": "是否显示分页"
          },
          "tip": "pagination | 是否显示分页"
        },
        "name": "pagination",
        "description": "是否显示分页",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "scroll",
            "zh-CN": "是否可滚动"
          },
          "tip": "scroll | 是否可滚动"
        },
        "name": "scroll",
        "description": "是否可滚动",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "加载状态"
          },
          "tip": "loading | 加载状态"
        },
        "name": "loading",
        "description": "加载状态",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rowSelection",
            "zh-CN": "行选择配置"
          },
          "tip": "rowSelection | 行选择配置"
        },
        "name": "rowSelection",
        "description": "行选择配置",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hiddenProp",
            "zh-CN": "隐藏属性"
          }
        },
        "name": "hiddenProp",
        "condition": () => false,  // 隐藏这个属性
        "setter": {
          "componentName": "StringSetter",
          "initialValue": "这个属性不会显示"
        }
      }
    ],
    "supports": {
      "style": false
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AntdTable",
    "screenshot": "",
    "schema": {
      "componentName": "AntdTable",
      "props": {}
    }
  }
];

export default {
  ...AntdTableMeta,
  snippets
};
