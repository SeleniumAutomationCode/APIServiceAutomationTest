const supertest = require("supertest")
const apiRequest = require('../utils')
const server = require("../server.json")
const registerJSON = require('../JsonData/registerJsonData.json')

describe("Register API test", () => {

    let request = new apiRequest;
    let stationID;

    /**
    * Test scenario : A user attempts to register without an API key.
    * And validate the error reponse
    */
    test("POST - Register the user with out API key", async () => {
        let payload = registerJSON.registerDataJson;
        const response = await request.postRequest('stations', payload)
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.")
    })


    /**
    * Test scenario : A user attempts to register with an API key.
    * validate the response body details
    */
    test("POST - Register the user with API key", async () => {

        let payload = registerJSON.registerDataJson.registerdata;

        let queryParams = {
            "appid": server.APIKey
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await request.postRequest(`stations?${queryString}`, payload)
        stationID = response.body.ID;
        expect(response.statusCode).toBe(201)
        expect(response.body.external_id).toBe(payload.external_id)
        expect(response.body.name).toBe(payload.name)
        expect(response.body.latitude).toBe(payload.latitude)
        expect(response.body.longitude).toBe(payload.longitude)
        expect(response.body.altitude).toBe(payload.altitude)
    })

    /**
    * Test scenario : Retrive a registered station from the database with a valid API key.
    * Validating the registered station details
    */
    test("GET - Get registered station from BD with valid API key", async () => {
        let payload = registerJSON.registerDataJson.registerdata;
        let queryParams = {
            "appid": server.APIKey
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await request.getRequest(`stations/${stationID}?${queryString}`)
        expect(response.statusCode).toBe(200)
        expect(response.body.external_id).toBe(payload.external_id)
        expect(response.body.name).toBe(payload.name)
        expect(response.body.latitude).toBe(payload.latitude)
        expect(response.body.longitude).toBe(payload.longitude)
        expect(response.body.altitude).toBe(payload.altitude)
    })


    /**
    * Test Case : Registering a station with a different external ID.
     */
    test("POST - Register the station with different external id", async () => {

        let payload = registerJSON.registerDataJson.registerdata2;

        let queryParams = {
            "appid": server.APIKey
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await request.postRequest(`stations?${queryString}`, payload)
        stationID = response.body.ID;
        expect(response.statusCode).toBe(201)
        expect(response.body.external_id).toBe(payload.external_id)
        expect(response.body.name).toBe(payload.name)
        expect(response.body.latitude).toBe(payload.latitude)
        expect(response.body.longitude).toBe(payload.longitude)
        expect(response.body.altitude).toBe(payload.altitude)
    })

    /**
    * Test case : Retrive a registered station from the database with a valid API key.
    * Validating the registered station details
    */
    test("GET - Get registered station from BD with API key", async () => {
        let payload = registerJSON.registerDataJson.registerdata2;
        let queryParams = {
            "appid": server.APIKey
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await request.getRequest(`stations/${stationID}?${queryString}`)
        expect(response.statusCode).toBe(200)
        expect(response.body.external_id).toBe(payload.external_id)
        expect(response.body.name).toBe(payload.name)
        expect(response.body.latitude).toBe(payload.latitude)
        expect(response.body.longitude).toBe(payload.longitude)
        expect(response.body.altitude).toBe(payload.altitude)
    })

     /**
    * Test scenario : Retrive a registered station from the database without a  API key.
    * And validate the error reponse
    */
     test("GET - Get the Registered station without API key", async () => {
        let payload = registerJSON.registerDataJson;
        const response = await request.getRequest('stations')
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.")
    })

})
