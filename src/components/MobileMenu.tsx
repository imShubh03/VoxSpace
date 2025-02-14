"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut, signIn } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const MobileMenu = ({ user }: { user: any }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sm:hidden relative">
            {/* Menu Toggle Button */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-48 p-4">
                    <nav>
                        <ul className="flex flex-col space-y-3">
                            {user ? (
                                <>
                                    <li className="flex items-center space-x-2">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src={user.image || ""} alt="User" />
                                            <AvatarFallback>{user.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium">{user.name}</span>
                                    </li>
                                    <li>
                                        <button onClick={() => signOut()} className="w-full border rounded px-4 py-2">
                                            Sign Out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <button onClick={() => signIn()} className="w-full border rounded px-4 py-2">
                                            Sign In
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => signIn()} className="w-full px-4 py-2">
                                            Sign Up
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
