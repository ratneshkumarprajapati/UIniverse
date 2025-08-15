import { sheetName } from '@/constants/sheets'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Resource } from '@/types/resourceType'

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY

export const resourceApi = createApi({
  reducerPath: 'resourceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/`,
  }),
  endpoints: (builder) => ({
    getResources: builder.query<Resource[], string| void>({
    query: (category) => {
        // If category is provided and exists in sheetName, use it; otherwise use 'all'
        const sheet =
          category && sheetName[category] ? sheetName[category] : sheetName.all;
        return `${sheet}?key=${API_KEY}`;
      },      transformResponse: (response: any) => {
        // Assuming first row is header
        const rows = response.values;
        if (!rows || rows.length < 2) return [];
        const headers = rows[0];
        return rows.slice(1).map((row: string[], idx: number) => {
          // Map each row to a Resource object
          return {
            id: Number(row[0]) || idx, // fallback to index if id is missing
            name: row[1] || "",
            description: row[2] || "",
            url: row[3] || "",
            category: row[4] || "",
            icon: row[5] || "",
            featured: String(row[6]).toLowerCase() === "true",
            tags: row[7]||[]
          } as Resource;
        });
      },
    }),
  }),
})

export const { useGetResourcesQuery } = resourceApi
