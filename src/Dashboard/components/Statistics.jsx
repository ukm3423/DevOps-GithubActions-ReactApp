
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: "Engineering", value: 400 },
    { name: "Medicine", value: 300 },
    { name: "Business", value: 300 },
    { name: "Art & Design", value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Statistics() {
    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Student Distribution</h2>
            <PieChart width={400} height={400}>
                <Pie data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" dataKey="value" label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default Statistics;
