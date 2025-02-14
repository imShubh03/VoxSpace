import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AuthHeader from "./auth-header"; // Ensure the correct filename
import SearchInput from "./serach-input";
import { Suspense } from "react";

const Header = () => {
    return (
        <header className="w-full py-4 px-6 bg-background border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold text-primary">VoxSpace</h1>
                    <div className="relative hidden sm:block">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Suspense>
                            <SearchInput />
                        </Suspense>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <AuthHeader />
                </div>
            </div>
        </header>
    );
};

export default Header;
