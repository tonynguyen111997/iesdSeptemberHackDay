import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";

import { ROOT_URL } from "../../utils/constants";

const data = [
  { language: 1, numberOfProjects: 2 },
  { language: 2, numberOfProjects: 3 },
  { language: 3, numberOfProjects: 5 },
  { language: 4, numberOfProjects: 2 }
];

class Charts extends Component {
  state = {
    loaded: false,
    data: []
  };

  componentDidMount = () => {
    axios
      .post(`${ROOT_URL}/api/user/repo`, {
        username: "rdkelley"
      })
      .then(function(response) {
        let JavaScript = 0;
        let HTML = 0;
        let CSS = 0;
        let CSharp = 0;

        response.data.forEach(r => {
          if (r.topLanguage === "JavaScript") {
            JavaScript++;
          } else if (r.topLanguage === "HTML") {
            HTML++;
          } else if (r.topLanguage === "CSS") {
            CSS++;
          } else if (r.topLanguage === "C#") {
            CSharp++;
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={20}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["JavaScript", "HTML", "CSS", "C#"]}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={x => x}
            />
            <VictoryBar data={data} x="language" y="numberOfProjects" />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

Charts.propTypes = {};

export default Charts;
