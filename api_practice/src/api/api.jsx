import React from "react";

const url = "https://developer-lostark.game.onstove.com/news/events"

// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.open("GET", "")
// xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/news/events", true);
// xmlHttpRequest.setRequestHeader('accept', 'application/json');
// xmlHttpRequest.setRequestHeader('authorization', 'bearer your_JWT');
// xmlHttpRequest.onreadystatechange = () => { };
// xmlHttpRequest.send();

function Api(props){

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", url, true);
    xmlHttpRequest.responseType='json';
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA');
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.onload = () => {
        var data = xmlHttpRequest.response;
        // const title = JSON.parse(xmlHttpRequest.response);
        console.log(data);
      };
    xmlHttpRequest.send();







    // const getData = async() => {
    //     const res = await fetch(url,{
    //         method: "GET",
    //         headers: {
    //             "Accept" : "application/json",
    //             "aurthorization" : "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA",
    //             "X-API-KEY" : "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA"
    //         }
    //     })
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         if(res.success){
    //             console.log(`${res.Title}이벤트입니다`);
    //         }
    //     });

    // };

    // fetch("https://developer-lostark.game.onstove.com/news/events",{
    //     method: "GET",
    //     headers: {
    //         "Accept" : "application/json",
    //         "aurthorization" : "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA",
    //         "X-API-KEY" : "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA"
    // }})
    // .then(res=>res.json())
    // .then(res=>{
    //     if(res.success){
    //         console.log(`${res.Title}이벤트입니다`);
    //     }
    // });

    // const res = fetch(url,{
    //     method: "GET",
    //     headers: {
    //         "Accept" : "application/json",
    //         "aurthorization" : "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA",
    //         "X-API-KEY" : "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA"
    //     }
    // })
    // .then((res)=>res.json())
    // .then((res)=>{
    //     if(res.success){
    //         console.log(`${res.Title}`);
    //     }
    // });

    // return(
    //     fetch(url)
    //     .then((response) => console.log("response:", response))
    //     .catch((error) => console.log("error:", error))
    // );
}

export default Api;