var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2926",
        "ok": "1426",
        "ko": "1500"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "11",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "428",
        "ok": "428",
        "ko": "120"
    },
    "meanResponseTime": {
        "total": "20",
        "ok": "23",
        "ko": "16"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "21",
        "ko": "10"
    },
    "percentiles1": {
        "total": "15",
        "ok": "17",
        "ko": "12"
    },
    "percentiles2": {
        "total": "21",
        "ok": "24",
        "ko": "17"
    },
    "percentiles3": {
        "total": "42",
        "ok": "46",
        "ko": "36"
    },
    "percentiles4": {
        "total": "71",
        "ok": "139",
        "ko": "60"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 1426,
    "percentage": 49
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1500,
    "percentage": 51
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.753",
        "ok": "4.753",
        "ko": "5"
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
        "total": "1500",
        "ok": "1426",
        "ko": "74"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "11",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "428",
        "ok": "428",
        "ko": "38"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "21",
        "ko": "5"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "13"
    },
    "percentiles2": {
        "total": "24",
        "ok": "24",
        "ko": "16"
    },
    "percentiles3": {
        "total": "45",
        "ok": "46",
        "ko": "27"
    },
    "percentiles4": {
        "total": "137",
        "ok": "139",
        "ko": "36"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 1426,
    "percentage": 95
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 74,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.753",
        "ko": "0.247"
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
        "total": "1426",
        "ok": "0",
        "ko": "1426"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "-",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "120",
        "ok": "-",
        "ko": "120"
    },
    "meanResponseTime": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "percentiles1": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles2": {
        "total": "18",
        "ok": "-",
        "ko": "18"
    },
    "percentiles3": {
        "total": "37",
        "ok": "-",
        "ko": "37"
    },
    "percentiles4": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1426,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.753",
        "ok": "-",
        "ko": "4.753"
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
