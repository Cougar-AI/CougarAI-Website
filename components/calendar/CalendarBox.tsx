"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"

type Event = {
  id: string;
  summary: string;
  description?: string;
  start: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
  htmlLink: string;
  location?: string;
};

const GoogleCalendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState<Boolean>(true);
  const [showModal, setShowModal] = useState<Event | null>(null);

  const formatDate = (isoDate: string | undefined) => {
    if (!isoDate) return "No date";
    return new Date(isoDate).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const fetchEvents = async (forcedRefresh = false) => {
    try {
      setLoading(true);

      if (forcedRefresh) {
        localStorage.removeItem("cachedEvents");
        localStorage.removeItem("cacheTimestamp");
      }

      const cachedEvents = localStorage.getItem("cachedEvents");
      const cacheTimestamp = localStorage.getItem("cacheTimestamp");

      if (!forcedRefresh && cachedEvents && cacheTimestamp) {
        const now = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000;
        if (now - parseInt(cacheTimestamp) < oneDay) {
          console.log("Loading from cache...");
          setEvents(JSON.parse(cachedEvents));
          setLoading(false);
          return;
        }
      }

      console.log("Fetching fresh data...");

      const res = await fetch("/api/google-calendar");
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setEvents([...data]);
        localStorage.setItem("cachedEvents", JSON.stringify(data));
        localStorage.setItem("cacheTimestamp", new Date().getTime().toString());
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(true);
  }, []);

  const changeMonth = (increment: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1)
    );
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dateString = date.toISOString().split("T")[0];
      const dayEvents = events.filter(
        (event) =>
          event.start.date?.includes(dateString) ||
          event.start.dateTime?.includes(dateString)
      );

      days.push(
        <div
          key={day}
          className="calendar-day border p-2 cursor-pointer hover:bg-gray-100 min-h-[100px] md:min-h-[120px] flex flex-col items-center justify-start relative"
          onClick={() => setShowModal(dayEvents.length > 0 ? dayEvents[0] : null)}
        >
          <span className="font-bold">{day}</span>
          {dayEvents.map((event) => (
            <p
              key={event.id}
              className="absolute inset-x-1 bottom-1 mx-auto w-full max-w-[90%] bg-cai-400 text-white px-1 py-1 rounded-md text-xs md:text-sm font-bold truncate text-center"
            >
              {event.summary}
            </p>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    

    <div className="w-full max-w-[1600px] mx-auto p-10 bg-white text-white min-h-[80vh] flex flex-col justify-center rounded-lg">
      <div className="absolute top-2 right-2">
        <Image src="/icons/CAI_Revised.svg" alt="CAI Logo" width={150} height={150} className= "red-filter" />
      </div>
      <div className = "flex justify-center items-center mb-4 space-x-2">
        <button className="bg-cai-400 text-white rounded-lg px-6 py-2" onClick={async () => await fetchEvents(true)}>Refresh</button>
        <button className="bg-cai-400 text-white rounded-lg px-6 py-2" onClick={() => setCurrentDate(new Date())}>Today</button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="px-4 py-2 bg-cai-400 text-white rounded font-bold"
        >
          ❮
        </button>
        <h3 className="text-2xl font-bold text-cai-400">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button
          onClick={() => changeMonth(1)}
          className="px-4 py-2 bg-cai-400 text- rounded font-bold"
        >
          ❯
        </button>
      </div>

      {loading ? (
        <div className="text-center text-lg font-bold text-gray-500">
          Loading events...
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-1 text-center font-bold border border-white text-cai-400 w-full min-h-[60vh] md:min-h-[80vh]">
          <div className="border p-2">
            <span className="block md:hidden">S</span>  
            <span className="hidden md:block">Sun</span> 
          </div>
          <div className="border p-2">
            <span className="block md:hidden">M</span>
            <span className="hidden md:block">Mon</span>
          </div>
          <div className="border p-2">
            <span className="block md:hidden">T</span>
            <span className="hidden md:block">Tue</span>
          </div>
          <div className="border p-2">
            <span className="block md:hidden">W</span>
            <span className="hidden md:block">Wed</span>
          </div>
          <div className="border p-2">
            <span className="block md:hidden">T</span>
            <span className="hidden md:block">Thu</span>
          </div>
          <div className="border p-2">
            <span className="block md:hidden">F</span>
            <span className="hidden md:block">Fri</span>
          </div>
          <div className="border p-2">
            <span className="block md:hidden">S</span>
            <span className="hidden md:block">Sat</span>
          </div>
          {renderCalendarDays()}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">
              <a
                href={showModal.htmlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {showModal.summary || "No summary"}
              </a>
            </h3>
            {showModal.location && (
              <p className="text-gray-600 mb-1">📍 {showModal.location}</p>
            )}
            <p className="text-gray-600 mb-1">
              🕒 Start: {formatDate(showModal.start.dateTime || showModal.start.date)}
            </p>
            <p className="text-gray-600 mb-1">
              ⏳ End: {formatDate(showModal.end?.dateTime || showModal.end?.date)}
            </p>
            {showModal.description && (
            <p className="text-gray-600 mb-3">
              💬 Description: {showModal.description || "No Description"}</p>)}
            <button
              onClick={() => setShowModal(null)}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleCalendar;
