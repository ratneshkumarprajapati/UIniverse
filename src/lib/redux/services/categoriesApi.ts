import { sheetName } from "@/constants/sheets";
import { Categories } from "@/types/categoryType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/`,
  }),
  endpoints: (builder) => ({
    getCategory: builder.query<Categories[], void>({
      query: () => `${sheetName.category}?key=${API_KEY}`,
      transformResponse: (response: any) => {
        // Assuming first row is header
        const rows = response.values;
        if (!rows || rows.length < 2) return [];
        
        return rows.slice(1).map((row: string[], idx: number) => ({
          id: (row[0]), 
          name: row[1] || "",
          description: row[2] || "",
          count: Number(row[3]) || 0,
          icon: row[4] || "", 
        }));
      },
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;