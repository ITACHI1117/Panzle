"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema } from "@/schema/contactFormSchema";
import Image from "next/image";
import { toast } from "sonner";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectIdea: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast.info("Sending Message");
    // Handle form submission here (e.g., send to API)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message Sent Successfully");
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      toast.error(
        `${err instanceof Error ? err.message : "Something went wrong"}`
      );
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="max-w-md mb-8 md:mb-0">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 font-plus">
                {" Let's Talk About Your Next Big Idea"}
              </h2>
              <p className="text-muted-foreground text-base font-inter">
                {
                  "  Tell us what you're building. We'll show you how AI and software can make it smarter, faster, and more scalable."
                }
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <div className="space-y-6">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          className="w-full bg-background border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder=""
                          className="w-full bg-background border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project Idea Field */}
                <FormField
                  control={form.control}
                  name="projectIdea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Project Idea
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          className="w-full min-h-[120px] bg-background border-border resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="button"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={form.formState.isSubmitting}
                  className=" cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium w-auto"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </Form>
          </div>
          <Image
            src={"/images/ContactImage.webp"}
            alt="Contact image"
            width={500}
            height={1000}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
