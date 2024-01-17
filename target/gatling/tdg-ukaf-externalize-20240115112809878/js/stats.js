var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "80233",
        "ok": "70739",
        "ko": "9494"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "6004"
    },
    "maxResponseTime": {
        "total": "9053",
        "ok": "6157",
        "ko": "9053"
    },
    "meanResponseTime": {
        "total": "1068",
        "ok": "400",
        "ko": "6041"
    },
    "standardDeviation": {
        "total": "2023",
        "ok": "936",
        "ko": "68"
    },
    "percentiles1": {
        "total": "84",
        "ok": "71",
        "ko": "6025"
    },
    "percentiles2": {
        "total": "1061",
        "ok": "173",
        "ko": "6044"
    },
    "percentiles3": {
        "total": "6029",
        "ok": "1201",
        "ko": "6125"
    },
    "percentiles4": {
        "total": "6094",
        "ok": "5017",
        "ko": "6219"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 57982,
    "percentage": 72
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 10035,
    "percentage": 13
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 2722,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 9494,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.365",
        "ok": "76.145",
        "ko": "10.22"
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
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles1": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles2": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles3": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "percentiles4": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 17914,
    "percentage": 100
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 86,
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
        "total": "19.376",
        "ok": "19.376",
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
        "ok": "17289",
        "ko": "711"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "7029",
        "ok": "5398",
        "ko": "7029"
    },
    "meanResponseTime": {
        "total": "842",
        "ok": "628",
        "ko": "6034"
    },
    "standardDeviation": {
        "total": "1790",
        "ok": "1476",
        "ko": "63"
    },
    "percentiles1": {
        "total": "72",
        "ok": "69",
        "ko": "6021"
    },
    "percentiles2": {
        "total": "150",
        "ok": "132",
        "ko": "6036"
    },
    "percentiles3": {
        "total": "5086",
        "ok": "4874",
        "ko": "6088"
    },
    "percentiles4": {
        "total": "6036",
        "ok": "5095",
        "ko": "6160"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 15133,
    "percentage": 84
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 19,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 2137,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 711,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.376",
        "ok": "18.61",
        "ko": "0.765"
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
        "total": "17289",
        "ok": "16937",
        "ko": "352"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "9053",
        "ok": "5440",
        "ko": "9053"
    },
    "meanResponseTime": {
        "total": "268",
        "ok": "147",
        "ko": "6082"
    },
    "standardDeviation": {
        "total": "987",
        "ok": "526",
        "ko": "252"
    },
    "percentiles1": {
        "total": "70",
        "ok": "68",
        "ko": "6023"
    },
    "percentiles2": {
        "total": "117",
        "ok": "112",
        "ko": "6044"
    },
    "percentiles3": {
        "total": "339",
        "ok": "276",
        "ko": "6214"
    },
    "percentiles4": {
        "total": "6023",
        "ok": "4933",
        "ko": "7042"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 16717,
    "percentage": 97
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 33,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 187,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 352,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.61",
        "ok": "18.231",
        "ko": "0.379"
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
        "total": "16937",
        "ok": "10007",
        "ko": "6930"
    },
    "minResponseTime": {
        "total": "1026",
        "ok": "1026",
        "ko": "6004"
    },
    "maxResponseTime": {
        "total": "7023",
        "ok": "6157",
        "ko": "7023"
    },
    "meanResponseTime": {
        "total": "3159",
        "ok": "1166",
        "ko": "6038"
    },
    "standardDeviation": {
        "total": "2430",
        "ok": "526",
        "ko": "44"
    },
    "percentiles1": {
        "total": "1161",
        "ok": "1093",
        "ko": "6024"
    },
    "percentiles2": {
        "total": "6021",
        "ok": "1132",
        "ko": "6043"
    },
    "percentiles3": {
        "total": "6071",
        "ok": "1265",
        "ko": "6111"
    },
    "percentiles4": {
        "total": "6152",
        "ok": "5924",
        "ko": "6188"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 9889,
    "percentage": 58
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 118,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 6930,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.231",
        "ok": "10.772",
        "ko": "7.46"
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
        "total": "10007",
        "ok": "8506",
        "ko": "1501"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "6005"
    },
    "maxResponseTime": {
        "total": "6414",
        "ok": "5466",
        "ko": "6414"
    },
    "meanResponseTime": {
        "total": "1109",
        "ok": "237",
        "ko": "6051"
    },
    "standardDeviation": {
        "total": "2232",
        "ok": "888",
        "ko": "53"
    },
    "percentiles1": {
        "total": "68",
        "ok": "57",
        "ko": "6032"
    },
    "percentiles2": {
        "total": "151",
        "ok": "96",
        "ko": "6054"
    },
    "percentiles3": {
        "total": "6043",
        "ok": "233",
        "ko": "6170"
    },
    "percentiles4": {
        "total": "6152",
        "ok": "5076",
        "ko": "6268"
    },
    "group1": {
    "name": "t < 500 ms",
    "count": 8218,
    "percentage": 82
},
    "group2": {
    "name": "500 ms < t < 1800 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1800 ms",
    "count": 280,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 1501,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.772",
        "ok": "9.156",
        "ko": "1.616"
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
