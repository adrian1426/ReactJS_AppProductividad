import { BarChart } from 'react-d3-chart-graphs';
import PropTypes from 'prop-types';

const BarChartReport = props => {
  const { xAxis, yAxis, data } = props;

  const axesProps = {
    legend: {
      xAxis,
      yAxis
    },
    padding: {
      xAxis: 5,
      yAxis: 5,
    },
    ticksCount: 1,
    tickFormat: {
      xAxis: function (value) {
        return `${value}`;
      },
    },
  };

  const colorScale = {
    min: '#FF8C20',
    max: '#FF8C32',
  };

  return (
    <BarChart
      axesProps={axesProps}
      data={data}
      colorScale={colorScale}
      paddingMultiplier={0.24}
    />
  );
};

BarChartReport.propTypes = {
  xAxis: PropTypes.string.isRequired,
  yAxis: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default BarChartReport;