
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ColorfulButtonMeta: IPublicTypeComponentMetadata = {
  "componentName": "ColorfulButton",
  "title": "ColorfulButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "category": "ebeit_ui",
  "group": "ebeit_ui",
  "npm": {
    "package": "ebeit_remote_table",
    "version": "0.1.0",
    "exportName": "ColorfulButton",
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
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "dashed",
                "value": "dashed"
              },
              {
                "label": "link",
                "value": "link"
              },
              {
                "label": "text",
                "value": "text"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "dashed",
                "value": "dashed"
              },
              {
                "label": "link",
                "value": "link"
              },
              {
                "label": "text",
                "value": "text"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "背景颜色"
          }
        },
        display: 'block',

        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "尺寸"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "options": [
              { "label": "小", "value": "small" },
              { "label": "中", "value": "middle" },
              { "label": "大", "value": "large" }
            ]
          },
          "initialValue": "middle"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "禁用状态"
          }
        },
        "name": "disabled",
        "setter": {
          "componentName": "BoolSetter",
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "children",
            "zh-CN": "按钮文本"
          }
        },
        "name": "children",
        "setter": {
          "componentName": "StringSetter",
          "initialValue": "antd button"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "标题"
          },
          "tip": "title | 按钮的 title 属性"
        },
        "name": "title",
        "description": "按钮的 title 属性",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              "StringSetter",
              "VariableSetter",
              "NumberSetter"
            ]
          },
          "initialValue": "my antd button"
        }
      },
    ],
    "supports": {
      "style": true,
      "events": ["onClick", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ColorfulButton",
    "screenshot": "",
    "schema": {
      "componentName": "ColorfulButton",
      "props": {}
    }
  }
];

export default {
  ...ColorfulButtonMeta,
  snippets
};
