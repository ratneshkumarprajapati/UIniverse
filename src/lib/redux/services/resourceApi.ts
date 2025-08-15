import { sheetName } from '@/constants/sheets'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Resource } from '@/types/resourceType'

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY

interface GoogleSheetsResponse {
  values: string[][];
}

export const resourceApi = createApi({
  reducerPath: 'resourceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/`,
  }),
  endpoints: (builder) => ({
    getResources: builder.query<Resource[], string | void>({
      query: (category) => {
        const sheet =
          category && sheetName[category] ? sheetName[category] : sheetName.all;
        return `${sheet}?key=${API_KEY}`;
      },
      transformResponse: (response: GoogleSheetsResponse) => {
        const rows = response.values;
        if (!rows || rows.length < 2) return [];
        return rows.slice(1).map((row: string[], idx: number) => ({
          id: Number(row[0]) || idx,
          name: row[1] || "",
          description: row[2] || "",
          url: row[3] || "",
          category: row[4] || "",
          icon: row[5] || "",
          featured: String(row[6]).toLowerCase() === "true",
          tags: row[7] || []
        } as Resource));
      },
    }),
  }),
})

export const { useGetResourcesQuery } = resourceApi
