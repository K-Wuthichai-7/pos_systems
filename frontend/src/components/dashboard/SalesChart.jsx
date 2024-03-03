import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const chartoptions = {
    Products: [
      {
        name: "Vitamin B",
        data: [15, 5, 15, 20, 19, 25, 20, 10, 16, 15, 20, 10],
      },
      {
        name: "Omega-3 Fish Oil",
        data: [25, 11, 15, 16, 23, 10, 28, 12, 19, 25, 20, 10],
      },
      {
        name: "Vitamin C",
        data: [20, 31, 28, 40, 16, 19, 35, 40, 35, 16, 23, 30],
      },
      {
        name: "Fish oil",
        data: [21, 30, 23, 14, 8, 30, 40, 20, 15, 14, 28, 21],
      },
      {
        name: "ยาดมสมุนไพร",
        data: [23, 15, 20, 15, 14, 20, 21, 10, 15, 14, 28, 21],
      },
      {
        name: "น้ำมันเขียว",
        data: [10, 13, 5, 10, 8, 2, 7, 15, 10, 8, 2, 7],
      },
      {
        name: "ยาแก้ไอ้",
        data: [12, 13, 5, 6, 7, 5, 15, 5, 13, 5, 6, 8],
      },
      {
        name: "น้ำเกลือ",
        data: [5, 8, 10, 16, 14, 13, 14, 15, 5, 8, 10, 16],
      },
    ],
    options: {
      chart: {
        type: "bar", // Set to bar for stacked bar chart
        stacked: true, // Set to true for stacked bar chart
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "bottom",
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          ยอดขายปี 2024
        </CardSubtitle>
        <Chart
          type="bar"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.Products}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
