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
        "total": "6001",
        "ok": "-",
        "ko": "6001"
    },
    "maxResponseTime": {
        "total": "6235",
        "ok": "-",
        "ko": "6235"
    },
    "meanResponseTime": {
        "total": "6071",
        "ok": "-",
        "ko": "6071"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "-",
        "ko": "91"
    },
    "percentiles1": {
        "total": "6012",
        "ok": "-",
        "ko": "6012"
    },
    "percentiles2": {
        "total": "6169",
        "ok": "-",
        "ko": "6169"
    },
    "percentiles3": {
        "total": "6227",
        "ok": "-",
        "ko": "6227"
    },
    "percentiles4": {
        "total": "6230",
        "ok": "-",
        "ko": "6230"
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
        "total": "6001",
        "ok": "-",
        "ko": "6001"
    },
    "maxResponseTime": {
        "total": "6235",
        "ok": "-",
        "ko": "6235"
    },
    "meanResponseTime": {
        "total": "6071",
        "ok": "-",
        "ko": "6071"
    },
    "standardDeviation": {
        "total": "91",
        "ok": "-",
        "ko": "91"
    },
    "percentiles1": {
        "total": "6012",
        "ok": "-",
        "ko": "6012"
    },
    "percentiles2": {
        "total": "6169",
        "ok": "-",
        "ko": "6169"
    },
    "percentiles3": {
        "total": "6227",
        "ok": "-",
        "ko": "6227"
    },
    "percentiles4": {
        "total": "6230",
        "ok": "-",
        "ko": "6230"
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
