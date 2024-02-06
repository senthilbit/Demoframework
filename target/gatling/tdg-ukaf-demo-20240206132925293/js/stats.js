var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "5996",
        "ok": "-",
        "ko": "5996"
    },
    "maxResponseTime": {
        "total": "6851",
        "ok": "-",
        "ko": "6851"
    },
    "meanResponseTime": {
        "total": "6465",
        "ok": "-",
        "ko": "6465"
    },
    "standardDeviation": {
        "total": "344",
        "ok": "-",
        "ko": "344"
    },
    "percentiles1": {
        "total": "6675",
        "ok": "-",
        "ko": "6675"
    },
    "percentiles2": {
        "total": "6761",
        "ok": "-",
        "ko": "6761"
    },
    "percentiles3": {
        "total": "6805",
        "ok": "-",
        "ko": "6805"
    },
    "percentiles4": {
        "total": "6835",
        "ok": "-",
        "ko": "6835"
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
        "total": "6.25",
        "ok": "-",
        "ko": "6.25"
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
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "5996",
        "ok": "-",
        "ko": "5996"
    },
    "maxResponseTime": {
        "total": "6851",
        "ok": "-",
        "ko": "6851"
    },
    "meanResponseTime": {
        "total": "6465",
        "ok": "-",
        "ko": "6465"
    },
    "standardDeviation": {
        "total": "344",
        "ok": "-",
        "ko": "344"
    },
    "percentiles1": {
        "total": "6675",
        "ok": "-",
        "ko": "6675"
    },
    "percentiles2": {
        "total": "6761",
        "ok": "-",
        "ko": "6761"
    },
    "percentiles3": {
        "total": "6805",
        "ok": "-",
        "ko": "6805"
    },
    "percentiles4": {
        "total": "6835",
        "ok": "-",
        "ko": "6835"
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
        "total": "6.25",
        "ok": "-",
        "ko": "6.25"
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
