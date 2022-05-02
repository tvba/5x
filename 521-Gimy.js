{
  "author": "Tangsan99999",
  "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  "homeUrl": "https://gimytv.com/",
  "dcVipFlag": "true",
  "pCfgJs": "https://gimytv.com/static/js/playerconfig.js",
  "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  "dcShow2Vip": {},
  "dcPlayUrl": "true",
  "cateNode": "//ul[@class='myui-header__menu']/li/a[contains(@href, 'browse')]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/browse/(\\w+).html",
  "cateManual": {
    "电影": "movies",
    "电视剧": "tvseries",
    "综艺": "tv_show",
    "动漫": "anime"
  },
  "homeVodNode": "//ul[@class='myui-vodlist clearfix']/li/div/a",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodMark": "/span[contains(@class, 'pic-text')]/text()",
  "cateUrl": "https://gimytv.com/genre/{cateId}-{area}-{year}-{catePg}/by/{by}.html",
  "cateVodNode": "//ul[@class='myui-vodlist clearfix']/li/div/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodMark": "/span[contains(@class, 'pic-text')]/text()",
  "dtUrl": "https://gimytv.com/{vid}.html",
  "dtNode": "//div[@class='container']",
  "dtName": "//div[@class='myui-content__thumb']/a/@title",
  "dtNameR": "",
  "dtImg": "//div[@class='myui-content__thumb']/a/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//p[@class='data']/span[contains(text(), '分類')]/following-sibling::*/text()",
  "dtCateR": "",
  "dtYear": "//p[@class='data']/span[contains(text(), '年份')]/following-sibling::*/text()",
  "dtYearR": "",
  "dtArea": "",
  "dtAreaR": "",
  "dtMark": "//p[@class='data']/span[contains(text(), '更新')]/following-sibling::*/text()",
  "dtMarkR": "",
  "dtActor": "//p[@class='data']/span[contains(text(), '主演')]/following-sibling::*/text()",
  "dtActorR": "",
  "dtDirector": "//p[@class='data']/span[contains(text(), '導演')]/following-sibling::*/text()",
  "dtDirectorR": "",
  "dtDesc": "//div[contains(@class,'col-pd')]/p/text()",
  "dtDescR": "",
  "dtFromNode": "//div[@class='myui-panel_hd']/div/h3[contains(text(),'線路')]",
  "dtFromName": "/text()",
  "dtUrlNode": "//ul[contains(@class,'myui-content__list')]",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://gimytv.com/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://gimytv.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": "",
  "filter": {
    "movies": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n": "全部","v": ""},
          {"n": "劇情片","v": "drama"},
          {"n": "動作片","v": "action"},
          {"n": "科幻片","v": "scifi"},
          {"n": "喜劇片","v": "comedymovie"},
          {"n": "愛情片","v": "romance"},
          {"n": "戰爭片","v": "war"},
          {"n": "恐怖片","v": "horror"},
          {"n": "動畫電影","v": "animation"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "美國","v": "美國"},
          {"n": "歐美","v": "歐美"},
          {"n": "大陸","v": "大陸"},
          {"n": "中國大陸","v": "中國大陸"},
          {"n": "韓國","v": "韓國"},
          {"n": "香港","v": "香港"},
          {"n": "日本","v": "日本"},
          {"n": "英國","v": "英國"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "按更新","v": "time"},
          {"n": "周人气","v": "hits_week"},
          {"n": "月人气","v": "hits_month"}
        ]
      }
    ],
    "tvseries": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n": "全部","v": ""},
          {"n": "陸劇","v": "cn"},
          {"n": "韓劇","v": "kr"},
          {"n": "美劇","v": "us"},
          {"n": "日劇","v": "jp"},
          {"n": "台劇","v": "tw"},
          {"n": "港劇","v": "hks"},
          {"n": "海外劇","v": "ot"},
          {"n": "紀錄片","v": "documentary"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "按更新","v": "time"},
          {"n": "周人气","v": "hits_week"},
          {"n": "月人气","v": "hits_month"}
        ]
      }
    ],
    "anime": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "日本","v": "日本"},
          {"n": "美國","v": "美國"},
          {"n": "歐美","v": "歐美"},
          {"n": "大陸","v": "大陸"},
          {"n": "臺灣","v": "臺灣"},
          {"n": "香港","v": "香港"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "按更新","v": "time"},
          {"n": "周人气","v": "hits_week"},
          {"n": "月人气","v": "hits_month"}
        ]
      }
    ],
    "tv_show": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n": "全部","v": ""},
          {"n": "纪录片","v": "28"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n": "全部","v": ""},
          {"n": "大陸","v": "大陸"},
          {"n": "中國大陸","v": "中國大陸"},
          {"n": "韓國","v": "韓國"},
          {"n": "臺灣","v": "臺灣"},
          {"n": "美國","v": "美國"},
          {"n": "歐美","v": "歐美"},
          {"n": "日本","v": "日本"},
          {"n": "香港","v": "香港"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n": "全部","v": ""},
          {"n": "2022","v": "2022"},
          {"n": "2021","v": "2021"},
          {"n": "2020","v": "2020"},
          {"n": "2019","v": "2019"},
          {"n": "2018","v": "2018"},
          {"n": "2017","v": "2017"},
          {"n": "2016","v": "2016"},
          {"n": "2015","v": "2015"},
          {"n": "2014","v": "2014"},
          {"n": "2013","v": "2013"},
          {"n": "2012","v": "2012"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n": "按更新","v": "time"},
          {"n": "周人气","v": "hits_week"},
          {"n": "月人气","v": "hits_month"}
        ]
      }
    ]
  }
}