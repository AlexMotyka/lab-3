$(document).ready(function()
{
  Morris.Line({
    element: 'firstchart',
    data: [
      { year: '2012', value: 8 },
      { year: '2013', value: 17 },
      { year: '2014', value: 16 },
      { year: '2015', value: 24 },
      { year: '2016', value: 30 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Number of New Recipes'],
    lineColors: ['#6b9430']
  });

  Morris.Donut({
    element: 'secondchart',
    data: [
      {label: "Under 10 Minutes", value: 16},
      {label: "Between 10 min to 60 min", value: 54},
      {label: "Hour or longer", value: 20}
    ],
    colors: ['#6b9430', '#799e44', '#97b46e']
  });
});
