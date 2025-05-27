"use client"

import React from "react"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, AlertCircle, CheckCircle } from "lucide-react"
import { sendContactEmail } from "@/app/api/emails/action"
import gsap from 'gsap'
import { useAnimation } from "@/context/AnimationContext";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })


  // Refs for animation
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const contactContentRef = useRef<HTMLDivElement>(null)

  const { registerAnimation } = useAnimation()

  // Register with main animation timeline
  useEffect(() => {
    if (contactContentRef.current && headingRef.current) {
      registerAnimation(
        contactContentRef as React.RefObject<HTMLElement>,
        (tl) => {
          // Set initial states
          gsap.set([sectionRef.current, headingRef.current, leftColumnRef.current, rightColumnRef.current], {
            opacity: 0,
            y: 30,
          })

          // Animate section
          tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.out" }, 0.3)

          // Animate heading
          if (headingRef.current?.children) {
            tl.fromTo(
              headingRef.current.children,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
              0.5,
            )
          }

          // Animate columns
          tl.fromTo(
            leftColumnRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            0.8,
          ).fromTo(
            rightColumnRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            0.9,
          )
        },
        3, // Medium priority
      )
    }
  }, [registerAnimation])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }


  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        // Reset form on success
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section ref={sectionRef} id="Contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div ref={contactContentRef} className="max-w-6xl mx-auto">
        <div ref={headingRef}>
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <span className="text-secondary">Get in touch</span>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div
            ref={leftColumnRef}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2" /> Talk to me
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground mb-2">tubiobaloluwa@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-muted-foreground mb-2">+2348146933488</p>
                <a
                  href="https://wa.link/83e60c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Write me <Send className="inline-block ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div
            ref={rightColumnRef}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Send className="mr-2" /> Write me your project
            </h3>

            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg flex items-center ${
                  submitStatus.type === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="mr-2 h-5 w-5" />
                ) : (
                  <AlertCircle className="mr-2 h-5 w-5" />
                )}
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    <AlertCircle className="inline mr-1" size={16} />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    <AlertCircle className="inline mr-1" size={16} />
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-500" : ""}
                  disabled={isSubmitting}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    <AlertCircle className="inline mr-1" size={16} />
                    {errors.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="shadow-md border border-gray-100 dark:border-gray-400" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}