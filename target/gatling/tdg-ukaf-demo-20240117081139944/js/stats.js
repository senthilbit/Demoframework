var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19256",
        "ok": "16315",
        "ko": "2941"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "12",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "6330",
        "ok": "6021",
        "ko": "6330"
    },
    "meanResponseTime": {
        "total": "364",
        "ok": "323",
        "ko": "595"
    },
    "standardDeviation": {
        "total": "799",
        "ok": "496",
        "ko": "1660"
    },
    "percentiles1": {
        "total": "101",
        "ok": "105",
        "ko": "64"
    },
    "percentiles2": {
        "total": "232",
        "ok": "253",
        "ko": "173"
    },
    "percentiles3": {
        "total": "1162",
        "ok": "1153",
        "ko": "6030"
    },
    "percentiles4": {
        "total": "6023",
        "ok": "1279",
        "ko": "6171"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 13039,
    "percentage": 68
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3218,
    "percentage": 17
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 58,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2941,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "202.695",
        "ok": "171.737",
        "ko": "30.958"
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
        "ok": "3441",
        "ko": "2559"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "12",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "1203",
        "ok": "1203",
        "ko": "1183"
    },
    "meanResponseTime": {
        "total": "107",
        "ok": "117",
        "ko": "92"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "103",
        "ko": "95"
    },
    "percentiles1": {
        "total": "74",
        "ok": "87",
        "ko": "55"
    },
    "percentiles2": {
        "total": "141",
        "ok": "152",
        "ko": "122"
    },
    "percentiles3": {
        "total": "300",
        "ok": "296",
        "ko": "303"
    },
    "percentiles4": {
        "total": "455",
        "ok": "528",
        "ko": "357"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3396,
    "percentage": 57
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 45,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2559,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "63.158",
        "ok": "36.221",
        "ko": "26.937"
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
        "total": "3441",
        "ok": "3358",
        "ko": "83"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "15",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "6231",
        "ok": "5337",
        "ko": "6231"
    },
    "meanResponseTime": {
        "total": "195",
        "ok": "154",
        "ko": "1856"
    },
    "standardDeviation": {
        "total": "678",
        "ok": "472",
        "ko": "2683"
    },
    "percentiles1": {
        "total": "86",
        "ok": "85",
        "ko": "199"
    },
    "percentiles2": {
        "total": "133",
        "ok": "130",
        "ko": "6018"
    },
    "percentiles3": {
        "total": "335",
        "ok": "319",
        "ko": "6080"
    },
    "percentiles4": {
        "total": "4996",
        "ok": "624",
        "ko": "6201"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3306,
    "percentage": 96
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 22,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 30,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 83,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "36.221",
        "ok": "35.347",
        "ko": "0.874"
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
        "total": "3358",
        "ok": "3330",
        "ko": "28"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "6230",
        "ok": "5407",
        "ko": "6230"
    },
    "meanResponseTime": {
        "total": "142",
        "ok": "117",
        "ko": "3100"
    },
    "standardDeviation": {
        "total": "455",
        "ok": "246",
        "ko": "2976"
    },
    "percentiles1": {
        "total": "87",
        "ok": "86",
        "ko": "3135"
    },
    "percentiles2": {
        "total": "127",
        "ok": "126",
        "ko": "6056"
    },
    "percentiles3": {
        "total": "269",
        "ok": "264",
        "ko": "6145"
    },
    "percentiles4": {
        "total": "530",
        "ok": "411",
        "ko": "6209"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3308,
    "percentage": 99
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 15,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 7,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 28,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.347",
        "ok": "35.053",
        "ko": "0.295"
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
        "total": "3330",
        "ok": "3127",
        "ko": "203"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "1037",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "6330",
        "ok": "6021",
        "ko": "6330"
    },
    "meanResponseTime": {
        "total": "1421",
        "ok": "1144",
        "ko": "5685"
    },
    "standardDeviation": {
        "total": "1172",
        "ok": "259",
        "ko": "1461"
    },
    "percentiles1": {
        "total": "1116",
        "ok": "1114",
        "ko": "6031"
    },
    "percentiles2": {
        "total": "1164",
        "ok": "1153",
        "ko": "6056"
    },
    "percentiles3": {
        "total": "6018",
        "ok": "1256",
        "ko": "6234"
    },
    "percentiles4": {
        "total": "6133",
        "ok": "1471",
        "ko": "6276"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3114,
    "percentage": 94
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 13,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 203,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.053",
        "ok": "32.916",
        "ko": "2.137"
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
        "total": "3127",
        "ok": "3059",
        "ko": "68"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "18",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "6179",
        "ok": "5060",
        "ko": "6179"
    },
    "meanResponseTime": {
        "total": "160",
        "ok": "124",
        "ko": "1766"
    },
    "standardDeviation": {
        "total": "533",
        "ok": "265",
        "ko": "2694"
    },
    "percentiles1": {
        "total": "87",
        "ok": "87",
        "ko": "114"
    },
    "percentiles2": {
        "total": "134",
        "ok": "133",
        "ko": "6022"
    },
    "percentiles3": {
        "total": "306",
        "ok": "280",
        "ko": "6153"
    },
    "percentiles4": {
        "total": "646",
        "ok": "490",
        "ko": "6174"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3029,
    "percentage": 97
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 22,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 8,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 68,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.916",
        "ok": "32.2",
        "ko": "0.716"
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
