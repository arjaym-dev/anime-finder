# Frontend Developer Assessment

a functional feature that gives users the ability to search for anime titles using a typeahead.

## Features

- Search typehead
  - Include debouncing when typing
  - Only 1 request at a time,
  - Request after user stop typing at specific time to avoid request time out. Request spamming
  - Display loader
- Anime detail page
  - Include much more detail than the anime card
  - add skeleton loading
- Anime Card
  - Make it responsive
  - Adoptable to light, & dark theme to future implementation
  - Add Skeleton loading, when still fetching data
- Tech used:
  - zustand
  - @tanstack-query
  - debounce
  - tailwind
  - typescript
  - next js

## Notes

- Search typehead, make it not available for SSR for each item. as per user behavior of search typehead
