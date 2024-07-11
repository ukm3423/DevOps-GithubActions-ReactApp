
export default function GoogleMap() {
    return (
        <div className="mt-8">
            <h3 className="text-center font-semibold text-lg mb-4">Find Us on the Map</h3>
            {/* Embed Google Maps */}
            <div className="overflow-hidden h-96">
                <iframe
                    title="LEARNIFY Academy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.046934360345!2d85.29279927588843!3d23.35031410401711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e13c10b5dad5%3A0x5db2322b3e66dae1!2sQuick%20Computer!5e0!3m2!1sen!2sin!4v1714040436801!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>
    )
}
