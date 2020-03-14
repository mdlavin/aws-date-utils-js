# aws-date-utils

Utilities to help with parsing and formatting [AWSDate](https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html#awsdate) objects.

Usage

    import {parseExtendedISODate, dateToExtendedISODate} from 'aws-date-utils'

    parseExtendedISODate('2020-03-14-04:00')
    dateToExtendedISODate(new Date())
