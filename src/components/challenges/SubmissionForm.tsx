import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, FileText, Video, Image } from "lucide-react";

const submissionSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Invalid email address"),
  user_company: z.string().optional(),
  submission_type: z.enum(["video", "image", "text"]),
  submission_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  submission_text: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type SubmissionFormData = z.infer<typeof submissionSchema>;

interface SubmissionFormProps {
  challengeId: string;
  hashtag: string;
  onSuccess: () => void;
}

const SubmissionForm = ({ challengeId, hashtag, onSuccess }: SubmissionFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<SubmissionFormData>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      user_company: "",
      submission_type: "text",
      submission_url: "",
      submission_text: "",
      description: "",
    },
  });

  const submissionType = form.watch("submission_type");

  const onSubmit = async (data: SubmissionFormData) => {
    try {
      setIsSubmitting(true);

      const { error } = await supabase.from("submissions").insert({
        challenge_id: challengeId,
        user_name: data.user_name,
        user_email: data.user_email,
        user_company: data.user_company || null,
        submission_type: data.submission_type,
        submission_url: data.submission_url || null,
        submission_text: data.submission_text || null,
        description: data.description,
      });

      if (error) {
        throw error;
      }

      form.reset();
      onSuccess();
    } catch (error) {
      console.error("Error submitting:", error);
      toast({
        title: "Error",
        description: "Failed to submit your solution. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Solution</CardTitle>
        <CardDescription>
          Share your GTM engineering approach with the community. Remember to use {hashtag} when posting on social media!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="user_company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="submission_type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Submission Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="text" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Text-based solution
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="image" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          <Image className="h-4 w-4" />
                          Image/Screenshot
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="video" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          <Video className="h-4 w-4" />
                          Video demo
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(submissionType === "video" || submissionType === "image") && (
              <FormField
                control={form.control}
                name="submission_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {submissionType === "video" ? "Video URL" : "Image URL"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder={
                          submissionType === "video"
                            ? "https://youtube.com/watch?v=..."
                            : "https://imgur.com/..."
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Paste a link to your {submissionType === "video" ? "YouTube, Vimeo, or Loom video" : "hosted image"}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {submissionType === "text" && (
              <FormField
                control={form.control}
                name="submission_text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Solution</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your approach, methodology, and results..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your solution, key insights, and results..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This will be displayed alongside your submission
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Solution
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SubmissionForm;
