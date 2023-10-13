"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useConvexAuth } from "convex/react"
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toogle"
import { useScrollTop } from "@/hooks/use-scroll-top"

import { Logo } from "./logo"

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Notion free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter Notion <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
