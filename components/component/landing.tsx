/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uzPKRHIaANF
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-around p-4 border-b ">
        <div className="flex items-center gap-4">
          <UsersIcon className="w-6 h-6 text-black" />
          <h1 className="text-xl font-bold">AlumniCo</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-black" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-black" prefetch={false}>
            Alumni Profiles
          </Link>
          <Link href="#" className="text-black" prefetch={false}>
            Approach
          </Link>
          <Link href="#" className="text-black" prefetch={false}>
            Filter by industry
          </Link>
          <Link href="#" className="text-white  px-4 py-2 rounded" prefetch={false}>
            Applications
          </Link>
          <Link href="#" className="text-black" prefetch={false}>
            Documents
          </Link>
          <div className="relative">
            <Input type="search" placeholder="Search alumni" className="pl-8" />
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          <CircleHelpIcon className="w-6 h-6 text-black" />
          <BellIcon className="w-6 h-6 text-black" />
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="w-28 p-4 border-r">
          <nav className="flex flex-col items-center gap-10">
            <LayoutGridIcon className="w-6 h-6 text-black" />
            <UsersIcon className="w-6 h-6 text-black" />
            <CalendarIcon className="w-6 h-6 text-black" />
            <SettingsIcon className="w-6 h-6 text-black" />
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <h2 className="mb-4 text-2xl font-bold">Alumnii Danish</h2>
          <Card className="mb-6">
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <Input placeholder="Share your thoughts" className="flex-1" />
                <Button className="bg-black text-white">Send</Button>
              </div>
              <div className="flex gap-4 mt-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  <span>Picture</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <SmileIcon className="w-4 h-4" />
                  <span>Emo</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 w-full gap-[150px] md:grid-cols-3">
            <div className="col-span-2">
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Alumni Profile</h3>
                      <p className="text-sm text-muted-foreground">Last Activity: 7:45 AM</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Explore alumni profiles for mentorship opportunities and career guidance.</p>
                  <div className="flex gap-2 mt-2">
                    <img
                      src="/placeholder.svg"
                      className="w-12 h-12"
                      alt="Image 1"
                      width="50"
                      height="50"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <img
                      src="/placeholder.svg"
                      className="w-12 h-12"
                      alt="Image 2"
                      width="50"
                      height="50"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <img
                      src="/placeholder.svg"
                      className="w-12 h-12"
                      alt="Image 3"
                      width="50"
                      height="50"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <img
                      src="/placeholder.svg"
                      className="w-12 h-12"
                      alt="Image 4"
                      width="50"
                      height="50"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <img
                      src="/placeholder.svg"
                      className="w-12 h-12"
                      alt="Image 5"
                      width="50"
                      height="50"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <HeartIcon className="w-6 h-6 text-muted-foreground" />
                  <MessageCircleIcon className="w-6 h-6 text-muted-foreground" />
                  <ShareIcon className="w-6 h-6 text-muted-foreground" />
                </CardFooter>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Alumni Update</h3>
                      <p className="text-sm text-muted-foreground">Last Activity: 9:34 PM</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect with alumni for mentorship, career advice, and professional networking. Stay tuned for
                    exciting updates and opportunities to engage with our alumni community!
                  </p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <HeartIcon className="w-6 h-6 text-muted-foreground" />
                  <MessageCircleIcon className="w-6 h-6 text-muted-foreground" />
                  <ShareIcon className="w-6 h-6 text-muted-foreground" />
                </CardFooter>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Alumni Update</h3>
                      <p className="text-sm text-muted-foreground">Last Activity: 9:34 PM</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    🎉 Alumni Announcement! 🎉 Exciting news, everyone! We are thrilled to introduce new alumni mentors
                    joining our network. Their diverse backgrounds and experiences will enrich your journey and provide
                    valuable insights. Extend a warm welcome to our new mentors as they guide you towards success!
                  </p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <HeartIcon className="w-6 h-6 text-muted-foreground" />
                  <MessageCircleIcon className="w-6 h-6 text-muted-foreground" />
                  <ShareIcon className="w-6 h-6 text-muted-foreground" />
                </CardFooter>
              </Card>
            </div>
            <div className="col-span-1 w-[400px]">
              <Card className="mb-4">
                <CardHeader>
                  <h3 className="font-bold">July 2023</h3>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" className="border rounded-md " />
                </CardContent>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <h3 className="font-bold">Alumni Spotlight</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Celebrating Alumni</h4>
                      <p className="text-sm text-muted-foreground">12</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Celebrating a Milestone</h4>
                      <p className="text-sm text-muted-foreground">8</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Graduating Program</h4>
                      <p className="text-sm text-muted-foreground">6</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CircleHelpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function LayoutGridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
