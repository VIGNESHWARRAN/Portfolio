import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Leadership() {
    return (
        <>
            <Navbar />
            <main className="px-8 max-w-6xl mx-auto">

                <Section title="Leadership & Initiative">
                    <p className="text-gray-400 max-w-3xl mb-12 text-lg">
                        I strongly believe that leadership is about ownership and execution.
                        Alongside my technical journey, I have actively led and supported
                        large-scale academic and technical events.
                    </p>
                    <Reveal>
                        <p className="max-w-3xl text-gray-300 mb-12">
                            Beyond technical work, I actively take responsibility in
                            organizing, coordinating, and contributing to large-scale
                            academic and technical events. These experiences strengthened
                            my ability to lead teams, manage execution, and communicate
                            effectively under real-world constraints.
                        </p>
                    </Reveal>

                    <div className="space-y-10">

                        <Reveal>
                            <div className="bg-card border border-gray-800 rounded-2xl p-6">
                                <h3 className="text-lg font-medium text-accent">
                                    National-Level Hackathon Organizer (2×)
                                </h3>
                                <p className="text-gray-300 mt-3">
                                    Led and coordinated two national-level hackathons involving
                                    multi-institution participation. Responsibilities included
                                    planning, logistics, technical coordination, volunteer
                                    management, and execution.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="bg-card border border-gray-800 rounded-2xl p-6">
                                <h3 className="text-lg font-medium text-accent">
                                    Volunteer – MIKE Conference (10th Edition)
                                </h3>
                                <p className="text-gray-300 mt-3">
                                    Volunteered for the 10th edition of the MIKE Conference,
                                    assisting in event coordination, participant support, and
                                    on-ground operations for an international academic event.
                                </p>
                            </div>
                        </Reveal>

                    </div>
                </Section>

                <Section title="Event Gallery (Coming Soon)">
                    <p className="text-gray-400 mb-6">
                        This section will showcase selected moments from events I
                        organized or volunteered for.
                    </p>

                    {/* PHOTO GRID PLACEHOLDER */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="h-48 bg-card border border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                            Event Photo
                        </div>
                        <div className="h-48 bg-card border border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                            Event Photo
                        </div>
                        <div className="h-48 bg-card border border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                            Event Photo
                        </div>
                    </div>
                </Section>

            </main>
        </>
    );
}
