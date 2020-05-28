import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import data from './data'
import config from './config'

import './DomesticEnvGoodServices.css'

class DomesticEnvGoodServices extends React.Component {

    render() {
        return (
          <div class="DomesticEnvGoodServices_Container">
            <div class="title">
              <h1>Revenues from domestic sales of environmental and clean technology goods and services, in Canada</h1>
            </div>

            <div class="chart">
                  <ResponsiveBar
                      data={data}
                      keys={config.keys}
                      indexBy="year"
                      margin={config.margin}
                      padding={0.3}
                      colors={{ scheme: 'nivo' }}
                      colorBy="id"
                      axisTop={null}
                      axisRight={null}
                      axisBottom={config.axisBottom}
                      axisLeft={config.axisLeft}
                      label={config.label}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      legends={config.legends}
                      animate={true}
                      motionStiffness={90}
                      motionDamping={15}
                      tooltipFormat={config.tooltipFormat}
                  />
              </div>

              <div class="disclaimer">
                <p>Data sources:&nbsp;
                  <a href="https://open.canada.ca/data/en/dataset/fc78a825-3386-487a-8d9a-984bf17a4dba">https://open.canada.ca/data/en/dataset/fc78a825-3386-487a-8d9a-984bf17a4dba</a>
                  <br />
                  <strong>The data were rounded and formatted to make them easier to read.</strong>
                  <br />
                  <i>This information is provided “as is” without any waranty.</i>
                </p>
              </div>
            </div>
        )
    }
}

export default DomesticEnvGoodServices
