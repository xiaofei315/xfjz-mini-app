import {LineChart} from "@/components/Charts";

const Index = () => {
  const data1 = [
    { y: 63.4, x: "10-01" },
    { y: 62.7, x: "10-02" },
    { y: 72.2, x: "10-03" },
    { y: 58, x: "10-04" },
    { y: 59.9, x: "10-05" },
    { y: 67.7, x: "10-06" },
    { y: 53.3, x: "10-07" },
  ];
  return (
    <LineChart xData={data1.map((it) => it.x)} yData={data1.map((it) => it.y)} />
  );
};

export default Index;
