// Implementación de Endpoints cryptomonedas bravenew coin --Pendiente

/*var unirest = require("unirest");

const config = require('../config');

const cryptoken = getcryptoken.access_token;

const cryptconf = {
	host: config.unirest.host,
	key: config.unirest.key,
}

// Get Token
var req = unirest("POST", "https://rapidapi.p.rapidapi.com/oauth/token");

req.headers({
	"content-type": "application/json",
	"x-rapidapi-key": "3ca3575730msh997967112f4241bp1a136cjsn5ea0550bd80c",
	"x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
	"useQueryString": true
});

req.type("json");
req.send({
	"audience": "https://api.bravenewcoin.com",
	"client_id": "oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY",
	"grant_type": "client_credentials"
});

req.end(function getcryptoken(res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);

	return cryptoken;
});

// AssetTicker
var req = unirest("GET", "https://bravenewcoin.p.rapidapi.com/market-cap");

req.query({
	"assetId": "f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f"
});

req.headers({
	"x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
	"x-rapidapi-key": "3ca3575730msh997967112f4241bp1a136cjsn5ea0550bd80c",
	"authorization": "Bearer ", cryptoken,
	"useQueryString": true
});


req.end(function assetTicker(res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);

	return assetTicker(res);
});

var req = unirest("GET", "https://rapidapi.p.rapidapi.com/ohlcv");

// DailyOHLCV
req.query({
	"size": "10"
});

req.headers({
	"authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5EVXhNRGhHT0VReE56STVOelJCTTBJM1FrUTVOa0l4TWtRd1FrSTJSalJFTVRaR1F6QTBOZyJ9.eyJpc3MiOiJodHRwczovL2F1dGguYnJhdmVuZXdjb2luLmNvbS8iLCJzdWIiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYnJhdmVuZXdjb2luLmNvbSIsImlhdCI6MTYwMzg3MTc3NSwiZXhwIjoxNjAzOTU4MTc1LCJhenAiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWSIsInNjb3BlIjoicmVhZDppbmRleC10aWNrZXIgcmVhZDpyYW5raW5nIHJlYWQ6bXdhIHJlYWQ6Z3dhIHJlYWQ6YWdncmVnYXRlcyByZWFkOm1hcmtldCByZWFkOmFzc2V0IHJlYWQ6b2hsY3YgcmVhZDptYXJrZXQtY2FwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.nEmNGcWNu2eQhXbmvSRs9LAyz3U7Lhf7XUrFepDwpnoo1nxeUgaY9qNK8q7Zlj2NwOeg5PZ8mMDTZkvjw15cWudZyAOcoz8wZumvbvMeW6L60-9I21ROWWWxaN8zpX0OwcNYkxvMbny0YRKeuXg_E362tMfoZK_b6kL8jPTnr2CGiesg8q1WLC84VQxTfOKLyT1BdagwoL_QKVg3ofCaFeAhH5cw9fSiz2F_UH1bbLh56rMKRfVDDa8wuelKq7FJlYYPCwaLXRaXlLdqfeos7CGYG3fFZaJFn4wroqGg4VoZAGaLelhP1hXAO30Ut6zJH3tDkOn-rj21E0hEqhRTcQ",
	"x-rapidapi-key": "3ca3575730msh997967112f4241bp1a136cjsn5ea0550bd80c",
	"x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

module.exports = {
	getcryptoken,
};
*/