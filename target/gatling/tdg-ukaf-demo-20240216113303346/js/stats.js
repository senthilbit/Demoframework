var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "6045"
    },
    "maxResponseTime": {
        "total": "7661",
        "ok": "1630",
        "ko": "7661"
    },
    "meanResponseTime": {
        "total": "3360",
        "ok": "596",
        "ko": "6125"
    },
    "standardDeviation": {
        "total": "2782",
        "ok": "400",
        "ko": "168"
    },
    "percentiles1": {
        "total": "3838",
        "ok": "479",
        "ko": "6093"
    },
    "percentiles2": {
        "total": "6093",
        "ok": "898",
        "ko": "6115"
    },
    "percentiles3": {
        "total": "6160",
        "ok": "1349",
        "ko": "6255"
    },
    "percentiles4": {
        "total": "6309",
        "ok": "1515",
        "ko": "6590"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 51,
    "percentage": 26
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 49,
    "percentage": 25
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.765",
        "ok": "5.882",
        "ko": "5.882"
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1630",
        "ok": "1630",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles1": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "percentiles2": {
        "total": "898",
        "ok": "898",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1349",
        "ok": "1349",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1515",
        "ok": "1515",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 51,
    "percentage": 51
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 49,
    "percentage": 49
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
        "total": "5.882",
        "ok": "5.882",
        "ko": "-"
    }
}
    },"req_post--elasticse-2fff0": {
        type: "REQUEST",
        name: "POST /elasticsearch/workbook",
path: "POST /elasticsearch/workbook",
pathFormatted: "req_post--elasticse-2fff0",
stats: {
    "name": "POST /elasticsearch/workbook",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "6045",
        "ok": "-",
        "ko": "6045"
    },
    "maxResponseTime": {
        "total": "7661",
        "ok": "-",
        "ko": "7661"
    },
    "meanResponseTime": {
        "total": "6125",
        "ok": "-",
        "ko": "6125"
    },
    "standardDeviation": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles1": {
        "total": "6093",
        "ok": "-",
        "ko": "6093"
    },
    "percentiles2": {
        "total": "6115",
        "ok": "-",
        "ko": "6115"
    },
    "percentiles3": {
        "total": "6255",
        "ok": "-",
        "ko": "6255"
    },
    "percentiles4": {
        "total": "6590",
        "ok": "-",
        "ko": "6590"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "-",
        "ko": "5.882"
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
