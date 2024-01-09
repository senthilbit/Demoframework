var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "89",
        "ko": "22"
    },
    "maxResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "48"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "89",
        "ko": "37"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "0",
        "ko": "11"
    },
    "percentiles1": {
        "total": "69",
        "ok": "89",
        "ko": "41"
    },
    "percentiles2": {
        "total": "89",
        "ok": "89",
        "ko": "47"
    },
    "percentiles3": {
        "total": "89",
        "ok": "89",
        "ko": "48"
    },
    "percentiles4": {
        "total": "89",
        "ok": "89",
        "ko": "48"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5,
    "percentage": 50
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
    "count": 5,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1.25",
        "ko": "1.25"
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles2": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles3": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles4": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
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
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "-",
        "ko": "22"
    },
    "maxResponseTime": {
        "total": "48",
        "ok": "-",
        "ko": "48"
    },
    "meanResponseTime": {
        "total": "37",
        "ok": "-",
        "ko": "37"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "percentiles1": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "percentiles2": {
        "total": "47",
        "ok": "-",
        "ko": "47"
    },
    "percentiles3": {
        "total": "48",
        "ok": "-",
        "ko": "48"
    },
    "percentiles4": {
        "total": "48",
        "ok": "-",
        "ko": "48"
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "-",
        "ko": "1.25"
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
