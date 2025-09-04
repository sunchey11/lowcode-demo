
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AndersMaterialDemoMeta: IPublicTypeComponentMetadata = {
  "componentName": "AndersMaterialDemo",
  "title": "AndersMaterialDemo",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "category": "信息展示",
  "group": "原子组件",
  "npm": {
    "package": "anders_material_demo",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src\\index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "content"
          }
        },
        "name": "content",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "buttonText",
            "zh-CN": "按钮文本"
          }
        },
        "name": "buttonText",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": "点击我"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showCard",
            "zh-CN": "显示卡片"
          }
        },
        "name": "showCard",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
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
            "en-US": "key",
            "zh-CN": "key"
          }
        },
        "name": "key",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AndersMaterialDemo",
    "screenshot": "",
    "schema": {
      "componentName": "AndersMaterialDemo",
      "props": {}
    }
  }
];

export default {
  ...AndersMaterialDemoMeta,
  snippets
};
