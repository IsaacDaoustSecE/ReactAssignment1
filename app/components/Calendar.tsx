"use client";

import React, { useEffect, useState } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isBefore,
    startOfDay,
} from "date-fns";

import styles from "./Calendar.module.css";

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [sleepData, setSleepData] = useState({});
    const today = new Date();

    // Load the sleep data on component mount
    useEffect(() => {
        const savedSleepData = localStorage.getItem("sleepdata");

        if (savedSleepData) {
            try {
                const parsedSleepData = JSON.parse(savedSleepData);
                setSleepData(parsedSleepData);
            } catch (e) {
                console.log(
                    "There was an issue loading previous sleep data. Resetting to empty"
                );
                localStorage.removeItem("sleepdata");
            }
        }
    }, []);

    // Save sleep data to localStorage each time it changees
    useEffect(() => {
        localStorage.setItem("sleepdata", JSON.stringify(sleepData));
    }, [sleepData]);

    // Generate days for the current month
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const handleDayClick = (day) => {
        // Only allow toggling for current or future days
        if (!isBefore(startOfDay(day), startOfDay(today))) {
            setSleepData((prev) => {
                const dateKey = format(day, "yyyy-MM-dd");

                return {
                    ...prev,
                    [dateKey]: prev[dateKey] ? null : true,
                };
            });
        }
    };

    // Get the status class for a specific day
    const getDayClass = (day) => {
        const dateKey = format(day, "yyyy-MM-dd");

        // If day is in the past and no sleep data, return missed class
        if (isBefore(day, startOfDay(today)) && !sleepData[dateKey]) {
            return styles.dayMissed;
        }

        // If day has good sleep data, return good sleep class
        if (sleepData[dateKey]) {
            return styles.dayGoodSleep;
        }

        // Default class for days without data or future days
        return styles.dayDefault;
    };

    const prevMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() - 1);
        setCurrentDate(newDate);
    };

    const nextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + 1);
        setCurrentDate(newDate);
    };

    return (
        <div className={styles.containerz}>
            <h1 className={styles.title}>Calendar</h1>
            <p className={styles.description}>
                Click on days to indicate 8+ hours of sleep
            </p>

            <div className={styles.navigation}>
                <button onClick={prevMonth} className={styles.navButton}>
                    &larr; Prev
                </button>
                <span className={styles.currentMonth}>
                    {format(currentDate, "MMMM yyyy")}
                </span>
                <button onClick={nextMonth} className={styles.navButton}>
                    Next &rarr;
                </button>
            </div>

            <div className={styles.calendar}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                        <div key={day} className={styles.weekdayHeader}>
                            {day}
                        </div>
                    )
                )}

                {/* Empty cells for days before the first of the month */}
                {Array.from({ length: monthStart.getDay() }).map((_, index) => (
                    <div
                        key={`empty-${index}`}
                        className={styles.emptyDay}
                    ></div>
                ))}

                {/* Calendar days */}
                {days.map((day) => (
                    <div
                        key={day.toString()}
                        onClick={() => handleDayClick(day)}
                        className={`${styles.calendarDay} ${getDayClass(day)}`}
                    >
                        <span>{format(day, "d")}</span>
                    </div>
                ))}
            </div>

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div
                        className={`${styles.legendColor} ${styles.legendGood}`}
                    ></div>
                    <span>8+ hours sleep</span>
                </div>
                <div className={styles.legendItem}>
                    <div
                        className={`${styles.legendColor} ${styles.legendMissed}`}
                    ></div>
                    <span>Missed day</span>
                </div>
                <div className={styles.legendItem}>
                    <div
                        className={`${styles.legendColor} ${styles.legendDefault}`}
                    ></div>
                    <span>Not recorded</span>
                </div>
            </div>
        </div>
    );
}
