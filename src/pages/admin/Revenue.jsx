import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";


ChartJS.register( BarElement, Tooltip, Legend, CategoryScale, LinearScale )


function Revenue() {

  const data = {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        label: "Revenus Mensuels",
        data: [10, 15, 22, 28, 35, 50],
        backgroundColor: 'rgb(161, 84, 200)',
      },
    ],
  };

  return (
        <div className="revenue">
          <h3>Revenue Breackdown</h3>
          <p>Compared to previous year</p>
          <Bar data={data} />
        </div>
  );
}

export default Revenue;
