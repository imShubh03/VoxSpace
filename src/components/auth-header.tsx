"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import MobileMenu from "./MobileMenu";

const AuthHeader = () => {
    const { data: session } = useSession();
    const user = session?.user;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; 

    return (
        <div className="flex items-center space-x-4">
            {/* Mobile search icon */}
            <div className="sm:hidden">
                <Search size={24} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
                <ul className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <li>
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src={user.image || ""} alt="User" />
                                    <AvatarFallback>{user.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                                </Avatar>
                            </li>
                            <li>
                                <button onClick={() => signOut()} className="border rounded px-4 py-2">
                                    Sign Out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <button onClick={() => signIn()} className="border rounded px-4 py-2">
                                    Sign In
                                </button>
                            </li>
                            <li>
                                <button onClick={() => signIn()} className="border rounded px-4 py-2">
                                    Sign Up
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu user={user} />
        </div>
    );
};

export default AuthHeader;
