export interface FilterT {
  filterHeading: string;
  type: string;
  filterBase: Array<string>;
}

export interface FilterQueryParamT {
  launch_year: string;
  launch_success: string;
  land_success: string;
}

export const filerData: Array<FilterT> = [
  {
    filterHeading: 'Launch Year',
    type: 'launch_year',
    filterBase: [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019'
    ]
  },
  {
    filterHeading: 'Successful Launch',
    type: 'launch_success',
    filterBase: [
      'true',
      'false',
    ]
  },
  {
    filterHeading: 'Successful Landing',
    type: 'land_success',
    filterBase: [
      'true',
      'false'
    ]
  }
];
