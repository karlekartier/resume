import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <div className="flex-1 container flex items-center justify-center pt-32 pb-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
                    {/* Content - Left Side */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                            Page <span className="text-primary">Not Found</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8 max-w-md">
                            Oops! The page you are looking for does not exist. It might have been moved or deleted.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Image - Right Side */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative w-full max-w-md lg:max-w-lg h-auto">
                            <Image
                                src={`${ASSETS_PREFIX}/assets/images/svg/404errorlight.svg`}
                                alt="404 Error"
                                width={500}
                                height={500}
                                className="dark:hidden w-full h-full object-contain"
                            />
                            <Image
                                src={`${ASSETS_PREFIX}/assets/images/svg/404errordark.svg`}
                                alt="404 Error"
                                width={500}
                                height={500}
                                className="hidden dark:block w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
