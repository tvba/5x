{
    "author": "takagen99",
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    "homeUrl": "https://myaixixi.com/",
    "dcVipFlag": "true",
    "pCfgJs": "https://myaixixi.com/static/js/playerconfig.js",
    "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    "dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateManual": {
        "电影": "1",
        "剧集": "2",
        "综艺": "3",
        "动漫": "4"
    },
    // Home Summary ================================================  
    "homeVodNode": "//div[contains(@class,'mo-cols-lays')]/ul/li",
    "homeVodName": "/a[2]/text()",
    "homeVodId": "/a[1]/@href",
    "homeVodImg": "/a[1]/@data-original",
    "homeVodMark": "/a[1]/span[3]/text()",
    // Category Summary ================================================    
    "cateUrl": "https://myaixixi.com/index.php/vod/show{area}/id/{cateId}/page/{catePg}{year}.html",
    "cateVodNode": "//div[contains(@class,'mo-cols-lays')]/ul/li",
    "cateVodName": "/a[2]/text()",
    "cateVodId": "/a[1]/@href",
    "cateVodImg": "/a[1]/@data-original",
    "cateVodMark": "/a[1]/span[3]/text()",
    // Category Details ================================================    
    "dtUrl": "https://myaixixi.com/{vid}",
    "dtNode": "//div[contains(@class,'mo-main-info')]",
    "dtName": "//div/div/dl/dt/a/img/@alt",
    "dtImg": "//img[contains(@class,'mo-part-full')]/@src",
    "dtCate": "//dd[contains(@class,'mo-paxs-5px')]/ul[contains(@class,'mo-cols-rows')]/li[3]/a/text()",
    "dtArea": "//dd[contains(@class,'mo-paxs-5px')]/ul[contains(@class,'mo-cols-rows')]/li[4]/a/text()",
    "dtYear": "//dd[contains(@class,'mo-paxs-5px')]/ul[contains(@class,'mo-cols-rows')]/li[5]/a/text()",
    "dtActor": "//dd[contains(@class,'mo-paxs-5px')]/ul[contains(@class,'mo-cols-rows')]/li[1]/a/text()",
    "dtDirector": "//dd[contains(@class,'mo-paxs-5px')]/ul[contains(@class,'mo-cols-rows')]/li[2]/a/text()",
    "dtMark": "//a[contains(@class,'mo-situ-pics mo-situ-lazy')]//span[contains(@class,'mo-situ-rema mo-part-ramp')]/text()",
    "dtDesc": "//div[contains(@class,'mo-word-info')]/div/text()",
    // Playlist =====================================================              
    //  "dtFromNode": "//div[contains(@class,'mo-cols-lays')][2]",
    "dtFromNode": "//div[contains(@class,'mo-cols-lays')][2]/div[contains(@class,'mo-sort-head')]/h2[contains(@class,'mo-fsxs-14px')]/a",
    //  "dtFromName": "/div[contains(@class,'mo-sort-head')]/h2[contains(@class,'mo-fsxs-14px')]/a/text()",            // number must match
    "dtFromName": "/text()", // number must match
    "dtFromNameR": "(.+)\\(",
    "dtUrlNode": "//ul[contains(@class,'mo-movs-item')]", // number must match 
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "/@href",
    "dtUrlName": "/text()",
    "playUrl": "https://myaixixi.com/{playUrl}",
    "playUa": "",
    // Search Results ================================================         
    "searchUrl": "https://myaixixi.com/index.php/vod/search/wd/{wd}.html",
    "scVodNode": "//div[contains(@class,'mo-main-info')]",
    "scVodName": "//div/div/div/dl/dd/h1/a/text()",
    "scVodId": "//div/div/div/dl/dd/h1/a/@href",
    "scVodImg": "//div/div/div/dl/dt/a/@data-original",
    "scVodMark": "",
    // Filters =======================================================    
    "filter": {
      "1": [             // 电影
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "中国","v": "/area/大陆"},
            {"n": "香港","v": "/area/香港"},
            {"n": "台湾","v": "/area/台湾"},
            {"n": "美国","v": "/area/美国"},
            {"n": "英国","v": "/area/英国"},
            {"n": "日本","v": "/area/日本"},
            {"n": "韩国","v": "/area/韩国"},
            {"n": "泰国","v": "/area/泰国"},
            {"n": "其他","v": "/area/其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ],
      "2": [            // 剧集
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "中国","v": "/area/内地"},
            {"n": "香港","v": "/area/香港"},
            {"n": "台湾","v": "/area/台湾"},
            {"n": "美国","v": "/area/美国"},
            {"n": "英国","v": "/area/英国"},
            {"n": "日本","v": "/area/日本"},
            {"n": "韩国","v": "/area/韩国"},
            {"n": "泰国","v": "/area/泰国"},
            {"n": "其他","v": "/area/其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ],
      "4": [              // 动漫
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "日本","v": "/area/日本"},
            {"n": "中国","v": "/area/国产"},
            {"n": "欧美","v": "/area/欧美"},
            {"n": "其他","v": "/area/其他"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ],
      "3": [            // 综艺
        {
          "key": "area",
          "name": "地区",
          "value": [
            {"n": "全部","v": ""},
            {"n": "中国","v": "/area/内地"},
            {"n": "港台","v": "/area/港台"},
            {"n": "日韩","v": "/area/日韩"},
            {"n": "欧美","v": "/area/欧美"}
          ]
        },
        {
          "key": "year",
          "name": "年份",
          "value": [
            {"n": "全部","v": ""},
            {"n": "2022","v": "/year/2022"},              
            {"n": "2021","v": "/year/2021"},
            {"n": "2020","v": "/year/2020"},
            {"n": "2019","v": "/year/2019"},
            {"n": "2018","v": "/year/2018"},
            {"n": "2017","v": "/year/2017"},
            {"n": "2016","v": "/year/2016"},
            {"n": "2015","v": "/year/2015"},
            {"n": "2014","v": "/year/2014"},
            {"n": "2013","v": "/year/2013"},
            {"n": "2012","v": "/year/2012"},
            {"n": "2011","v": "/year/2011"},
            {"n": "2010","v": "/year/2010"},
            {"n": "2009","v": "/year/2009"},
            {"n": "2008","v": "/year/2008"}
          ]
        }
      ]        
    }
  }