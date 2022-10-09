const nav = require("./nav.js");
const footer = require("../common/footer.js");
const {
  readFileList,
  readTotalFileWords,
  readEachFileWords,
} = require("../webSiteInfo/readFile.js");

const { penName, link, avatar, name, slogan } = require("../common/info");

const bodyBgImg = require("../common/BgImg.js")

// 主题配置
module.exports = {
  nav, // 导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: "/logo/mac.png", // 导航栏logo
  repo: "https://github.com/cqnu-pc/cqnu-pc.github.io", // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: "更新时间", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: "docs", // 指定根目录
  editLinks: true, // 启用编辑
  editLinkText: "编辑此页",

  categoryText: "未整理", // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
  bodyBgImg,
  // bodyBgImg: [
  //   "https://api.paugram.com/wallpaper",
  //   "/background/66666.png",
  //   "/background/60752300_p0.jpg",
  //   "/background/60866522_p0.jpg",
  //   "/background/62494753_p0.jpg",
  //   "/background/62519517_p0.jpg",
  //   "/background/62691402_p0.jpg",
  //   "/background/63876132_p0.jpg",
  // ], // body背景大图(即整个页面的背景图)，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 0.1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  sidebar: "structuring", // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  // 站点配置（首页 & 文章页）
  blogInfo: {
    blogCreate: "2022-10-07", // 博客创建时间
    indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
    pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
    readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
    eachFileWords: readEachFileWords([""], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
    mdFileCountType: "archives", // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
    totalWords: "archives", // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
    moutedEvent: ".categories-wrapper", // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
    // 下面两个选项：第一次获取访问量失败后的迭代时间
    indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
  },

  // 首页大图片配置
  indexImg: {
    navColor: 1, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: false, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: true, // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: [
      "transparent",
      "rgba(255, 148, 48, .2)",
      "rgba(0, 0, 0, .3)",
      "rgba(0, 0, 0, .5)",
    ], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效
    descFade: true, // 是否开启图片中间描述的淡入淡出效果，默认为 false
    desc: [
      "有形即有度，有度必满盈。故君子之思不器，君子之行不器，君子之量不器 —— 《论语·为政》",
      "无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物。 -- 王阳明",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
      "倘若只是为了驱赶心中的寂寞，找谁都可以的。 -- 《秒速五厘米》",
      "错过了一次的人，始终会错过第二次。—— 侠名",
      "遇到事情不能坐以待毙。—— 「捷德奥特曼」",
      "时间是伟大的作家，总会写下完美的结局。—— 「秋之回忆」",
      "古人学问无遗力，少壮工夫老始成。—— 陆游「冬夜读书示子聿」",
      "重要的不是你做了多少事，而是你放了多少心思进去。—— 「凉宫春日的忧郁」",
      "旅行的意义在于找到自己，而非浏览他人。—— 「网络」",
      "想和你重新认识一次 从你叫什么名字说起。—— 「你的名字」",
      "没有BUG的代码是不完美的！—— Sodium_Sulfate「Sodium_Sulfate」",
      "不可结缘,徒增寂寞—— 「夏目友人帐」"
    ], // 多条描述，如果填写则覆盖 index.md 的 tagline，不填写则默认读取 index.md 的 tagline，descFadeIn 为 true 生效
    descFontSize: "1.4rem", // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100, // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
    descNextTime: 800, // 当有多个 desc 时，一个 desc 展示完后或准备开始时，多少时间后出现下一个 desc，默认 800 毫秒
    bubble: false, // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200, // 气泡的个数，bubble 为 true 生效，默认 200 个
  },
  blogger: {
    avatar,
    name,
    slogan, // 个性签名
  },
  social: {
    icons: [
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:2020051615308@stu.cqnu.edu.com",
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/pc-association",
      },
      {
        iconClass: "icon-erji",
        title: "听音乐",
        link: "https://music.163.com/#/playlist?id=503418750",
      },
    ],
  },
  footer,
};