{
    "author":"takagen99",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    "homeUrl": "https://www.ttsp.tv/",
    "cateManual": {
        "电影": "1",
        "剧集": "2",
        "综艺": "3",
        "动漫": "4",
        "??": "61"
    },
    // Home Summary =====================================================
    "homeVodNode": "//ul[@class='vodlist vodlist_wi  clearfix']/li",
    "homeVodName": "/a/@title",
    "homeVodId": "/a/@href",
    "homeVodIdR": "/voddetail/(\\w+)",
    "homeVodImg": "/a/@data-original",
    "homeVodMark": "/a/span[3]/text()",
    // Category Summary =================================================
    "cateUrl": "https://www.ttsp.tv/vodshow/{cateId}-{area}-------{catePg}---{year}.html",
    "cateVodNode": "//li[contains(@class,'vodlist_item')]",
    "cateVodName": "/a/@title",
    "cateVodId": "/a/@href",
    "cateVodIdR": "/voddetail/(\\w+).html",
    "cateVodImg": "/a/@data-original",
    "cateVodMark": "/a/span[2]/text()",
    // Category Details =================================================
    "dtUrl": "https://www.ttsp.tv/voddetail/{vid}.html",
    "dtNode": "//div[contains(@class,'detail_list_box')]",
    "dtName": "//a[contains(@class,'vodlist_thumb')]/@title",
    "dtImg": "//a[contains(@class,'vodlist_thumb')]/@data-original",
    "dtCate": "//div[contains(@class,'content_detail content_min fl')]/ul/li[1]/a[3]/text()",
    "dtYear": "//div[contains(@class,'content_detail content_min fl')]/ul/li[1]/a[1]/text()",
    "dtArea": "//div[contains(@class,'content_detail content_min fl')]/ul/li[1]/a[2]/text()",
    "dtActor": "//div[contains(@class,'content_detail content_min fl')]/ul/li[4]/a[1]/text()",
    "dtMark": "//div[@class='stui-content__detail']/p[4]/text()",
    "dtDirector": "//div[contains(@class,'content_detail content_min fl')]/ul/li[5]/a[1]/text()",
    "dtDesc": "//div[contains(@class,'content_detail content_min fl')]/ul/li[6]",
    // Playlist =========================================================
    "dtFromNode": "//div[contains(@class,'play_source_tab')]/a",
    "dtFromName": "/@alt",
    "dtFromNameR": "(.+) \\(\\S+",
    "dtUrlNode": "//div[contains(@class,'playlist_notfull')]/ul", // number must match
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/text()",
    "playUrl": "https://www.ttsp.tv/vodplay/{playUrl}.html",
    "playUa": "",
    // Search Results ===================================================
    "searchUrl": "https://www.ttsp.tv/vodsearch/-------------.html?wd={wd}&submit=",
    "scVodNode": "//div[@class='searchlist_img']",
    "scVodName": "/a/@title",
    "scVodId": "/a/@href",
    "scVodIdR": "/voddetail/(\\w+).html",
    "scVodImg": "/a/@data-original",
    "scVodMark": "/a/span[2]/text()",
    // Filters ==========================================================
    "filter": {
        "1": [
          {
            "key": "area",
            "name": "地区",
            "value": [
              {"n": "全部","v": ""},
              {"n": "大陆","v": "大陆"},
              {"n": "香港","v": "香港"},
              {"n": "台湾","v": "台湾"},
              {"n": "美国","v": "美国"},
              {"n": "英国","v": "英国"},
              {"n": "日本","v": "日本"},
              {"n": "韩国","v": "韩国"},
              {"n": "泰国","v": "泰国"},
              {"n": "印度","v": "印度"},
              {"n": "其他","v": "其他"}
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
              {"n": "2012","v": "2012"},
              {"n": "2011","v": "2011"},
              {"n": "2010","v": "2010"},
              {"n": "2009","v": "2009"},
              {"n": "2008","v": "2008"},
              {"n": "2007","v": "2007"},
              {"n": "2006","v": "2006"},
              {"n": "2005","v": "2005"},
              {"n": "2004","v": "2004"}
            ]
          }
        ],
        "2": [
          {
            "key": "area",
            "name": "地区",
            "value": [
              {"n": "全部","v": ""},
              {"n": "大陆","v": "内地"},
              {"n": "香港","v": "香港"},
              {"n": "台湾","v": "台湾"},
              {"n": "美国","v": "美国"},
              {"n": "英国","v": "英国"},
              {"n": "日本","v": "日本"},
              {"n": "韩国","v": "韩国"},
              {"n": "泰国","v": "泰国"},
              {"n": "新加坡","v": "新加坡"},
              {"n": "其他","v": "其他"}
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
              {"n": "2012","v": "2012"},
              {"n": "2011","v": "2011"}
            ]
          }
        ],
        "3": [
          {
            "key": "area",
            "name": "地区",
            "value": [
              {"n": "全部","v": ""},
              {"n": "大陆","v": "内地"},
              {"n": "港台","v": "港台"},
              {"n": "日韩","v": "日韩"},
              {"n": "欧美","v": "欧美"}
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
              {"n": "2012","v": "2012"},
              {"n": "2011","v": "2011"}
            ]
          }
        ],
        "4": [
          {
            "key": "area",
            "name": "地区",
            "value": [
              {"n": "全部","v": ""},
              {"n": "大陆","v": "国产"},
              {"n": "日本","v": "日本"},
              {"n": "欧美","v": "欧美"},
              {"n": "其他","v": "其他"}
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
              {"n": "2012","v": "2012"},
              {"n": "2011","v": "2011"}
            ]
          }
        ]
      }
  }