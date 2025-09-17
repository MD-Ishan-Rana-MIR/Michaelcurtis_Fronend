"use client";
import React, { useState, FormEvent } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";


// Define type for the form state
type MethodologyFormState = {
    about: string;
};

const PrivacyFrom: React.FC = () => {
    const [formData, setFormData] = useState<MethodologyFormState>({
        about: "",
    });

    // Handle Editor change
    const handleEditorChange = (e: EditorTextChangeEvent) => {
        setFormData({ ...formData, about: e.htmlValue || "" });
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.about.trim()) return;
        console.log("Submitted:", formData.about);
        alert("Submitted content:\n" + formData.about);
    };

    return (
        <div className="pb-10 pt-3.5 px-5 border border-[#B0B0B0] rounded-[14px]">
            <h1 className="text-[#10101E] font-bold text-4xl">Privacy policy</h1>
            <p className="mt-3.5">Admin can edit disclaimer</p>

            <form onSubmit={handleSubmit} className="mx-auto mt-6 space-y-6">
                {/* PrimeReact Editor */}
                <Editor
                    value={formData.about}
                    onTextChange={handleEditorChange}
                    style={{ height: "400px" }}
                    placeholder="Write about yourself..."
                />

                {/* Submit Button */}
                <div className="flex justify-end gap-4 mt-16">
                    <Button
                        type="submit"
                        label="Save"
                        icon="pi pi-check"
                        className="w-full border border-[#D1D1D1] bg-[#D09A40] py-3 font-bold text-sm text-white rounded-[8px]"
                    />
                </div>
            </form>
        </div>
    );
};

export default PrivacyFrom;
