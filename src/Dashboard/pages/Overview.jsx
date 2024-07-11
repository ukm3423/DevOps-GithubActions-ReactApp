
function Overview() {
    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 border-r border-gray-200">
                    <p className="text-lg font-semibold">Courses Active</p>
                    <p className="text-3xl font-bold">50</p>
                </div>
                <div className="p-4 border-r border-gray-200">
                    <p className="text-lg font-semibold">Students Enrolled</p>
                    <p className="text-3xl font-bold">1200</p>
                </div>
                <div className="p-4">
                    <p className="text-lg font-semibold">Faculty Members</p>
                    <p className="text-3xl font-bold">75</p>
                </div>
            </div>
        </div>
    );
}

export default Overview;
