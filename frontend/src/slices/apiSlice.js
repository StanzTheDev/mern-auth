import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ 
  baseUrl: 'http://localhost:5000', // Explicitly set the base URL
  credentials: 'include', // Allow credentials to be sent
  prepareHeaders: (headers, { getState }) => {
    // Optional: Add any additional headers, like authentication token
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Task'],
  endpoints: (builder) => ({}),
});