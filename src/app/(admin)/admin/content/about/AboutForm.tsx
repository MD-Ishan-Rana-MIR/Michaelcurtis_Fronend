"use client";
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";


type AboutFormProps = {
    initialValue?: string; // for update
    onSubmit: (data: string) => void;
};

const AboutForm: React.FC<AboutFormProps> = ({ initialValue = "", onSubmit }) => {
    const [about, setAbout] = useState(initialValue);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!about.trim()) return;
        onSubmit(about);
    };

    return (
        <div className=" pb-10 pt-3.5 px-5 border border-[#B0B0B0] rounded-[14px]  " >
            <h1 className=" text-[#10101E] font-bold text-4xl " >About</h1>
            <p className=" mt-3.5 " >Admin can edit disclaimer</p>
            <form
                onSubmit={handleSubmit}
                className=" mx-auto mt-6   space-y-6"
            >
                {/* <h2 className="text-xl font-semibold text-gray-700">
                    {initialValue ? "Update About" : "Create About"}
                </h2> */}

                {/* PrimeReact Editor */}
                <Editor
                    value={about}
                    onTextChange={(e) => setAbout(e.htmlValue || "")}
                    style={{ height: "400px" }}
                    placeholder="Write about yourself..."
                />

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-16 ">
                    <Button
                        type="submit"
                        label={initialValue ? "Update" : "Create"}
                        icon={initialValue ? "pi pi-refresh" : "pi pi-check"}
                        className="p-button-primary w-full border border-[#D1D1D1] bg-[#D09A40] py-3 font-bold text-sm text-white rounded-[8px] "
                    />
                </div>
            </form>
        </div>
    );
};

export default AboutForm;
