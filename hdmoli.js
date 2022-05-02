{
	"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    // 首页地址 用于获取 分类和首页推荐
	"homeUrl": "https://www.hdmoli.com",
     "dcPlayUrl": "true",
    // 手动设置分类，如果手动设置了分类则不使用上面的分类xpath获取分类  例如 "cateManual": {"电影": "1", "电视剧": "2"},
	"cateManual": {"电影": "1","剧集": "2"},
    // 首页推荐视频的节点
	"homeVodNode": "//ul[contains(@class,'myui-vodlist clearfix')]/li/div/a",
    // 首页推荐视频的名称
	"homeVodName": "/@title",
    // 二次处理正则
    "homeVodNameR": "",
    // 首页推荐视频的id
	"homeVodId": "/@href",
    // 二次处理正则
	"homeVodIdR": "/movie/(\\w+).html",
    // 首页推荐视频的图片
	"homeVodImg": "/@data-original",
    // 二次处理正则
    "homeVodImgR": "",
    // 首页推荐视频的简介
	"homeVodMark": "/span[2]/text()",
    // 二次处理正则
    "homeVodMarkR": "",
    // 分类页地址 {cateId} 分类id {catePg} 当前页
	"cateUrl": "https://www.hdmoli.com/search.php?&page={catePg}&searchtype=5&order={by}&tid={cateId}&area={area}&year=&letter=&yuyan=&state=&money=&ver=&jq=",
    // 同上面的homeVod字段 分类列表中的视频信息
	"cateVodNode": "//ul[contains(@class,'myui-vodlist clearfix')]/li/div/a",
	"cateVodName": "/@title",
	"cateVodId": "/@href",
	"cateVodIdR": "/movie/(\\w+).html",
	"cateVodImg": "/@data-original",
	"cateVodMark": "/span[2]/text()",
    // 详情页地址 用于获取详情页信息 及 播放列表和地址
	"dtUrl": "https://www.hdmoli.com/movie/{vid}.html",
    // 详情节点
	"dtNode": "//body",
    // 视频名
	"dtName": "//div[contains(@class,'myui-content__detail')]/h1/text()",
	"dtNameR": "",
    // 视频图片
	"dtImg": "//div[contains(@class,'myui-content__thumb')]/a/img/@data-original",
	"dtImgR": "",
    // 视频分类
	"dtCate": "//div[contains(@class,'myui-content__detail')]/p[2]/text()[2]",
	"dtCateR": "",
    // 视频年份
	"dtYear": "//div[contains(@class,'myui-content__detail')]/p[2]/text()[6]",
    // 视频简介
	"dtDesc": "//p[contains(@class,'desc text-collapse hidden-xs')]/text()[2]",
	"dtDescR": "",
    // 播放源节点
	"dtFromNode": "//h3[contains(text(), '播放地址')]",
    // 播放源名称
	"dtFromName": "/text()",
    // 二次处理正则
	"dtFromNameR": "",
    // 播放列表节点
	"dtUrlNode": "//ul[contains(@class,'myui-content__list sort-list clearfix')]",
    // 播放地址节点
	"dtUrlSubNode": "/li/a",
    // 播放地址
	"dtUrlId": "/@href",
    // 二次处理正则
	"dtUrlIdR": "/play/(\\S+).html",
    // 剧集名称
	"dtUrlName": "/text()",
    // 二次处理正则
	"dtUrlNameR": "",
    // 播放页面的地址 {playUrl} 对应上面 dtUrlId 获取到的地址
	"playUrl": "https://www.hdmoli.com/play/{playUrl}.html",
    // 解析webview的user-agent
	"playUa": "",
    // 搜索地址
	"searchUrl": "https://www.hdmoli.com/search.php?searchword={wd}",
    // 同上面的homeVod字段 搜索结果中的视频信息, 这里有对苹果cms suggest搜索接口的特殊支持，参考示例中的极品影视
	"scVodNode": "//li[contains(@class,'active  clearfix')]/div/a",
	"scVodName": "/@title",
	"scVodId": "/@href",
	"scVodIdR": "/movie/(\\w+).html",
	"scVodImg": "/@data-original",
	"scVodMark": "/span[2]/text()",
	"filter":{
		"1":[
			{
		"key": "cateId",
        "name": "类型",
        "value": [
          {"n": "全部","v": "1"},
          {"n": "动作","v": "5"},
          {"n": "爱情","v": "6"},
          {"n": "科幻","v": "7"},
          {"n": "恐怖","v": "8"},
          {"n": "战争","v": "9"},
          {"n": "喜剧","v": "10"},
          {"n": "纪录","v": "11"},
          {"n": "剧情","v": "12"},
          {"n": "犯罪","v": "30"},
          {"n": "动画","v": "32"}
        ]},
			{
		"key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "中国","v": "中国"},
          {"n": "美国","v": "美国"},
          {"n": "韩国","v": "韩国"},
          {"n": "英国","v": "英国"},
          {"n": "日本","v": "日本"},
          {"n": "泰国","v": "泰国"},
          {"n": "其他","v": "其他"}
        ]},

		{
		"key": "by",
        "name": "排序",
        "value": [
          {"n": "全部","v": "time"},
          {"n": "时间排序","v": "time"},
          {"n": "评分排序","v": "douban"}
        ]}	
		],

		"2":[
			{
		"key": "cateId",
        "name": "类型",
        "value": [
          {"n": "全部","v": "2"},
          {"n": "美剧","v": "15"},
          {"n": "韩剧","v": "16"},
          {"n": "日剧","v": "13"},
          {"n": "英剧","v": "34"},
          {"n": "港台","v": "14"},
          {"n": "泰剧","v": "29"},
          {"n": "动画","v": "33"},
          {"n": "综艺","v": "39"},
          {"n": "其他","v": "38"}
        ]},
			{
		"key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "中国","v": "中国"},
          {"n": "美国","v": "美国"},
          {"n": "韩国","v": "韩国"},
          {"n": "英国","v": "英国"},
          {"n": "日本","v": "日本"},
          {"n": "泰国","v": "泰国"},
          {"n": "其他","v": "其他"}
        ]},

		{
		"key": "by",
        "name": "排序",
        "value": [
          {"n": "全部","v": "time"},
          {"n": "时间排序","v": "time"},
          {"n": "评分排序","v": "douban"}
        ]}	
		]

	}
}