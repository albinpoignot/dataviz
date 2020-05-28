import numeral from 'numeraljs'

function formatValue(value) {
  return numeral(value).format('($ 0.00 a)')
}

export default {
    keys: [
      "Goods",
      "Services"
    ],
    margin: {
        "top": 50,
        "right": 40,
        "bottom": 80,
        "left": 100
    },
    defs: [ ],
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "Year",
        "legendPosition": "middle",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "Revenue",
        "legendPosition": "middle",
        "legendOffset": -80,
        "format": (value => {return formatValue(value)})
    },
    label: (data => {return formatValue(data.value)}),
    tooltipFormat: (value => {return formatValue(value)}),
    legends: [
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: 60,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]
}
