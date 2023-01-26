window.SIDEBAR_ITEMS = {"enum":[["Month","The month of the year."],["SecondsFormat","Specific formatting options for seconds. This may be extended in the future, so exhaustive matching in external code is not recommended."],["Weekday","The day of week."]],"struct":[["Date","ISO 8601 calendar date with time zone."],["DateTime","ISO 8601 combined date and time with time zone."],["FixedOffset","The time zone with fixed offset, from UTC-23:59:59 to UTC+23:59:59."],["Local","The local timescale. This is implemented via the standard `time` crate."],["NaiveDate","ISO 8601 calendar date without timezone. Allows for every proleptic Gregorian date from Jan 1, 262145 BCE to Dec 31, 262143 CE. Also supports the conversion from ISO 8601 ordinal and week date."],["NaiveDateTime","ISO 8601 combined date and time without timezone."],["NaiveTime","ISO 8601 time without timezone. Allows for the nanosecond precision and optional leap second representation."],["Utc","The UTC time zone. This is the most efficient time zone when you don’t need the local time. It is also used as an offset (which is also a dummy type)."]],"trait":[["Datelike","The common set of methods for date component."],["Offset","The offset from the local time to UTC."],["SubsecRound","Extension trait for subsecond rounding or truncation to a maximum number of digits. Rounding can be used to decrease the error variance when serializing/persisting to lower precision. Truncation is the default behavior in Chrono display formatting.  Either can be used to guarantee equality (e.g. for testing) when round-tripping through a lower precision format."],["TimeZone","The time zone."],["Timelike","The common set of methods for time component."]]};