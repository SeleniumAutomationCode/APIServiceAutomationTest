const supertest = require("supertest")
const server = require("../TestAssessmentAPI/server.json")
const request = supertest(server.baseURL)
/**
 * API service that handles HTTP requests using Supertest library.
 */
class apiService{
    /**
     * Sends a POST request to the specified endpoint with the given payload.
     * @param {object} payload - The payload data to send with the request.
     * @param {string} endpoint - The endpoint to send the request to.
     * @returns {response} - return the response object.
     */
    async postRequest(payload, endpoint){
        const response = await request.post(payload).send(endpoint)
        return response;
    }

     /**
     * Sends a GET request to the specified endpoint.
     * @param {string} endpoint - The endpoint to send the request to.
     * @returns {response} -return response object.
     */
    async getRequest(endpoint){
        const response = await request.get(endpoint)
        return response;
    }
}

module.exports = apiService;