/*
 @param {string} route 
 @param {Object} [params] 
 @param {Object} [params.body]
 @param {Object} [params.headers]
 @param {"GET" | "POST" | "PUT" | "DELETE" | "PATCH"} [method="GET"]
 @returns {Promise<any>} 
 */
const api = async (
    route,
    params = {},
    method = "GET"
  ) => {    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const headers = params.headers
      ? { ...defaultHeaders, ...params.headers }
      : defaultHeaders;
  
    const options = {
      method,
      headers,
    };
  
    if (params.body && method !== "GET") {
      options.body = JSON.stringify(params.body);
    }
  
    try {
      const response = await fetch(`${baseUrl}${route}`, options);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          status: response.status,
          message: response.statusText,
          details: errorData,
        };
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };
  
  export default api;
  