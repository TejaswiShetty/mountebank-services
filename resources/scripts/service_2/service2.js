var request= JSON.parse(process.env.MB_REQUEST),
    response=JSON.parse(process.env.MB_RESPONSE),
    fs=require('fs'),
    path=require('path');


    function getService2Response()
    {
    var sourcefilePath=path.resolve(__dirname+"../../../data/service2_responses");

    var files=
    {
        "service2_response200":sourcefilePath+"/service2.json",
    };
    var sourcefile=files.service2_response200;
    return JSON.parse(fs.readFileSync(sourcefile,'utf8').toString());

    }

    var validRequest=true;

    if(!validRequest)
    {
     response.statusCode=500;
     response.body="Invalid Request";
    }
    else
    {
        response.statusCode=200;
        response.headers={'Content-Type':'application/json'};
        response.body=getService2Response();
    }