var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26088",
        "ok": "22042",
        "ko": "4046"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "7174",
        "ok": "6037",
        "ko": "7174"
    },
    "meanResponseTime": {
        "total": "1494",
        "ok": "657",
        "ko": "6051"
    },
    "standardDeviation": {
        "total": "2290",
        "ok": "1301",
        "ko": "85"
    },
    "percentiles1": {
        "total": "109",
        "ok": "79",
        "ko": "6028"
    },
    "percentiles2": {
        "total": "1292",
        "ok": "407",
        "ko": "6051"
    },
    "percentiles3": {
        "total": "6041",
        "ok": "4552",
        "ko": "6143"
    },
    "percentiles4": {
        "total": "6128",
        "ok": "5120",
        "ko": "6300"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 16772,
    "percentage": 64
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3083,
    "percentage": 12
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 2187,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 4046,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60.67",
        "ok": "51.26",
        "ko": "9.409"
    }
},
contents: {
"req_post--auth-gett-9285e": {
        type: "REQUEST",
        name: "POST /auth/getToken",
path: "POST /auth/getToken",
pathFormatted: "req_post--auth-gett-9285e",
stats: {
    "name": "POST /auth/getToken",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1067",
        "ok": "1067",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles1": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles2": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles3": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles4": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5971,
    "percentage": 100
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 29,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.953",
        "ok": "13.953",
        "ko": "-"
    }
}
    },"req_post--elasticse-abb9b": {
        type: "REQUEST",
        name: "POST /elasticsearch/insertDoc",
path: "POST /elasticsearch/insertDoc",
pathFormatted: "req_post--elasticse-abb9b",
stats: {
    "name": "POST /elasticsearch/insertDoc",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5605",
        "ko": "395"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6126",
        "ok": "5427",
        "ko": "6126"
    },
    "meanResponseTime": {
        "total": "1784",
        "ok": "1485",
        "ko": "6028"
    },
    "standardDeviation": {
        "total": "2225",
        "ok": "1985",
        "ko": "14"
    },
    "percentiles1": {
        "total": "107",
        "ok": "93",
        "ko": "6025"
    },
    "percentiles2": {
        "total": "4002",
        "ok": "3759",
        "ko": "6035"
    },
    "percentiles3": {
        "total": "6018",
        "ok": "4924",
        "ko": "6048"
    },
    "percentiles4": {
        "total": "6040",
        "ok": "5136",
        "ko": "6090"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3609,
    "percentage": 60
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 108,
    "percentage": 2
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 1888,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 395,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.953",
        "ok": "13.035",
        "ko": "0.919"
    }
}
    },"req_patch--elastics-96613": {
        type: "REQUEST",
        name: "PATCH /elasticsearch/update",
path: "PATCH /elasticsearch/update",
pathFormatted: "req_patch--elastics-96613",
stats: {
    "name": "PATCH /elasticsearch/update",
    "numberOfRequests": {
        "total": "5605",
        "ok": "5506",
        "ko": "99"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "6006"
    },
    "maxResponseTime": {
        "total": "6093",
        "ok": "5347",
        "ko": "6093"
    },
    "meanResponseTime": {
        "total": "293",
        "ok": "189",
        "ko": "6028"
    },
    "standardDeviation": {
        "total": "939",
        "ok": "543",
        "ko": "16"
    },
    "percentiles1": {
        "total": "86",
        "ok": "84",
        "ko": "6024"
    },
    "percentiles2": {
        "total": "195",
        "ok": "188",
        "ko": "6032"
    },
    "percentiles3": {
        "total": "439",
        "ok": "391",
        "ko": "6059"
    },
    "percentiles4": {
        "total": "6021",
        "ok": "4906",
        "ko": "6091"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5401,
    "percentage": 96
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 39,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 66,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 99,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.035",
        "ok": "12.805",
        "ko": "0.23"
    }
}
    },"req_post--elasticse-43b90": {
        type: "REQUEST",
        name: "POST /elasticsearch/sheet/insertDoc",
path: "POST /elasticsearch/sheet/insertDoc",
pathFormatted: "req_post--elasticse-43b90",
stats: {
    "name": "POST /elasticsearch/sheet/insertDoc",
    "numberOfRequests": {
        "total": "5506",
        "ok": "2977",
        "ko": "2529"
    },
    "minResponseTime": {
        "total": "1030",
        "ok": "1030",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "7174",
        "ok": "6037",
        "ko": "7174"
    },
    "meanResponseTime": {
        "total": "3456",
        "ok": "1252",
        "ko": "6052"
    },
    "standardDeviation": {
        "total": "2453",
        "ok": "729",
        "ko": "103"
    },
    "percentiles1": {
        "total": "1321",
        "ok": "1109",
        "ko": "6027"
    },
    "percentiles2": {
        "total": "6025",
        "ok": "1190",
        "ko": "6047"
    },
    "percentiles3": {
        "total": "6091",
        "ok": "1362",
        "ko": "6148"
    },
    "percentiles4": {
        "total": "6273",
        "ok": "5922",
        "ko": "6443"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 2907,
    "percentage": 53
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 70,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 2529,
    "percentage": 46
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.805",
        "ok": "6.923",
        "ko": "5.881"
    }
}
    },"req_patch--elastics-760a3": {
        type: "REQUEST",
        name: "PATCH /elasticsearch/workbook/delete",
path: "PATCH /elasticsearch/workbook/delete",
pathFormatted: "req_patch--elastics-760a3",
stats: {
    "name": "PATCH /elasticsearch/workbook/delete",
    "numberOfRequests": {
        "total": "2977",
        "ok": "1954",
        "ko": "1023"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6276",
        "ok": "5485",
        "ko": "6276"
    },
    "meanResponseTime": {
        "total": "2402",
        "ok": "488",
        "ko": "6058"
    },
    "standardDeviation": {
        "total": "2873",
        "ok": "1384",
        "ko": "47"
    },
    "percentiles1": {
        "total": "99",
        "ok": "61",
        "ko": "6038"
    },
    "percentiles2": {
        "total": "6022",
        "ok": "96",
        "ko": "6094"
    },
    "percentiles3": {
        "total": "6110",
        "ok": "4995",
        "ko": "6149"
    },
    "percentiles4": {
        "total": "6163",
        "ok": "5313",
        "ko": "6205"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 1791,
    "percentage": 60
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 163,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 1023,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.923",
        "ok": "4.544",
        "ko": "2.379"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
