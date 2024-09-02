import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Juan Pablo Piemonte</span>
          <span className="h-6 w-6 text-2xl font-bold">MyPortfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About Me
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact Info
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Juan Pablo Piemonte
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Information Systems Engineer.<br />I'm on my way to become the mythological creature called "FullStack Developer".
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project One</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/resources/cualcito_200x300.jpeg"
                    alt="Project One"
                    className="w-full h-48 object-cover rounded-md"
                    width={300}
                    height={200}
                  />
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Two</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/resources/cualcito_200x300.jpeg"
                    alt="Project Two"
                    className="w-full h-48 object-cover rounded-md"
                    width={300}
                    height={200}
                  />
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Three</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/resources/cualcito_200x300.jpeg"
                    alt="Project Three"
                    className="w-full h-48 object-cover rounded-md"
                    width={300}
                    height={200}
                  />
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Juan Pablo Piemonte. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </nav>
      </footer>
    </div>
  )
}