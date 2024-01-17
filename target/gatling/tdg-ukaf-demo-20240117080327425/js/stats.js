var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19247",
        "ok": "16302",
        "ko": "2945"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "10",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "6901",
        "ok": "5947",
        "ko": "6901"
    },
    "meanResponseTime": {
        "total": "387",
        "ok": "337",
        "ko": "663"
    },
    "standardDeviation": {
        "total": "844",
        "ok": "528",
        "ko": "1739"
    },
    "percentiles1": {
        "total": "98",
        "ok": "104",
        "ko": "49"
    },
    "percentiles2": {
        "total": "243",
        "ok": "257",
        "ko": "179"
    },
    "percentiles3": {
        "total": "1185",
        "ok": "1171",
        "ko": "6041"
    },
    "percentiles4": {
        "total": "6030",
        "ok": "1417",
        "ko": "6118"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 12899,
    "percentage": 67
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3276,
    "percentage": 17
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 127,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 2945,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "192.47",
        "ok": "163.02",
        "ko": "29.45"
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
        "ok": "3444",
        "ko": "2556"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "10",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "1014",
        "ok": "849",
        "ko": "1014"
    },
    "meanResponseTime": {
        "total": "111",
        "ok": "112",
        "ko": "109"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "94",
        "ko": "159"
    },
    "percentiles1": {
        "total": "68",
        "ok": "81",
        "ko": "41"
    },
    "percentiles2": {
        "total": "141",
        "ok": "146",
        "ko": "125"
    },
    "percentiles3": {
        "total": "360",
        "ok": "284",
        "ko": "458"
    },
    "percentiles4": {
        "total": "749",
        "ok": "446",
        "ko": "784"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3419,
    "percentage": 57
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 25,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2556,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "34.44",
        "ko": "25.56"
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
        "total": "3444",
        "ok": "3353",
        "ko": "91"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "13",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "6901",
        "ok": "5947",
        "ko": "6901"
    },
    "meanResponseTime": {
        "total": "337",
        "ok": "242",
        "ko": "3826"
    },
    "standardDeviation": {
        "total": "1030",
        "ok": "721",
        "ko": "2916"
    },
    "percentiles1": {
        "total": "82",
        "ok": "81",
        "ko": "6032"
    },
    "percentiles2": {
        "total": "142",
        "ok": "137",
        "ko": "6059"
    },
    "percentiles3": {
        "total": "3233",
        "ok": "479",
        "ko": "6122"
    },
    "percentiles4": {
        "total": "6046",
        "ok": "3856",
        "ko": "6239"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3187,
    "percentage": 93
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 47,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 119,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 91,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "34.44",
        "ok": "33.53",
        "ko": "0.91"
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
        "total": "3353",
        "ok": "3303",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "17",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "6186",
        "ok": "5893",
        "ko": "6186"
    },
    "meanResponseTime": {
        "total": "167",
        "ok": "114",
        "ko": "3673"
    },
    "standardDeviation": {
        "total": "577",
        "ok": "140",
        "ko": "2931"
    },
    "percentiles1": {
        "total": "85",
        "ok": "84",
        "ko": "6025"
    },
    "percentiles2": {
        "total": "139",
        "ok": "137",
        "ko": "6060"
    },
    "percentiles3": {
        "total": "293",
        "ok": "277",
        "ko": "6168"
    },
    "percentiles4": {
        "total": "1061",
        "ok": "495",
        "ko": "6186"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3270,
    "percentage": 98
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 32,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.53",
        "ok": "33.03",
        "ko": "0.5"
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
        "total": "3303",
        "ok": "3147",
        "ko": "156"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "1030",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "6183",
        "ok": "5866",
        "ko": "6183"
    },
    "meanResponseTime": {
        "total": "1339",
        "ok": "1134",
        "ko": "5475"
    },
    "standardDeviation": {
        "total": "1007",
        "ok": "146",
        "ko": "1757"
    },
    "percentiles1": {
        "total": "1113",
        "ok": "1110",
        "ko": "6035"
    },
    "percentiles2": {
        "total": "1170",
        "ok": "1160",
        "ko": "6053"
    },
    "percentiles3": {
        "total": "1484",
        "ok": "1266",
        "ko": "6107"
    },
    "percentiles4": {
        "total": "6059",
        "ok": "1464",
        "ko": "6173"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3143,
    "percentage": 95
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 156,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.03",
        "ok": "31.47",
        "ko": "1.56"
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
        "total": "3147",
        "ok": "3055",
        "ko": "92"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "13",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "6184",
        "ok": "5924",
        "ko": "6184"
    },
    "meanResponseTime": {
        "total": "203",
        "ok": "115",
        "ko": "3126"
    },
    "standardDeviation": {
        "total": "749",
        "ok": "200",
        "ko": "3014"
    },
    "percentiles1": {
        "total": "80",
        "ok": "79",
        "ko": "6012"
    },
    "percentiles2": {
        "total": "130",
        "ok": "127",
        "ko": "6064"
    },
    "percentiles3": {
        "total": "337",
        "ok": "298",
        "ko": "6162"
    },
    "percentiles4": {
        "total": "6039",
        "ok": "512",
        "ko": "6175"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3023,
    "percentage": 96
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 29,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 92,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.47",
        "ok": "30.55",
        "ko": "0.92"
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
