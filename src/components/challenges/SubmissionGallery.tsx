import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tables } from "@/integrations/supabase/types";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ThumbsUp, Trophy, Star, ExternalLink, Play, Image as ImageIcon } from "lucide-react";

type Submission = Tables<"submissions">["Row"];

interface SubmissionGalleryProps {
  submissions: Submission[];
  challengeStatus: "draft" | "active" | "voting" | "completed";
  onVoteSuccess: () => void;
}

const SubmissionGallery = ({ submissions, challengeStatus, onVoteSuccess }: SubmissionGalleryProps) => {
  const [votingEmail, setVotingEmail] = useState("");
  const [votingSubmissionId, setVotingSubmissionId] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const { toast } = useToast();

  const handleVote = async (submissionId: string, email: string) => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsVoting(true);

      // Check if user has already voted for this submission
      const { data: existingVote } = await supabase
        .from("votes")
        .select("*")
        .eq("submission_id", submissionId)
        .eq("voter_email", email)
        .single();

      if (existingVote) {
        toast({
          title: "Already Voted",
          description: "You've already voted for this submission",
          variant: "destructive",
        });
        return;
      }

      // Insert vote
      const { error: voteError } = await supabase.from("votes").insert({
        submission_id: submissionId,
        voter_email: email,
      });

      if (voteError) throw voteError;

      // Update vote count
      const submission = submissions.find((s) => s.id === submissionId);
      if (submission) {
        const { error: updateError } = await supabase
          .from("submissions")
          .update({ votes_count: submission.votes_count + 1 })
          .eq("id", submissionId);

        if (updateError) throw updateError;
      }

      toast({
        title: "Vote Recorded!",
        description: "Thank you for voting!",
      });

      setVotingEmail("");
      setVotingSubmissionId(null);
      onVoteSuccess();
    } catch (error) {
      console.error("Error voting:", error);
      toast({
        title: "Error",
        description: "Failed to record your vote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVoting(false);
    }
  };

  const getSubmissionTypeIcon = (type: Submission["submission_type"]) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />;
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (submissions.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Submissions Yet</h3>
          <p className="text-muted-foreground">
            Be the first to submit your solution to this challenge!
          </p>
        </CardContent>
      </Card>
    );
  }

  const canVote = challengeStatus === "voting";

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {submissions.map((submission) => (
        <Card key={submission.id} className={submission.featured ? "border-orange-500/50" : ""}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  {submission.user_name}
                  {submission.winner && <Trophy className="h-5 w-5 text-yellow-500" />}
                  {submission.featured && !submission.winner && <Star className="h-5 w-5 text-orange-500" />}
                </CardTitle>
                {submission.user_company && (
                  <CardDescription>{submission.user_company}</CardDescription>
                )}
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                {getSubmissionTypeIcon(submission.submission_type)}
                {submission.submission_type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{submission.description}</p>

            {submission.submission_url && (
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href={submission.submission_url} target="_blank" rel="noopener noreferrer">
                  View {submission.submission_type}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}

            {submission.submission_text && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Solution
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{submission.user_name}'s Solution</DialogTitle>
                    <DialogDescription>{submission.user_company}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="whitespace-pre-wrap">{submission.submission_text}</p>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{submission.votes_count} votes</span>
              </div>

              {canVote && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="secondary">
                      Vote
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Vote for this submission</DialogTitle>
                      <DialogDescription>
                        Enter your email to vote. You can only vote once per submission.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={votingSubmissionId === submission.id ? votingEmail : ""}
                        onChange={(e) => {
                          setVotingSubmissionId(submission.id);
                          setVotingEmail(e.target.value);
                        }}
                      />
                      <Button
                        onClick={() => handleVote(submission.id, votingEmail)}
                        disabled={isVoting}
                        className="w-full"
                      >
                        {isVoting ? "Voting..." : "Submit Vote"}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SubmissionGallery;
