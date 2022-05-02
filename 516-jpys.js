{
  "author":"Tangsan99999",
  "ua": "",
  "homeUrl": "http://www.jpys.me",
  "dcVipFlag": "true",
  "dcPlayUrl": "true",
  "cateNode": "//ul[contains(@class,'myui-header__menu')]/li[@class='dropdown-hover']//ul/li/a[contains(@href, 'vodtype') and not(contains(@href, '26'))]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/vodtype/(\\d+).html",
  "cateManual": {
    "电影": "1",
    "连续剧": "2",
    "动漫": "3",
    "综艺": "4"
  },
  "homeVodNode": "//ul[contains(@class,'myui-vodlist')]/li//a[contains(@class,'myui-vodlist__thumb')]",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/voddetail/(\\w+).html",
  "homeVodImg": "@data-original",
  "homeVodImgR": "\\S+(http\\S+)",
  "homeVodMark": "/span[contains(@class,'pic-text')]/text()",
  "cateUrl": "http://www.jpys.me/vodshow/{cateId}-{area}-{by}-{class}-{lang}----{catePg}---{year}.html",
  "cateVodNode": "//ul[contains(@class,'myui-vodlist')]//li//a[contains(@class,'myui-vodlist__thumb')]",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/voddetail/(\\w+).html",
  "cateVodImg": "@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "/span[contains(@class,'pic-text')]/text()",
  "dtUrl": "http://www.jpys.me/voddetail/{vid}.html",
  "dtNode": "//div[contains(@class,'col-lg-wide-75')]",
  "dtName": "//div[@class='myui-content__thumb']/a[contains(@class,'myui-vodlist__thumb')]/@title",
  "dtNameR": "",
  "dtImg": "//div[@class='myui-content__thumb']/a[contains(@class,'myui-vodlist__thumb')]/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '分类')]/following-sibling::*/text()",
  "dtCateR": "",
  "dtYear": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '年份')]/following-sibling::*/text()",
  "dtYearR": "",
  "dtArea": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '地区')]/following-sibling::*/text()",
  "dtAreaR": "",
  "dtMark": "",
  "dtMarkR": "",
  "dtActor": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '主演')]/following-sibling::*/text()",
  "dtActorR": "",
  "dtDirector": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '导演')]/following-sibling::*/text()",
  "dtDirectorR": "",
  "dtDesc": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '简介')]/parent::text()",
  "dtDescR": "",
  "dtFromNode": "//a[@data-toggle='tab' and contains(@href, 'playlist')]",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//div[contains(@class,'tab-content')]/div[contains(@id, 'playlist')]",
  "dtUrlSubNode": "//li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/vodplay/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "http://www.jpys.me/vodplay/{playUrl}.html",
  "playUa": "",
  "searchUrl": "http://www.jpys.me/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": "",
  "filter": {
    "1": [
      {
        "key": "cateId",
        "name": "类型",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "动作片",
            "v": "6"
          },
          {
            "n": "喜剧片",
            "v": "7"
          },
          {
            "n": "爱情片",
            "v": "8"
          },
          {
            "n": "科幻片",
            "v": "9"
          },
          {
            "n": "恐怖片",
            "v": "10"
          },
          {
            "n": "剧情片",
            "v": "11"
          },
          {
            "n": "战争片",
            "v": "12"
          }
        ]
      },
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "喜剧",
            "v": "喜剧"
          },
          {
            "n": "爱情",
            "v": "爱情"
          },
          {
            "n": "恐怖",
            "v": "恐怖"
          },
          {
            "n": "动作",
            "v": "动作"
          },
          {
            "n": "科幻",
            "v": "科幻"
          },
          {
            "n": "剧情",
            "v": "剧情"
          },
          {
            "n": "战争",
            "v": "战争"
          },
          {
            "n": "警匪",
            "v": "警匪"
          },
          {
            "n": "犯罪",
            "v": "犯罪"
          },
          {
            "n": "动画",
            "v": "动画"
          },
          {
            "n": "奇幻",
            "v": "奇幻"
          },
          {
            "n": "武侠",
            "v": "武侠"
          },
          {
            "n": "冒险",
            "v": "冒险"
          },
          {
            "n": "枪战",
            "v": "枪战"
          },
          {
            "n": "悬疑",
            "v": "悬疑"
          },
          {
            "n": "惊悚",
            "v": "惊悚"
          },
          {
            "n": "经典",
            "v": "经典"
          },
          {
            "n": "青春",
            "v": "青春"
          }
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "大陆",
            "v": "大陆"
          },
          {
            "n": "香港",
            "v": "香港"
          },
          {
            "n": "台湾",
            "v": "台湾"
          },
          {
            "n": "美国",
            "v": "美国"
          },
          {
            "n": "法国",
            "v": "法国"
          },
          {
            "n": "英国",
            "v": "英国"
          },
          {
            "n": "日本",
            "v": "日本"
          },
          {
            "n": "韩国",
            "v": "韩国"
          },
          {
            "n": "德国",
            "v": "德国"
          },
          {
            "n": "泰国",
            "v": "泰国"
          },
          {
            "n": "印度",
            "v": "印度"
          },
          {
            "n": "意大利",
            "v": "意大利"
          },
          {
            "n": "西班牙",
            "v": "西班牙"
          },
          {
            "n": "加拿大",
            "v": "加拿大"
          },
          {
            "n": "其他",
            "v": "其他"
          }
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "2022",
            "v": "2022"
          },
          {
            "n": "2021",
            "v": "2021"
          },
          {
            "n": "2020",
            "v": "2020"
          },
          {
            "n": "2019",
            "v": "2019"
          },
          {
            "n": "2018",
            "v": "2018"
          },
          {
            "n": "2017",
            "v": "2017"
          },
          {
            "n": "2016",
            "v": "2016"
          },
          {
            "n": "2015",
            "v": "2015"
          },
          {
            "n": "2014",
            "v": "2014"
          },
          {
            "n": "2013",
            "v": "2013"
          },
          {
            "n": "2012",
            "v": "2012"
          },
          {
            "n": "2011",
            "v": "2011"
          },
          {
            "n": "2010",
            "v": "2010"
          }
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": ""
          },
          {
            "n": "人气",
            "v": "hits"
          },
          {
            "n": "评分",
            "v": "score"
          }
        ]
      }
    ],
    "2": [
      {
        "key": "cateId",
        "name": "类型",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "大陆剧",
            "v": "13"
          },
          {
            "n": "香港剧",
            "v": "14"
          },
          {
            "n": "欧美剧",
            "v": "15"
          },
          {
            "n": "韩国剧",
            "v": "16"
          },
          {
            "n": "日本剧",
            "v": "20"
          },
          {
            "n": "台湾剧",
            "v": "21"
          },
          {
            "n": "泰国剧",
            "v": "22"
          }
        ]
      },
      {
        "key": "class",
        "name": "剧情",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "古装",
            "v": "古装"
          },
          {
            "n": "青春偶像",
            "v": "青春偶像"
          },
          {
            "n": "喜剧",
            "v": "喜剧"
          },
          {
            "n": "家庭",
            "v": "家庭"
          },
          {
            "n": "犯罪",
            "v": "犯罪"
          },
          {
            "n": "动作",
            "v": "动作"
          },
          {
            "n": "奇幻",
            "v": "奇幻"
          },
          {
            "n": "剧情",
            "v": "剧情"
          },
          {
            "n": "历史",
            "v": "历史"
          },
          {
            "n": "经典",
            "v": "经典"
          },
          {
            "n": "乡村",
            "v": "乡村"
          },
          {
            "n": "情景",
            "v": "情景"
          },
          {
            "n": "商战",
            "v": "商战"
          },
          {
            "n": "网剧",
            "v": "网剧"
          },
          {
            "n": "其他",
            "v": "其他"
          }
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "内地",
            "v": "内地"
          },
          {
            "n": "韩国",
            "v": "韩国"
          },
          {
            "n": "香港",
            "v": "香港"
          },
          {
            "n": "台湾",
            "v": "台湾"
          },
          {
            "n": "日本",
            "v": "日本"
          },
          {
            "n": "美国",
            "v": "美国"
          },
          {
            "n": "泰国",
            "v": "泰国"
          },
          {
            "n": "英国",
            "v": "英国"
          },
          {
            "n": "新加坡",
            "v": "新加坡"
          },
          {
            "n": "其他",
            "v": "其他"
          }
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "2022",
            "v": "2022"
          },
          {
            "n": "2021",
            "v": "2021"
          },
          {
            "n": "2020",
            "v": "2020"
          },
          {
            "n": "2019",
            "v": "2019"
          },
          {
            "n": "2018",
            "v": "2018"
          },
          {
            "n": "2017",
            "v": "2017"
          },
          {
            "n": "2016",
            "v": "2016"
          },
          {
            "n": "2015",
            "v": "2015"
          },
          {
            "n": "2014",
            "v": "2014"
          },
          {
            "n": "2013",
            "v": "2013"
          },
          {
            "n": "2012",
            "v": "2012"
          },
          {
            "n": "2011",
            "v": "2011"
          },
          {
            "n": "2010",
            "v": "2010"
          },
          {
            "n": "2009",
            "v": "2009"
          },
          {
            "n": "2008",
            "v": "2008"
          },
          {
            "n": "2006",
            "v": "2006"
          },
          {
            "n": "2005",
            "v": "2005"
          },
          {
            "n": "2004",
            "v": "2004"
          }
        ]
      },
      {
        "key": "lang",
        "name": "语言",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "国语",
            "v": "国语"
          },
          {
            "n": "英语",
            "v": "英语"
          },
          {
            "n": "粤语",
            "v": "粤语"
          },
          {
            "n": "闽南话",
            "v": "闽南话"
          },
          {
            "n": "韩语",
            "v": "韩语"
          },
          {
            "n": "日语",
            "v": "日语"
          },
          {
            "n": "其它",
            "v": "其它"
          }
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": ""
          },
          {
            "n": "人气",
            "v": "hits"
          },
          {
            "n": "评分",
            "v": "score"
          }
        ]
      }
    ],
    "3": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "内地",
            "v": "内地"
          },
          {
            "n": "港台",
            "v": "港台"
          },
          {
            "n": "日韩",
            "v": "日韩"
          },
          {
            "n": "欧美",
            "v": "欧美"
          }
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "2022",
            "v": "2022"
          },
          {
            "n": "2021",
            "v": "2021"
          },
          {
            "n": "2020",
            "v": "2020"
          },
          {
            "n": "2019",
            "v": "2019"
          },
          {
            "n": "2018",
            "v": "2018"
          },
          {
            "n": "2017",
            "v": "2017"
          },
          {
            "n": "2016",
            "v": "2016"
          },
          {
            "n": "2015",
            "v": "2015"
          },
          {
            "n": "2014",
            "v": "2014"
          },
          {
            "n": "2013",
            "v": "2013"
          },
          {
            "n": "2012",
            "v": "2012"
          }
        ]
      },
      {
        "key": "lang",
        "name": "语言",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "国语",
            "v": "国语"
          },
          {
            "n": "英语",
            "v": "英语"
          },
          {
            "n": "粤语",
            "v": "粤语"
          },
          {
            "n": "闽南语",
            "v": "闽南语"
          },
          {
            "n": "韩语",
            "v": "韩语"
          },
          {
            "n": "日语",
            "v": "日语"
          },
          {
            "n": "其它",
            "v": "其它"
          }
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": ""
          },
          {
            "n": "人气",
            "v": "hits"
          },
          {
            "n": "评分",
            "v": "score"
          }
        ]
      }
    ],
    "4": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "国产",
            "v": "国产"
          },
          {
            "n": "日本",
            "v": "日本"
          },
          {
            "n": "欧美",
            "v": "欧美"
          },
          {
            "n": "其他",
            "v": "其他"
          }
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "2022",
            "v": "2022"
          },
          {
            "n": "2021",
            "v": "2021"
          },
          {
            "n": "2020",
            "v": "2020"
          },
          {
            "n": "2019",
            "v": "2019"
          },
          {
            "n": "2018",
            "v": "2018"
          },
          {
            "n": "2017",
            "v": "2017"
          },
          {
            "n": "2016",
            "v": "2016"
          },
          {
            "n": "2015",
            "v": "2015"
          },
          {
            "n": "2014",
            "v": "2014"
          },
          {
            "n": "2013",
            "v": "2013"
          },
          {
            "n": "2012",
            "v": "2012"
          }
        ]
      },
      {
        "key": "lang",
        "name": "语言",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "国语",
            "v": "国语"
          },
          {
            "n": "英语",
            "v": "英语"
          },
          {
            "n": "粤语",
            "v": "粤语"
          },
          {
            "n": "闽南语",
            "v": "闽南语"
          },
          {
            "n": "韩语",
            "v": "韩语"
          },
          {
            "n": "日语",
            "v": "日语"
          },
          {
            "n": "其它",
            "v": "其它"
          }
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": ""
          },
          {
            "n": "人气",
            "v": "hits"
          },
          {
            "n": "评分",
            "v": "score"
          }
        ]
      }
    ]
  }
}