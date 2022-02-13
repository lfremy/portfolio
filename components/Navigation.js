import Link from "next/link"
import React from "react"
import ThemeSwitch from "./ThemeSwitch"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container flex items-center justify-between px-4 mx-auto lg:max-w-4xl">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider  text-gray-900  uppercase dark:text-white"}
                    >
                        Laura Frémy
                    </a>
                </Link>
                <div>
                    <Link href="/">
                        <a
                            className={"font-medium tracking-wider  text-gray-900   dark:text-white mr-6"}
                        >
                            About
                        </a>
                    </Link>

                    <Link href="/stack">
                        <a
                            className={"font-medium tracking-wider  text-gray-900   dark:text-white mr-6"}
                        >
                            Stack
                        </a>
                    </Link>

                    <Link href="/projects">
                        <a
                            className={"font-medium tracking-wider  text-gray-900   dark:text-white mr-6"}
                        >
                            Projets
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a
                            className={"font-medium tracking-wider  text-gray-900   dark:text-white mr-6"}
                        >
                            Blog
                        </a>
                    </Link>
                    <ThemeSwitch />
                </div>

            </div>
        </div>
    )
}

export default Navigation;