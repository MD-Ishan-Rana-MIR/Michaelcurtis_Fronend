"use client";

import React, { useState } from "react";
import UploadBlog from "./UploadBlog";

interface PostType {
    id: number;
    title: string;
    author: string;
    category: string;
    date: string;
    status: "Pending" | "Approved" | "Rejected";
}

const initialPosts: PostType[] = [
    { id: 1, title: "Song A", author: "John Doe", category: "Pop", date: "2025-09-10", status: "Pending" },
    { id: 2, title: "Song B", author: "Jane Smith", category: "Rock", date: "2025-09-11", status: "Approved" },
    { id: 3, title: "Song C", author: "Mike Brown", category: "Jazz", date: "2025-09-12", status: "Rejected" },
    { id: 4, title: "Song D", author: "Alice Green", category: "Hip-Hop", date: "2025-09-13", status: "Pending" },
    { id: 5, title: "Song E", author: "Bob White", category: "Classical", date: "2025-09-14", status: "Approved" },
    { id: 6, title: "Song F", author: "Tom Black", category: "Pop", date: "2025-09-15", status: "Pending" },
];

export default function BlogList() {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All Categories");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [scoreFilter, setScoreFilter] = useState("All Scores");

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    // Filter logic
    const filteredPosts = initialPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter === "All Categories" ? true : post.category === categoryFilter;
        const matchesStatus = statusFilter === "All Status" ? true : post.status === statusFilter;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };


    // new post modal 

    const [openPostModal, setOpenPostModal] = useState<boolean>(false);

    const handleOpenPostModal = () => {
        setOpenPostModal(true)
    }


















    return (
        <>
            <div className=" bg-[#FAF5EC] pt-5 pb-9 px-9 shadow shadow-[#00000033] rounded-[12px] ">
                <div className=" flex items-center justify-between  " >
                    <h1 className=" lg:text-[27px] text-black font-normal " >Blogs</h1>
                    <button onClick={handleOpenPostModal} className=" flex flex-row items-center gap-x-1 bg-[#D09A40] border border-[#D09A40] rounded-[34px] px-5 py-2 cursor-pointer text-white text-xl font-normal " >
                        <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 7.99805H8V12.998C8 13.2633 7.89464 13.5176 7.70711 13.7052C7.51957 13.8927 7.26522 13.998 7 13.998C6.73478 13.998 6.48043 13.8927 6.29289 13.7052C6.10536 13.5176 6 13.2633 6 12.998V7.99805H1C0.734784 7.99805 0.48043 7.89269 0.292893 7.70515C0.105357 7.51762 0 7.26326 0 6.99805C0 6.73283 0.105357 6.47848 0.292893 6.29094C0.48043 6.1034 0.734784 5.99805 1 5.99805H6V0.998047C6 0.73283 6.10536 0.478476 6.29289 0.29094C6.48043 0.103403 6.73478 -0.00195313 7 -0.00195312C7.26522 -0.00195313 7.51957 0.103403 7.70711 0.29094C7.89464 0.478476 8 0.73283 8 0.998047V5.99805H13C13.2652 5.99805 13.5196 6.1034 13.7071 6.29094C13.8946 6.47848 14 6.73283 14 6.99805C14 7.26326 13.8946 7.51762 13.7071 7.70515C13.5196 7.89269 13.2652 7.99805 13 7.99805Z" fill="white" />
                            </svg>

                        </span>
                        New Post
                    </button>
                </div>
                {/* Search & Filters */}
                <div className="flex flex-col lg:flex-row gap-4 mb-6 items-start lg:items-center mt-5 ">
                    <input
                        type="text"
                        placeholder="Search post..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 border rounded w-full lg:w-1/3 focus:outline-none"
                    />

                    {/* Custom dropdowns */}
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-4 py-2 border rounded w-full lg:w-1/4 focus:outline-none"
                    >
                        <option>All Categories</option>
                        <option>Pop</option>
                        <option>Rock</option>
                        <option>Jazz</option>
                        <option>Hip-Hop</option>
                        <option>Classical</option>
                    </select>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 border rounded w-full lg:w-1/4 focus:outline-none"
                    >
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>

                    <select
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        className="px-4 py-2 border rounded w-full lg:w-1/4 focus:outline-none"
                    >
                        <option>All Scores</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                        <option>5</option>
                    </select>
                </div>

                {/* Table */}
                <div className="overflow-x-auto  shadow rounded-lg">
                    <table className="w-full table-auto divide-y divide-gray-200">
                        <thead className="">
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-700 font-medium">Post Title</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-medium">Author</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-medium">Category</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-medium">Date</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-medium">Status</th>
                                <th className="px-4 py-2 text-left text-gray-700 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {paginatedPosts.length ? (
                                paginatedPosts.map((post) => (
                                    <tr key={post.id}>
                                        <td className="px-4 py-3">{post.title}</td>
                                        <td className="px-4 py-3">{post.author}</td>
                                        <td className="px-4 py-3">{post.category}</td>
                                        <td className="px-4 py-3">{post.date}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2 py-1 rounded text-sm ${post.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : post.status === "Approved"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                    }`}
                                            >
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 flex gap-2">
                                            <button className="px-2 py-1 bg-blue-500 text-white rounded">Edit</button>
                                            <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-4 text-gray-500">
                                        No posts found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>


            </div>
            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 border rounded ${currentPage === page ? "bg-[#D09A40] text-white" : ""
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
            {
                openPostModal && (
                    <UploadBlog openPostModal={openPostModal} setOpenPostModal={setOpenPostModal} />
                )

            }
        </>
    );
}
