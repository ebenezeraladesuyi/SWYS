/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllAttendee } from "../../utils/Api";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { IoIosArrowBack } from "react-icons/io";
import { FaCopy, FaCopy as FaCopyAll } from "react-icons/fa";
import Swal from "sweetalert2";

interface AttendeeData {
    _id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    stateOfOrigin: string;
    hometown: string;
    occupation: string;
    educationalQualification: string;
    createdAt?: string;
}

const AllRegisteredAttendee = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 20;

    const { data: attendeesData, isLoading, isError, refetch } = useQuery({
        queryKey: ["allAttendees"],
        queryFn: getAllAttendee,
    });

    console.log("data", attendeesData)

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-[#f5f5f5]">
                <DatasIsaLoading />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-[#f5f5f5]">
                <div className="text-center">
                    <p className="text-[#ff4444] text-[16px] mb-[20px]">Error loading attendees data</p>
                    <button 
                        onClick={() => refetch()}
                        className="px-[20px] py-[10px] bg-[#4a90e2] text-[#ffffff] rounded-[5px] hover:bg-[#357abd] transition-all duration-300"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    const attendees: AttendeeData[] = attendeesData?.data || [];

    // Filter attendees based on search term
    const filteredAttendees = attendees.filter(attendee =>
        attendee.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attendee.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attendee.phoneNumber?.includes(searchTerm)
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredAttendees.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAttendees = filteredAttendees.slice(startIndex, endIndex);

    // Copy single email to clipboard
    const copySingleEmail = (email: string) => {
        navigator.clipboard.writeText(email).then(() => {
            Swal.fire({
                title: "Copied!",
                text: `${email} has been copied to clipboard`,
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }).catch(() => {
            Swal.fire({
                title: "Error!",
                text: "Failed to copy email",
                icon: "error",
                timer: 2000,
                showConfirmButton: false
            });
        });
    };

    // Copy all emails to clipboard
    const copyAllEmails = () => {
        const allEmails = attendees.map(attendee => attendee.email).join('\n');
        navigator.clipboard.writeText(allEmails).then(() => {
            Swal.fire({
                title: "Copied!",
                text: `${attendees.length} email(s) have been copied to clipboard`,
                icon: "success",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }).catch(() => {
            Swal.fire({
                title: "Error!",
                text: "Failed to copy emails",
                icon: "error",
                timer: 2000,
                showConfirmButton: false
            });
        });
    };

    // Handle page change
    const goToPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full min-h-screen bg-[#f5f5f5] font-pop">
            {/* Header Section */}
            <div className="bg-[#4a90e2] w-full p-[20px] shadow-md">
                <div className="max-w-[1200px] mx-auto">
                    <NavLink to="/">
                        <div className="mb-[15px] text-[#ffffff] text-[18px] inline-flex items-center gap-[8px] hover:text-[#e0e0e0] transition-all duration-300">
                            <IoIosArrowBack />
                            <span>Back</span>
                        </div>
                    </NavLink>
                    <h1 className="text-[24px] md:text-[32px] text-[#ffffff] font-bold mb-[10px] mt-[20px]">
                        Registered Attendees
                    </h1>
                    <p className="text-[14px] md:text-[16px] text-[#e0e0e0]">
                        Total Registered: {attendees.length} participants
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1200px] mx-auto p-[20px]">
                {/* Search and Copy All Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-[15px] mb-[30px]">
                    <div className="w-full md:w-auto flex-1">
                        <input
                            type="text"
                            placeholder="Search by name, email or phone number..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full md:w-[300px] px-[15px] py-[10px] border-[1px] border-[#dddddd] rounded-[8px] outline-none focus:border-[#4a90e2] transition-all duration-300 text-[14px]"
                        />
                    </div>
                    <button
                        onClick={copyAllEmails}
                        className="w-full md:w-auto px-[20px] py-[10px] bg-[#28a745] text-[#ffffff] rounded-[8px] hover:bg-[#218838] transition-all duration-300 flex items-center justify-center gap-[8px] text-[14px] font-semibold"
                    >
                        <FaCopyAll />
                        Copy All Emails ({attendees.length})
                    </button>
                </div>

                {/* Attendees Table - Desktop View */}
                <div className="hidden md:block overflow-x-auto bg-[#ffffff] rounded-[12px] shadow-md">
                    <table className="w-full">
                        <thead className="bg-[#4a90e2] text-[#ffffff]">
                            <tr>
                                <th className="p-[15px] text-left text-[14px] font-semibold">S/N</th>
                                <th className="p-[15px] text-left text-[14px] font-semibold">Full Name</th>
                                <th className="p-[15px] text-left text-[14px] font-semibold">Email</th>
                                <th className="p-[15px] text-left text-[14px] font-semibold">Phone</th>
                                <th className="p-[15px] text-left text-[14px] font-semibold">State</th>
                                <th className="p-[15px] text-left text-[14px] font-semibold">Occupation</th>
                                <th className="p-[15px] text-left text-[14px] font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentAttendees.map((attendee, index) => (
                                <tr key={attendee._id} className="border-b border-[#eeeeee] hover:bg-[#f9f9f9] transition-all duration-300">
                                    <td className="p-[15px] text-[14px] text-[#333333]">{startIndex + index + 1}</td>
                                    <td className="p-[15px] text-[14px] text-[#333333] font-medium">{attendee.fullName}</td>
                                    <td className="p-[15px] text-[14px] text-[#4a90e2]">{attendee.email}</td>
                                    <td className="p-[15px] text-[14px] text-[#333333]">{attendee.phoneNumber}</td>
                                    <td className="p-[15px] text-[14px] text-[#333333]">{attendee.stateOfOrigin}</td>
                                    <td className="p-[15px] text-[14px] text-[#333333]">{attendee.occupation}</td>
                                    <td className="p-[15px]">
                                        <button
                                            onClick={() => copySingleEmail(attendee.email)}
                                            className="text-[#4a90e2] hover:text-[#357abd] transition-all duration-300"
                                            title="Copy email"
                                        >
                                            <FaCopy size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View - Card Layout */}
                <div className="md:hidden space-y-[15px]">
                    {currentAttendees.map((attendee, index) => (
                        <div key={attendee._id} className="bg-[#ffffff] rounded-[12px] p-[20px] shadow-md">
                            <div className="flex justify-between items-start mb-[10px]">
                                <span className="text-[12px] text-[#999999]">#{startIndex + index + 1}</span>
                                <button
                                    onClick={() => copySingleEmail(attendee.email)}
                                    className="text-[#4a90e2] hover:text-[#357abd] transition-all duration-300"
                                    title="Copy email"
                                >
                                    <FaCopy size={16} />
                                </button>
                            </div>
                            <div className="space-y-[8px]">
                                <div>
                                    <label className="text-[12px] text-[#999999] block">Full Name</label>
                                    <p className="text-[14px] text-[#333333] font-medium">{attendee.fullName}</p>
                                </div>
                                <div>
                                    <label className="text-[12px] text-[#999999] block">Email</label>
                                    <p className="text-[14px] text-[#4a90e2] break-all">{attendee.email}</p>
                                </div>
                                <div>
                                    <label className="text-[12px] text-[#999999] block">Phone Number</label>
                                    <p className="text-[14px] text-[#333333]">{attendee.phoneNumber}</p>
                                </div>
                                <div>
                                    <label className="text-[12px] text-[#999999] block">State of Origin</label>
                                    <p className="text-[14px] text-[#333333]">{attendee.stateOfOrigin}</p>
                                </div>
                                <div>
                                    <label className="text-[12px] text-[#999999] block">Occupation</label>
                                    <p className="text-[14px] text-[#333333]">{attendee.occupation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Data Message */}
                {filteredAttendees.length === 0 && (
                    <div className="text-center py-[50px] bg-[#ffffff] rounded-[12px] shadow-md">
                        <p className="text-[16px] text-[#999999]">No attendees found</p>
                    </div>
                )}

                {/* Pagination */}
                {filteredAttendees.length > 0 && (
                    <div className="flex flex-wrap justify-center items-center gap-[10px] mt-[30px]">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-[12px] py-[8px] rounded-[6px] text-[14px] transition-all duration-300 ${
                                currentPage === 1
                                    ? 'bg-[#e0e0e0] text-[#999999] cursor-not-allowed'
                                    : 'bg-[#4a90e2] text-[#ffffff] hover:bg-[#357abd]'
                            }`}
                        >
                            Previous
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            // Show limited page numbers for mobile
                            if (window.innerWidth < 768) {
                                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`px-[10px] py-[6px] rounded-[6px] text-[14px] transition-all duration-300 ${
                                                currentPage === page
                                                    ? 'bg-[#4a90e2] text-[#ffffff]'
                                                    : 'bg-[#ffffff] text-[#333333] hover:bg-[#f0f0f0] border border-[#dddddd]'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                } else if (page === currentPage - 2 || page === currentPage + 2) {
                                    return <span key={page} className="text-[#999999]">...</span>;
                                }
                                return null;
                            } else {
                                // Show all pages on desktop
                                return (
                                    <button
                                        key={page}
                                        onClick={() => goToPage(page)}
                                        className={`px-[12px] py-[8px] rounded-[6px] text-[14px] transition-all duration-300 ${
                                            currentPage === page
                                                ? 'bg-[#4a90e2] text-[#ffffff]'
                                                : 'bg-[#ffffff] text-[#333333] hover:bg-[#f0f0f0] border border-[#dddddd]'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            }
                        })}
                        
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-[12px] py-[8px] rounded-[6px] text-[14px] transition-all duration-300 ${
                                currentPage === totalPages
                                    ? 'bg-[#e0e0e0] text-[#999999] cursor-not-allowed'
                                    : 'bg-[#4a90e2] text-[#ffffff] hover:bg-[#357abd]'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Page Info */}
                {filteredAttendees.length > 0 && (
                    <div className="text-center mt-[20px] text-[12px] text-[#999999]">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredAttendees.length)} of {filteredAttendees.length} entries
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllRegisteredAttendee;