{
  "author": "Tangsan99999",
  "ua": "",
  "homeUrl": "https://www.jubaibai.cc/",
  "dcVipFlag": "true",
  "dcPlayUrl": "true",
  "cateNode": "//ul[contains(@class,'stui-header__menu')]/li/a[contains(@href, 'type')and not(contains(@href,'zhibo'))]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/type/(\\w+).html",
  "cateManual": {},
  "homeVodNode": "//ul[contains(@class,'stui-vodlist')]/li/div/a",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/vod/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodImgR": "\\S+(http\\S+)",
  "homeVodMark": "//span[contains(@class,'pic-text text-right')]/b/text()",
  "cateUrl": "https://www.jubaibai.cc/vodshow/id/{cateId}/area/{area}/by/{by}/page/{catePg}/year/{year}.html",
  "cateVodNode": "//ul[contains(@class,'stui-vodlist')]/li/div/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/vod/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "\\S+(http\\S+)",
  "cateVodMark": "//span[contains(@class,'pic-text text-right')]/b/text()",
  "dtUrl": "https://www.jubaibai.cc/vod/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[contains(@class,'stui-content__detail')]/h1/text()",
  "dtNameR": "",
  "dtImg": "//div[contains(@class,'stui-content__thumb')]/a/img/@data-original",
  "dtImgR": "\\S+(http\\S+)",
  "dtCate": "//p[contains(@class,'data')][1]/text()",
  "dtCateR": "\\S+：(\\S+)",
  "dtYear": "//p[contains(@class,'data')][5]/text()",
  "dtYearR": "\\S+：(\\S+)",
  "dtArea": "//p[contains(@class,'data')][3]/text()",
  "dtAreaR": "\\S+：(\\S+)",
  "dtMark": "//p[contains(@class,'data')][8]/span/text()",
  "dtMarkR": "",
  "dtDirector": "//p[contains(@class,'data')][6]/a/text()",
  "dtDirectorR": "\\S+：(\\S+)",
  "dtActor": "//p[contains(@class,'data')][7]/a/text()",
  "dtActorR": "\\S+：(\\S+)",
  "dtDesc": "//span[@class='detail-content']/text()",
  "dtFromNode": "//div[@class='stui-vodlist__head']/h3",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//ul[contains(@class,'stui-content__playlist')]",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/play/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "https://www.jubaibai.cc/play/{playUrl}.html",
  "playUa": "",
  "searchUrl": "https://www.jubaibai.cc/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": "",
  "filter": {
    "dianying": [
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
            "v": "dongzuopian"
          },
          {
            "n": "喜劇片",
            "v": "xijupian"
          },
          {
            "n": "愛情片",
            "v": "aiqingpian"
          },
          {
            "n": "科幻片",
            "v": "kehuanpian"
          },
          {
            "n": "恐怖片",
            "v": "kongbupian"
          },
          {
            "n": "劇情片",
            "v": "juqingpian"
          },
          {
            "n": "戰爭片",
            "v": "zhanzhengpian"
          },
          {
            "n": "动画片",
            "v": "donghua"
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
            "n": "中国大陆",
            "v": "中国大陆"
          },
          {
            "n": "中国香港",
            "v": "中国香港"
          },
          {
            "n": "中国台湾",
            "v": "中国台湾"
          },
          {
            "n": "美国",
            "v": "美国"
          },
          {
            "n": "韩国",
            "v": "韩国"
          },
          {
            "n": "日本",
            "v": "日本"
          },
          {
            "n": "泰国",
            "v": "泰国"
          },
          {
            "n": "新加坡",
            "v": "新加坡"
          },
          {
            "n": "马来西亚",
            "v": "马来西亚"
          },
          {
            "n": "印度",
            "v": "印度"
          },
          {
            "n": "英国",
            "v": "英国"
          },
          {
            "n": "法国",
            "v": "法国"
          },
          {
            "n": "德国",
            "v": "德国"
          },
          {
            "n": "加拿大",
            "v": "加拿大"
          },
          {
            "n": "西班牙",
            "v": "西班牙"
          },
          {
            "n": "俄罗斯",
            "v": "俄罗斯"
          },
          {
            "n": "其它",
            "v": "其它"
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
    "dianshiju": [
      {
        "key": "cateId",
        "name": "类型",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "大陸劇",
            "v": "guochanju"
          },
          {
            "n": "港台劇",
            "v": "gangtaiju"
          },
          {
            "n": "日韓劇",
            "v": "rihanju"
          },
          {
            "n": "欧美劇",
            "v": "oumeiju"
          },
          {
            "n": "其他劇",
            "v": "qitaju"
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
    "zongyi": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "中国大陆",
            "v": "中国大陆"
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
    "dongman": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {
            "n": "全部",
            "v": ""
          },
          {
            "n": "中国大陆",
            "v": "中国大陆"
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