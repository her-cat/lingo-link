import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Cancel: "Cancel",
      Save: "Save",
      "Add to collection": "Add to collection",
      "Remove from collection": "Remove from collection",
      "Word to Save": "Word to Save",
      "Sentence Containing the Word": "Sentence Containing the Word",
      Account: "Account",
      "Sign out": "Sign out",
      "Sign in": "Sign in",
      "Interface Language": "Interface Language",
      "Translation Services for Words": "Translation Services for Words",
      "Translation Services for Sentences": "Translation Services for Sentences",
      "Language to be Translated": "Language to be Translated",
      "Native Language": "Native Language",
      "Display Trigger Icon After Highlighting Text":
        "Display Trigger Icon After Highlighting Text",
      "Translate after selecting text and pressing a shortcut key":
        "Translate after selecting text and pressing a shortcut key",
      "Auto Save Word When Searching":
        "Auto Save Word When Searching",
      "Automatically pronounce the word when looking it up":
        "Automatically pronounce the word when looking it up",
      "Trigger Icon":
        "Trigger Icon",
      "Trigger Icon Size": "Trigger Icon Size",
      Show: "Show",
      "Don't Show": "Don't Show",
      "Basic Settings": "Basic Settings",
      "Other":"Other",
      "Engines": "Translate Service",
      "Engines Settings": "Translate Service Settings",
      "Vocabulary Notebook": "Vocabulary Notebook",
      "Not Logged In State": "Not Logged In State",
      Email: "Email",
      "Send Code": "Send Code",
      "Sign in with Google": "Sign in with Google",
      "Email Verification Code": "Email Verification Code",
      Mastered: "Mastered",
      Forgot: "Forgot",
      "Take Notes": "Take Notes",
      Notes: "Notes",
      Edit: "Edit",
      "An error occurred": "An error occurred",
      "This field is required": "This field is required",
      "The word is not included": "The word is not included.",
      "Available models for the current account":
        "Available models for the current account",
        "Available models for the current key":
        "Available models for the current key",
      "Method of acquisition": "Method of acquisition",
      "Password": "Password",
      "Level of importance": "Level of importance",
      "Prompt Of Word System Tip": '{word} represents the selected word.{sentence} represents the sentence where the selected word is located.{targetLanguage} represents the target language in the basic settings.',
      'Prompt Of Word User Tip':'{word} represents the selected word. {targetLanguage} represents the target language in the basic settings.',
      "Prompt Of Sentence System Tip": '{sentence} represents the selected text, {targetLanguage} represents the target language in the basic settings.',
      'Prompt Of Sentence User Tip':'{sentence} represents the selected text, {targetLanguage} represents the target language in the basic settings.',
      "Reset To Initial Settings": "Reset To Initial Settings",
      "Clear All Settings": "Clear All Settings",
      "Confirm": "Confirm",
      "Confirm Question": "Are you sure you want to restore the default settings?",
      "Refresh":"Refresh",
      "Enter The Conversation":"Enter The Conversation",
      "Check Language Set": "Check if the source language of the translation is set correctly",
      "Login Tip": "If it is a new account, it will be created automatically",
      "Video Website Support List":"Video Website Support List",
      "Sorry":"This product has not yet undergone comprehensive testing. We apologize for any inconvenience you may encounter",
      "Feedback": "Thank you very much for reporting any issues you encounter, and we welcome any suggestions or feedback: 602120734@qq.com",
      "External Links": "External Links",
      "Name":"Name",
      "Link":"Link",
      "LinkTip":"{text} will be replaced with real text",
      "Add": "Add",
      "Words synchronization": "Words synchronization",
      "Screenshot API":"Screenshot API",
      "Oulu Dic":"Oulu Dic",
      "Oulu Token": "Oulu Token",
      "Oulu Learning Language":"Oulu Learning Language",
      "Synchronization Status":"Synchronization Status",
      "EnginesTip":"Drag and drop to sort, the first one is the default service",
      "Update Log":"Update Log",
      "Question":"Common Question",
      "Highlight Color": "Highlight Color",
      "Highlight Style": "Highlight Style"
    },
  },
  zh: {
    translation: {
      Cancel: "取消",
      Save: "确定",
      Confirm:"确认",
      "Add to collection": "收藏",
      "Remove from collection": "取消收藏",
      "Word to Save": "单词",
      "Sentence Containing the Word": "上下文",
      Remark: "笔记",
      Account: "账户",
      "Sign out": "退出登录",
      "Sign in": "登录",
      "Interface Language": "界面语言",
      "Translation Services for Words": "翻译单词使用的引擎",
      "Translation Services for Sentences": "翻译句子使用的引擎",
      "Language to be Translated": "需要翻译的语言",
      "Native Language": "母语",
      "Display Trigger Icon After Highlighting Text": "划词后是否显示按钮",
      "Translate after selecting text and pressing a shortcut key":
        "划词后按快捷键翻译",
      "Automatically pronounce the word when looking it up":
        "查询单词时自动发音",
      "Trigger Icon": "触发图标",
      "Trigger Icon Size": "触发图标大小",
      Show: "显示",
      "Don't Show": "不显示",
      "Basic Settings": "基本设置",
      "Other": "其他",
      "Engines": "翻译服务",
      "Engines Settings": "翻译服务设置",
      "Vocabulary Notebook": "生词本",
      "Not Logged In State": "未登录状态",
      Email: "邮箱地址",
      "Send Code": "发送验证码",
      "Sign in with Google": "使用当前Google账号登录",
      "Email Verification Code": "验证码",
      Mastered: "已掌握",
      Forgot: "忘记了",
      "Take Notes": "写笔记",
      Notes: "笔记",
      Edit: "修改",
      "An error occurred": "发生错误",
      "This field is required": "需要填写此项",
      "The word is not included": "没有收录该词",
      "Available models for the current account": "当前账号可用模型",
      "Available models for the current key":
        "当前key可用模型",
      "Method of acquisition": "获取方式",
      "Password": "密码",
      "Level of importance": "重要程度",
      "Prompt Of Word System Tip": '{targetLanguage}代表基本设置里的目标语言，{word}代表选中的单词。',
      "Prompt Of Word User Tip": '{targetLanguage}代表基本设置里的目标语言，{word}代表选中的单词，{sentence}代表当前单词所在的句子。',
      "Prompt Of Sentence System Tip": '{sentence}代表选中的文本，{targetLanguage}代表基本设置里的目标语言',
      'Prompt Of Sentence User Tip':'{sentence}代表选中的文本，{targetLanguage}代表基本设置里的目标语言',
      "Reset To Initial Settings": '恢复默认值',
      "Confirm Question": "确定要恢复到默认值吗?",
      "Refresh":"刷新",
      "Enter The Conversation":"进入会话",
      "Check Language Set": "检查翻译源语言是否设置正确",
      "Login Tip": "如果是新账号，将会自动创建",
      "Video Website Support List":"视频网站支持列表",
      "Sorry":"此产品尚未经过完整测试，如果遇到问题，给您带来不便，还请谅解",
      "Feedback": "非常感谢您将遇到的问题反馈给我，也欢迎任何建议或反馈：602120734@qq.com",
      "External Links": "外部链接",
      "Name":"名称",
      "Link":"链接",
      "LinkTip":"{text} 将会被真实文本替换",
      "Add": "新增",
      "Words synchronization":"单词数据同步",
      "Oulu Dic":"欧路词典",
      "Oulu Token":"授权信息",
      "Oulu Learning Language":"在欧路词典学习的语言",
      "Synchronization Status":"同步开关",
      "EnginesTip":"可拖拽排序，第一个为默认服务",
      "Screenshot API":"屏幕截图API",
      "Update Log":"更新日志",
      "Question":"常见问题",
      "Clear All Settings": "恢复默认设置",
      "Highlight Color": "高亮颜色",
      "Highlight Style": "高亮样式",
      "Auto Save Word When Searching": "查词后自动保存单词"
    },
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      caches: [],
    },
  });
export default i18n;
