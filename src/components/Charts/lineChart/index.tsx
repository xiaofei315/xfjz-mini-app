import { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.scss";

interface IProps {
  xData: any[];
  yData: any[];
}

class Line extends Component<IProps> {
  static defaultProps = {
    xData: [],
    yData: [],
  };
  Line: any;

  componentDidMount() {
    setTimeout(() => {
      this.refresh();
    }, 10);

    // this.props.onRef(this)
  }

  refresh() {
    const { xData, yData } = this.props;
    // 更多关于option的参数配置参考Echart的官方文档
    const option = {
      title: {
        text: "价格走势",
        textStyle: {
          fontSize: 14,
        },
        left: 10,
        top: 20,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          axis: "auto",
          label: {
            backgroundColor: "#6a7985",
          },
        },
        formatter: `日期: {b} 价格: {c}`,
        textStyle: {
          fontSize: 12,
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: yData,
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#f65303",
          },
          lineStyle: {
            color: "#f65303",
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#f65303", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "white", // 100% 处的颜色
                },
              ],
            },
          },
        },
      ],
    };

    this.Line.refresh(option);
  }

  refLineChart = (node) => (this.Line = node);

  render() {
    return (
      <View className="line-chart">
        <EChart ref={this.refLineChart} canvasId="line-chart" />
      </View>
    );
  }
}

export default Line;
