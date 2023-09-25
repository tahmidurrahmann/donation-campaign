import { Cell, Pie, PieChart } from "recharts";
import { setDataToLs } from "../SaveDonationToLs/SaveDonationToLs";

const dataFromLs = setDataToLs();
const setDataLength = dataFromLs.length;
const total = setDataLength / 12 * 100;
const remain = 100 - total;
const data = [
    { value: remain },
    { value: total },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}`}
        </text>
    );
};


const colors = ['#FF444A', '#00C49F'];
const Statistics = () => {
    return (
        <div>
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
                <div className="flex justify-center items-center gap-2"><p>Your Donation </p> <div className="bg-[#00C49F] h-3 w-24 rounded-xl"></div></div>
                <div className="flex justify-center items-center gap-2"><p>Total Donation</p>
                    <div className="bg-[#FF444A] h-3 w-24 rounded-xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;