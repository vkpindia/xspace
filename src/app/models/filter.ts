export interface FilterT {
  filterHeading: string;
  type: string;
  filterBase: Array<FilterBaseT>;
}

interface FilterBaseT {
  label: string;
  value: string;
  isSelected: boolean;
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
      {
        label: '2006',
        value: '2006',
        isSelected: false
      },
      {
        label: '2007',
        value: '2007',
        isSelected: false
      },
      {
        label: '2008',
        value: '2008',
        isSelected: false
      },
      {
        label: '2009',
        value: '2009',
        isSelected: false
      },
      {
        label: '2010',
        value: '2010',
        isSelected: false
      },
      {
        label: '2011',
        value: '2011',
        isSelected: false
      },
      {
        label: '2012',
        value: '2012',
        isSelected: false
      },
      {
        label: '2013',
        value: '2013',
        isSelected: false
      },
      {
        label: '2014',
        value: '2014',
        isSelected: false
      },
      {
        label: '2015',
        value: '2015',
        isSelected: false
      },
      {
        label: '2016',
        value: '2016',
        isSelected: false
      },
      {
        label: '2017',
        value: '2017',
        isSelected: false
      },
      {
        label: '2018',
        value: '2018',
        isSelected: false
      },
      {
        label: '2019',
        value: '2019',
        isSelected: false
      },
      {
        label: '2020',
        value: '2020',
        isSelected: false
      }
    ]
  },
  {
    filterHeading: 'Successful Launch',
    type: 'launch_success',
    filterBase: [
      {
        label: 'true',
        value: 'true',
        isSelected: false
      },
      {
        label: 'false',
        value: 'false',
        isSelected: false
      }
    ]
  },
  {
    filterHeading: 'Successful Landing',
    type: 'land_success',
    filterBase: [
      {
        label: 'true',
        value: 'true',
        isSelected: false
      },
      {
        label: 'false',
        value: 'false',
        isSelected: false
      }
    ]
  }
];
