import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar, FaCheckCircle, FaRocket } from 'react-icons/fa';

const timelineData = [
  {
    title: "Title of Section 1",
    date: "1st Jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaStar />,
  },
  {
    title: "Title of Section 2",
    date: "2nd Jan 2021",
    description: "Sed qui vero praesentium maiores, sint eos vero sapiente.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Title of Section 3",
    date: "3rd Jan 2021",
    description: "Debitis dicta dolare, qui vero praesentium maiores.",
    icon: <FaRocket />,
  },
];

const Timeline = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
        MY JOURNEY
      </h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={item.icon}
            iconStyle={{ background: '#F472B6', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #F472B6' }}
            dateClassName="text-pink-400 font-semibold text-lg" // Tailwind classes for date
          >
            <h3 className="text-xl font-bold mb-2 text-pink-600">{item.title}</h3>
            <p className="text-base text-gray-600">{item.description}</p>
            <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 mt-4">
              Read more
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
