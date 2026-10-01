import ApiConfig from "./ApiConfig";

const Api = {
  baseUrl: ApiConfig.baseUrl,

  async request(endpoint, options = {}) {
    if (!this.baseUrl) {
      throw new Error("REST API base URL is not configured.");
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,

      headers: {
        Accept: "application/json",
        "X-API-Key": ApiConfig.apiKey,
        ...options.headers,
      },
    });

    let data = null;

    try {
      data = await response.json();
    } catch {
      throw new Error("Invalid REST API response.");
    }

    if (!response.ok) {
      throw new Error(data?.message || `REST API Error: ${response.status}`);
    }

    return data;
  },

  get(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "GET",
    });
  },

  post(endpoint, data = {}, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
  },

  postForm(endpoint, data = {}, options = {}) {
    const formData = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return this.request(endpoint, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...options.headers,
      },
      body: formData.toString(),
    });
  },

  put(endpoint, data = {}, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
  },

  delete(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "DELETE",
    });
  },
};

export default Api;
