var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "80040",
        "ok": "70307",
        "ko": "9733"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "6003"
    },
    "maxResponseTime": {
        "total": "9053",
        "ok": "6341",
        "ko": "9053"
    },
    "meanResponseTime": {
        "total": "1114",
        "ok": "431",
        "ko": "6045"
    },
    "standardDeviation": {
        "total": "2052",
        "ok": "980",
        "ko": "79"
    },
    "percentiles1": {
        "total": "85",
        "ok": "71",
        "ko": "6025"
    },
    "percentiles2": {
        "total": "1070",
        "ok": "189",
        "ko": "6048"
    },
    "percentiles3": {
        "total": "6030",
        "ok": "1296",
        "ko": "6140"
    },
    "percentiles4": {
        "total": "6112",
        "ok": "4997",
        "ko": "6239"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 56807,
    "percentage": 71
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 10276,
    "percentage": 13
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 3224,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 9733,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.563",
        "ok": "69.888",
        "ko": "9.675"
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
        "total": "18000",
        "ok": "18000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3075",
        "ok": "3075",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles1": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles2": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles3": {
        "total": "223",
        "ok": "223",
        "ko": "-"
    },
    "percentiles4": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 17889,
    "percentage": 99
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 109,
    "percentage": 1
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.893",
        "ok": "17.893",
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
        "total": "18000",
        "ok": "17159",
        "ko": "841"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6003"
    },
    "maxResponseTime": {
        "total": "7036",
        "ok": "5448",
        "ko": "7036"
    },
    "meanResponseTime": {
        "total": "1009",
        "ok": "762",
        "ko": "6046"
    },
    "standardDeviation": {
        "total": "1912",
        "ok": "1590",
        "ko": "112"
    },
    "percentiles1": {
        "total": "75",
        "ok": "71",
        "ko": "6021"
    },
    "percentiles2": {
        "total": "195",
        "ok": "158",
        "ko": "6036"
    },
    "percentiles3": {
        "total": "5191",
        "ok": "4891",
        "ko": "6133"
    },
    "percentiles4": {
        "total": "6041",
        "ok": "5061",
        "ko": "6765"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 14398,
    "percentage": 80
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 56,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 2705,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 841,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.893",
        "ok": "17.057",
        "ko": "0.836"
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
        "total": "17159",
        "ok": "16696",
        "ko": "463"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6004"
    },
    "maxResponseTime": {
        "total": "9053",
        "ok": "5441",
        "ko": "9053"
    },
    "meanResponseTime": {
        "total": "308",
        "ok": "147",
        "ko": "6096"
    },
    "standardDeviation": {
        "total": "1096",
        "ok": "528",
        "ko": "225"
    },
    "percentiles1": {
        "total": "69",
        "ok": "67",
        "ko": "6032"
    },
    "percentiles2": {
        "total": "120",
        "ok": "113",
        "ko": "6079"
    },
    "percentiles3": {
        "total": "395",
        "ok": "275",
        "ko": "6304"
    },
    "percentiles4": {
        "total": "6053",
        "ok": "4927",
        "ko": "7043"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 16477,
    "percentage": 96
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 30,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 189,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 463,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.057",
        "ok": "16.596",
        "ko": "0.46"
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
        "total": "16696",
        "ok": "10185",
        "ko": "6511"
    },
    "minResponseTime": {
        "total": "1028",
        "ok": "1028",
        "ko": "6003"
    },
    "maxResponseTime": {
        "total": "7042",
        "ok": "6341",
        "ko": "7042"
    },
    "meanResponseTime": {
        "total": "3064",
        "ok": "1163",
        "ko": "6037"
    },
    "standardDeviation": {
        "total": "2412",
        "ok": "518",
        "ko": "53"
    },
    "percentiles1": {
        "total": "1152",
        "ok": "1092",
        "ko": "6023"
    },
    "percentiles2": {
        "total": "6019",
        "ok": "1132",
        "ko": "6040"
    },
    "percentiles3": {
        "total": "6067",
        "ok": "1256",
        "ko": "6110"
    },
    "percentiles4": {
        "total": "6141",
        "ok": "5902",
        "ko": "6173"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 10068,
    "percentage": 60
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 117,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 6511,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.596",
        "ok": "10.124",
        "ko": "6.472"
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
        "total": "10185",
        "ok": "8267",
        "ko": "1918"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6370",
        "ok": "5439",
        "ko": "6370"
    },
    "meanResponseTime": {
        "total": "1296",
        "ok": "191",
        "ko": "6060"
    },
    "standardDeviation": {
        "total": "2401",
        "ok": "783",
        "ko": "55"
    },
    "percentiles1": {
        "total": "60",
        "ok": "50",
        "ko": "6040"
    },
    "percentiles2": {
        "total": "161",
        "ok": "78",
        "ko": "6074"
    },
    "percentiles3": {
        "total": "6069",
        "ok": "200",
        "ko": "6172"
    },
    "percentiles4": {
        "total": "6169",
        "ok": "5017",
        "ko": "6228"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 8043,
    "percentage": 79
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 211,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 1918,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.124",
        "ok": "8.218",
        "ko": "1.907"
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
