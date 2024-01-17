var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26779",
        "ok": "23654",
        "ko": "3125"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6379",
        "ok": "6163",
        "ko": "6379"
    },
    "meanResponseTime": {
        "total": "1080",
        "ok": "426",
        "ko": "6037"
    },
    "standardDeviation": {
        "total": "2032",
        "ok": "1000",
        "ko": "38"
    },
    "percentiles1": {
        "total": "88",
        "ok": "76",
        "ko": "6025"
    },
    "percentiles2": {
        "total": "1075",
        "ok": "169",
        "ko": "6042"
    },
    "percentiles3": {
        "total": "6028",
        "ok": "1214",
        "ko": "6103"
    },
    "percentiles4": {
        "total": "6078",
        "ok": "4994",
        "ko": "6215"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 19364,
    "percentage": 72
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3283,
    "percentage": 12
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 1007,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 3125,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.384",
        "ok": "76.303",
        "ko": "10.081"
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
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "612",
        "ok": "612",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles2": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles3": {
        "total": "208",
        "ok": "208",
        "ko": "-"
    },
    "percentiles4": {
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5977,
    "percentage": 100
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 23,
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
        "total": "19.355",
        "ok": "19.355",
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
        "ok": "5803",
        "ko": "197"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "6008"
    },
    "maxResponseTime": {
        "total": "6290",
        "ok": "5341",
        "ko": "6290"
    },
    "meanResponseTime": {
        "total": "808",
        "ok": "630",
        "ko": "6037"
    },
    "standardDeviation": {
        "total": "1754",
        "ok": "1490",
        "ko": "42"
    },
    "percentiles1": {
        "total": "75",
        "ok": "73",
        "ko": "6023"
    },
    "percentiles2": {
        "total": "138",
        "ok": "127",
        "ko": "6040"
    },
    "percentiles3": {
        "total": "4976",
        "ok": "4878",
        "ko": "6111"
    },
    "percentiles4": {
        "total": "6032",
        "ok": "5030",
        "ko": "6240"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5101,
    "percentage": 85
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 698,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 197,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.355",
        "ok": "18.719",
        "ko": "0.635"
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
        "total": "5803",
        "ok": "5651",
        "ko": "152"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "6010"
    },
    "maxResponseTime": {
        "total": "6213",
        "ok": "5340",
        "ko": "6213"
    },
    "meanResponseTime": {
        "total": "304",
        "ok": "150",
        "ko": "6038"
    },
    "standardDeviation": {
        "total": "1086",
        "ok": "550",
        "ko": "32"
    },
    "percentiles1": {
        "total": "75",
        "ok": "74",
        "ko": "6029"
    },
    "percentiles2": {
        "total": "113",
        "ok": "108",
        "ko": "6045"
    },
    "percentiles3": {
        "total": "289",
        "ok": "234",
        "ko": "6099"
    },
    "percentiles4": {
        "total": "6036",
        "ok": "4916",
        "ko": "6169"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5572,
    "percentage": 96
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 71,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 152,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.719",
        "ok": "18.229",
        "ko": "0.49"
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
        "total": "5651",
        "ok": "3325",
        "ko": "2326"
    },
    "minResponseTime": {
        "total": "1029",
        "ok": "1029",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6379",
        "ok": "6163",
        "ko": "6379"
    },
    "meanResponseTime": {
        "total": "3209",
        "ok": "1232",
        "ko": "6035"
    },
    "standardDeviation": {
        "total": "2431",
        "ok": "739",
        "ko": "37"
    },
    "percentiles1": {
        "total": "1172",
        "ok": "1105",
        "ko": "6024"
    },
    "percentiles2": {
        "total": "6021",
        "ok": "1142",
        "ko": "6041"
    },
    "percentiles3": {
        "total": "6059",
        "ok": "1256",
        "ko": "6092"
    },
    "percentiles4": {
        "total": "6145",
        "ok": "5975",
        "ko": "6193"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3246,
    "percentage": 57
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 79,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 2326,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.229",
        "ok": "10.726",
        "ko": "7.503"
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
        "total": "3325",
        "ok": "2875",
        "ko": "450"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "6006"
    },
    "maxResponseTime": {
        "total": "6295",
        "ok": "5342",
        "ko": "6295"
    },
    "meanResponseTime": {
        "total": "1125",
        "ok": "354",
        "ko": "6046"
    },
    "standardDeviation": {
        "total": "2208",
        "ok": "1119",
        "ko": "44"
    },
    "percentiles1": {
        "total": "78",
        "ok": "69",
        "ko": "6030"
    },
    "percentiles2": {
        "total": "173",
        "ok": "108",
        "ko": "6055"
    },
    "percentiles3": {
        "total": "6041",
        "ok": "4884",
        "ko": "6130"
    },
    "percentiles4": {
        "total": "6112",
        "ok": "5033",
        "ko": "6217"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 2714,
    "percentage": 82
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 159,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 450,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.726",
        "ok": "9.274",
        "ko": "1.452"
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
