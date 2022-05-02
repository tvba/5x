{
  "author": "Tangsan99999",
  "ua": "",
  "homeUrl": "http://www.dadagui.com/",
  "dcVipFlag": "true",
  "dcPlayUrl": "true",
  "cateNode": "//ul[contains(@class,'stui-header__menu')]/li/a[contains(@href, 'vodtype')and not(contains(@href,'20'))]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/vodtype/(\\w+).html",
  "cateManual": {},
  "homeVodNode": "//ul[contains(@class,'stui-vodlist')]/li/div/a",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/voddetail/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodImgR": "\\S+(http\\S+)",
  "homeVodMark": "//span[contains(@class,'pic-text')]/text()",
  "cateUrl": "http://www.dadagui.com/vodshow/{cateId}-{area}-{by}-{abc}-{lang}----{catePg}---{year}.html",
  "cateVodNode": "//ul[contains(@class,'stui-vodlist')]/li/div/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/voddetail/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "//span[contains(@class,'pic-text')]/text()",
  "dtUrl": "http://www.dadagui.com/voddetail/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[contains(@class,'stui-content__detail')]/h1/text()",
  "dtNameR": "",
  "dtImg": "//div[contains(@class,'stui-content__thumb')]/a/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//p[contains(@class,'data')][4]/text()",
  "dtCateR": "\\S+：(\\S+)",
  "dtYear": "//p[contains(@class,'data')][3]/text()",
  "dtYearR": "\\S+：(\\S+)",
  "dtArea": "//p[contains(@class,'data')][1]/text()",
  "dtAreaR": "\\S+：(\\S+)",
  "dtMark": "//p[contains(@class,'data')][7]/text()",
  "dtMarkR": "\\S+：(\\S+)",
  "dtDirector": "//p[contains(@class,'data')][6]/text()",
  "dtDirectorR": "\\S+：(\\S+)",
  "dtActor": "//p[contains(@class,'data')][5]/text()",
  "dtActorR": "\\S+：(\\S+)",
  "dtDesc": "//span[@class='detail-content']/text()",
  "dtFromNode": "//h3[contains(text(), '播')]",
  "dtFromName": "concat('播放源',count(parent::*/preceding::*//h3[contains(text(), '播')]) + 1)",
  "dtFromNameR": "(\\S+).0",
  "dtUrlNode": "//ul[contains(@class,'stui-content__playlist')]",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/vodplay/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "http://www.dadagui.com/vodplay/{playUrl}.html",
  "playUa": "",
  "searchUrl": "http://www.dadagui.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
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
        "name": "剧情",
        "value": [
          {
            "n": "全部",
            "v": "1"
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
            "n": "动画片",
            "v": "20"
          },
          {
            "n": "犯罪片",
            "v": "21"
          },
          {
            "n": "纪录片",
            "v": "22"
          },
          {
            "n": "音乐片",
            "v": "23"
          },
          {
            "n": "微电影",
            "v": "24"
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
            "n": "法语",
            "v": "法语"
          },
          {
            "n": "德语",
            "v": "德语"
          },
          {
            "n": "其它",
            "v": "其它"
          }
        ]
      },
      {
        "key": "abc",
        "name": "字母",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "A",
            "v": "A"
          },
          {
            "n": "B",
            "v": "B"
          },
          {
            "n": "C",
            "v": "C"
          },
          {
            "n": "D",
            "v": "D"
          },
          {
            "n": "E",
            "v": "E"
          },
          {
            "n": "F",
            "v": "F"
          },
          {
            "n": "G",
            "v": "G"
          },
          {
            "n": "H",
            "v": "H"
          },
          {
            "n": "I",
            "v": "I"
          },
          {
            "n": "J",
            "v": "J"
          },
          {
            "n": "K",
            "v": "K"
          },
          {
            "n": "L",
            "v": "L"
          },
          {
            "n": "M",
            "v": "M"
          },
          {
            "n": "N",
            "v": "N"
          },
          {
            "n": "O",
            "v": "O"
          },
          {
            "n": "P",
            "v": "P"
          },
          {
            "n": "Q",
            "v": "Q"
          },
          {
            "n": "R",
            "v": "R"
          },
          {
            "n": "S",
            "v": "S"
          },
          {
            "n": "T",
            "v": "T"
          },
          {
            "n": "U",
            "v": "U"
          },
          {
            "n": "V",
            "v": "V"
          },
          {
            "n": "W",
            "v": "W"
          },
          {
            "n": "X",
            "v": "X"
          },
          {
            "n": "Y",
            "v": "Y"
          },
          {
            "n": "Z",
            "v": "Z"
          },
          {
            "n": "0-9",
            "v": "0-9"
          }
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": "time"
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
            "v": "2"
          },
          {
            "n": "国剧",
            "v": "13"
          },
          {
            "n": "韩剧",
            "v": "14"
          },
          {
            "n": "美剧",
            "v": "15"
          },
          {
            "n": "港剧",
            "v": "16"
          },
          {
            "n": "日剧",
            "v": "25"
          },
          {
            "n": "台剧",
            "v": "26"
          },
          {
            "n": "泰剧",
            "v": "27"
          },
          {
            "n": "越剧",
            "v": "28"
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
            "n": "2007",
            "v": "2007"
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
            "n": "法语",
            "v": "法语"
          },
          {
            "n": "德语",
            "v": "德语"
          },
          {
            "n": "其它",
            "v": "其它"
          }
        ]
      },
      {
        "key": "abc",
        "name": "字母",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "A",
            "v": "A"
          },
          {
            "n": "B",
            "v": "B"
          },
          {
            "n": "C",
            "v": "C"
          },
          {
            "n": "D",
            "v": "D"
          },
          {
            "n": "E",
            "v": "E"
          },
          {
            "n": "F",
            "v": "F"
          },
          {
            "n": "G",
            "v": "G"
          },
          {
            "n": "H",
            "v": "H"
          },
          {
            "n": "I",
            "v": "I"
          },
          {
            "n": "J",
            "v": "J"
          },
          {
            "n": "K",
            "v": "K"
          },
          {
            "n": "L",
            "v": "L"
          },
          {
            "n": "M",
            "v": "M"
          },
          {
            "n": "N",
            "v": "N"
          },
          {
            "n": "O",
            "v": "O"
          },
          {
            "n": "P",
            "v": "P"
          },
          {
            "n": "Q",
            "v": "Q"
          },
          {
            "n": "R",
            "v": "R"
          },
          {
            "n": "S",
            "v": "S"
          },
          {
            "n": "T",
            "v": "T"
          },
          {
            "n": "U",
            "v": "U"
          },
          {
            "n": "V",
            "v": "V"
          },
          {
            "n": "W",
            "v": "W"
          },
          {
            "n": "X",
            "v": "X"
          },
          {
            "n": "Y",
            "v": "Y"
          },
          {
            "n": "Z",
            "v": "Z"
          },
          {
            "n": "0-9",
            "v": "0-9"
          }
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": "time"
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
        "key": "cateId",
        "name": "分类",
        "value": [
          {
            "n": "全部",
            "v": "4"
          },
          {
            "n": "国产动漫",
            "v": "33"
          },
          {
            "n": "日本动漫",
            "v": "34"
          },
          {
            "n": "港台动漫",
            "v": "35"
          },
          {
            "n": "欧美动漫",
            "v": "36"
          },
          {
            "n": "其它动漫",
            "v": "37"
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
            "v": "time"
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
        "key": "cateId",
        "name": "类型",
        "value": [
          {
            "n": "全部",
            "v": "3"
          },
          {
            "n": "大陆综艺",
            "v": "29"
          },
          {
            "n": "港台综艺",
            "v": "30"
          },
          {
            "n": "日韩综艺",
            "v": "31"
          },
          {
            "n": "欧美综艺",
            "v": "32"
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
            "n": "2007",
            "v": "2007"
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
        "key": "by",
        "name": "排序",
        "value": [
          {
            "n": "时间",
            "v": "time"
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