$(document).ready(function()
{
  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'firstchart',
    // Chart data records -- each entry in this array corresponds to a point on the chart.
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the chart.
    labels: ['Value']
  });

  Morris.Donut({
    element: 'secondchart',
    data: [
      {label: "Under 10 Minutes", value: 12},
      {label: "Between 10 min to 60 min", value: 30},
      {label: "Hour or longer", value: 20}
    ]
  });
});
