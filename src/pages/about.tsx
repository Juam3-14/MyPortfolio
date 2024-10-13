import '../app/globals.css'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/Footer"
import Link from "next/link"
import { FileText, Briefcase, GraduationCap, Code, BookOpen } from "lucide-react"

export default function AboutPage() {
    const careerExperience = [
        {
            company: "Tech Innovators Inc.",
            position: "Senior Full Stack Developer",
            period: "2020 - Present",
            description: "Leading development of scalable web applications using modern technologies.",
            tools: ["React", "Node.js", "TypeScript", "AWS"],
            responsibilities: [
                "Architecting and implementing new features",
                "Mentoring junior developers",
                "Optimizing application performance",
            ],
        },
        {
            company: "Digital Solutions Ltd.",
            position: "Software Engineer",
            period: "2017 - 2020",
            description: "Developed and maintained various client-facing web applications.",
            tools: ["Angular", "Python", "Django", "PostgreSQL"],
            responsibilities: [
                "Full-stack development of web applications",
                "Collaborating with cross-functional teams",
                "Implementing RESTful APIs",
            ],
        },
    ]

    const education = [
        {
            degree: "Bachelor of Science in Information Systems Engineering",
            institution: "Tech University",
            year: "2017",
        },
    ]

    const courses = [
        {
            name: "Advanced React Patterns",
            provider: "Frontend Masters",
            year: "2022",
        },
        {
            name: "Machine Learning Fundamentals",
            provider: "Coursera",
            year: "2021",
        },
        {
            name: "AWS Certified Developer - Associate",
            provider: "Amazon Web Services",
            year: "2020",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <header className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="/">
                    <span className="sr-only">Juan Pablo Piemonte</span>
                    <span className="h-6 w-6 text-2xl font-bold">MyPortfolio</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#projects">
                        Projects
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                        About Me
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
                        Contact Info
                    </Link>
                </nav>
            </header>
            <main className="flex-1 py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Me</h1>
                    <div className="grid grid-cols-1 gap-8">
                        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Briefcase className="h-6 w-6" />
                                    Career & Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {careerExperience.map((job, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="text-left">
                                                <div>
                                                    <h3 className="font-semibold">{job.position}</h3>
                                                    <p className="text-sm text-gray-500">{job.company} | {job.period}</p>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p className="mb-2">{job.description}</p>
                                                <h4 className="font-semibold mt-4 mb-2">Tools & Technologies:</h4>
                                                <ul className="list-disc list-inside mb-4">
                                                    {job.tools.map((tool, toolIndex) => (
                                                        <li key={toolIndex}>{tool}</li>
                                                    ))}
                                                </ul>
                                                <h4 className="font-semibold mt-4 mb-2">Key Responsibilities:</h4>
                                                <ul className="list-disc list-inside">
                                                    {job.responsibilities.map((responsibility, respIndex) => (
                                                        <li key={respIndex}>{responsibility}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <GraduationCap className="h-6 w-6" />
                                        Education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {education.map((edu, index) => (
                                        <div key={index} className="mb-4">
                                            <h3 className="font-semibold">{edu.degree}</h3>
                                            <p className="text-sm text-gray-500">{edu.institution}, {edu.year}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-6 w-6" />
                                        Courses & Certifications
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {courses.map((course, index) => (
                                        <div key={index} className="mb-4">
                                            <h3 className="font-semibold">{course.name}</h3>
                                            <p className="text-sm text-gray-500">{course.provider}, {course.year}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Skills & Tools</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { name: "JavaScript", level: 90 },
                                { name: "TypeScript", level: 85 },
                                { name: "React", level: 88 },
                                { name: "Node.js", level: 82 },
                                { name: "Python", level: 75 },
                                { name: "SQL", level: 80 },
                                { name: "Git", level: 85 },
                                { name: "Docker", level: 70 },
                            ].map((skill) => (
                                <Card key={skill.name} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold mb-2">{skill.name}</h3>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 text-center flex justify-center space-x-4">
                        <Button asChild>
                            <a href="resources/Res_JuanPabloPiemonte.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                <FileText className="mr-2 h-4 w-4" />
                                View Resume (English)
                            </a>
                        </Button>
                        <Button asChild>
                            <a href="resources/CV_JuanPabloPiemonte.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                <FileText className="mr-2 h-4 w-4" />
                                View Resume (Spanish)
                            </a>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}