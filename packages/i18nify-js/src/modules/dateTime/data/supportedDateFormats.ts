import { SupportedDateFormats } from '../types';

// These are the standard Date Formats being followed globally
export const SUPPORTED_DATE_FORMATS: SupportedDateFormats[] = [
  // Date formats
  {
    regex: /^(\d{4})\/(0[1-9]|1[0-2])\/(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    format: 'YYYY/MM/DD',
  },
  {
    regex: /^(\d{2})\/(0[1-9]|1[0-2])\/(\d{4})$/,
    yearIndex: 3,
    monthIndex: 2,
    dayIndex: 1,
    format: 'DD/MM/YYYY',
  },
  {
    regex: /^(\d{4})\.(0[1-9]|1[0-2])\.(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    format: 'YYYY.MM.DD',
  },
  {
    regex: /^(\d{2})-(0[1-9]|1[0-2])-(\d{4})$/,
    yearIndex: 3,
    monthIndex: 2,
    dayIndex: 1,
    format: 'DD-MM-YYYY',
  },
  {
    regex: /^(0[1-9]|1[0-2])\/(\d{2})\/(\d{4})$/,
    yearIndex: 3,
    monthIndex: 1,
    dayIndex: 2,
    format: 'MM/DD/YYYY',
  },
  {
    regex: /^(\d{4})-(0[1-9]|1[0-2])-(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    format: 'YYYY-MM-DD',
  },
  {
    regex: /^(\d{4})\.\s*(0[1-9]|1[0-2])\.\s*(\d{2})\.\s*$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    format: 'YYYY. MM. DD.',
  },
  {
    regex: /^(\d{2})\.(0[1-9]|1[0-2])\.(\d{4})$/,
    yearIndex: 3,
    monthIndex: 2,
    dayIndex: 1,
    format: 'DD.MM.YYYY',
  },
  {
    regex: /^(0[1-9]|1[0-2])\.(\d{2})\.(\d{4})$/,
    yearIndex: 3,
    monthIndex: 1,
    dayIndex: 2,
    format: 'MM.DD.YYYY',
  },

  // Timestamp formats
  {
    regex: /^(\d{4})\/(0[1-9]|1[0-2])\/(\d{2}) (\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'YYYY/MM/DD HH:MM:SS',
  },
  {
    regex: /^(\d{2})\/(0[1-9]|1[0-2])\/(\d{4}) (\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 3,
    monthIndex: 2,
    dayIndex: 1,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'DD/MM/YYYY HH:MM:SS',
  },
  {
    regex: /^(\d{4})-(0[1-9]|1[0-2])-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'YYYY-MM-DD HH:MM:SS',
  },
  {
    regex: /^(\d{2})-(0[1-9]|1[0-2])-(\d{4}) (\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 3,
    monthIndex: 2,
    dayIndex: 1,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'DD-MM-YYYY HH:MM:SS',
  },
  {
    regex: /^(\d{4})\.(0[1-9]|1[0-2])\.(\d{2}) (\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'YYYY.MM.DD HH:MM:SS',
  },
  {
    regex: /^(\d{2})\.(0[1-9]|1[0-2])\.(\d{4}) (\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 3,
    monthIndex: 2,
    dayIndex: 1,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'DD.MM.YYYY HH:MM:SS',
  },

  // ISO 8601 Timestamp format
  {
    regex: /^(\d{4})-(0[1-9]|1[0-2])-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/,
    yearIndex: 1,
    monthIndex: 2,
    dayIndex: 3,
    hourIndex: 4,
    minuteIndex: 5,
    secondIndex: 6,
    format: 'YYYY-MM-DDTHH:MM:SS',
  },
];
