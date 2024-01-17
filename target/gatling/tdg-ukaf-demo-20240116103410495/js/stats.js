var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27412",
        "ok": "24979",
        "ko": "2433"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "6004"
    },
    "maxResponseTime": {
        "total": "6396",
        "ok": "6266",
        "ko": "6396"
    },
    "meanResponseTime": {
        "total": "816",
        "ok": "309",
        "ko": "6025"
    },
    "standardDeviation": {
        "total": "1771",
        "ok": "735",
        "ko": "25"
    },
    "percentiles1": {
        "total": "65",
        "ok": "58",
        "ko": "6019"
    },
    "percentiles2": {
        "total": "301",
        "ok": "129",
        "ko": "6027"
    },
    "percentiles3": {
        "total": "6017",
        "ok": "1127",
        "ko": "6057"
    },
    "percentiles4": {
        "total": "6042",
        "ok": "4909",
        "ko": "6136"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 20741,
    "percentage": 76
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3801,
    "percentage": 14
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 437,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 2433,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "111.431",
        "ok": "101.541",
        "ko": "9.89"
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
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1086",
        "ok": "1086",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "percentiles2": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles3": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles4": {
        "total": "394",
        "ok": "394",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5958,
    "percentage": 99
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 42,
    "percentage": 1
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
        "total": "24.39",
        "ok": "24.39",
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
        "ok": "5882",
        "ko": "118"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6396",
        "ok": "5949",
        "ko": "6396"
    },
    "meanResponseTime": {
        "total": "425",
        "ok": "313",
        "ko": "6025"
    },
    "standardDeviation": {
        "total": "1315",
        "ok": "1060",
        "ko": "38"
    },
    "percentiles1": {
        "total": "54",
        "ok": "53",
        "ko": "6018"
    },
    "percentiles2": {
        "total": "90",
        "ok": "87",
        "ko": "6024"
    },
    "percentiles3": {
        "total": "4873",
        "ok": "4448",
        "ko": "6056"
    },
    "percentiles4": {
        "total": "6018",
        "ok": "5003",
        "ko": "6129"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5573,
    "percentage": 93
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 297,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 118,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.39",
        "ok": "23.911",
        "ko": "0.48"
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
        "total": "5882",
        "ok": "5765",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "6007"
    },
    "maxResponseTime": {
        "total": "6097",
        "ok": "5964",
        "ko": "6097"
    },
    "meanResponseTime": {
        "total": "219",
        "ok": "102",
        "ko": "6023"
    },
    "standardDeviation": {
        "total": "917",
        "ok": "402",
        "ko": "14"
    },
    "percentiles1": {
        "total": "56",
        "ok": "55",
        "ko": "6018"
    },
    "percentiles2": {
        "total": "85",
        "ok": "81",
        "ko": "6029"
    },
    "percentiles3": {
        "total": "224",
        "ok": "184",
        "ko": "6050"
    },
    "percentiles4": {
        "total": "6018",
        "ok": "429",
        "ko": "6057"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 5715,
    "percentage": 97
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 37,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 117,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.911",
        "ok": "23.435",
        "ko": "0.476"
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
        "total": "5765",
        "ok": "3765",
        "ko": "2000"
    },
    "minResponseTime": {
        "total": "1027",
        "ok": "1027",
        "ko": "6004"
    },
    "maxResponseTime": {
        "total": "6349",
        "ok": "6266",
        "ko": "6349"
    },
    "meanResponseTime": {
        "total": "2849",
        "ok": "1162",
        "ko": "6024"
    },
    "standardDeviation": {
        "total": "2356",
        "ok": "544",
        "ko": "24"
    },
    "percentiles1": {
        "total": "1126",
        "ok": "1086",
        "ko": "6019"
    },
    "percentiles2": {
        "total": "6014",
        "ok": "1122",
        "ko": "6027"
    },
    "percentiles3": {
        "total": "6036",
        "ok": "1215",
        "ko": "6056"
    },
    "percentiles4": {
        "total": "6071",
        "ok": "5852",
        "ko": "6124"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 3718,
    "percentage": 64
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 47,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 2000,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.435",
        "ok": "15.305",
        "ko": "8.13"
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
        "total": "3765",
        "ok": "3567",
        "ko": "198"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6004"
    },
    "maxResponseTime": {
        "total": "6140",
        "ok": "5282",
        "ko": "6140"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "155",
        "ko": "6031"
    },
    "standardDeviation": {
        "total": "1444",
        "ok": "620",
        "ko": "28"
    },
    "percentiles1": {
        "total": "59",
        "ok": "57",
        "ko": "6020"
    },
    "percentiles2": {
        "total": "106",
        "ok": "95",
        "ko": "6039"
    },
    "percentiles3": {
        "total": "6009",
        "ok": "228",
        "ko": "6089"
    },
    "percentiles4": {
        "total": "6047",
        "ok": "5051",
        "ko": "6140"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 3495,
    "percentage": 93
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 16,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 56,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 198,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.305",
        "ok": "14.5",
        "ko": "0.805"
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
