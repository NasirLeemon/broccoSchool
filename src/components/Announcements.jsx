const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "New Feature Release: Dark Mode",
      date: "2024-08-20",
      description:
        "We are excited to announce the release of Dark Mode for our platform. You can now switch to a darker theme to reduce eye strain and save battery life on your devices.",
    },
    {
      id: 2,
      title: "Scheduled Maintenance on September 10",
      date: "2024-09-01",
      description:
        "Our platform will undergo scheduled maintenance on September 10, 2024, from 2:00 AM to 4:00 AM UTC. During this time, the platform will be unavailable.",
    },
    {
      id: 3,
      title: "Community Meetup: React & Beyond",
      date: "2024-09-15",
      description:
        "Join our community meetup to discuss the latest trends in React and frontend development. Network with fellow developers and share your experiences.",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="odd:bg-blue-50 even:bg-purple-50 rounded-md p-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
