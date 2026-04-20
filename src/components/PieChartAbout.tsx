import {PieChart} from "@mui/x-charts/PieChart";
import React from "react";
import {ChartsLabelCustomMarkProps} from "@mui/x-charts/ChartsLabel";

export default function PieChartAbout() {

    function HTMLDiamond({ className, color }: ChartsLabelCustomMarkProps) {
        return (
            <div
                className={className}
                style={{ transform: 'scale(0.6, 0.75) rotate(45deg)', background: color }}
            />
        );
    }

    function SVGStar({ className, color }: ChartsLabelCustomMarkProps) {
        return (
            <svg viewBox="-7.423 -7.423 14.846 14.846">
                <path
                    className={className}
                    d="M0,-7.528L1.69,-2.326L7.16,-2.326L2.735,0.889L4.425,6.09L0,2.875L-4.425,6.09L-2.735,0.889L-7.16,-2.326L-1.69,-2.326Z"
                    fill={color}
                />
            </svg>
        );
    }

    return (
        <PieChart
            colors={['#dc3545', '#252525', '#c0c0c0']}
            series={[
                {
                    data: [
                        { value: 60, label: 'Web Development', labelMarkType: 'circle' },
                        {
                            value: 30,
                            label: 'Web/UI Design',
                            labelMarkType: HTMLDiamond,
                        },
                        { value: 10, label: 'Hardware repairs/PC building', labelMarkType: SVGStar },
                    ],
                    paddingAngle: 4,
                },
            ]}
        />
    );
}